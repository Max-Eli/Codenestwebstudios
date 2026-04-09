"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid #1A1A1A" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <span
                className="font-display font-semibold text-base tracking-tight text-snow transition-opacity group-hover:opacity-80"
                style={{ letterSpacing: "-0.02em" }}
              >
                Codenest
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0 mt-0.5" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm transition-colors rounded-md group"
                  style={{
                    color: isActive(item.href) ? "#F5F5F3" : "#888888",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href))
                      (e.currentTarget as HTMLElement).style.color = "#7EB8D4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isActive(item.href) ? "#F5F5F3" : "#888888";
                  }}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex">
              <Link href="/contact" className="btn btn-dark text-sm">
                Start a project
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 text-ink-6 hover:text-snow transition-colors"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b"
            style={{ background: "#111111", borderColor: "#1A1A1A" }}
          >
            <nav className="container-site py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-2 text-sm border-b"
                  style={{
                    color: isActive(item.href) ? "#F5F5F3" : "#888888",
                    borderColor: "#1A1A1A",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link href="/contact" className="btn btn-dark w-full justify-center">
                  Start a project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
