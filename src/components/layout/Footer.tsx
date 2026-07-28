import Link from "next/link";
import { site } from "@/content/site";
import { Wordmark } from "./Header";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Engagements", href: "/engagements" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="rule-top" style={{ background: "var(--bg-2)" }}>
      <div className="container-site py-14">
        <div className="mono flex flex-wrap items-center justify-between gap-x-8 gap-y-7 text-[11.5px] uppercase tracking-[0.08em]">
          <Link href="/" style={{ color: "var(--fg)" }} aria-label={`${site.name} — home`}>
            <Wordmark size={11} />
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" style={{ color: "var(--fg-5)" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-[var(--accent-bright)]">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mono mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t pt-7 text-[11.5px] uppercase tracking-[0.08em]"
          style={{ borderColor: "var(--line)", color: "var(--fg-6)" }}
        >
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="normal-case tracking-normal transition-colors hover:text-[var(--accent-bright)]"
          >
            {site.email}
          </a>
          <nav className="flex gap-6">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-[var(--accent-bright)]">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
