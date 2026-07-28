import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkCarousel from "@/components/sections/WorkCarousel";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import Testimonials from "@/components/sections/Testimonials";
import EngagementsSection from "@/components/sections/EngagementsSection";
import TeamSection from "@/components/sections/TeamSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import HomePopup from "@/components/sections/HomePopup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <ServicesGrid />
        <ProcessSection />
        <WorkCarousel />
        <IndustriesGrid />
        <Testimonials />
        <EngagementsSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <HomePopup />
    </>
  );
}
