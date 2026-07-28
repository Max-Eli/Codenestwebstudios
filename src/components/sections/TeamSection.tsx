import Image from "next/image";
import { Reveal } from "@/components/ui/Motion";
import { team } from "@/content/site";

/** Hidden until real people are added to src/content/site.ts. */
export default function TeamSection({ eyebrow = "07 / Who you'll work with" }: { eyebrow?: string }) {
  if (team.length === 0) return null;

  return (
    <section id="team" className="section">
      <div className="container-site">
        <Reveal className="mb-13 grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]">
          <div>
            <div className="label-mono mb-4">{eyebrow}</div>
            <h2 className="heading-2">Senior people, on your project</h2>
          </div>
          <p className="max-w-[48ch] text-[16.5px] leading-relaxed" style={{ color: "var(--fg-4)" }}>
            No bait-and-switch staffing. The lead who scopes your project is the lead who ships it,
            and you have their direct line.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} index={i}>
              <div className="relative aspect-[4/5]">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="border object-cover"
                    style={{ borderColor: "var(--line-3)" }}
                  />
                ) : (
                  <div className="hatch h-full w-full">
                    <span className="mono text-[11px]" style={{ color: "var(--fg-6)" }}>
                      [ portrait ]
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4.5 text-[18px] font-semibold tracking-[-0.02em]">{m.name}</div>
              <div className="mono mt-1.5 text-[11.5px]" style={{ color: "var(--fg-5)" }}>
                {m.role}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
