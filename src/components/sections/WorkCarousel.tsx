"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { caseStudies } from "@/content/site";
import CaseStudyCard from "./CaseStudyCard";
import { usePrefersReducedMotion } from "@/components/ui/Motion";

/**
 * Scroll-pinned horizontal gallery: the section is 340vh tall, its inner panel
 * sticks for the full height, and vertical scroll progress drives the track
 * sideways.
 *
 * Below `lg`, and under reduced motion, it degrades to an ordinary swipeable
 * overflow strip — pinning fights touch scrolling and burns height on a phone.
 *
 * Hidden entirely until real projects exist in src/content/site.ts.
 */
export default function WorkCarousel({ num = "03" }: { num?: string }) {
  const pinRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setPinned(mq.matches && !reduced);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [reduced]);

  useEffect(() => {
    if (!pinned) {
      if (trackRef.current) trackRef.current.style.transform = "";
      return;
    }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;
      const p = Math.min(
        1,
        Math.max(0, -pin.getBoundingClientRect().top / Math.max(1, pin.offsetHeight - window.innerHeight))
      );
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + 88);
      track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pinned]);

  if (caseStudies.length === 0) return null;

  return (
    <section
      id="work"
      ref={pinRef}
      className="rule-top relative"
      style={{ height: pinned ? "340vh" : undefined }}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen flex-col justify-center gap-11 overflow-hidden"
            : "section flex flex-col gap-10 overflow-hidden"
        }
      >
        <div className="container-site flex items-end justify-between gap-8">
          <div>
            <div className="label-mono mb-4">{num} / Selected work</div>
            <h2 className="heading-2">Built, shipped, still running.</h2>
          </div>
          <Link
            href="/work"
            className="mono hidden whitespace-nowrap text-[11.5px] uppercase tracking-[0.1em] transition-colors hover:text-[var(--accent-bright)] sm:block"
            style={{ color: "var(--fg-5)" }}
          >
            All work →
          </Link>
        </div>

        <div
          ref={trackRef}
          className={
            pinned
              ? "flex gap-6 px-5 will-change-transform sm:px-7 lg:px-11"
              : "flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-7"
          }
        >
          {caseStudies.map((c) => (
            <div
              key={c.slug}
              className="w-[min(560px,80vw)] flex-none snap-start"
            >
              <CaseStudyCard study={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
