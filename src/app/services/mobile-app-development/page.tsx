import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import PageHeader from "@/components/ui/PageHeader";
import ServiceGraphic from "@/components/ui/ServiceGraphic";
import { FadeUp, Stagger, StaggerItem, DrawLine, SlideIn } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description: "iOS and Android apps built with React Native for native performance.",
};

export default function MobileAppPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Service"
          title="Mobile Apps"
          subtitle="iOS and Android — one codebase, native performance, shipped to both stores."
          backHref="/services"
          backLabel="All Services"
          graphic={<ServiceGraphic variant="mobile" />}
        />

        <section className="py-10 border-y" style={{ background: "#111111", borderColor: "#1A1A1A" }}>
          <div className="container-site">
            <div className="flex flex-wrap gap-2">
              {["React Native", "Expo", "TypeScript", "iOS (Swift)", "Android (Kotlin)", "Firebase", "Supabase", "RevenueCat", "Fastlane", "App Store Connect"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-md border" style={{ color: "#555555", borderColor: "#1A1A1A", background: "#0C0C0C" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#0C0C0C" }}>
          <div className="container-site">
            <FadeUp className="mb-12">
              <p className="label mb-3">Scope</p>
              <h2 className="heading-lg text-snow">What we build</h2>
            </FadeUp>
            <DrawLine />
            <Stagger>
              {[
                { title: "Consumer Apps", desc: "Polished iOS & Android apps with smooth animations, intuitive UX, and the details that drive App Store ratings above 4.7." },
                { title: "Enterprise Mobile", desc: "Internal tools and field apps with SSO, offline data sync, and MDM compatibility." },
                { title: "In-App Purchases", desc: "Subscriptions, one-time purchases, and freemium models via RevenueCat — with App Store and Play Store compliance built in." },
                { title: "Push Notifications", desc: "Engagement-driving notifications via Expo or OneSignal, with deep linking to the right in-app screen." },
                { title: "App Store Launch", desc: "Screenshots, metadata, review submission, and handling rejection responses so you don't have to navigate it alone." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="py-8 border-b grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: "#1A1A1A" }}>
                    <h3 className="heading-sm text-snow">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section" style={{ background: "#111111" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <SlideIn direction="left">
                <p className="label mb-4">The React Native advantage</p>
                <h2 className="heading-lg text-snow mb-6">One codebase, two platforms</h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#666666" }}>
                  React Native shares ~80% of code between iOS and Android, cutting development cost roughly in half compared to native development. It&apos;s used in production by Facebook, Shopify, Coinbase, and Discord.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "~60% lower build cost vs. native",
                    "Shared codebase with your web app",
                    "Hot reload for faster iteration",
                    "Access to full native device APIs",
                    "Strong ecosystem — 60,000+ packages",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm" style={{ color: "#666666" }}>
                      <span className="text-xs flex-shrink-0" style={{ color: "#7EB8D4" }}>→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </SlideIn>
              <SlideIn direction="right">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: "2×", l: "Faster to market vs native" },
                    { n: "4.9★", l: "Average app rating delivered" },
                    { n: "15+", l: "Apps shipped to both stores" },
                    { n: "100%", l: "App Store approval rate" },
                  ].map(({ n, l }) => (
                    <div key={l} className="rounded-xl p-6 border" style={{ background: "#0C0C0C", borderColor: "#1A1A1A" }}>
                      <p className="font-display text-2xl font-semibold mb-1.5" style={{ color: "#7EB8D4", letterSpacing: "-0.02em" }}>{n}</p>
                      <p className="text-sm" style={{ color: "#555555" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
