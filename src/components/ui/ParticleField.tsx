"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./Motion";

/**
 * The hero backdrop: a connected-particle canvas that repels from the pointer,
 * a radial glow that trails the pointer, a blueprint grid, and a bottom fade
 * into the page background.
 *
 * The canvas is skipped entirely under reduced motion and on narrow viewports
 * — it's an O(n²) link pass every frame, which is not worth a phone's battery.
 * The grid and fade still render, so the section never looks empty.
 */
export default function ParticleField({
  canvasOpacity = 1,
  fadeFrom = "55%",
  glowSize = 760,
  glowStrength = 0.16,
}: {
  canvasOpacity?: number;
  fadeFrom?: string;
  glowSize?: number;
  glowStrength?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setAnimate(wide && finePointer && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!animate) return;
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const mouse = { x: -999, y: -999 };
    let w = 0;
    let h = 0;
    let pts: { x: number; y: number; vx: number; vy: number }[] = [];
    let raf = 0;
    let stopped = false;

    const resize = () => {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(110, (w * h) / 17000));
      pts = new Array(n).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - glowSize / 2}px, ${
          e.clientY - glowSize / 2
        }px)`;
      }
    };

    const draw = () => {
      if (stopped) return;
      ctx.clearRect(0, 0, w, h);
      const rect = cv.getBoundingClientRect();
      const mx = mouse.x;
      const my = mouse.y - rect.top;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.hypot(dx, dy);
        if (d < 130 && d > 0.1) {
          p.x += (dx / d) * 0.7;
          p.y += (dy / d) * 0.7;
        }
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 118) {
            ctx.strokeStyle = `rgba(134,215,235,${(0.16 * (1 - d / 118)).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "rgba(180,235,245,0.55)";
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, 6.284);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [animate, glowSize]);

  return (
    <>
      {animate && (
        <>
          <canvas
            ref={canvasRef}
            aria-hidden
            className="absolute inset-0 block h-full w-full"
            style={{ opacity: canvasOpacity }}
          />
          <div
            ref={glowRef}
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 rounded-full"
            style={{
              width: glowSize,
              height: glowSize,
              background: `radial-gradient(circle, oklch(0.62 0.13 195 / ${glowStrength}), transparent 65%)`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        </>
      )}
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent ${fadeFrom}, var(--bg) 100%)`,
        }}
      />
    </>
  );
}
