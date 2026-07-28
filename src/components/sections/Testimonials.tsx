import { Reveal } from "@/components/ui/Motion";
import { testimonials } from "@/content/site";

/**
 * Hidden until real, permissioned client quotes exist in src/content/site.ts.
 * See the note at the top of that file on why invented ones were not shipped.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section">
      <div className="container-site">
        <Reveal className="label-mono mb-11">05 / What clients say</Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              as="figure"
              index={i}
              className="m-0 flex flex-col justify-between gap-8 border px-8 py-9"
              style={{ borderColor: "var(--line-3)", background: "var(--bg-2)" }}
            >
              <blockquote className="m-0 text-[19px] leading-[1.55] tracking-[-0.015em]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                className="mono text-[11.5px] uppercase tracking-[0.08em]"
                style={{ color: "var(--fg-5)" }}
              >
                {t.author}
                <br />
                <span style={{ color: "var(--fg-6)" }}>{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
