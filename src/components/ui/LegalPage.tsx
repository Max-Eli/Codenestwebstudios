import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp, DrawLine } from "@/components/ui/Motion";
import AnimatedSections from "@/components/ui/AnimatedSections";
import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-14" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <FadeUp>
              <p className="label mb-4">Legal</p>
              <h1 className="heading-xl text-snow">{title}</h1>
              <p className="text-sm mt-3" style={{ color: "#444444" }}>Last updated: {lastUpdated}</p>
            </FadeUp>
          </div>
        </section>

        <section className="pb-24" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <DrawLine />
            <div className="max-w-2xl pt-4 prose-content">
              <AnimatedSections>{children}</AnimatedSections>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
