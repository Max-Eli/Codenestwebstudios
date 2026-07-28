import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what's slowing you down. You'll get a real reply from an engineer within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <ContactSection eyebrow="Contact" />
      </main>
      <Footer />
    </>
  );
}
