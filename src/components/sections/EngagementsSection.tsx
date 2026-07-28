import { Reveal } from "@/components/ui/Motion";
import { engagements } from "@/content/site";

export default function EngagementsSection({
  eyebrow = "06 / Engagements",
  showIncludes = false,
}: {
  eyebrow?: string;
  showIncludes?: boolean;
}) {
  return (
    <section id="engagements" className="section rule-top" style={{ background: "var(--bg-2)" }}>
      <div className="container-site">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div>
            <div className="label-mono mb-4">{eyebrow}</div>
            <h2 className="heading-2">Three ways to work with us</h2>
          </div>
          <p className="max-w-[34ch] text-base leading-relaxed" style={{ color: "var(--fg-4)" }}>
            Every engagement starts with a paid discovery week, credited back if you continue.
          </p>
        </Reveal>

        <div className="hairline-grid grid-cols-1 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal
              key={e.id}
              index={i}
              className="hairline-cell relative px-8 pb-10 pt-10"
              style={{
                background: e.featured ? "var(--bg-3)" : "var(--bg-2)",
                borderTop: e.featured ? "2px solid var(--accent)" : undefined,
              }}
            >
              {e.featured && (
                <div
                  className="mono absolute right-5 top-3.5 text-[10.5px] uppercase tracking-[0.1em]"
                  style={{ color: "var(--accent-bright)" }}
                >
                  Most common
                </div>
              )}
              <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{e.title}</h3>
              <div className="mt-6 text-[34px] font-medium tracking-[-0.035em] md:text-[38px]">
                {e.price}
              </div>
              <div className="mono mt-2 text-[11.5px]" style={{ color: "var(--fg-5)" }}>
                {e.cadence}
              </div>
              <p className="mt-6 text-[15.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
                {e.body}
              </p>

              {showIncludes && (
                <ul className="mt-8 flex list-none flex-col gap-3 p-0">
                  {e.includes.map((inc) => (
                    <li key={inc} className="flex gap-3.5 text-[15px]" style={{ color: "var(--fg-2)" }}>
                      <span className="mono flex-shrink-0 text-xs" style={{ color: "var(--accent)" }}>
                        →
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
