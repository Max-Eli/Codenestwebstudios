import type { ReactNode } from "react";
import ParticleField from "@/components/ui/ParticleField";
import { Reveal } from "@/components/ui/Motion";

/** The inner-page header from the design: eyebrow, oversized title, lede, optional chip row. */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-[90px] md:pt-[150px]">
      <ParticleField canvasOpacity={0.8} fadeFrom="50%" />

      <div className="container-site relative">
        <Reveal className="label-mono mb-7">{eyebrow}</Reveal>
        <Reveal as="h1" index={1} className="display-1 max-w-[20ch]">
          {title}
        </Reveal>
        {lede && (
          <Reveal as="p" index={2} className="lede mt-8 max-w-[56ch]">
            {lede}
          </Reveal>
        )}
        {children && (
          <Reveal index={3} className="mt-11">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
