"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "gu";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isGujarati: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLanguage: () => {},
  setLanguage: () => {},
  isGujarati: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("swasth_jeevan_lang") as Language;
    if (saved === "en" || saved === "gu") {
      setLang(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === "en" ? "gu" : "en";
      localStorage.setItem("swasth_jeevan_lang", next);
      return next;
    });
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("swasth_jeevan_lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLanguage,
        setLanguage,
        isGujarati: lang === "gu",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

