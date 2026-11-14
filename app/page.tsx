import React from "react";
import { Hero } from "@/components/sections/Hero";
import { WellnessApproach } from "@/components/sections/WellnessApproach";
import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WellnessApproach />
      <TransformationShowcase />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
}

