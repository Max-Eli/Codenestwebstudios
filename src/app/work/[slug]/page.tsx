import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Motion";
import { caseStudies } from "@/content/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.client} — ${study.title}`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: study.title, description: study.summary, type: "article" },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="pb-14 pt-32 md:pt-[150px]">
          <div className="container-site">
            <Reveal>
              <Link
                href="/work"
                className="mono mb-10 inline-flex text-[11.5px] uppercase tracking-[0.1em] transition-colors hover:text-[var(--accent-bright)]"
                style={{ color: "var(--fg-5)" }}
              >
                ← Work
              </Link>
              <div className="mono mb-5 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.09em]" style={{ color: "var(--fg-5)" }}>
                <span style={{ color: "var(--accent)" }}>{study.client}</span>
                <span>{study.sector}</span>
                {study.year && <span>{study.year}</span>}
              </div>
              <h1 className="display-2 max-w-[20ch]">{study.title}</h1>
              <p className="lede mt-7 max-w-[54ch]">{study.summary}</p>
            </Reveal>
          </div>
        </section>

        {/* Hero image */}
        <section className="pb-4">
          <div className="container-site">
            <Reveal className="relative aspect-[16/9] w-full">
              {study.image ? (
                <Image
                  src={study.image}
                  alt={`${study.client} — ${study.title}`}
                  fill
                  priority
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="border object-cover"
                  style={{ borderColor: "var(--line-3)" }}
                />
              ) : (
                <div className="hatch h-full w-full">
                  <span className="mono text-[11.5px] uppercase tracking-[0.1em]" style={{ color: "var(--fg-6)" }}>
                    [ {study.placeholderImage} ]
                  </span>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Outcome metrics */}
        {study.metrics.length > 0 && (
          <section className="section">
            <div className="container-site">
              <div className="hairline-grid grid-cols-2 md:grid-cols-4">
                {study.metrics.map((m, i) => (
                  <Reveal
                    key={m.label}
                    index={i}
                    className="hairline-cell px-6 py-8 md:px-8 md:py-10"
                    style={{ background: "var(--bg)" }}
                  >
                    <div className="stat-figure" style={{ color: "var(--accent-bright)" }}>
                      {m.value}
                    </div>
                    <div className="label-muted mt-3.5">{m.label}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Narrative */}
        {study.body && study.body.length > 0 && (
          <section className="section rule-top">
            <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
              <Reveal className="lg:sticky lg:top-[120px] lg:self-start">
                <div className="label-mono mb-5">What we did</div>
                {study.services && study.services.length > 0 && (
                  <ul className="flex list-none flex-col gap-3 p-0">
                    {study.services.map((s) => (
                      <li key={s} className="flex gap-3.5 text-[15px]" style={{ color: "var(--fg-2)" }}>
                        <span className="mono flex-shrink-0 text-xs" style={{ color: "var(--accent)" }}>
                          →
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>

              <div className="prose-content max-w-[64ch]">
                {study.body.map((block, i) => (
                  <Reveal key={i} index={i}>
                    {block.type === "h2" ? <h2>{block.text}</h2> : <p>{block.text}</p>}
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaSection
          title="Have a process like this one?"
          body="Describe what's slowing you down and we'll tell you what it would take to fix it."
          primary={{ label: "Request a scoping estimate", href: "/contact" }}
          secondary={{ label: "See more work", href: "/work" }}
        />
      </main>
      <Footer />
    </>
  );
}
