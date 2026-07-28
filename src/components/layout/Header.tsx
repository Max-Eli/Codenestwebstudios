"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Engagements", href: "/engagements" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export function Wordmark({ size = 13 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="block flex-shrink-0 rotate-45"
        style={{ width: size, height: size, background: "var(--accent)" }}
      />
      <span
        className="font-semibold tracking-tight"
        style={{ fontSize: size + 4, letterSpacing: "-0.02em" }}
      >
        {site.shortName}
      </span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Keep the page behind the mobile sheet from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[900] transition-[background,border-color] duration-300"
        style={{
          background: scrolled
            ? "rgba(8,9,11,0.9)"
            : "linear-gradient(180deg, rgba(8,9,11,0.92), rgba(8,9,11,0))",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        }}
      >
        <div className="container-site flex h-[68px] items-center justify-between">
          <Link href="/" aria-label={`${site.name} — home`}>
            <Wordmark />
          </Link>

          <nav className="mono hidden items-center gap-7 text-[11.5px] uppercase tracking-[0.09em] lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-magnetic
                className="transition-colors duration-200"
                style={{ color: isActive(item.href) ? "var(--accent-bright)" : "var(--fg-4)" }}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" data-magnetic className="btn btn-accent-outline">
              Get an estimate
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 p-2 lg:hidden"
            style={{ color: "var(--fg-3)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 top-[68px] z-[899] lg:hidden"
          style={{ background: "var(--bg)" }}
        >
          <nav className="container-site flex flex-col pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b py-5 text-lg"
                style={{
                  borderColor: "var(--line-3)",
                  color: isActive(item.href) ? "var(--accent-bright)" : "var(--fg)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-accent mt-8 justify-center">
              Get an estimate
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
