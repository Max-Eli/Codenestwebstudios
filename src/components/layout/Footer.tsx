import Link from "next/link";
import { DrawLine } from "@/components/ui/Motion";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-3" style={{ background: "#0C0C0C" }}>
      <div className="container-site">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-5 group"
            >
              <span
                className="font-display font-semibold text-base text-snow group-hover:opacity-70 transition-opacity"
                style={{ letterSpacing: "-0.02em" }}
              >
                Codenest
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0 mt-0.5" />
            </Link>
            <p className="text-sm leading-relaxed max-w-[220px] text-ink-5">
              Web, mobile & custom software for ambitious businesses.
            </p>
            <a
              href="mailto:hello@codenestwebstudios.com"
              className="mt-5 block text-sm text-ink-5 hover:text-snow-2 transition-colors"
            >
              hello@codenestwebstudios.com
            </a>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="label mb-4">{col.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-5 hover:text-snow-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <DrawLine />

        <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-ink-4">
            © {new Date().getFullYear()} Codenest Web Studios
          </p>
          <p className="text-sm text-ink-4">
            Remote-first · Serving clients worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
