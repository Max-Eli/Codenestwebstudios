import { Reveal, CountUp } from "@/components/ui/Motion";
import { stats } from "@/content/site";

/** Hidden until real figures are added to src/content/site.ts. */
export default function StatsBand() {
  if (stats.length === 0) return null;

  return (
    <section className="section">
      <div className="container-site">
        <div className="hairline-grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="hairline-cell px-6 py-8 md:px-8 md:py-10" style={{ background: "var(--bg)" }}>
              <div className="stat-figure">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="label-muted mt-3.5">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
