"use client";

import React from "react";
import { siteConfig } from "@/data/siteData";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, MapPin, ArrowUp, Mail } from "lucide-react";
import { ShapeRosetteMandala } from "@/components/ui/ShapesGallery";

export const Footer: React.FC = () => {
  const { isGujarati } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-ivory py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Vector */}
      <div className="absolute -bottom-12 -right-8 text-white pointer-events-none select-none" aria-hidden="true">
        <ShapeRosetteMandala className="w-56 h-56 text-white" opacity={0.03} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Logo & Coach Identity */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" size="sm" />
            
            <p className="text-sage-light text-[14px] sm:text-[15px] max-w-sm font-sans leading-relaxed">
              {isGujarati
                ? "સ્વસ્થ જીવન વેલનેસ સેન્ટર (ફિટનેસ • પોષણ • આનંદ) – યોગ્ય પોષણ, સ્વસ્થ જીવનશૈલી અને સકારાત્મક માર્ગદર્શન દ્વારા કાયમી સુખાકારી લાવવા માટે સમર્પિત."
                : "Swasth Jeevan Wellness Center (Fitness • Nutrition • Joy) – Dedicated to inspiring vibrant, healthy living through personalized nutrition, sustainable lifestyle habits, and direct 1-on-1 mentorship in Jamnagar."}
            </p>

            <div className="pt-1">
              <span className="text-label !text-[11px] text-terracotta-light block">
                {isGujarati ? "પ્રમાણિત વેલનેસ કોચ" : "Certified Wellness Coach"}
              </span>
              <span className="text-sm font-sans font-medium text-white block mt-0.5">
                {isGujarati ? siteConfig.coachNameGujarati : siteConfig.coachName}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-light font-sans block mb-4">
              {isGujarati ? "ઝડપી લિંક્સ" : "Quick Links"}
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-ivory/80 hover:text-white transition-colors"
                  >
                    {isGujarati ? item.gujaratiLabel : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Center Location */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-sage-light font-sans block mb-4">
              {isGujarati ? "કેન્દ્ર સંપર્ક" : "Connect With Us"}
            </span>
            
            <div className="space-y-3 text-sm font-sans text-ivory/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-light shrink-0 mt-1" />
                <span>{isGujarati ? siteConfig.location.addressGujarati : siteConfig.location.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-light shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-light shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                    isGujarati ? siteConfig.whatsapp.defaultMessageGu : siteConfig.whatsapp.defaultMessageEn
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isGujarati ? "વોટ્સએપ પર વાત કરો" : "Chat on WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal Disclaimer & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-light/70 font-sans">
          <p>
            © {new Date().getFullYear()} {isGujarati ? siteConfig.nameGujarati : siteConfig.name}.{" "}
            {isGujarati ? "સર્વાધિકાર સુરક્ષિત." : "All rights reserved."}
          </p>

          <p className="text-center sm:text-right max-w-md text-[11px] text-sage-light/50">
            {isGujarati
              ? "*પરિણામો વ્યક્તિગત સાતત્ય અને શારીરિક સ્થિતિ મુજબ અલગ હોઈ શકે છે. આ આહાર માર્ગદર્શન તબીબી સારવારનો વિકલ્પ નથી."
              : "*Individual results may vary based on personal consistency. Wellness coaching does not replace professional medical advice."}
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

