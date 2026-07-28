"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Motion";

export type Step = {
  step: string;
  title: string;
  body: string;
  when?: string;
};

/**
 * Sticky left rail whose oversized number tracks whichever step card has
 * crossed 60% of the viewport — the design's `[data-step]` / `[data-stepnum]`
 * / `[data-steplabel]` trio. Used by the homepage process section and the
 * About page's operating rules.
 */
export default function StickySteps({
  id,
  eyebrow,
  title,
  lede,
  steps,
  background = "var(--bg-2)",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  steps: readonly Step[];
  background?: string;
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      let next = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id={id} className="section rule-top" style={{ background }}>
      <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-[120px]">
          <div className="label-mono mb-5">{eyebrow}</div>
          <h2 className="heading-2">{title}</h2>
          {lede && (
            <p className="mt-6 max-w-[36ch] text-[16.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
              {lede}
            </p>
          )}
          <div className="mt-12 hidden items-baseline gap-3.5 lg:flex">
            <div
              className="mono leading-[0.8]"
              style={{ fontSize: "clamp(70px,8vw,120px)", color: "var(--accent)" }}
            >
              {String(active + 1).padStart(2, "0")}
            </div>
            <div className="mono text-[11.5px] uppercase tracking-[0.1em]" style={{ color: "var(--fg-5)" }}>
              {steps[active].step}
            </div>
          </div>
        </div>

        <div className="hairline-grid grid-cols-1">
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              index={i}
              className="hairline-cell px-7 py-10 md:px-10 md:py-11"
              style={{ background }}
            >
              <div ref={(el) => { refs.current[i] = el; }}>
                {s.when && (
                  <div className="mono mb-4 text-[11.5px]" style={{ color: "var(--fg-5)" }}>
                    {s.when}
                  </div>
                )}
                <h3 className="text-[22px] font-semibold tracking-[-0.025em] md:text-[26px]">{s.title}</h3>
                <p className="mt-3 max-w-[54ch] text-base leading-[1.65] md:text-[16.5px]" style={{ color: "var(--fg-4)" }}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
