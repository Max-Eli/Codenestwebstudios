import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ServiceMockup, { type MockupVariant } from "@/components/ui/ServiceMockup";
import { Reveal } from "@/components/ui/Motion";
import { services, showPricing, hasWork } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, mobile apps, CRMs, AI automation, integrations and long-term cloud care.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="From the first sketch to the fifth year of maintenance."
          lede="Six things we do. Most projects use two or three of them. If your problem doesn't fit any of these neatly, say so — the first conversation is about diagnosis, not selling."
        >
          <div className="mono flex flex-wrap gap-2.5 text-[11.5px] uppercase tracking-[0.08em]">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border px-3.5 py-2.5 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-bright)]"
                style={{ borderColor: "var(--line-5)", color: "var(--fg-4)" }}
              >
                {s.index} {s.title.replace(/ & .*/, "").replace("Custom web applications", "Web apps")}
              </a>
            ))}
          </div>
        </PageHero>

        {services.map((s, i) => {
          const flipped = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              className="rule-top scroll-mt-20 py-16 md:py-20"
              style={{ background: flipped ? "var(--bg-2)" : "var(--bg)" }}
            >
              <div className="container-site grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-[70px]">
                <Reveal className={flipped ? "lg:order-2" : undefined}>
                  <div className="mono mb-5 text-[11.5px]" style={{ color: "var(--accent)" }}>
                    {s.index}
                  </div>
                  <h2 className="heading-3">{s.title}</h2>
                  <p className="mt-5 max-w-[46ch] text-[16.5px] leading-[1.65] md:text-[17.5px]" style={{ color: "var(--fg-3)" }}>
                    {s.long}
                  </p>

                  <ul className="mt-9 flex list-none flex-col gap-3.5 p-0">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3.5 text-[15px] md:text-base" style={{ color: "var(--fg-2)" }}>
                        <span className="mono flex-shrink-0 text-xs" style={{ color: "var(--accent)" }}>
                          →
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mono mt-9 flex flex-wrap gap-x-11 gap-y-2 border-t pt-5 text-[11.5px] uppercase tracking-[0.08em]"
                    style={{ borderColor: "var(--line-3)", color: "var(--fg-5)" }}
                  >
                    <span>{s.timeline}</span>
                    {/* Figure shown only when showPricing is true (src/content/site.ts) */}
                    <span>{showPricing ? s.price : "Quoted after discovery"}</span>
                  </div>
                </Reveal>

                <Reveal index={1} className={flipped ? "lg:order-1" : undefined}>
                  <ServiceMockup
                    variant={s.id as MockupVariant}
                    className="aspect-[4/3] w-full"
                  />
                </Reveal>
              </div>
            </section>
          );
        })}

        <section className="section rule-top">
          <div className="container-site">
            <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[70px]">
              <div>
                <h2 className="heading-2 max-w-[22ch]">Not sure which of these you need?</h2>
                <p className="mt-6 max-w-[48ch] text-[16.5px] leading-[1.65] md:text-[17.5px]" style={{ color: "var(--fg-3)" }}>
                  That&apos;s the normal starting point. Describe the process that&apos;s hurting and
                  we&apos;ll tell you which of the six actually solves it — including when the answer
                  is &ldquo;buy something off the shelf&rdquo;.
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="/contact"
                  data-magnetic
                  className="btn btn-accent justify-between"
                >
                  Request a scoping estimate <span className="mono">→</span>
                </Link>
                <Link
                  href={hasWork ? "/work" : "/engagements"}
                  data-magnetic
                  className="btn btn-outline justify-between"
                >
                  {hasWork ? "See what we've built" : "How engagements work"}{" "}
                  <span className="mono">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
