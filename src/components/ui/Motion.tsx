"use client";

import { useRef, useEffect, type ReactNode } from "react";
import {
  motion,
  useInView,
  type Variants,
  type MotionProps,
} from "framer-motion";

// ─── Fade up on enter ───────────────────────────────────────────────
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

interface FadeUpProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeUp({ children, delay = 0, className, once = true, ...props }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger container ──────────────────────────────────────────────
const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0 } },
};

const staggerChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerChildVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Slide in from side ─────────────────────────────────────────────
interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = "left", delay = 0, className }: SlideInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: direction === "left" ? -32 : 32 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Reveal (fade only) ─────────────────────────────────────────────
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Line draw (for horizontal rule animations) ─────────────────────
export function DrawLine({ delay = 0, className }: { delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className ?? "rule"}
    />
  );
}

// ─── Count up number ────────────────────────────────────────────────
export function CountUp({ to, suffix = "", duration = 1.5, delay = 0 }: { to: number; suffix?: string; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const start = Date.now() + delay * 1000;

    const tick = () => {
      const now = Date.now();
      if (now < start) { requestAnimationFrame(tick); return; }
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.round(eased * to) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, suffix, duration, delay]);

  return <span ref={ref}>0{suffix}</span>;
}

// ─── Hover card scale ───────────────────────────────────────────────
export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
