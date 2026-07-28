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
    const { name, email, company, budget, message, phone, smsConsent, source } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
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
