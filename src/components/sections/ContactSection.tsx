"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Motion";
import { site } from "@/content/site";

const steps = [
  "We reply within one business day with first questions.",
  "A 45-minute call to understand the process, free.",
  "A written scope and fixed estimate within two weeks.",
];

const budgets = [
  "Not sure yet",
  "$25k – $60k",
  "$60k – $150k",
  "$150k+",
  "Monthly retainer",
];

const fieldClass =
  "w-full bg-transparent border-0 border-b py-2.5 text-base outline-none transition-colors focus:border-[var(--accent)]";
const fieldStyle = { borderColor: "var(--line-6)", color: "var(--fg)" };
const labelClass = "mono text-[11px] uppercase tracking-[0.1em]";

export default function ContactSection({ eyebrow = "10 / Start here" }: { eyebrow?: string }) {
  const uid = useId();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    phone: "",
    message: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, smsConsent, source: "contact" }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setError(`Something went wrong. Please email us directly at ${site.email}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section rule-top relative overflow-hidden">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="container-site relative grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <Reveal className="label-mono mb-6">{eyebrow}</Reveal>
          <Reveal as="h2" index={1} className="display-2 max-w-[16ch]">
            Tell us what&apos;s slowing you down.
          </Reveal>
          <Reveal as="p" index={2} className="mt-7 max-w-[44ch] text-[17.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
            Send a few lines about the problem. You&apos;ll get a real reply from an engineer, not a
            sales sequence.
          </Reveal>

          <Reveal index={3} className="mt-12 flex flex-col gap-5.5">
            {steps.map((s, i) => (
              <div key={s} className="flex gap-4">
                <span className="mono flex-shrink-0 text-xs" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px]" style={{ color: "var(--fg-3)" }}>
                  {s}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal
            index={4}
            className="mono mt-13 flex flex-col gap-2 border-t pt-7 text-xs tracking-[0.06em]"
            style={{ borderColor: "var(--line-3)", color: "var(--fg-5)", marginTop: "3.25rem" }}
          >
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-[var(--accent-bright)]">
              {site.email}
            </a>
            {site.phone && (
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-[var(--accent-bright)]">
                {site.phone}
              </a>
            )}
          </Reveal>
        </div>

        <Reveal
          index={2}
          className="border p-8 md:p-9"
          style={{ borderColor: "var(--line-4)", background: "var(--bg-2)" }}
        >
          {done ? (
            <div className="py-14 text-center">
              <div className="text-[26px] font-medium tracking-[-0.025em]">Thanks — it&apos;s with us.</div>
              <p className="mt-3.5 text-[15.5px]" style={{ color: "var(--fg-4)" }}>
                An engineer will reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                <label htmlFor={`${uid}-name`} className={labelClass} style={{ color: "var(--fg-5)" }}>
                  Your name
                </label>
                <input
                  id={`${uid}-name`}
                  name="name"
                  required
                  value={form.name}
                  onChange={set}
                  placeholder="Jordan Reyes"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor={`${uid}-company`} className={labelClass} style={{ color: "var(--fg-5)" }}>
                  Company
                </label>
                <input
                  id={`${uid}-company`}
                  name="company"
                  value={form.company}
                  onChange={set}
                  placeholder="Reyes Logistics"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor={`${uid}-email`} className={labelClass} style={{ color: "var(--fg-5)" }}>
                  Work email
                </label>
                <input
                  id={`${uid}-email`}
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={set}
                  placeholder="jordan@company.com"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor={`${uid}-budget`} className={labelClass} style={{ color: "var(--fg-5)" }}>
                  Budget range
                </label>
                <select
                  id={`${uid}-budget`}
                  name="budget"
                  value={form.budget}
                  onChange={set}
                  className={fieldClass}
                  style={{ ...fieldStyle, background: "var(--bg-2)" }}
                >
                  {budgets.map((b) => (
                    <option key={b} value={b} style={{ background: "var(--bg-2)" }}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2.5 sm:col-span-2">
                <label htmlFor={`${uid}-phone`} className={labelClass} style={{ color: "var(--fg-5)" }}>
                  Phone (optional)
                </label>
                <input
                  id={`${uid}-phone`}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={set}
                  placeholder="+1 (555) 000-0000"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="flex flex-col gap-2.5 sm:col-span-2">
                <label htmlFor={`${uid}-message`} className={labelClass} style={{ color: "var(--fg-5)" }}>
                  What&apos;s the problem?
                </label>
                <textarea
                  id={`${uid}-message`}
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={set}
                  placeholder="We run dispatch on three spreadsheets and it breaks every week…"
                  className="w-full resize-y border bg-transparent p-3.5 text-base outline-none transition-colors focus:border-[var(--accent)]"
                  style={fieldStyle}
                />
              </div>

              {/* TCR/SMS consent — only relevant once a number is given. */}
              {form.phone && (
                <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[var(--accent)]"
                  />
                  <span className="text-xs leading-relaxed" style={{ color: "var(--fg-5)" }}>
                    I consent to receive recurring automated marketing text messages from {site.name}{" "}
                    at the phone number provided. Consent is not a condition of purchase. Message
                    &amp; data rates may apply. Message frequency varies. Reply STOP to opt out,
                    HELP for help. See our{" "}
                    <a href="/privacy" className="underline hover:text-[var(--accent-bright)]">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms" className="underline hover:text-[var(--accent-bright)]">
                      Terms
                    </a>
                    .
                  </span>
                </label>
              )}

              {error && (
                <p role="alert" className="text-sm sm:col-span-2" style={{ color: "#e07b7b" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                data-magnetic
                className="btn btn-accent mt-1.5 justify-center disabled:opacity-60 sm:col-span-2"
              >
                {loading ? "Sending…" : "Request a scoping estimate"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
