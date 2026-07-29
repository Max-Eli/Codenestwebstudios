import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

const TO = process.env.CONTACT_TO_EMAIL ?? "codenestwebstudios@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? `${site.name} <hello@codenestwebstudios.com>`;

/**
 * Constructed per-request, not at module scope. The Resend SDK throws in its
 * constructor when the key is missing, which previously took down `next build`
 * on any machine without RESEND_API_KEY set.
 */
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/** Submitted values land in an HTML email, so escape before interpolating. */
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Naive in-memory rate limit: 5 submissions per IP per 10 minutes. Resets on
 * cold start and is per-instance, so it is a speed bump against casual abuse
 * rather than a guarantee. Move to Upstash/KV if this ever gets targeted.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Spam defence. None of this asks a real visitor to do anything — the goal is
 * to keep genuine "I have a problem, can you build X" inquiries flowing while
 * dropping the automated "we can boost your Google ranking" flood.
 *
 * Layers, cheapest first:
 *   1. Honeypot  — a field hidden from humans; only bots fill it.
 *   2. Timing    — a person can't read and complete the form in < 2.5s.
 *   3. Content   — weighted score over links + known spam phrasing.
 * A hit on 1 or 2 is a certain bot and is dropped outright. Content uses a
 * threshold so a real message that happens to include one link survives.
 */
const MIN_FILL_MS = 2500;

/** Throwaway inbox providers. Real clients don't pitch projects from these. */
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamailblock.com", "sharklasers.com",
  "10minutemail.com", "tempmail.com", "temp-mail.org", "throwawaymail.com",
  "yopmail.com", "getnada.com", "trashmail.com", "dispostable.com", "maildrop.cc",
  "mailnesia.com", "fakeinbox.com", "emailondeck.com", "spam4.me", "mohmal.com",
  "moakt.com", "tempail.com", "mintemail.com", "tempinbox.com", "mytemp.email",
  "discard.email", "fake-mail.net", "mailcatch.com",
]);

/** Phrases that overwhelmingly show up in cold outreach / SEO spam, not leads. */
const SPAM_PHRASES = [
  "seo service", "seo expert", "search engine ranking", "rank your website",
  "rank higher", "first page of google", "top of google", "backlink", "guest post",
  "link building", "increase traffic", "boost your traffic", "web traffic",
  "digital marketing service", "lead generation service", "we can help you rank",
  "improve your ranking", "cold email", "casino", "viagra", "bitcoin", "crypto",
  "forex", "loan offer", "make money", "work from home", "gift card", "cheap price",
  "best rates", "whatsapp me", "telegram", "b2b leads", "verified leads",
];

/**
 * Returns a drop reason string when the submission looks like spam, or null to
 * let it through. `hp` is the honeypot value; `elapsedMs` is how long the form
 * was on screen before submit (both supplied by the client).
 */
function spamReason(input: {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  hp?: unknown;
  elapsedMs?: unknown;
}): string | null {
  // 1. Honeypot — hidden field, so any value at all is a bot.
  if (typeof input.hp === "string" && input.hp.trim() !== "") return "honeypot";

  // 2. Timing — filled in faster than a human could read it.
  const elapsed = Number(input.elapsedMs);
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_FILL_MS) {
    return `too-fast(${elapsed}ms)`;
  }

  const name = String(input.name ?? "").toLowerCase();
  const company = String(input.company ?? "").toLowerCase();
  const message = String(input.message ?? "").toLowerCase();
  const email = String(input.email ?? "").toLowerCase();
  const haystack = `${name} ${company} ${message}`;

  // A link in the name field is never a real person — hard drop.
  if (/https?:\/\/|www\.|\.[a-z]{2,}\//i.test(name)) return "url-in-name";

  let score = 0;

  const urlCount = (haystack.match(/https?:\/\/|www\.|\[url/gi) ?? []).length;
  if (urlCount >= 2) score += 2;
  else if (urlCount === 1) score += 1;

  let phraseHits = 0;
  for (const phrase of SPAM_PHRASES) {
    if (haystack.includes(phrase)) phraseHits += 1;
  }
  score += phraseHits * 1.5;

  // Bulk Cyrillic in a message to an English-language studio is a spam tell.
  if ((message.match(/[Ѐ-ӿ]/g) ?? []).length > 8) score += 2;

  // Throwaway inbox — suspicious, but only in combination with the above.
  const domain = email.split("@")[1] ?? "";
  if (DISPOSABLE_DOMAINS.has(domain)) score += 2;

  return score >= 3 ? `content-score(${score})` : null;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, company, budget, message, phone, smsConsent, source, website, elapsedMs } =
      body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Bot / spam screening. On a hit we return the same 200 a real submit gets,
    // so bots believe it worked and don't retry — but nothing is emailed. The
    // dropped payload is logged so a false positive is recoverable from logs.
    const dropReason = spamReason({ name, email, company, message, hp: website, elapsedMs });
    if (dropReason) {
      console.warn(
        `Contact API — dropped spam [${dropReason}] from ${ip}:`,
        JSON.stringify({ name, email, company, message }).slice(0, 500)
      );
      return NextResponse.json({ ok: true });
    }

    const resend = getResend();
    if (!resend) {
      console.error("Contact API: RESEND_API_KEY is not set.");
      return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
    }

    const isPopup = source === "popup";
    const row = (label: string, value: unknown) =>
      value ? `<p><strong>${label}:</strong> ${esc(value)}</p>` : "";

    const html = `
      <h2>${isPopup ? "New estimate request (homepage popup)" : "New contact form submission"}</h2>
      ${row("Name", name)}
      ${row("Email", email)}
      ${row("Company", company)}
      ${row("Budget", budget)}
      ${row("Phone", phone)}
      <p><strong>SMS consent:</strong> ${smsConsent ? "Opted in" : "Not opted in"}</p>
      ${
        message
          ? `<hr/><p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, "<br/>")}</p>`
          : ""
      }
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: isPopup
        ? `New estimate request from ${name}`
        : `New contact form submission from ${name}`,
      html,
    });

    if (error) {
      console.error("Contact API — Resend error:", error);
      return NextResponse.json({ error: "Failed to send." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
