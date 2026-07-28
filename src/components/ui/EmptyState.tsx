import Link from "next/link";
import { Reveal } from "@/components/ui/Motion";

/**
 * Shown where the design expects a list that has no published content yet.
 *
 * Reads as a deliberate editorial position rather than a broken page, and
 * always offers somewhere to go — an empty page with a dead end is worse than
 * no page. Copy here is customer-facing: never explain the CMS.
 */
export default function EmptyState({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
}) {
  return (
    <Reveal
      className="flex flex-col items-start border px-8 py-16 md:px-14 md:py-24"
      style={{ background: "var(--bg-2)", borderColor: "var(--line-3)" }}
    >
      <div className="max-w-[54ch]">
        <div className="label-mono mb-5">{eyebrow}</div>
        <h2 className="heading-3">{title}</h2>
        <p className="mt-5 text-[16px] leading-[1.7]" style={{ color: "var(--fg-3)" }}>
          {body}
        </p>
        {cta && (
          <Link href={cta.href} data-magnetic className="btn btn-accent mt-9">
            {cta.label} <span className="mono">→</span>
          </Link>
        )}
      </div>
    </Reveal>
  );
}
