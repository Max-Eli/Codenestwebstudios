import Link from "next/link";
import { Reveal } from "@/components/ui/Motion";
import { services } from "@/content/site";

export default function ServicesGrid({ num = "01" }: { num?: string }) {
  return (
    <section id="services" className="pb-24 pt-10 md:pb-[120px]">
      <div className="container-site">
        <Reveal className="flex flex-col justify-between gap-8 border-b pb-11 md:flex-row md:items-end" style={{ borderColor: "var(--line-3)" }}>
          <div>
            <div className="label-mono mb-5">{num} / What we build</div>
            <h2 className="heading-1 max-w-[22ch]">One team for the whole software problem.</h2>
          </div>
          <p className="max-w-[38ch] text-base leading-relaxed" style={{ color: "var(--fg-4)" }}>
            Strategy, design, engineering and long-term care under one roof — so nothing gets lost
            between vendors.
          </p>
        </Reveal>

        <div className="hairline-grid mt-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} index={i}>
              <Link
                href={`/services#${s.id}`}
                className="hairline-cell group block h-full px-8 pb-9 pt-10 transition-[background,transform] duration-300 hover:-translate-y-1 hover:bg-[var(--bg-3)]"
              >
                <div className="mono mb-7 text-[11.5px]" style={{ color: "var(--accent)" }}>
                  {s.code}
                </div>
                <h3 className="heading-4">{s.title}</h3>
                <p className="mt-3.5 text-[15.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
                  {s.short}
                </p>
                <div className="mono mt-7 flex flex-wrap gap-2 text-[11px]" style={{ color: "var(--fg-5)" }}>
                  {s.tags.map((t) => (
                    <span key={t} className="border px-2.5 py-1.5" style={{ borderColor: "var(--line-4)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
