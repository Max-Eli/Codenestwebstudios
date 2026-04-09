"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeUp, Stagger, StaggerItem, DrawLine } from "@/components/ui/Motion";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We align on your goals, users, and constraints before writing a single line of code.",
  },
  {
    n: "02",
    title: "Design",
    desc: "High-fidelity mockups you approve before development begins. No surprises.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Two-week sprints. Regular demos. You see real progress, not status updates.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "Zero-downtime deployment, performance monitoring, and support well past go-live.",
  },
];

function StepNumber({ n, isLast }: { n: string; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center flex-shrink-0" style={{ minWidth: "2.5rem" }}>
      {/* Circle ring */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: 32, height: 32 }}
      >
        {/* Outer ring that draws in */}
        <motion.svg
          viewBox="0 0 32 32"
          fill="none"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.circle
            cx="16"
            cy="16"
            r="14"
            stroke="#7EB8D4"
            strokeWidth="0.75"
            strokeDasharray="88"
            strokeDashoffset={inView ? 0 : 88}
            style={{ transition: "stroke-dashoffset 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            opacity="0.25"
          />
        </motion.svg>
        {/* Number */}
        <motion.span
          className="text-xs font-mono relative z-10"
          initial={{ color: "#333333" }}
          animate={inView ? { color: "#7EB8D4" } : { color: "#333333" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {n}
        </motion.span>
      </motion.div>

      {/* Connecting vertical line to next step */}
      {!isLast && (
        <motion.div
          className="w-px mt-2"
          style={{ background: "linear-gradient(to bottom, rgba(126,184,212,0.15), rgba(26,26,26,0.5))", height: "calc(100% - 40px + 40px)" }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: "#111111" }}>
      <div className="container-site">
        {/* Header */}
        <FadeUp className="mb-12">
          <p className="label mb-3">How we work</p>
          <h2 className="heading-lg text-snow">Our process</h2>
        </FadeUp>

        <DrawLine />

        <Stagger className="mt-0">
          {steps.map((step, i) => (
            <StaggerItem key={step.n}>
              <div
                className="flex items-start gap-6 py-10 border-b"
                style={{ borderColor: "#1A1A1A" }}
              >
                <StepNumber n={step.n} isLast={i === steps.length - 1} />
                <div className="flex-1 sm:flex sm:items-start sm:gap-12 pt-1">
                  <h3 className="heading-sm text-snow sm:w-40 flex-shrink-0 mb-2 sm:mb-0">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-lg" style={{ color: "#666666" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
