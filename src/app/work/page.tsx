import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import EmptyState from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Motion";
import { caseStudies, industries, hasWork } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects — what we built, who for, and what changed afterwards.",
  alternates: { canonical: "/work" },
  // Kept live so external links don't 404, but withheld from search while
  // there is nothing published — a thin page indexed now is a liability later.
  robots: hasWork ? undefined : { index: false, follow: true },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Work"
          title="Built, shipped, still running."
          lede="We publish a project only once the client has signed off on what we can say about it — so this page moves slowly on purpose. If you want to see something closer to your own situation, ask and we'll walk you through it."
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
                eyebrow="Case studies in progress"
                title="Written up, one client at a time."
                body="We don't publish a project until the client has approved the numbers in it, which takes longer than writing the page. Tell us the process you're trying to fix and we'll talk you through the closest thing we've built — in detail, on a call."
                cta={{ label: "Ask about relevant work", href: "/contact" }}
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
