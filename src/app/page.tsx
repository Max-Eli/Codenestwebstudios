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
import { caseStudies, testimonials, team, insights } from "@/content/site";

/**
 * Section numbers are counted at render rather than hardcoded.
 *
 * Four sections hide themselves when their content is empty, and with fixed
 * labels the page counted 01, 02, 04, 06, 08, 10 — visibly skipping. This walks
 * the sections that will actually render and numbers them contiguously, so the
 * sequence stays correct both now and as content gets filled in.
 */
function numbering() {
  let i = 0;
  const next = () => String(++i).padStart(2, "0");
  return {
    services: next(),
    process: next(),
    work: caseStudies.length > 0 ? next() : undefined,
    industries: next(),
    testimonials: testimonials.length > 0 ? next() : undefined,
    engagements: next(),
    team: team.length > 0 ? next() : undefined,
    faq: next(),
    insights: insights.length > 0 ? next() : undefined,
    contact: next(),
  };
}

export default function Home() {
  const n = numbering();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <ServicesGrid num={n.services} />
        <ProcessSection num={n.process} />
        <WorkCarousel num={n.work} />
        <IndustriesGrid num={n.industries} />
        <Testimonials num={n.testimonials} />
        <EngagementsSection eyebrow={`${n.engagements} / Engagements`} />
        <TeamSection eyebrow={`${n.team} / Who you'll work with`} />
        <FaqSection num={n.faq} insightsNum={n.insights} />
        <ContactSection eyebrow={`${n.contact} / Start here`} />
      </main>
      <Footer />
      <HomePopup />
    </>
  );
}
