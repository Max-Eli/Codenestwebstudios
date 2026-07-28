import Link from "next/link";
import { Reveal } from "@/components/ui/Motion";
import { faqs, insights } from "@/content/site";

/**
 * Native <details>/<summary> rather than a JS accordion — it is keyboard
 * operable, announced correctly by screen readers, and works before hydration.
 */
export default function FaqSection() {
  const hasInsights = insights.length > 0;

  return (
    <section className="section rule-top" style={{ background: "var(--bg-2)" }}>
      <div
        className={`container-site grid grid-cols-1 items-start gap-14 ${
          hasInsights ? "lg:grid-cols-2 lg:gap-20" : ""
        }`}
      >
        <div>
          <Reveal className="label-mono mb-5">08 / Common questions</Reveal>
          <Reveal className="flex flex-col">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b" style={{ borderColor: "var(--line-3)" }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 text-[17px] font-medium tracking-[-0.015em] marker:content-none md:text-[18px]">
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="mono flex-shrink-0 select-none transition-transform duration-200 group-open:rotate-45"
                    style={{ color: "var(--accent)" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mb-6 mt-0 max-w-[52ch] text-[15.5px] leading-relaxed"
                  style={{ color: "var(--fg-4)" }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </Reveal>
        </div>

        {hasInsights && (
          <div>
            <Reveal className="label-mono mb-5">09 / Insights</Reveal>
            <div className="hairline-grid grid-cols-1">
              {insights.slice(0, 3).map((post, i) => (
                <Reveal key={post.slug} index={i}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="hairline-cell block px-7 py-8 transition-colors duration-200 hover:bg-[var(--bg-3)]"
                    style={{ background: "var(--bg-2)" }}
                  >
                    <div className="mono text-[11px]" style={{ color: "var(--fg-5)" }}>
                      {post.date} · {post.readingTime}
                    </div>
                    <h3 className="mt-3 text-[19px] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[20px]">
                      {post.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
