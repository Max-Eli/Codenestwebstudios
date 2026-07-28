"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The two pieces of chrome that sit on every page in the design: a scroll
 * progress bar pinned to the top edge, and a lerped ring cursor that swells
 * over interactive elements.
 *
 * The cursor is deliberately skipped on touch/coarse-pointer devices and when
 * the visitor has asked for reduced motion — a blend-mode ring that lags the
 * finger is noise on a phone.
 */
export default function SiteChrome() {
  const barRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [fancyCursor, setFancyCursor] = useState(false);

  // Scroll progress — runs everywhere, including reduced-motion.
  useEffect(() => {
    const tick = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = ((window.scrollY || doc.scrollTop) / max) * 100;
      if (barRef.current) barRef.current.style.width = `${pct.toFixed(2)}%`;
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFancyCursor(finePointer && !reduced);
  }, []);

  useEffect(() => {
    if (!fancyCursor) return;
    const el = cursorRef.current;
    if (!el) return;

    const mouse = { x: -999, y: -999 };
    const cur = { x: -999, y: -999 };
    let raf = 0;
    let stopped = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const grow = () => {
      el.style.width = "54px";
      el.style.height = "54px";
      el.style.background = "var(--accent-soft)";
    };
    const shrink = () => {
      el.style.width = "26px";
      el.style.height = "26px";
      el.style.background = "transparent";
    };

    // Delegated so it keeps working as React swaps the tree between routes.
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.("a, button, [data-magnetic], input, select, textarea"))
        grow();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.("a, button, [data-magnetic], input, select, textarea"))
        shrink();
    };

    const loop = () => {
      if (stopped) return;
      if (mouse.x > -900) {
        cur.x += (mouse.x - cur.x) * 0.18;
        cur.y += (mouse.y - cur.y) * 0.18;
        el.style.opacity = "1";
        el.style.transform = `translate(${cur.x - 13}px, ${cur.y - 13}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [fancyCursor]);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[9998] h-0.5"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div ref={barRef} className="h-full w-0" style={{ background: "var(--accent)" }} />
      </div>

      {fancyCursor && (
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full opacity-0"
          style={{
            width: 26,
            height: 26,
            border: "1px solid var(--accent)",
            mixBlendMode: "difference",
            transition: "width .25s, height .25s, opacity .3s, background .25s",
          }}
        />
      )}
    </>
  );
}
