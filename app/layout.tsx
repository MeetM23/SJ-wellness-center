import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://swasthjeevanwellness.com"),
  title: "SWASTH JEEVAN Wellness Center | Coach Kaushikbhai J. Dhandhala",
  description:
    "Swasth Jeevan Wellness Center (Fitness • Nutrition • Joy) by Certified Wellness Coach Kaushikbhai J. Dhandhala in Jamnagar, Gujarat. Personalized nutrition, sustainable fat loss, daily habit guidance, and lifelong vitality.",
  keywords: [
    "Swasth Jeevan Wellness Center",
    "સ્વસ્થ જીવન વેલનેસ સેન્ટર",
    "Kaushikbhai J Dhandhala",
    "કૌશિકભાઈ જે ધાંધલા",
    "Wellness Coach Jamnagar",
    "Weight Loss Jamnagar Gujarat",
    "Nutrition Center Jamnagar",
    "Lifestyle Habits Jamnagar",
    "Herbalife Coach Jamnagar"
  ],
  authors: [{ name: "Coach Kaushikbhai J. Dhandhala" }],
  openGraph: {
    title: "SWASTH JEEVAN Wellness Center | Fitness • Nutrition • Joy",
    description:
      "Small daily lifestyle habits. Sustainable, measurable wellness results. Guided by Certified Wellness Coach Kaushikbhai J. Dhandhala in Jamnagar.",
    url: "https://swasthjeevanwellness.com",
    siteName: "Swasth Jeevan Wellness Center",
    images: [
      {
        url: "/images/hero/hero-wellness-family.jpg",
        width: 1200,
        height: 630,
        alt: "Swasth Jeevan Wellness Center - Coach Kaushikbhai J. Dhandhala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-charcoal min-h-screen flex flex-col font-sans selection:bg-primary selection:text-ivory">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
