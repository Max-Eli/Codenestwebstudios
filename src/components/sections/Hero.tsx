import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParticleField from "@/components/ui/ParticleField";
import { Reveal, Parallax } from "@/components/ui/Motion";
import { site, stack, hasWork } from "@/content/site";

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[100svh] items-center overflow-hidden px-0 pb-20 pt-32 md:pb-24 md:pt-[150px]"
      >
        <ParticleField />

        <div className="container-site relative">
          <Reveal className="label-mono mb-8 flex items-center gap-3">
            <span
              aria-hidden
              className="block h-[7px] w-[7px] flex-shrink-0 animate-pulse-dot rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Custom software studio
          </Reveal>

          <Parallax rate={0.06}>
            <Reveal as="h1" index={1} className="display-1 max-w-[17.5ch]">
              Software built around how your business actually works.
            </Reveal>
          </Parallax>

          <Reveal as="p" index={2} className="lede mt-9 max-w-[57ch]">
            {site.description}
          </Reveal>

          <Reveal index={3} className="mt-11 flex flex-wrap gap-3.5">
            <Link href="/contact" data-magnetic className="btn btn-accent">
              Get an estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            {/* Points at Work only when there is work to see. */}
            <Link
              href={hasWork ? "/work" : "/services"}
              data-magnetic
              className="btn btn-outline"
            >
              {hasWork ? "See recent work" : "See what we build"}
            </Link>
          </Reveal>

          <Reveal
            index={4}
            className="mono mt-16 flex flex-wrap gap-x-9 gap-y-3 border-t pt-7 text-[11.5px] uppercase tracking-[0.08em]"
            style={{ borderColor: "var(--line)", color: "var(--fg-5)" }}
          >
            {site.heroFacts.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tech marquee */}
      <div
        className="overflow-hidden border-y py-5"
        style={{ background: "var(--bg-2)", borderColor: "rgba(255,255,255,0.07)" }}
        aria-hidden
      >
        <div className="mono flex w-max animate-marquee text-[12.5px] uppercase tracking-[0.1em]" style={{ color: "var(--fg-6)" }}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-11 pr-11">
              {stack.map((t, i) => (
                <span key={`${dup}-${t}`} className="flex items-center gap-11">
                  {t}
                  {i < stack.length - 1 && <span style={{ color: "var(--accent)" }}>/</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
