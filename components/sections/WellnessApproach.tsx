"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, HeartPulse, Sparkles, ShieldCheck } from "lucide-react";
import { ShapeRosetteMandala, ShapeCurvedStar } from "@/components/ui/ShapesGallery";

export const WellnessApproach: React.FC = () => {
  const { isGujarati } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: Scale,
      title: "Routine & Metabolic Assessment",
      gujaratiTitle: "દિનચર્યા અને સ્વાસ્થ્ય મૂલ્યાંકન",
      desc: "We analyze your existing daily schedule, sleep cycles, water habits, physical activity, and persistent fatigue points to understand your body's baseline.",
      gujaratiDesc: "તમારી રોજિંદી જીવનશૈલી, ઊંઘ, પાણી પીવાની આદતો અને શારીરિક થાકના કારણોનું ઊંડાણપૂર્વક વિશ્લેષણ કરવામાં આવે છે.",
    },
    {
      num: "02",
      icon: HeartPulse,
      title: "Personalized Nutrition Architecture",
      gujaratiTitle: "વ્યક્તિગત સંતુલિત આહાર આયોજન",
      desc: "Developing a wholesome meal structure focused on balanced macros and cellular nourishment. No harsh starvation, no skipping regular family meals.",
      gujaratiDesc: "કુટુંબ સાથે નિયમિત ભોજન લેતા લેતા યોગ્ય પોષક તત્વો અને કેલરી સંતુલન શીખવાની સહજ અને વૈજ્ઞાનિક પદ્ધતિ.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Daily Hydration & Wellness Habits",
      gujaratiTitle: "દૈનિક પાણી અને સકારાત્મક આદતો",
      desc: "Introducing essential daily rituals—optimal water intake timing, mindful chewing, and stress moderation that make healthy living feel effortless.",
      gujaratiDesc: "શરીરની જરૂરિયાત મુજબ યોગ્ય સમયે પૂરતું પાણી પીવું, સમયસર ભોજન અને સરળ આદતો જે જીવનને હંમેશા સ્ફૂર્તિવાન રાખે છે.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "1-on-1 Mentorship & Weekly Reviews",
      gujaratiTitle: "સાતત્યપૂર્ણ અંગત માર્ગદર્શન",
      desc: "Weekly progress checks, inches tracking, and constant motivation directly from Coach Kaushikbhai to ensure lasting, sustainable outcomes.",
      gujaratiDesc: "દર અઠવાડિયે પરિણામોની સમીક્ષા, વજન અને ઇંચની ચકાસણી તથા કોચ કૌશિકભાઈનું સીધું પ્રેરણાદાયી માર્ગદર્શન.",
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-charcoal-border/40">
      {/* Shapes Gallery Background Art */}
      <div className="absolute top-12 right-8 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeRosetteMandala className="w-64 h-64 text-primary" opacity={0.04} />
      </div>
      <div className="absolute bottom-10 left-8 text-[#D4A373] pointer-events-none hidden sm:block" aria-hidden="true">
        <ShapeCurvedStar className="w-20 h-20 text-[#D4A373]" opacity={0.08} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "અમારી વૈજ્ઞાનિક પદ્ધતિ" : "Holistic Methodology"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                કઠોર ડાયેટિંગ વગર,{" "}
                <span className="text-primary font-semibold">કાયમી સુખાકારીનો માર્ગ.</span>
              </>
            ) : (
              <>
                A Sustainable Path to{" "}
                <span className="text-primary font-semibold">Lifelong Vitality.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "અમે કોઈ અવાસ્તવિક વાયદા કરતા નથી. સાચી આદતો અને સંતુલિત પોષણ દ્વારા શરીરમાં કુદરતી શક્તિ અને ઉત્સાહ લાવવાનો આ સરળ ક્રમ છે."
              : "We reject short-term crash diets. Our four-step methodology builds healthy metabolic habits, steady energy, and sustainable fat loss."}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-2xl bg-ivory border border-charcoal-border/70 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 tracking-wider">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>

                  <h3 className="heading-card text-charcoal mb-2.5">
                    {isGujarati ? step.gujaratiTitle : step.title}
                  </h3>

                  <p className="text-body text-[14px] leading-relaxed">
                    {isGujarati ? step.gujaratiDesc : step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

