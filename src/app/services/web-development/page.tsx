import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import PageHeader from "@/components/ui/PageHeader";
import ServiceGraphic from "@/components/ui/ServiceGraphic";
import { FadeUp, Stagger, StaggerItem, DrawLine, SlideIn } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Web Development",
  description: "High-performance websites and web applications built with Next.js and React.",
};

export default function WebDevPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Service"
          title="Web Development"
          subtitle="Fast, accessible, conversion-focused websites and web apps built to last."
          backHref="/services"
          backLabel="All Services"
          graphic={<ServiceGraphic variant="web" />}
        />

        {/* Tech stack */}
        <section className="py-10 border-y" style={{ background: "#111111", borderColor: "#1A1A1A" }}>
          <div className="container-site">
            <div className="flex flex-wrap gap-2">
              {["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS / Vercel", "Sanity CMS"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-md border" style={{ color: "#555555", borderColor: "#1A1A1A", background: "#0C0C0C" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <FadeUp className="mb-12">
              <p className="label mb-3">Scope</p>
              <h2 className="heading-lg text-snow">What we deliver</h2>
            </FadeUp>
            <DrawLine />
            <Stagger>
              {[
                { title: "Marketing & Landing Pages", desc: "Conversion-focused pages with A/B testing hooks, schema markup, and Core Web Vitals scores in the 90s." },
                { title: "E-Commerce", desc: "Custom storefronts or headless Shopify with Stripe, smooth checkout flows, and mobile-first UX." },
                { title: "Web Applications", desc: "Full-stack apps with auth, real-time features, file uploads, and scalable data layers." },
                { title: "CMS Integration", desc: "Headless CMS setup (Sanity, Contentful, Strapi) so your team can manage content without touching code." },
                { title: "Performance & SEO", desc: "Technical SEO, structured data, image optimization, and aggressive caching strategies." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="py-8 border-b grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: "#1A1A1A" }}>
                    <h3 className="heading-sm text-snow">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Why us */}
        <section className="section" style={{ background: "#111111" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <SlideIn direction="left">
                <p className="label mb-4">Why Codenest</p>
                <h2 className="heading-lg text-snow mb-8">Benchmarks that matter</h2>
                <ul className="flex flex-col gap-5">
                  {[
                    ["95+", "Average Lighthouse performance score"],
                    ["6 mo", "Post-launch support included"],
                    ["100%", "Source code ownership, always"],
                    ["2 wk", "Sprint cadence with live demos"],
                  ].map(([value, label]) => (
                    <li key={label} className="flex items-center gap-5 py-4 border-b" style={{ borderColor: "#1A1A1A" }}>
                      <span className="font-display text-2xl font-semibold flex-shrink-0" style={{ color: "#7EB8D4", letterSpacing: "-0.02em", minWidth: "4rem" }}>
                        {value}
                      </span>
                      <span className="text-sm" style={{ color: "#666666" }}>{label}</span>
                    </li>
                  ))}
                </ul>
              </SlideIn>
              <SlideIn direction="right">
                <div className="rounded-xl p-8 border" style={{ background: "#0C0C0C", borderColor: "#1A1A1A" }}>
                  <p className="label mb-6">Client guarantee</p>
                  {[
                    "We won't start development until you've approved designs",
                    "You own all code from day one — no lock-in",
                    "Fixed-price milestones, no surprise invoices",
                    "If we miss a deadline, you don't pay for the overrun",
                  ].map((g) => (
                    <div key={g} className="flex items-start gap-3 mb-4 last:mb-0">
                      <span className="text-sm mt-0.5 flex-shrink-0" style={{ color: "#7EB8D4" }}>✓</span>
                      <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{g}</p>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
