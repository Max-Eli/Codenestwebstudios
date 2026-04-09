"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp, SlideIn, DrawLine, Stagger, StaggerItem } from "@/components/ui/Motion";
import PageGraphic from "@/components/ui/PageGraphic";
import { ArrowRight, CheckCircle } from "lucide-react";

const inputClass = "w-full rounded-lg border px-4 py-3 text-sm text-snow bg-transparent outline-none transition-colors placeholder-ink-5";
const inputStyle = { borderColor: "#1A1A1A", background: "#111111" };
const inputFocus = { borderColor: "#2E2E2E" };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setDone(true);
  };

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] items-center gap-8">
              <FadeUp>
                <p className="label mb-4">Contact</p>
                <h1 className="heading-xl text-snow max-w-lg">Start a project with us.</h1>
              </FadeUp>
              <div className="hidden lg:flex items-center justify-end">
                <PageGraphic variant="contact" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <DrawLine />
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left */}
              <SlideIn direction="left" className="lg:col-span-4">
                <div className="flex flex-col gap-10">
                  <div>
                    <p className="label mb-4">What to expect</p>
                    <Stagger>
                    {[
                      { n: "01", t: "Fill out the form", d: "Tell us about your project. The more context, the better our first response." },
                      { n: "02", t: "We respond in 24h", d: "A senior team member reviews it and comes back with questions and first thoughts." },
                      { n: "03", t: "Discovery call", d: "30 minutes to align on scope and approach. No pitch deck, just a real conversation." },
                    ].map(({ n, t, d }) => (
                      <StaggerItem key={n}>
                        <div className="flex gap-4 mb-7 last:mb-0">
                          <span className="text-xs font-mono mt-0.5 flex-shrink-0 text-blue" style={{ minWidth: "1.5rem" }}>{n}</span>
                          <div>
                            <p className="text-sm font-medium text-snow mb-1">{t}</p>
                            <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{d}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                    </Stagger>
                  </div>

                  <div className="border-t pt-8" style={{ borderColor: "#1A1A1A" }}>
                    <p className="label mb-4">Direct contact</p>
                    <a href="mailto:hello@codenestwebstudios.com" className="text-sm text-ink-5 hover:text-blue transition-colors block">
                      hello@codenestwebstudios.com
                    </a>
                  </div>
                </div>
              </SlideIn>

              {/* Form */}
              <SlideIn direction="right" className="lg:col-span-7 lg:col-start-6">
                {done ? (
                  <div className="flex flex-col items-start gap-4 py-8">
                    <CheckCircle className="w-8 h-8" style={{ color: "#7EB8D4" }} />
                    <h3 className="heading-md text-snow">Message received.</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                      Thanks for reaching out. We&apos;ll review your project and come back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label block mb-2">Name</label>
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
                        <label className="label block mb-2">Email</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={set}
                          placeholder="you@company.com"
                          className={inputClass}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                          onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label block mb-2">Company (optional)</label>
                      <input
                        name="company" value={form.company} onChange={set}
                        placeholder="Company name"
                        className={inputClass}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>

                    <div>
                      <label className="label block mb-2">Project type</label>
                      <select
                        name="type" value={form.type} onChange={set}
                        className={inputClass}
                        style={{ ...inputStyle, color: form.type ? "#F5F5F3" : "#555555" }}
                      >
                        <option value="" style={{ background: "#111111" }}>Select...</option>
                        {["Web Development", "Mobile App", "Custom Software", "Consulting", "Other"].map((t) => (
                          <option key={t} value={t} style={{ background: "#111111" }}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label block mb-2">About your project</label>
                      <textarea
                        name="message" required value={form.message} onChange={set}
                        rows={5}
                        placeholder="What are you building? What's the timeline? Any specific requirements?"
                        className={inputClass}
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => Object.assign(e.currentTarget.style, { ...inputStyle, ...inputFocus })}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-dark self-start"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                          Sending
                        </span>
                      ) : (
                        <>Send message <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </SlideIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
