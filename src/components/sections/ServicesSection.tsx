"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Stagger, StaggerItem, DrawLine } from "@/components/ui/Motion";

const services = [
  {
    index: "01",
    title: "Web Development",
    slug: "web-development",
    description:
      "Fast, conversion-focused websites and web applications built with Next.js and modern standards. From marketing sites to full-stack platforms.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    index: "02",
    title: "Mobile Apps",
    slug: "mobile-app-development",
    description:
      "iOS and Android apps built with React Native. One codebase, native performance, shipped to both stores.",
    tags: ["React Native", "iOS", "Android", "Expo"],
  },
  {
    index: "03",
    title: "Custom Software",
    slug: "custom-software",
    description:
      "Bespoke SaaS platforms, APIs, automation tools, and enterprise systems engineered for your exact requirements.",
    tags: ["Node.js", "Python", "PostgreSQL", "AWS"],
  },
];

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: "#0C0C0C" }}>
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <FadeUp>
            <p className="label mb-3">What we do</p>
            <h2 className="heading-lg text-snow">Services</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-ink-5 hover:text-blue transition-colors"
            >
              All services <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </FadeUp>
        </div>

        <DrawLine />

        {/* Service rows */}
        <Stagger>
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex flex-col sm:flex-row sm:items-start gap-6 py-10 border-b transition-all duration-200"
                style={{ borderColor: "#1A1A1A" }}
              >
                {/* Left accent bar */}
                <span className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-blue origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                {/* Index */}
                <span
                  className="text-sm font-mono flex-shrink-0 pt-0.5 transition-colors duration-200 group-hover:text-blue"
                  style={{ color: "#333333", minWidth: "2.5rem" }}
                >
                  {s.index}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="heading-md text-snow group-hover:text-blue transition-colors duration-200"
                      style={{ transitionProperty: "color" }}
                    >
                      {s.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0"
                      style={{ color: "#7EB8D4" }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed mb-4 max-w-lg" style={{ color: "#666666" }}>
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md border transition-colors duration-200"
                        style={{ color: "#555555", borderColor: "#1A1A1A", background: "#111111" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
