import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { FadeUp, Stagger, StaggerItem, DrawLine } from "@/components/ui/Motion";
import PageGraphic from "@/components/ui/PageGraphic";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, mobile app development, and custom software for ambitious businesses.",
};

const services = [
  {
    index: "01",
    title: "Web Development",
    slug: "web-development",
    tagline: "Websites and web apps that perform.",
    description:
      "From marketing sites to full-stack platforms — fast, accessible, and built to convert. We use Next.js, React, and TypeScript.",
    deliverables: ["Marketing sites", "Web applications", "E-commerce", "CMS integration", "SEO & performance"],
  },
  {
    index: "02",
    title: "Mobile Apps",
    slug: "mobile-app-development",
    tagline: "iOS & Android apps users return to.",
    description:
      "React Native cross-platform apps with native performance. We handle design, development, and App Store submission.",
    deliverables: ["React Native apps", "iOS & Android", "App Store launch", "Push notifications", "Offline support"],
  },
  {
    index: "03",
    title: "Custom Software",
    slug: "custom-software",
    tagline: "Software that fits your business exactly.",
    description:
      "SaaS platforms, APIs, automation tools, and enterprise systems built to your exact requirements — not someone else's.",
    deliverables: ["SaaS platforms", "REST & GraphQL APIs", "Automation", "Cloud infrastructure", "AI integrations"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <section className="pt-32 pb-16" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] items-center gap-8">
              <FadeUp>
                <p className="label mb-4">Services</p>
                <h1 className="heading-xl text-snow max-w-2xl">
                  Three disciplines. One team.
                </h1>
              </FadeUp>
              <div className="hidden lg:flex items-center justify-end">
                <PageGraphic variant="services" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <DrawLine />
            <Stagger>
              {services.map((s) => (
                <StaggerItem key={s.slug}>
                  <div
                    className="py-14 border-b grid grid-cols-1 lg:grid-cols-12 gap-8"
                    style={{ borderColor: "#1A1A1A" }}
                  >
                    {/* Left */}
                    <div className="lg:col-span-5">
                      <span className="text-sm font-mono block mb-4" style={{ color: "#333333" }}>
                        {s.index}
                      </span>
                      <h2 className="heading-md text-snow mb-2">{s.title}</h2>
                      <p className="text-sm mb-4" style={{ color: "#7EB8D4" }}>{s.tagline}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                        {s.description}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-5 lg:col-start-8">
                      <p className="label mb-4">Deliverables</p>
                      <ul className="flex flex-col gap-2 mb-8">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2.5 text-sm" style={{ color: "#666666" }}>
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#333333" }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-ink-6 hover:text-snow transition-colors"
                      >
                        Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
