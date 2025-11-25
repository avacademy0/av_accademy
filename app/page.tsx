import FAQSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import ServicesAccordion from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="h-10 lg:h-18" />
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 lg:px-8">
        <Hero />
        <ServicesAccordion />
        <TeamSection />
        <FAQSection />
        <WorkSection />
        <TestimonialsSection />
      </div>
      <FooterSection />
    </main>
  );
}
