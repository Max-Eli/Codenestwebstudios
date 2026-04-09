"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/Motion";

export default function CTASection() {
  return (
    <section className="section" style={{ background: "#0C0C0C" }}>
      <div className="container-site">
        <FadeUp>
          <div
            className="rounded-2xl p-12 sm:p-16 relative overflow-hidden"
            style={{ background: "#111111", border: "1px solid #1A1A1A" }}
          >
            {/* Subtle blue accent in corner */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(126,184,212,0.06) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <p className="label mb-5">Ready to build?</p>
              <h2 className="heading-lg text-snow mb-5">
                Let&apos;s make something worth launching.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#666666" }}>
                Tell us about your project. We respond within 24 hours with a clear path forward — no sales pitch, no fluff.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-dark">
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="btn btn-ghost">
                  See our work first
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
                {["Free discovery call", "Response within 24h", "No commitment required"].map((t) => (
                  <span key={t} className="text-sm flex items-center gap-2" style={{ color: "#444444" }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#333333" }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
