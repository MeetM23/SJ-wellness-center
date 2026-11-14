"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowUpRight, Globe, Phone } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isGujarati, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs py-2 sm:py-2.5 border-b border-charcoal-border/80"
          : "bg-white/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none py-2.5 sm:py-3.5 border-b border-charcoal-border/40 sm:border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Identity */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[15px] font-sans font-medium text-charcoal hover:text-primary transition-colors py-1 relative group"
              >
                <span>{isGujarati ? item.gujaratiLabel : item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium text-charcoal bg-white/80 hover:bg-white border border-charcoal-border/80 transition-all shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>{isGujarati ? "English" : "ગુજરાતી"}</span>
            </button>

            {/* Book Consultation Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary !py-2.5 !px-5 !text-xs !min-h-[40px] gap-1.5 shadow-xs"
            >
              <span>{isGujarati ? "કન્સલ્ટેશન બુક કરો" : "Book Consultation"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[13px] sm:text-sm font-sans font-medium text-charcoal bg-white border border-charcoal-border/80 shadow-xs active:bg-ivory shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span className="font-semibold">{isGujarati ? "EN" : "ગુજ"}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-charcoal hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-charcoal-border shadow-lifted animate-in fade-in duration-200">
          <div className="max-w-[1200px] mx-auto px-4 pt-3 pb-6 space-y-2">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 rounded-xl text-base font-sans font-medium text-charcoal hover:bg-sage-soft hover:text-primary transition-colors"
              >
                {isGujarati ? item.gujaratiLabel : item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-charcoal-border/50 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary w-full justify-center gap-2 !min-h-[48px] text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{siteConfig.phoneFormatted}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary w-full justify-center !min-h-[48px] text-sm"
              >
                <span>{isGujarati ? "કન્સલ્ટેશન શરૂ કરો" : "Book Free Consultation"}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

