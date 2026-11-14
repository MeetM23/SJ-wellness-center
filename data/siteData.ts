export interface SiteConfig {
  name: string;
  nameGujarati: string;
  tagline: string;
  taglineGujarati: string;
  coachName: string;
  coachNameGujarati: string;
  coachTitle: string;
  coachTitleGujarati: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  location: {
    address: string;
    addressGujarati: string;
    landmark: string;
    landmarkGujarati: string;
    city: string;
    cityGujarati: string;
    district: string;
    districtGujarati: string;
    pincode: string;
    state: string;
    stateGujarati: string;
  };
  whatsapp: {
    number: string;
    defaultMessageGu: string;
    defaultMessageEn: string;
  };
  stats: {
    hoursResponse: string;
    coachingModel: string;
    coachingModelGu: string;
    approach: string;
    approachGu: string;
  };
  navigation: {
    label: string;
    gujaratiLabel: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Swasth Jeevan Wellness Center",
  nameGujarati: "સ્વસ્થ જીવન વેલનેસ સેન્ટર",
  tagline: "Fitness • Nutrition • Joy",
  taglineGujarati: "ફિટનેસ • પોષણ • આનંદ",
  coachName: "Kaushikbhai J. Dhandhala",
  coachNameGujarati: "કૌશિકભાઈ જે. ધાંધલા",
  coachTitle: "Certified Wellness Coach & Lifestyle Mentor",
  coachTitleGujarati: "પ્રમાણિત વેલનેસ કોચ અને લાઇફસ્ટાઇલ મેન્ટર",
  phone: "+919714822933",
  phoneFormatted: "+91 97148 22933",
  email: "dhandhalakaushik31@gmail.com",
  location: {
    address: "Block No. C/8/89, Government Colony, Near Pradarshan Ground, Jamnagar - 361001, Gujarat",
    addressGujarati: "બ્લોક નં. C/8/89, સરકારી કોલોની, પ્રદર્શન ગ્રાઉન્ડ નજીક, જામનગર - ૩૬૧૦૦૧, ગુજરાત",
    landmark: "Near Pradarshan Ground",
    landmarkGujarati: "પ્રદર્શન ગ્રાઉન્ડ નજીક",
    city: "Jamnagar",
    cityGujarati: "જામનગર",
    district: "Jamnagar",
    districtGujarati: "જામનગર",
    pincode: "361001",
    state: "Gujarat",
    stateGujarati: "ગુજરાત",
  },
  whatsapp: {
    number: "919714822933",
    defaultMessageGu: "નમસ્તે કોચ કૌશિકભાઈ, હું સ્વસ્થ જીવન વેલનેસ સેન્ટર પરથી ફ્રી વેલનેસ અને પોષણ કન્સલ્ટેશન માટે સંપર્ક કરી રહ્યો છું.",
    defaultMessageEn: "Hello Coach Kaushikbhai, I would like to book a 1-on-1 personalized wellness consultation with Swasth Jeevan Wellness Center.",
  },
  stats: {
    hoursResponse: "Within 2 Hours",
    coachingModel: "1-on-1 Dedicated Mentorship",
    coachingModelGu: "૧-ઓન-૧ અંગત માર્ગદર્શન",
    approach: "Balanced Nutrition & Daily Habits",
    approachGu: "સંતુલિત પોષણ અને સાચી દિનચર્યા",
  },
  navigation: [
    { label: "Home", gujaratiLabel: "મુખ્ય પૃષ્ઠ", href: "#hero" },
    { label: "Our Approach", gujaratiLabel: "અમારી પદ્ધતિ", href: "#approach" },
    { label: "Results", gujaratiLabel: "પરિણામો", href: "#archive" },
    { label: "Testimonials", gujaratiLabel: "પ્રતિસાદ", href: "#testimonials" },
    { label: "FAQ", gujaratiLabel: "પ્રશ્નોત્તરી", href: "#faq" },
    { label: "Contact", gujaratiLabel: "સંપર્ક", href: "#contact" },
  ],
};

