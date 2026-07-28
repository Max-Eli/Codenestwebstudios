import Link from "next/link";
import { Reveal } from "@/components/ui/Motion";

type Cta = { label: string; href: string };

/** The two-column closing block the design repeats at the foot of inner pages. */
export default function CtaSection({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: Cta;
  secondary?: Cta;
}) {
  return (
    <section className="section rule-top">
      <div className="container-site">
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[70px]">
          <div>
            <h2 className="heading-2 max-w-[22ch]">{title}</h2>
            {body && (
              <p className="mt-6 max-w-[48ch] text-[16.5px] leading-[1.65] md:text-[17.5px]" style={{ color: "var(--fg-3)" }}>
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3.5">
            <Link href={primary.href} data-magnetic className="btn btn-accent justify-between">
              {primary.label} <span className="mono">→</span>
            </Link>
            {secondary && (
              <Link href={secondary.href} data-magnetic className="btn btn-outline justify-between">
                {secondary.label} <span className="mono">→</span>
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
