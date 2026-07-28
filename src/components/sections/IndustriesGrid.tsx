import { Reveal } from "@/components/ui/Motion";
import { industries } from "@/content/site";

export default function IndustriesGrid() {
  return (
    <section className="section rule-top" style={{ background: "var(--bg-2)" }}>
      <div className="container-site">
        <Reveal className="mb-11 flex flex-col-reverse justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <h2 className="heading-2 max-w-[24ch]">
            Industries where we already know the vocabulary
          </h2>
          <div className="label-mono whitespace-nowrap">04 / Industries</div>
        </Reveal>

        <Reveal className="hairline-grid grid-cols-2 lg:grid-cols-4">
          {industries.map((name) => (
            <div
              key={name}
              className="hairline-cell px-6 py-7 text-[15px] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--bg)] md:text-[17px]"
              style={{ background: "var(--bg-2)" }}
            >
              {name}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
