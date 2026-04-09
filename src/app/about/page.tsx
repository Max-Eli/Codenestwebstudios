import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import PageHeader from "@/components/ui/PageHeader";
import PageGraphic from "@/components/ui/PageGraphic";
import { FadeUp, Stagger, StaggerItem, DrawLine, SlideIn, CountUp } from "@/components/ui/Motion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "A small, senior team building digital products that perform.",
};

const team = [
  { name: "Alex Mercer", role: "Founder · Lead Engineer", note: "Ex-Google. 10+ years building scalable web systems." },
  { name: "Sofia Nguyen", role: "Head of Mobile", note: "15+ apps shipped to the App Store. React Native specialist." },
  { name: "Kai Okonkwo", role: "Backend & Infrastructure", note: "API design, database optimization, cloud architecture." },
  { name: "Mia Larsson", role: "Design Lead", note: "UI/UX design and prototyping. Obsessed with the details." },
];

const values = [
  { title: "Craft over speed", desc: "We take the time to do it right. Not cutting corners that cost you later." },
  { title: "Outcomes over output", desc: "Code is a means, not an end. We measure success by impact on your business." },
  { title: "Radical transparency", desc: "You see everything — code, progress, decisions. No black boxes, no surprises." },
  { title: "Small and senior", desc: "No junior hand-offs. Every project is led by experienced engineers from start to finish." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="About"
          title="Built by developers who care about the work."
          graphic={<PageGraphic variant="about" />}
        />

        {/* Story */}
        <section className="section" style={{ background: "#111111" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <SlideIn direction="left" className="lg:col-span-5">
                <p className="label mb-3">The story</p>
                <h2 className="heading-lg text-snow">Why we started Codenest</h2>
              </SlideIn>
              <SlideIn direction="right" className="lg:col-span-6 lg:col-start-7">
                <div className="flex flex-col gap-5 text-sm leading-relaxed mb-10" style={{ color: "#666666" }}>
                  <p>
                    We started Codenest because we kept seeing the same problem: great businesses held back by mediocre digital products. Agencies that over-promised and under-delivered. In-house teams too slow to ship.
                  </p>
                  <p>
                    So we built the studio we always wanted to work with — small enough to care deeply about every project, experienced enough to execute without supervision, and remote-first so we hire the best people regardless of location.
                  </p>
                  <p>
                    Eight years and 150+ projects later, the goal is still the same: ship work we&apos;re genuinely proud of.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: "#1A1A1A" }}>
                  {[
                    { n: 150, suffix: "+", label: "Projects shipped" },
                    { n: 8, suffix: " yrs", label: "In business" },
                    { n: 98, suffix: "%", label: "Repeat clients" },
                  ].map(({ n, suffix, label }) => (
                    <div key={label}>
                      <p className="font-display font-semibold text-snow" style={{ fontSize: "1.6rem", letterSpacing: "-0.025em" }}>
                        <CountUp to={n} suffix={suffix} />
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#444444" }}>{label}</p>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <FadeUp className="mb-12">
              <p className="label mb-3">How we work</p>
              <h2 className="heading-lg text-snow">Values</h2>
            </FadeUp>
            <DrawLine />
            <Stagger>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="py-8 border-b grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: "#1A1A1A" }}>
                    <h3 className="heading-sm text-snow">{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{v.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Team */}
        <section className="section" style={{ background: "#111111" }}>
          <div className="container-site">
            <FadeUp className="mb-12">
              <p className="label mb-3">The people</p>
              <h2 className="heading-lg text-snow">Team</h2>
            </FadeUp>
            <DrawLine />
            <Stagger>
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <div
                    className="flex flex-col sm:flex-row sm:items-center gap-4 py-7 border-b"
                    style={{ borderColor: "#1A1A1A" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                      style={{ background: "#1A1A1A", color: "#7EB8D4", border: "1px solid #222" }}
                    >
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 sm:flex sm:items-center sm:gap-10">
                      <div className="sm:w-56 flex-shrink-0">
                        <p className="text-sm font-medium text-snow">{member.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#555555" }}>{member.role}</p>
                      </div>
                      <p className="text-sm mt-2 sm:mt-0" style={{ color: "#666666" }}>{member.note}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp className="mt-16">
              <p className="text-sm mb-4" style={{ color: "#555555" }}>
                Remote-first. We&apos;re always looking for exceptional engineers and designers.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-snow-2 hover:text-blue transition-colors">
                Get in touch <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeUp>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
