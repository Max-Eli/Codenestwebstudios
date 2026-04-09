import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import PageHeader from "@/components/ui/PageHeader";
import ServiceGraphic from "@/components/ui/ServiceGraphic";
import { FadeUp, Stagger, StaggerItem, DrawLine, SlideIn } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Custom Software",
  description: "Bespoke SaaS platforms, APIs, automation tools, and enterprise systems.",
};

export default function CustomSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Service"
          title="Custom Software"
          subtitle="Software built to your exact requirements — not someone else's template."
          backHref="/services"
          backLabel="All Services"
          graphic={<ServiceGraphic variant="software" />}
        />

        <section className="py-10 border-y" style={{ background: "#111111", borderColor: "#1A1A1A" }}>
          <div className="container-site">
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL", "REST APIs", "Docker", "Kubernetes", "AWS", "Terraform", "OpenAI / Claude"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-md border" style={{ color: "#555555", borderColor: "#1A1A1A", background: "#0C0C0C" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <FadeUp className="mb-12">
              <p className="label mb-3">Scope</p>
              <h2 className="heading-lg text-snow">What we engineer</h2>
            </FadeUp>
            <DrawLine />
            <Stagger>
              {[
                { title: "SaaS Platforms", desc: "Multi-tenant applications with subscription billing, role-based access, and white-label options built to scale from 10 to 10,000 customers." },
                { title: "API Development", desc: "RESTful and GraphQL APIs — well-documented, versioned, rate-limited, and secured from day one." },
                { title: "Automation & Workflows", desc: "Business process automation, third-party integrations, webhook systems, and data pipelines that eliminate manual work." },
                { title: "Cloud Architecture", desc: "AWS, GCP, and Azure infrastructure design — containers, serverless, CI/CD pipelines, and cost-optimized scaling strategies." },
                { title: "AI Integration", desc: "Embed GPT, Claude, or custom ML models into your product workflows for real business value, not just demos." },
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

        <section className="section" style={{ background: "#111111" }}>
          <div className="container-site">
            <SlideIn direction="left">
              <p className="label mb-4">Custom vs off-the-shelf</p>
              <h2 className="heading-lg text-snow mb-8">Why build it yourself</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { pro: "Exact fit", desc: "No compromises on your workflow — the software works the way your business works." },
                  { pro: "No ongoing licenses", desc: "You own it. No per-seat fees, no usage caps, no vendor lock-in." },
                  { pro: "Competitive moat", desc: "Competitors can replicate an off-the-shelf tool. They can't easily replicate yours." },
                  { pro: "Full IP ownership", desc: "Every line of code is yours from day one, with no restrictive licensing." },
                ].map(({ pro, desc }) => (
                  <div key={pro} className="rounded-xl p-6 border" style={{ background: "#0C0C0C", borderColor: "#1A1A1A" }}>
                    <p className="text-sm font-medium text-snow mb-2">{pro}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
