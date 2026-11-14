export interface TestimonialItem {
  id: string;
  clientName: string;
  gujaratiClientName: string;
  location: string;
  transformationType: string;
  gujaratiTransformationType: string;
  quote: string;
  gujaratiQuote: string;
  verifiedResult: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "test-01",
    clientName: "Verified Client",
    gujaratiClientName: "પ્રમાણિત ક્લાયન્ટ",
    location: "Jamnagar",
    transformationType: "Fat Loss & Daily Energy",
    gujaratiTransformationType: "ફેટ લોસ અને નવીન સ્ફૂર્તિ",
    quote:
      "I lost 9 kg of bad fat and 7 inches off my waist. All my lingering body aches disappeared, and I now stay fully energized from morning until night. The daily coaching support kept me consistent without any harsh starvation.",
    gujaratiQuote:
      "મેં ૯ કિલો ખરાબ ફેટ ઘટાડ્યો અને કમર ૭ ઈંચ ઓછી થઈ. શરીરમાં થતા નાના-મોટા દુખાવા દૂર થયા અને હવે આખો દિવસ અદ્ભુત ઊર્જા રહે છે. કોઈ કઠોર ભૂખમરા વિના મને આ પરિણામ મળ્યું.",
    verifiedResult: "9 kg Fat Loss & -7 In. Waist",
  },
  {
    id: "test-02",
    clientName: "Verified Member",
    gujaratiClientName: "પ્રમાણિત સભ્ય",
    location: "Online Coaching",
    transformationType: "20 kg Weight Reduction",
    gujaratiTransformationType: "૨૦ કિલો વજન ઘટાડો",
    quote:
      "Stepping down from 78 kg to 58 kg transformed my life. I learned how to eat right without cutting out real family meals. The personalized coaching made me feel confident that a healthy body is truly sustainable.",
    gujaratiQuote:
      "૭૮ કિલોથી ૫૮ કિલો સુધી પહોંચવું મારા માટે એક નવું જીવન મળવા જેવું છે. ક્યારેય ભૂખ્યા રહ્યા વગર સંતુલિત આહારની સાચી સમજ મળી અને વજન કાયમી ધોરણે કાબૂમાં આવ્યું.",
    verifiedResult: "78 kg to 58 kg (-20 kg)",
  },
  {
    id: "test-03",
    clientName: "Convalescent Recovery Member",
    gujaratiClientName: "સ્વાસ્થ્ય સુધાર સભ્ય",
    location: "Wellness Center",
    transformationType: "Health & Vitality Recovery",
    gujaratiTransformationType: "શારીરિક પુનઃપ્રાપ્તિ અને ઊર્જા",
    quote:
      "After being discharged from the hospital at just 45 kg, I had zero strength. Through precise nutritional coaching, I gained 10 kg of lean healthy weight to reach 55 kg, feeling strong, active, and fully recovered.",
    gujaratiQuote:
      "હોસ્પિટલમાંથી ડિસ્ચાર્જ થયા પછી ૪૫ કિલો વજન સાથે નબળાઈ હતી. પોષણ માર્ગદર્શનથી ૧૦ કિલો સ્વસ્થ વજન વધીને ૫૫ કિલો થયું અને શરીરમાં નવી શક્તિ આવી.",
    verifiedResult: "45 kg to 55 kg (+10 kg Healthy Gain)",
  },
  {
    id: "test-04",
    clientName: "Verified Member",
    gujaratiClientName: "પ્રમાણિત સભ્ય",
    location: "Community Member",
    transformationType: "Waist & Posture Correction",
    gujaratiTransformationType: "પેટની ચરબી અને પોશ્ચર સુધારો",
    quote:
      "Dropping from 94 kg to 80 kg felt impossible until I understood food timing and proper hydration. My clothes fit comfortably, my posture straightened, and I feel 10 years younger.",
    gujaratiQuote:
      "૯૪ કિલો થી ૮૦ કિલો વજન ઘટાડવાથી મારું શરીર હળવુંફૂલ થઈ ગયું. સમયસર ભોજન અને પૂરતું પાણી પીવાથી ચાલવામાં અને દૈનિક કામોમાં હવે કોઈ થાક લાગતો નથી.",
    verifiedResult: "94 kg to 80 kg (-14 kg)",
  },
];
