"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ShapeRosetteMandala } from "@/components/ui/ShapesGallery";

export const FAQSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-01");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-charcoal-border/40">
      {/* Subtle background decoration */}
      <div className="absolute bottom-6 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeRosetteMandala className="w-56 h-56 text-primary" opacity={0.03} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isGujarati ? "સામાન્ય પ્રશ્નોત્તરી" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="heading-section mt-1">
            {isGujarati ? "તમારા મનમાં ઉદ્ભવતા પ્રશ્નોના જવાબો" : "Clear Answers to Common Questions"}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "વેલનેસ પ્રોગ્રામ, આહાર શૈલી અને ૧-ઓન-૧ કોચિંગ પદ્ધતિ વિશે જરૂરી તમામ માહિતી અહીં મેળવો."
              : "Everything you need to know about starting your sustainable wellness journey with Coach Kaushikbhai at Swasth Jeevan Wellness Center."}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-charcoal-border/80 bg-ivory/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sans font-semibold text-charcoal hover:text-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] sm:text-[17px] leading-snug">
                    {isGujarati ? item.questionGujarati : item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-charcoal-muted text-[15px] sm:text-[16px] leading-relaxed border-t border-charcoal-border/50 pt-4">
                    {isGujarati ? item.answerGujarati : item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

