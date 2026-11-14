"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import { ShapeRosetteMandala, ShapeCurvedStar } from "@/components/ui/ShapesGallery";

export const ContactSection: React.FC = () => {
  const { isGujarati } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    goal: "weight-loss",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const goalMap: Record<string, string> = {
      "weight-loss": isGujarati ? "વજન અને ફેટ લોસ" : "Weight & Fat Loss",
      "energy": isGujarati ? "દૈનિક સ્ફૂર્તિ અને સ્ટેમિના" : "Daily Energy & Stamina",
      "digestion": isGujarati ? "પાચન અને આંતરિક સુખાકારી" : "Digestion & Vitality",
      "lifestyle": isGujarati ? "કાયમી સ્વસ્થ જીવનશૈલી" : "Healthy Family Habits",
    };

    const text = isGujarati
      ? `નમસ્તે કોચ કૌશિકભાઈ,\nહું સ્વસ્થ જીવન વેલનેસ સેન્ટર પરથી ફ્રી કન્સલ્ટેશન માટે સંપર્ક કરી રહ્યો છું.\n\nનામ: ${formData.name}\nમોબાઈલ: ${formData.phone}\nગામ/વિસ્તાર: ${formData.city || "જામનગર"}\nલક્ષ્ય: ${goalMap[formData.goal] || formData.goal}\nવિગત: ${formData.note || "માર્ગદર્શન આપવા વિનંતી."}`
      : `Hello Coach Kaushikbhai,\nI would like to book a 1-on-1 wellness consultation with Swasth Jeevan Wellness Center.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city || "Jamnagar"}\nPrimary Goal: ${goalMap[formData.goal] || formData.goal}\nMessage: ${formData.note || "Looking forward to guidance."}`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encoded}`;
    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeRosetteMandala className="w-56 h-56 text-primary" opacity={0.04} />
      </div>
      <div className="absolute bottom-10 left-6 text-[#D4A373] pointer-events-none hidden sm:block" aria-hidden="true">
        <ShapeCurvedStar className="w-20 h-20 text-[#D4A373]" opacity={0.08} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-label text-terracotta">
            {isGujarati ? "સંપર્ક કરો" : "Get In Touch"}
          </span>
          <h2 className="heading-section mt-2">
            {isGujarati ? (
              <>
                તંદુરસ્ત જીવનની નવી શરૂઆત{" "}
                <span className="text-primary font-semibold">આજે જ કરો.</span>
              </>
            ) : (
              <>
                Take the First Step Toward{" "}
                <span className="text-primary font-semibold">Lifelong Vitality.</span>
              </>
            )}
          </h2>
          <p className="text-subtitle mt-3">
            {isGujarati
              ? "તમારા સ્વાસ્થ્ય લક્ષ્યોની ચર્ચા કરવા માટે કોચ કૌશિકભાઈ સાથે સીધો સંપર્ક કરો. કોઈ દબાણ કે કડક દવાઓ વિના ૧-ઓન-૧ સાચું માર્ગદર્શન."
              : "Connect directly with Coach Kaushikbhai J. Dhandhala to evaluate your lifestyle and discuss tailored wellness goals in Jamnagar."}
          </p>
        </div>

        {/* 2-Column Content: Left Contact Cards, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                isGujarati ? siteConfig.whatsapp.defaultMessageGu : siteConfig.whatsapp.defaultMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-center gap-4 group hover:border-primary/50 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "વોટ્સએપ ચેટ" : "Direct WhatsApp"}
                </span>
                <span className="text-base sm:text-lg font-semibold text-charcoal font-sans block mt-0.5">
                  {siteConfig.phoneFormatted}
                </span>
                <span className="text-xs text-primary font-medium mt-0.5 inline-block">
                  {isGujarati ? "ત્વરિત ઉત્તર માટે ક્લિક કરો →" : "Click to chat directly →"}
                </span>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-center gap-4 group hover:border-primary/50 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "કોલ દ્વારા સંપર્ક" : "Direct Call"}
                </span>
                <span className="text-base sm:text-lg font-semibold text-charcoal font-sans block mt-0.5">
                  {siteConfig.phoneFormatted}
                </span>
                <span className="text-xs text-charcoal-muted mt-0.5 block">
                  {isGujarati ? "કોચ કૌશિકભાઈ જે. ધાંધલા" : "Coach Kaushikbhai J. Dhandhala"}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-center gap-4 group hover:border-primary/50 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "ઈમેઈલ સંપર્ક" : "Email Inquiries"}
                </span>
                <span className="text-sm sm:text-base font-semibold text-charcoal font-sans block mt-0.5 break-all">
                  {siteConfig.email}
                </span>
              </div>
            </a>

            {/* Location & Center Card */}
            <div className="p-6 rounded-2xl bg-white border border-charcoal-border/80 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sage-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider block">
                  {isGujarati ? "સેન્ટરનું સરનામું" : "Center Address"}
                </span>
                <p className="text-sm font-semibold text-charcoal font-sans mt-1 leading-snug">
                  {isGujarati ? siteConfig.location.addressGujarati : siteConfig.location.address}
                </p>
                <div className="mt-2 text-xs text-charcoal-muted flex items-center gap-2">
                  <span>{isGujarati ? siteConfig.location.landmarkGujarati : siteConfig.location.landmark}</span>
                  <span>•</span>
                  <span>{isGujarati ? siteConfig.location.cityGujarati : siteConfig.location.city}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-charcoal-border/80 shadow-soft">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
                  {isGujarati ? "૧-ઓન-૧ કન્સલ્ટેશન" : "1-on-1 Consultation"}
                </span>
                <h3 className="heading-card text-charcoal text-xl mt-3">
                  {isGujarati ? "તમારી વિગતો મોકલો" : "Book Your Free Wellness Assessment"}
                </h3>
                <p className="text-sm text-charcoal-muted mt-1 font-light">
                  {isGujarati
                    ? "વિગતો ભર્યા પછી સીધો વોટ્સએપ પર કોચ સાથે સંવાદ શરૂ થશે."
                    : "Fill in the details below to connect with Coach Kaushikbhai directly via WhatsApp."}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto" />
                  <h4 className="text-base font-semibold text-charcoal">
                    {isGujarati ? "વોટ્સએપ ખોલાઈ રહ્યું છે..." : "Opening WhatsApp..."}
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    {isGujarati
                      ? "જો વોટ્સએપ આપમેળે ન ખૂલે, તો ઉપર આપેલા બટન પર ક્લિક કરો."
                      : "If WhatsApp didn't open automatically, please click the direct WhatsApp button on the left."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "તમારું પૂરું નામ *" : "Your Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isGujarati ? "દા.ત. રમેશભાઈ પટેલ" : "e.g. Rajesh Kumar"}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-ivory/50 text-charcoal placeholder:text-charcoal-muted/50 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "મોબાઈલ નંબર *" : "Mobile Number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isGujarati ? "૧૦ અંકનો નંબર" : "10-digit number"}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-ivory/50 text-charcoal placeholder:text-charcoal-muted/50 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "ગામ અથવા શહેર" : "City / Area"}
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={isGujarati ? "દા.ત. જામનગર" : "e.g. Jamnagar"}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-ivory/50 text-charcoal placeholder:text-charcoal-muted/50 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        {isGujarati ? "તમારું મુખ્ય લક્ષ્ય" : "Primary Goal"}
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-ivory/50 text-charcoal text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        <option value="weight-loss">
                          {isGujarati ? "વજન અને ફેટ લોસ (Weight Loss)" : "Weight & Fat Loss"}
                        </option>
                        <option value="energy">
                          {isGujarati ? "દૈનિક સ્ફૂર્તિ (Daily Energy)" : "Daily Energy & Stamina"}
                        </option>
                        <option value="digestion">
                          {isGujarati ? "પાચન અને આંતરિક સુખાકારી (Digestion)" : "Digestion & Vitality"}
                        </option>
                        <option value="lifestyle">
                          {isGujarati ? "પરિવારની સાચી દિનચર્યા (Family Habits)" : "Healthy Family Habits"}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      {isGujarati ? "વધારાની વિગત (વૈકલ્પિક)" : "Optional Message / Notes"}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder={
                        isGujarati
                          ? "તમારી વર્તમાન સ્થિતિ અથવા પ્રશ્ન જણાવો..."
                          : "Any current lifestyle habits or questions you'd like to mention..."
                      }
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-ivory/50 text-charcoal placeholder:text-charcoal-muted/50 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center !min-h-[50px] !text-base gap-2 shadow-xs group"
                  >
                    <span>{isGujarati ? "વોટ્સએપ પર કન્સલ્ટેશન શરૂ કરો" : "Connect via WhatsApp"}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[12px] text-center text-charcoal-muted">
                    {isGujarati
                      ? "તમારી માહિતી સંપૂર્ણપણે ગોપનીય રહે છે. કોઈ સ્પામ નહિ."
                      : "Your information remains 100% private. No spam or unwanted calls."}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

