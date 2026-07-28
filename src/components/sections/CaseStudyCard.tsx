import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/content/site";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex h-full flex-col border transition-colors duration-300 hover:bg-[var(--bg-3)]"
      style={{ borderColor: "var(--line-3)", background: "var(--bg-2)" }}
    >
      <div className="relative h-[250px] border-b" style={{ borderColor: "var(--line-3)" }}>
        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.client} — ${study.title}`}
            fill
            sizes="(max-width: 768px) 80vw, 560px"
            className="object-cover"
          />
        ) : (
          <div className="hatch h-full w-full border-0">
            <span className="mono text-[11.5px] uppercase tracking-[0.1em]" style={{ color: "var(--fg-6)" }}>
              [ {study.placeholderImage} ]
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-8 pb-9 pt-7">
        <div
          className="mono flex justify-between gap-4 text-[11.5px] uppercase tracking-[0.09em]"
          style={{ color: "var(--fg-5)" }}
        >
          <span>{study.client}</span>
          <span>{study.sector}</span>
        </div>

        <h3 className="mt-4.5 text-[24px] font-semibold leading-[1.15] tracking-[-0.025em] md:text-[27px]">
          {study.title}
        </h3>
        <p className="mt-3 text-[15.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
          {study.summary}
        </p>

        {study.metrics.length > 0 && (
          <div
            className="mt-auto flex gap-9 border-t pt-5"
            style={{ borderColor: "var(--line-3)", marginTop: "1.625rem" }}
          >
            {study.metrics.map((m) => (
              <div key={m.label}>
                <div
                  className="text-[30px] font-medium tracking-[-0.03em]"
                  style={{ color: "var(--accent-bright)" }}
                >
                  {m.value}
                </div>
                <div className="mono mt-1.5 text-[11px]" style={{ color: "var(--fg-5)" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
