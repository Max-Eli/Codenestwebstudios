import { Reveal } from "@/components/ui/Motion";

/**
 * Shown where the design expects a list that has no real content yet, rather
 * than filling the page with invented entries. Styled as a deliberate panel so
 * it reads as "not published yet", not as a broken page.
 */
export default function EmptyState({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal
      className="hatch flex flex-col items-start px-8 py-16 md:px-14 md:py-24"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-[52ch]">
        <div className="label-mono mb-5">{eyebrow}</div>
        <h2 className="heading-3">{title}</h2>
        <p className="mt-5 text-[16px] leading-[1.7]" style={{ color: "var(--fg-4)" }}>
          {body}
        </p>
      </div>
    </Reveal>
  );
}
