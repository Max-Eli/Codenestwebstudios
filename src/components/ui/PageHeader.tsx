import { type ReactNode } from "react";
import { FadeUp } from "@/components/ui/Motion";
import Link from "next/link";

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  graphic?: ReactNode;
}

export default function PageHeader({ label, title, subtitle, backHref, backLabel, graphic }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16" style={{ background: "#0C0C0C" }}>
      <div className="container-site">
        <div className={graphic ? "grid grid-cols-1 lg:grid-cols-[1fr_440px] items-center gap-8" : ""}>
          <FadeUp>
            {backHref && (
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm mb-8 text-ink-5 hover:text-blue transition-colors"
              >
                ← {backLabel ?? "Back"}
              </Link>
            )}
            {label && <p className="label mb-4">{label}</p>}
            <h1 className="heading-xl text-snow max-w-2xl">{title}</h1>
            {subtitle && (
              <p className="text-lg leading-relaxed mt-4 max-w-xl" style={{ color: "#666666" }}>
                {subtitle}
              </p>
            )}
          </FadeUp>

          {graphic && (
            <div className="hidden lg:flex items-center justify-end">
              {graphic}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
