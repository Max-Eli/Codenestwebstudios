import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import EmptyState from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Motion";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical writing on custom software, estimates, AI automation and buying decisions.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Writing for the person signing the cheque."
          lede="No framework hot takes. Practical notes on when custom software is worth it, what a good estimate looks like, and how to judge an automation vendor."
        />

        <section className="section rule-top">
          <div className="container-site">
            {insights.length > 0 ? (
              <div className="hairline-grid grid-cols-1">
                {insights.map((post, i) => (
                  <Reveal key={post.slug} index={i}>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="hairline-cell group flex flex-col gap-5 px-7 py-9 transition-colors duration-200 hover:bg-[var(--bg-3)] sm:flex-row sm:items-start sm:gap-10"
                    >
                      <span
                        className="mono flex-shrink-0 pt-1 text-[11px] uppercase tracking-[0.09em] sm:w-32"
                        style={{ color: "var(--fg-5)" }}
                      >
                        {post.date}
                      </span>
                      <div className="flex-1">
                        <div className="mono mb-2.5 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.09em]" style={{ color: "var(--fg-6)" }}>
                          <span>{post.category}</span>
                          <span>{post.readingTime}</span>
                        </div>
                        <h2 className="text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] transition-colors group-hover:text-[var(--accent-bright)] md:text-[24px]">
                          {post.title}
                        </h2>
                        <p className="mt-3 max-w-[60ch] text-[15.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
                          {post.excerpt}
                        </p>
                      </div>
                      <span className="mono flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "var(--accent)" }}>
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <EmptyState
                eyebrow="Nothing published yet"
                title="The first articles are in draft."
                body="The mockup shipped three headlines with no articles behind them. Rather than publish empty stubs, add entries to insights in src/content/site.ts — each one appears here and in the homepage sidebar automatically."
              />
            )}
          </div>
        </section>

        <CtaSection
          title="Would rather just ask us directly?"
          body="Send a few lines about the problem. You'll get a real reply from an engineer."
          primary={{ label: "Request a scoping estimate", href: "/contact" }}
          secondary={{ label: "See what we do", href: "/services" }}
        />
      </main>
      <Footer />
    </>
  );
}
