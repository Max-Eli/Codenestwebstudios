import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import StickySteps from "@/components/sections/StickySteps";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";
import { Reveal, CountUp } from "@/components/ui/Motion";
import { about, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} builds the operational software that runs a business — dispatch boards, quoting tools, intake forms and the integrations between them.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={`About ${site.shortName}`} title={about.headline}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[70px]">
            {about.intro.map((p) => (
              <p key={p} className="lede m-0">
                {p}
              </p>
            ))}
          </div>
        </PageHero>

        {/* Hidden until real figures land in src/content/site.ts */}
        {about.stats.length > 0 && (
          <section className="rule-top py-16 md:py-20">
            <div className="container-site">
              <div className="hairline-grid grid-cols-2 md:grid-cols-4" style={{ background: "var(--line)" }}>
                {about.stats.map((s, i) => (
                  <Reveal
                    key={s.label}
                    index={i}
                    className="hairline-cell px-6 py-8 md:px-8 md:py-9"
                    style={{ background: "var(--bg)" }}
                  >
                    <div className="stat-figure">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="label-muted mt-3.5">{s.label}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <StickySteps
          eyebrow="How we operate"
          title="Four rules we don't break"
          steps={about.rules}
        />

        <TeamSection eyebrow="The team" />

        {/* Hidden until real locations land in src/content/site.ts */}
        {about.locations.length > 0 && (
          <section className="section rule-top" style={{ background: "var(--bg-2)" }}>
            <div className="container-site grid grid-cols-1 gap-6 md:grid-cols-2">
              {about.locations.map((loc, i) => (
                <Reveal
                  key={loc.city}
                  index={i}
                  className="border px-8 py-10"
                  style={{ borderColor: "rgba(255,255,255,0.11)" }}
                >
                  <div
                    className="mono text-[11.5px] uppercase tracking-[0.1em]"
                    style={{ color: "var(--accent-bright)" }}
                  >
                    {loc.city}
                  </div>
                  <div className="mt-4.5 text-[19px] leading-[1.6]" style={{ color: "var(--fg-2)" }}>
                    {loc.blurb}
                  </div>
                  <div className="mono mt-6 text-xs" style={{ color: "var(--fg-5)" }}>
                    {loc.address}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <CtaSection
          title="Come and describe the messy part."
          primary={{ label: "Request a scoping estimate", href: "/contact" }}
          secondary={{ label: "Read how we think", href: "/insights" }}
        />
      </main>
      <Footer />
    </>
  );
}
