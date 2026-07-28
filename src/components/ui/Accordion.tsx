/**
 * Native <details>/<summary> accordion. Keyboard operable and announced
 * correctly by screen readers without any JS, unlike the mockup's div+onClick.
 */
export default function Accordion({
  items,
  size = "sm",
}: {
  items: readonly { q: string; a: string }[];
  size?: "sm" | "lg";
}) {
  const big = size === "lg";
  return (
    <div className="flex flex-col">
      {items.map((f, i) => (
        <details
          key={f.q}
          className="group"
          style={{
            borderTop: big ? "1px solid var(--line-3)" : undefined,
            borderBottom:
              !big || i === items.length - 1 ? "1px solid var(--line-3)" : undefined,
          }}
        >
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-5 font-medium tracking-[-0.015em] marker:content-none ${
              big ? "py-7 text-[17px] md:text-[19px]" : "py-6 text-[17px] md:text-[18px]"
            }`}
          >
            <span>{f.q}</span>
            <span
              aria-hidden
              className="mono flex-shrink-0 select-none transition-transform duration-200 group-open:rotate-45"
              style={{ color: "var(--accent)" }}
            >
              +
            </span>
          </summary>
          <p
            className={`mb-7 mt-0 leading-relaxed ${
              big ? "max-w-[62ch] text-base" : "max-w-[52ch] text-[15.5px]"
            }`}
            style={{ color: "var(--fg-4)" }}
          >
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
