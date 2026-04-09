"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, DrawLine } from "@/components/ui/Motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DURATION = 6000;

const testimonials = [
  {
    quote: "Codenest transformed our outdated site into a conversion machine. Leads tripled within the first month. The technical quality is unlike any agency we've worked with.",
    author: "Sarah Chen",
    role: "CEO, NovaPay",
  },
  {
    quote: "The mobile app they built has 50,000+ downloads and a 4.9-star rating. They understood the product vision completely and delivered beyond what we thought possible.",
    author: "Marcus Rodriguez",
    role: "Founder, MindFlow",
  },
  {
    quote: "Working with Codenest felt like having a senior in-house team. Fast, communicative, and the quality speaks for itself. We've referred three other companies to them.",
    author: "Priya Patel",
    role: "CTO, Orbital Analytics",
  },
  {
    quote: "Our conversion rate went up 85% after the redesign. The performance improvements alone paid for the project within two weeks of launch.",
    author: "James Whitfield",
    role: "Director, LuxeCommerce",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % testimonials.length);
    }, DURATION);
  };

  useEffect(() => {
    restart();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
    restart();
  };

  const prev = () => go((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => go((idx + 1) % testimonials.length);

  return (
    <section className="section" style={{ background: "#111111" }}>
      <div className="container-site">
        <FadeUp className="mb-12">
          <p className="label mb-3">What clients say</p>
          <h2 className="heading-lg text-snow">Testimonials</h2>
        </FadeUp>

        <DrawLine />

        <div className="pt-14 pb-2">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
            {/* Quote area */}
            <div className="relative">
              {/* Background quote mark */}
              <div
                className="absolute -top-6 -left-3 font-display select-none pointer-events-none leading-none"
                style={{ fontSize: "9rem", color: "rgba(126,184,212,0.05)", lineHeight: 1 }}
                aria-hidden
              >
                &ldquo;
              </div>

              <div className="relative min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={idx}
                    custom={dir}
                    initial={{ opacity: 0, y: dir * 28, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -dir * 28, filter: "blur(6px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Quote text */}
                    <p
                      className="text-xl sm:text-2xl leading-relaxed mb-10 font-display max-w-2xl"
                      style={{ color: "#C8C8C4", letterSpacing: "-0.015em" }}
                    >
                      &ldquo;{testimonials[idx].quote}&rdquo;
                    </p>

                    {/* Attribution */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                        style={{ background: "#1A1A1A", color: "#7EB8D4", border: "1px solid #222" }}
                      >
                        {testimonials[idx].author.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm text-snow font-medium">{testimonials[idx].author}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#555555" }}>
                          {testimonials[idx].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Stacked card strip — desktop */}
            <div className="hidden lg:flex flex-col gap-2 w-[200px]">
              {testimonials.map((t, i) => (
                <motion.button
                  key={i}
                  onClick={() => go(i)}
                  className="w-full text-left rounded-lg border p-3 transition-colors"
                  animate={{
                    borderColor: i === idx ? "rgba(126,184,212,0.22)" : "rgba(26,26,26,1)",
                    background: i === idx ? "rgba(126,184,212,0.05)" : "rgba(17,17,17,0)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs font-medium transition-colors" style={{ color: i === idx ? "#C8C8C4" : "#444444" }}>
                    {t.author}
                  </p>
                  <p className="text-xs mt-0.5 transition-colors" style={{ color: i === idx ? "#555555" : "#2A2A2A" }}>
                    {t.role}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Progress + controls */}
          <div className="flex flex-col gap-5 mt-10">
            {/* Progress bar */}
            <div className="relative h-px rounded-full overflow-hidden" style={{ background: "#1A1A1A" }}>
              <motion.div
                key={idx}
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: "#7EB8D4", opacity: 0.6 }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Dot indicators */}
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => go(i)}
                    animate={{
                      width: i === idx ? 20 : 6,
                      background: i === idx ? "#7EB8D4" : "#222222",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>

              {/* Arrow controls */}
              <div className="flex gap-1.5 ml-auto">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 hover:border-blue hover:text-blue"
                  style={{ borderColor: "#1A1A1A", color: "#555555" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 hover:border-blue hover:text-blue"
                  style={{ borderColor: "#1A1A1A", color: "#555555" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
