"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/content/site";

const STORAGE_KEY = "cnws_popup_dismissed";
const DISMISS_DAYS = 7;
const DELAY_MS = 25000;

const fieldClass =
  "w-full bg-transparent border-0 border-b py-2.5 text-[15px] outline-none transition-colors focus:border-[var(--accent)]";
const fieldStyle = { borderColor: "var(--line-6)", color: "var(--fg)" };

/**
 * Corner lead-capture panel.
 *
 * Deliberately not a full-screen interstitial: the previous build dimmed and
 * blurred the whole page after 8 seconds, which reads as an ad and costs
 * bounce. This slides into the bottom-right, never covers the page, and stays
 * dismissed for a week. It also waits for real engagement — 25 seconds, and
 * only after the visitor has scrolled past the fold.
 */
export default function HomePopup() {
  const uid = useId();
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [smsConsent, setSmsConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  // Anti-spam: honeypot value and mount time, screened server-side.
  const [hp, setHp] = useState("");
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ts = parseInt(stored, 10);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const arm = () => {
      if (timer) return;
      timer = setTimeout(() => {
        setVisible(true);
        requestAnimationFrame(() => setShown(true));
      }, DELAY_MS);
    };

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        arm();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setShown(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setTimeout(() => setVisible(false), 300);
  };

  const set = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          smsConsent,
          source: "popup",
          website: hp,
          elapsedMs: Date.now() - mountedAt.current,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Get a free estimate"
      className="fixed inset-x-4 bottom-4 z-[950] sm:inset-auto sm:bottom-7 sm:right-7 sm:w-[400px]"
      style={{
        border: "1px solid var(--line-4)",
        background: "var(--bg-2)",
        boxShadow: "0 24px 70px rgba(0,0,0,0.6)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(16px)",
        transition: "opacity .3s ease, transform .3s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div
        className="flex items-start justify-between gap-4 px-6 py-4"
        style={{ borderBottom: "1px solid var(--line-3)" }}
      >
        <div>
          <p className="text-[15px] font-medium leading-tight">Get a free estimate</p>
          <p className="mono mt-1.5 text-[11px] uppercase tracking-[0.09em]" style={{ color: "var(--fg-5)" }}>
            Reply within one business day
          </p>
        </div>
        <button
          onClick={dismiss}
          aria-label="Close"
          className="-mr-1.5 -mt-1 p-1.5 transition-colors hover:text-[var(--fg)]"
          style={{ color: "var(--fg-5)" }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {done ? (
        <div className="px-6 py-8">
          <p className="text-[17px] font-medium tracking-[-0.02em]">You&apos;re on the list.</p>
          <p className="mt-2.5 text-[13.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
            We&apos;ll reach out within one business day with a free project estimate.
          </p>
          <button
            onClick={dismiss}
            className="mono mt-5 text-[11px] uppercase tracking-[0.09em] underline transition-colors hover:text-[var(--accent-bright)]"
            style={{ color: "var(--fg-5)" }}
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-4 px-6 py-5">
          {/* Honeypot — off-screen, hidden from humans; bots fill it and get dropped. */}
          <div
            aria-hidden
            style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden" }}
          >
            <label htmlFor={`${uid}-website`}>Leave this field empty</label>
            <input
              id={`${uid}-website`}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
            />
          </div>

          <input
            id={`${uid}-name`}
            name="name"
            required
            value={form.name}
            onChange={set}
            placeholder="Your name"
            aria-label="Your name"
            className={fieldClass}
            style={fieldStyle}
          />
          <input
            id={`${uid}-email`}
            type="email"
            name="email"
            required
            value={form.email}
            onChange={set}
            placeholder="Email address"
            aria-label="Email address"
            className={fieldClass}
            style={fieldStyle}
          />
          <input
            id={`${uid}-phone`}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={set}
            placeholder="Phone (optional)"
            aria-label="Phone (optional)"
            className={fieldClass}
            style={fieldStyle}
          />

          {form.phone && (
            <label className="flex cursor-pointer items-start gap-2.5">
              <input
                type="checkbox"
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 accent-[var(--accent)]"
              />
              <span className="text-[11px] leading-relaxed" style={{ color: "var(--fg-5)" }}>
                I consent to receive recurring automated marketing texts from {site.name} at this
                number. Consent is not a condition of purchase. Msg &amp; data rates may apply.
                Reply STOP to opt out.{" "}
                <a href="/privacy" className="underline hover:text-[var(--accent-bright)]">
                  Privacy
                </a>{" "}
                &amp;{" "}
                <a href="/terms" className="underline hover:text-[var(--accent-bright)]">
                  Terms
                </a>
                .
              </span>
            </label>
          )}

          {error && (
            <p role="alert" className="text-xs" style={{ color: "#e07b7b" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-accent mt-1 w-full justify-center py-3.5 text-sm disabled:opacity-60"
          >
            {loading ? "Sending…" : "Get free estimate"}
          </button>

          <p className="mono text-center text-[10.5px] uppercase tracking-[0.08em]" style={{ color: "var(--fg-6)" }}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
