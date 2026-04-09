"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Stagger, StaggerItem, DrawLine } from "@/components/ui/Motion";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NovaPay",
    type: "Web Application",
    year: "2024",
    outcome: "$2M+ monthly volume",
    desc: "FinTech payment platform with real-time transactions, merchant dashboards, and fraud detection.",
    accent: "#7EB8D4",
  },
  {
    title: "MindFlow",
    type: "Mobile App",
    year: "2024",
    outcome: "50K downloads · 4.9★",
    desc: "Cross-platform wellness app with AI-driven mood tracking and personalized daily programs.",
    accent: "#C8C8C4",
  },
  {
    title: "Orbital",
    type: "SaaS Platform",
    year: "2023",
    outcome: "200+ enterprise clients",
    desc: "Multi-tenant analytics dashboard processing 10M data points per day.",
    accent: "#C8C8C4",
  },
  {
    title: "LuxeCommerce",
    type: "E-Commerce",
    year: "2023",
    outcome: "+85% conversion rate",
    desc: "Headless commerce rebuild for a luxury brand — 3× faster page loads.",
    accent: "#C8C8C4",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section" style={{ background: "#0C0C0C" }}>
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <FadeUp>
            <p className="label mb-3">Selected work</p>
            <h2 className="heading-lg text-snow">Portfolio</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-ink-5 hover:text-blue transition-colors"
            >
              All projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </FadeUp>
        </div>

        <DrawLine />

        <Stagger>
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                className="group relative flex flex-col sm:flex-row sm:items-start gap-6 py-10 border-b cursor-pointer"
                style={{ borderColor: "#1A1A1A" }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Left accent bar */}
                <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-blue origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                {/* Year */}
                <span
                  className="text-sm font-mono flex-shrink-0"
                  style={{ color: "#333333", minWidth: "2.5rem" }}
                >
                  {p.year}
                </span>

                {/* Main */}
                <div className="flex-1 sm:flex sm:items-start sm:gap-12">
                  <div className="sm:w-48 flex-shrink-0 mb-3 sm:mb-0">
                    <h3 className="heading-sm text-snow group-hover:text-blue transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-xs mt-1" style={{ color: "#444444" }}>
                      {p.type}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#666666" }}>
                    {p.desc}
                  </p>
                </div>

                {/* Outcome + arrow */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-sm font-mono"
                    style={{ color: p.accent }}
                  >
                    {p.outcome}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#555555" }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
