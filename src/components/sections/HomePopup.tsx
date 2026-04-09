"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageSquare } from "lucide-react";

const STORAGE_KEY = "cnws_popup_dismissed";
const DISMISS_DAYS = 7;
const DELAY_MS = 8000;

const inputClass =
  "w-full rounded-lg border px-3.5 py-2.5 text-sm text-snow bg-transparent outline-none transition-colors placeholder-ink-5";
const inputStyle = { borderColor: "#1A1A1A", background: "#111111" };
const inputFocus = { borderColor: "#2E2E2E" };

export default function HomePopup() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [smsConsent, setSmsConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ts = parseInt(stored, 10);
      const expired = Date.now() - ts > DISMISS_DAYS * 24 * 60 * 60 * 1000;
      if (!expired) return;
    }
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
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
        body: JSON.stringify({ ...form, smsConsent, source: "popup" }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={dismiss}
          />

          {/* Panel */}
          <motion.div
            className="fixed z-50 inset-x-4 bottom-4 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[480px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid #1A1A1A" }}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr]">
              {/* Left decorative panel */}
              <div
                className="hidden sm:flex flex-col justify-between p-6 relative overflow-hidden"
                style={{ background: "#0A0A0A", borderRight: "1px solid #1A1A1A" }}
              >
                {/* Ring graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.12 }}>
                    <circle cx="100" cy="100" r="90" stroke="#7EB8D4" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="70" stroke="#7EB8D4" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="50" stroke="#7EB8D4" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="28" stroke="#7EB8D4" strokeWidth="1" />
                    <circle cx="100" cy="100" r="10" fill="#7EB8D4" />
                  </svg>
                </div>

                {/* Top label */}
                <div className="relative z-10">
                  <p className="label" style={{ color: "#7EB8D4" }}>Free estimate</p>
                </div>

                {/* Bottom stat */}
                <div className="relative z-10">
                  <motion.div
                    className="rounded-lg px-3 py-2.5"
                    style={{ background: "#111111", border: "1px solid #1A1A1A" }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-xs font-mono" style={{ color: "#7EB8D4" }}>24h response</p>
                    <p className="text-xs mt-0.5" style={{ color: "#444444" }}>Guaranteed</p>
                  </motion.div>
                </div>
              </div>

              {/* Right form panel */}
              <div style={{ background: "#0C0C0C" }}>
                {/* Header */}
                <div className="flex items-start justify-between p-5 pb-4" style={{ borderBottom: "1px solid #141414" }}>
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(126,184,212,0.1)", border: "1px solid rgba(126,184,212,0.15)" }}
                    >
                      <MessageSquare className="w-4 h-4" style={{ color: "#7EB8D4" }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-snow leading-tight">Get a free estimate</p>
                      <p className="text-xs mt-0.5" style={{ color: "#444444" }}>No commitment required</p>
                    </div>
                  </div>
                  <button
                    onClick={dismiss}
                    className="w-7 h-7 flex items-center justify-center rounded-lg transition-colors"
                    style={{ color: "#444444" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#888888")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {done ? (
                  <div className="p-5 flex flex-col gap-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                      style={{ background: "rgba(126,184,212,0.1)" }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4.5 4.5L16 6" stroke="#7EB8D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-snow">You&apos;re on our list!</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#555555" }}>
                      We&apos;ll reach out within 24 hours with a free project estimate.
                    </p>
                    <button
                      onClick={dismiss}
                      className="mt-3 text-xs underline transition-colors"
                      style={{ color: "#444444" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#7EB8D4")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="p-5 flex flex-col gap-3">
                    <div>
                      <input
                        name="name" required value={form.name} onChange={set}
                        placeholder="Your name"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>
                    <div>
                      <input
                        type="email" name="email" required value={form.email} onChange={set}
                        placeholder="Email address"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>
                    <div>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={set}
                        placeholder="Phone (optional)"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>

                    {form.phone && (
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <div className="relative mt-0.5 flex-shrink-0">
                          <input
                            type="checkbox"
                            checked={smsConsent}
                            onChange={(e) => setSmsConsent(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div
                            className="w-4 h-4 rounded border transition-colors"
                            style={{ borderColor: smsConsent ? "#7EB8D4" : "#2E2E2E", background: smsConsent ? "#7EB8D4" : "transparent" }}
                          />
                          {smsConsent && (
                            <svg className="absolute inset-0 w-4 h-4 pointer-events-none" viewBox="0 0 16 16" fill="none" style={{ color: "#0C0C0C" }}>
                              <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: "#555555" }}>
                          I consent to receive recurring automated marketing text messages from Codenest Web Studios at the phone number provided. Consent is not a condition of purchase. Msg &amp; data rates may apply. Reply STOP to opt out.{" "}
                          <a href="/privacy" className="underline hover:text-blue transition-colors">Privacy Policy</a>{" "}&amp;{" "}
                          <a href="/terms" className="underline hover:text-blue transition-colors">Terms</a>.
                        </p>
                      </label>
                    )}

                    {error && (
                      <p className="text-xs" style={{ color: "#E07B7B" }}>{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-dark w-full justify-center mt-1"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                          Sending
                        </span>
                      ) : (
                        <>Get free estimate <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>

                    <p className="text-center text-xs" style={{ color: "#333333" }}>
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
