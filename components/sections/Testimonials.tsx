"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Quote, Sparkles } from "lucide-react";
import { ShapeRosetteMandala } from "@/components/ui/ShapesGallery";

export const Testimonials: React.FC = () => {
  const { isGujarati } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-ivory relative overflow-hidden border-b border-charcoal-border/40">
      {/* Shapes Gallery Background Art */}
      <div className="absolute top-10 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeRosetteMandala className="w-48 h-48 text-primary" opacity={0.06} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "વાસ્તવિક પ્રતિસાદ" : "Client Voices"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                વિશ્વાસ અને સાતત્યથી{" "}
                <span className="text-primary font-semibold">સફળ થયેલા અનુભવો</span>
              </>
            ) : (
              <>
                Transformations Grounded in{" "}
                <span className="text-primary font-semibold">Trust & Consistency.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "અમારા ક્લાયન્ટ્સના શબ્દો જે દર્શાવે છે કે યોગ્ય પોષણ અને સાચી આદતોથી જીવનમાં કેવું કાયમી સકારાત્મક પરિવર્તન આવી શકે છે."
              : "Read real stories of individuals who reclaimed their physical stamina, reduced waist fat, and embraced healthy habits through structured mentorship."}
          </p>
        </div>

        {/* Testimonials 2x2 Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-sage stroke-[1.5]" />
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.verifiedResult}</span>
                  </span>
                </div>
                <p className="font-sans text-charcoal text-[15px] sm:text-[16px] leading-relaxed italic mb-6 font-normal">
                  “{isGujarati ? item.gujaratiQuote : item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-border/50">
                <h4 className="font-sans font-semibold text-charcoal text-[15px] sm:text-[16px]">
                  {isGujarati ? item.gujaratiClientName : item.clientName}
                </h4>
                <p className="text-[13px] font-sans text-charcoal-muted font-normal mt-0.5">
                  {item.location} • <span className="font-medium text-primary">{isGujarati ? item.gujaratiTransformationType : item.transformationType}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
