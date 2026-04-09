"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroGraphic from "./HeroGraphic";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#0C0C0C" }}>
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Single soft glow — barely visible */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          top: "30%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(126,184,212,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container-site relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] items-center gap-8">
        <div className="max-w-xl">
          {/* Label */}
          <motion.p
            className="label-blue mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Web · Mobile · Software
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="heading-xl mb-6 text-snow"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
          >
            Digital products
            <br />
            <span style={{ color: "#444444" }}>built to last.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-lg max-w-lg leading-relaxed mb-10"
            style={{ color: "#666666" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.35 }}
          >
            We design and engineer websites, mobile apps, and custom software for businesses that care about quality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.5 }}
          >
            <Link href="/contact" className="btn btn-dark">
              Start a project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Our services
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-20 flex flex-wrap gap-x-12 gap-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            {[
              { n: "150+", label: "Projects shipped" },
              { n: "8 yrs", label: "In business" },
              { n: "98%", label: "Repeat clients" },
            ].map(({ n, label }) => (
              <div key={label}>
                <p
                  className="font-display text-2xl font-semibold text-snow"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {n}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#555555" }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero graphic — right column, desktop only */}
        <div className="hidden lg:flex items-center justify-end">
          <HeroGraphic />
        </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-px bg-ink-5"
          style={{ height: 48 }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
