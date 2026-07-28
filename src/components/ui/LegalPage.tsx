import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Motion";

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <section className="pb-14 pt-32 md:pt-[150px]">
          <div className="container-site">
            <Reveal className="label-mono mb-6">Legal</Reveal>
            <Reveal as="h1" index={1} className="display-2 max-w-[18ch]">
              {title}
            </Reveal>
            <Reveal as="p" index={2} className="mono mt-6 text-[11.5px] uppercase tracking-[0.09em]" style={{ color: "var(--fg-5)" }}>
              Last updated: {lastUpdated}
            </Reveal>
          </div>
        </section>

        <section className="section rule-top">
          <div className="container-site">
            <div className="prose-content max-w-[68ch]">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
