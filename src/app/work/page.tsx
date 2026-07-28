import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import EmptyState from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Motion";
import { caseStudies, industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects — what we built, who for, and what changed afterwards.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Work"
          title="Built, shipped, still running."
          lede="Every project here replaced something manual. We list what changed after launch, not how many hours it took us."
        />

        <section className="section rule-top">
          <div className="container-site">
            {caseStudies.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {caseStudies.map((c, i) => (
                  <Reveal key={c.slug} index={i}>
                    <CaseStudyCard study={c} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <EmptyState
                eyebrow="Nothing published yet"
                title="Case studies are being written up."
                body="Rather than publish invented projects, this page stays empty until there's real work with a client's permission behind it. Add entries to caseStudies in src/content/site.ts and they appear here and on the homepage automatically."
              />
            )}
          </div>
        </section>

        <section className="section rule-top" style={{ background: "var(--bg-2)" }}>
          <div className="container-site">
            <Reveal className="label-mono mb-10">Sectors we take work in</Reveal>
            <Reveal className="hairline-grid grid-cols-2 lg:grid-cols-4">
              {industries.map((name) => (
                <div
                  key={name}
                  className="hairline-cell px-6 py-7 text-[15px] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--bg)] md:text-[17px]"
                  style={{ background: "var(--bg-2)" }}
                >
                  {name}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CtaSection
          title="Have a process that's hurting?"
          body="Describe it in a few lines. You'll get a real reply from an engineer, not a sales sequence."
          primary={{ label: "Request a scoping estimate", href: "/contact" }}
          secondary={{ label: "See what we do", href: "/services" }}
        />
      </main>
      <Footer />
    </>
  );
}
