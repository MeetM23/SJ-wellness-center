"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ShapeRosetteMandala, ShapeCurvedStar } from "@/components/ui/ShapesGallery";

export const Hero: React.FC = () => {
  const { isGujarati } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-ivory overflow-hidden">
      {/* Full-width Background Image with Warm Palette Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/hero/hero-wellness-family.jpg"
          alt="Happy multigenerational Indian family enjoying wholesome nutrition and wellness together"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[74%_center] md:object-[70%_center]"
        />
        {/* Subtle, warm gradient overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/90 sm:via-ivory/80 md:via-ivory/70 to-ivory/30 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/30" />
      </div>

      {/* Shapes Gallery Background Art */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-[1]" aria-hidden="true">
        {/* Shape 41: Rosette Mandala - Upper Left side (hidden on small mobile to keep navbar & logo pristine) */}
        <div className="absolute top-10 left-8 text-primary hidden md:block">
          <ShapeRosetteMandala className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 text-primary" opacity={0.06} />
        </div>
        {/* Shape 21: Curved Star Sparkle - Left Accent */}
        <div className="absolute bottom-16 left-6 text-[#D4A373] hidden sm:block">
          <ShapeCurvedStar className="w-16 h-16 text-[#D4A373]" opacity={0.14} />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Pill Eyebrow with Small Shapes Gallery Sparkle */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-charcoal-border/80 shadow-xs mb-6 max-w-full">
            <ShapeCurvedStar className="w-3.5 h-3.5 text-primary shrink-0" opacity={0.8} />
            <span className="text-label text-charcoal truncate">
              {isGujarati ? "સ્વસ્થ જીવન વેલનેસ સેન્ટર • જામનગર" : "Swasth Jeevan Wellness Center • Jamnagar"}
            </span>
          </div>

          {/* Hero Heading — full-width, typographically strong (36-46px) */}
          <h1 className="heading-hero mb-6">
            {isGujarati ? (
              <>
                યોગ્ય પોષણ અને સાચી જીવનશૈલીથી{" "}
                <span className="text-primary font-semibold">તંદુરસ્ત જીવનની</span> નવી શરૂઆત.
              </>
            ) : (
              <>
                Sustainable Health,{" "}
                <span className="text-primary font-semibold">Measurable</span>{" "}
                Transformations.
              </>
            )}
          </h1>

          {/* Supporting paragraph (16-18px, generous line height) */}
          <p className="text-subtitle max-w-2xl mb-8">
            {isGujarati
              ? "કઠોર ભૂખમરા કે અસ્થાયી ડાયેટ પ્લાન વિના — કોચ કૌશિકભાઈ જે. ધાંધલાના અંગત માર્ગદર્શન, સંતુલિત પોષણ અને રોજિંદી આદતો દ્વારા સાચી શારીરિક સુખાકારી અને આંતરિક ઊર્જા મેળવો."
              : "No extreme starvation or temporary crash diets. Experience lifelong vitality and visceral fat reduction through personalized nutrition, habit guidance, and 1-on-1 coaching by Coach Kaushikbhai J. Dhandhala in Jamnagar."}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="btn-primary group justify-center text-center"
            >
              <span>{isGujarati ? "કન્સલ્ટેશન શરૂ કરો" : "Book a Consultation"}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#archive"
              onClick={(e) => handleScrollTo(e, "archive")}
              className="btn-secondary justify-center text-center"
            >
              <span>{isGujarati ? "પરિણામો જુઓ" : "Explore Client Results"}</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 sm:pt-7 border-t border-charcoal-border/60 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-muted">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "૧-ઓન-૧ પ્રમાણિત માર્ગદર્શન" : "1-on-1 Dedicated Coaching"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-muted">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "સંતુલિત દૈનિક પોષણ યોજના" : "Customized Daily Nutrition"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-muted">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{isGujarati ? "કોઈ ભૂખમરો કે કડક દવાઓ નહિ" : "Zero Starvation or Harmful Pills"}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

