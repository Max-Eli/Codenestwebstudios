import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import Accordion from "@/components/ui/Accordion";
import CtaSection from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Motion";
import { engagements, discovery, comparison, moneyFaqs, showPricing, hasWork } from "@/content/site";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Fixed-scope projects, dedicated squads and long-term care — each with a written, fixed estimate after a paid discovery week.",
  alternates: { canonical: "/engagements" },
};

export default function EngagementsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Engagements"
          title={
            showPricing
              ? "Prices you can take to your board."
              : "A fixed number you can take to your board."
          }
          lede={
            showPricing
              ? "We publish our starting numbers because hiding them wastes everyone's first two calls. The exact figure comes after discovery — and then it stops moving unless the scope does."
              : "We don't publish a rate card, because a number without your scope behind it is guesswork dressed up as a quote. You get a written, fixed figure at the end of the discovery week — and then it stops moving unless the scope does."
          }
        />

        {/* Three tiers */}
        <section className="px-0 pb-24 pt-5 md:pb-[100px]">
          <div className="container-site">
            <div className="hairline-grid grid-cols-1 lg:grid-cols-3">
              {engagements.map((e, i) => (
                <Reveal
                  key={e.id}
                  index={i}
                  className="hairline-cell relative flex flex-col gap-7 px-8 py-11 md:px-9"
                  style={{
                    background: e.featured ? "var(--bg-3)" : "var(--bg-2)",
                    borderTop: e.featured ? "2px solid var(--accent)" : undefined,
                  }}
                >
                  {e.featured && (
                    <div
                      className="mono absolute right-6 top-4 text-[10.5px] uppercase tracking-[0.1em]"
                      style={{ color: "var(--accent-bright)" }}
                    >
                      Most common
                    </div>
                  )}

                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.025em]">{e.title}</h2>
                    {showPricing ? (
                      <>
                        <div className="mt-5 text-[38px] font-medium tracking-[-0.04em] md:text-[42px]">
                          {e.price}
                        </div>
                        <div className="mono mt-2 text-[11.5px]" style={{ color: "var(--fg-5)" }}>
                          {e.cadence}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="mt-5 text-[24px] font-medium tracking-[-0.025em]"
                          style={{ color: "var(--accent-bright)" }}
                        >
                          {e.priceAlt}
                        </div>
                        <div className="mono mt-2 text-[11.5px]" style={{ color: "var(--fg-5)" }}>
                          Quoted after the discovery week
                        </div>
                      </>
                    )}
                    <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--fg-4)" }}>
                      {e.body}
                    </p>
                  </div>

                  <ul className="flex list-none flex-col gap-3 p-0">
                    {e.includes.map((inc) => (
                      <li key={inc} className="flex gap-3 text-[15.5px]" style={{ color: "var(--fg-2)" }}>
                        <span className="mono flex-shrink-0 text-xs" style={{ color: "var(--accent)" }}>
                          ✓
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    data-magnetic
                    className={`btn mt-auto justify-between ${e.featured ? "btn-accent" : "btn-outline"}`}
                  >
                    {e.cta} <span className="mono">→</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery week */}
        <section className="section rule-top" style={{ background: "var(--bg-2)" }}>
          <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="label-mono mb-5">Where everything starts</div>
              <h2 className="heading-2">The discovery week</h2>
              <p className="mt-6 max-w-[42ch] text-[16.5px] leading-[1.65] md:text-[17.5px]" style={{ color: "var(--fg-3)" }}>
                {showPricing ? `A flat ${discovery.price}. ` : `${discovery.priceAlt}. `}
                {discovery.intro}
              </p>
              <p className="mt-5 max-w-[42ch] text-[16.5px] leading-[1.65] md:text-[17.5px]" style={{ color: "var(--fg-3)" }}>
                {discovery.caveat}
              </p>
            </Reveal>

            <Reveal index={1} className="hairline-grid grid-cols-1 sm:grid-cols-2">
              {discovery.days.map((d) => (
                <div key={d.when} className="hairline-cell px-7 py-8" style={{ background: "var(--bg-2)" }}>
                  <div className="mono mb-3.5 text-[11.5px]" style={{ color: "var(--accent)" }}>
                    {d.when}
                  </div>
                  <div className="text-[16px] font-medium md:text-[17.5px]">{d.what}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Comparison table */}
        <section className="section rule-top">
          <div className="container-site">
            <Reveal className="label-mono mb-10">What&apos;s included, by engagement</Reveal>

            <Reveal className="overflow-x-auto border" style={{ borderColor: "var(--line-3)" }}>
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="mono text-[11px] uppercase tracking-[0.09em]" style={{ background: "var(--bg-3)", color: "var(--fg-4)" }}>
                    <th className="w-[34%] px-6 py-4.5 font-normal" style={{ padding: "18px 24px" }} />
                    {comparison.columns.map((c, i) => (
                      <th
                        key={c}
                        className="font-normal"
                        style={{
                          padding: "18px 24px",
                          color: i === 1 ? "var(--accent-bright)" : undefined,
                        }}
                        scope="col"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[15.5px]">
                  {comparison.rows.map((row) => (
                    <tr key={row.label} style={{ borderTop: "1px solid var(--line-2)" }}>
                      <th
                        scope="row"
                        className="font-normal"
                        style={{ padding: "20px 24px", color: "var(--fg-2)" }}
                      >
                        {row.label}
                      </th>
                      {row.cells.map((cell, i) => (
                        <td
                          key={`${row.label}-${i}`}
                          style={{
                            padding: "20px 24px",
                            color: cell.strong ? "var(--accent-bright)" : "var(--fg-5)",
                          }}
                        >
                          {cell.text}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal
              as="p"
              className="mono mt-6 text-[11.5px] tracking-[0.06em]"
              style={{ color: "var(--fg-6)" }}
            >
              {showPricing
                ? "Figures are indicative starting points, not a quote. Travel and third-party licences billed at cost."
                : "Travel and third-party licences are billed at cost. Everything else is fixed in writing before work starts."}
            </Reveal>
          </div>
        </section>

        {/* Money & risk FAQ */}
        <section className="section rule-top" style={{ background: "var(--bg-2)" }}>
          <div className="container-site max-w-[900px]">
            <Reveal className="label-mono mb-9">Questions about money and risk</Reveal>
            <Reveal>
              <Accordion items={moneyFaqs} size="lg" />
            </Reveal>
          </div>
        </section>

        <CtaSection
          title="Start with the discovery week."
          primary={{ label: "Request a scoping estimate", href: "/contact" }}
          secondary={
            hasWork
              ? { label: "See what that produced elsewhere", href: "/work" }
              : { label: "See what we build", href: "/services" }
          }
        />
      </main>
      <Footer />
    </>
  );
}
