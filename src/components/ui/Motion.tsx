"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

const EASE = "cubic-bezier(.16,1,.3,1)";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/**
 * Scroll reveal — the design's `[data-reveal]`. Fades up 28px once, then stops
 * observing. `index` reproduces the source's sibling stagger (70ms steps,
 * capped at 420ms) without the parent needing to coordinate.
 */
export function Reveal({
  children,
  as: Tag = "div",
  index = 0,
  delay = 0,
  className,
  style,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  index?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    // Anything already above the fold on load reveals immediately.
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const totalDelay = reduced ? 0 : Math.min(index * 70, 420) + delay * 1000;

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(28px)",
        transition: reduced
          ? undefined
          : `opacity .8s ${EASE} ${totalDelay}ms, transform .9s ${EASE} ${totalDelay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/** Counts up to `to` on first view, easing out cubic over 1.4s. */
export function CountUp({
  to,
  suffix = "",
  className,
  style,
}: {
  to: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setN(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1400);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    if (el.getBoundingClientRect().top < window.innerHeight) {
      run();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, reduced]);

  return (
    <span ref={ref} className={className} style={style}>
      {n}
      {suffix}
    </span>
  );
}

/** Translates on scroll at `rate` of scroll distance. Off under reduced motion. */
export function Parallax({
  children,
  rate = 0.06,
  className,
  style,
}: {
  children: ReactNode;
  rate?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const y = window.scrollY || document.documentElement.scrollTop;
      el.style.transform = `translateY(${(y * rate * -1).toFixed(1)}px)`;
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
  }, [rate, reduced]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
