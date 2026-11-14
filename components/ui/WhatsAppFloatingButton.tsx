"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";

export const WhatsAppFloatingButton: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  const message = isGujarati
    ? siteConfig.whatsapp.defaultMessageGu
    : siteConfig.whatsapp.defaultMessageEn;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover/focus */}
      <div
        className={`hidden sm:flex items-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-charcoal-border shadow-lifted text-xs font-medium text-charcoal transition-all duration-300 pointer-events-none select-none ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span>{isGujarati ? "વોટ્સએપ પર વાત કરો" : "Chat on WhatsApp"}</span>
      </div>

      {/* WhatsApp Trigger Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Coach Kaushikbhai"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lifted hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#25D366]/40"
      >
        {/* Official WhatsApp SVG Logo */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.664.747 5.158 2.052 7.288L2 30l6.907-2.022A13.916 13.916 0 0 0 16.002 30C23.723 30 30 23.723 30 16.002 30 8.28 23.723 2 16.002 2zm7.643 19.824c-.318.898-1.583 1.644-2.22 1.745-.609.096-1.39.136-4.062-.97-3.414-1.414-5.617-4.883-5.787-5.11-.167-.226-1.38-1.84-1.38-3.508 0-1.667.874-2.487 1.184-2.827.31-.338.677-.424.903-.424.226 0 .452.002.65.011.208.01.488-.079.762.58.283.68 1.018 2.487 1.107 2.67.09.183.15.397.03.636-.12.239-.18.388-.358.599-.178.212-.375.474-.536.636-.178.18-.365.375-.157.732.208.358.924 1.527 1.982 2.47 1.363 1.214 2.512 1.59 2.87 1.769.358.179.567.15.776-.09.21-.24.898-1.045 1.137-1.405.239-.36.478-.302.806-.18.328.12 2.079.98 2.437 1.16.358.18.597.27.687.424.09.15.09.873-.228 1.771z" />
        </svg>
      </a>
    </div>
  );
};

