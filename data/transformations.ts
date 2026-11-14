export interface TransformationItem {
  id: string;
  title: string;
  gujaratiTitle: string;
  category: "weight-loss" | "weight-management" | "lifestyle" | "vitality";
  categoryLabel: string;
  gujaratiCategoryLabel: string;
  image: string;
  startingMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  achievedMeasurement?: {
    labelEn: string;
    labelGu: string;
    valueEn: string;
    valueGu: string;
  };
  highlightResult: {
    en: string;
    gu: string;
  };
  featured: boolean;
  description: string;
  gujaratiDescription: string;
}

export const transformations: TransformationItem[] = [
  {
    id: "journey-01-fatloss-9kg",
    title: "9 kg Fat Loss & 7 Inches Waist Reduction",
    gujaratiTitle: "૯ કિલો ફેટ લોસ અને ૭ ઇંચ કમરનો ઘટાડો",
    category: "weight-loss",
    categoryLabel: "Fat Loss & Inches",
    gujaratiCategoryLabel: "ફેટ લોસ અને ઇંચ લોસ",
    image: "/images/transformations/transformation-1-fatloss-9kg.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "81 kg",
      valueGu: "૮૧ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Current Weight",
      labelGu: "હાલનું વજન",
      valueEn: "72 kg",
      valueGu: "૭૨ કિલો",
    },
    highlightResult: {
      en: "-9 kg Fat Loss & -7 In. Waist",
      gu: "-૯ કિલો ફેટ લોસ અને -૭ ઇંચ કમર",
    },
    featured: true,
    description:
      "A complete wellness transition from 81 kg down to 72 kg. Overcame lingering body fatigue and gained 7 inches of waist reduction through balanced nutrition.",
    gujaratiDescription:
      "૮૧ કિલોથી ૭૨ કિલો સુધીનું પરિવર્તન. કોઈ ભૂખ્યા રહ્યા વગર સંતુલિત આહાર અને યોગ્ય પાણીથી શરીરમાંથી ૯ કિલો ચરબી ઘટાડી અને કમર ૭ ઈંચ ઓછી થઈ.",
  },
  {
    id: "journey-02-weightloss-20kg",
    title: "20 kg Milestone: 78 kg to 58 kg Transformation",
    gujaratiTitle: "૭૮ કિલો થી ૫૮ કિલો – ૨૦ કિલો વજન ઘટાડાની સફર",
    category: "weight-loss",
    categoryLabel: "Weight Loss Journeys",
    gujaratiCategoryLabel: "વજન ઘટાડાની સફર",
    image: "/images/transformations/transformation-3-weightloss-20kg.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "78 kg",
      valueGu: "૭૮ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Current Weight",
      labelGu: "હાલનું વજન",
      valueEn: "58 kg",
      valueGu: "૫૮ કિલો",
    },
    highlightResult: {
      en: "-20 kg Sustainable Reduction",
      gu: "-૨૦ કિલો સફળ ઘટાડો",
    },
    featured: true,
    description:
      "Stepping down from 78 kg to 58 kg without harsh crash diets. Clean dietary rhythm and continuous habit mentorship restored lifelong vitality.",
    gujaratiDescription:
      "૭૮ કિલોથી ૫૮ કિલો સુધીનું પ્રેરણાદાયી પરિવર્તન. ઘરના ભોજન સાથે યોગ્ય પોષણ અને નિયમિત માર્ગદર્શન દ્વારા ૨૦ કિલો વજન ઘટાડીને સ્ફૂર્તિ પાછી મેળવી.",
  },
  {
    id: "journey-03-weightloss-14kg",
    title: "14 kg Reduction: 94 kg to 80 kg Body Composition",
    gujaratiTitle: "૯૪ કિલો થી ૮૦ કિલો – ૧૪ કિલો ફિટનેસ અને વજન નિયંત્રણ",
    category: "weight-loss",
    categoryLabel: "Abdominal Fat Loss",
    gujaratiCategoryLabel: "પેટની ચરબી અને વજન ઘટાડો",
    image: "/images/transformations/transformation-4-weightloss-14kg.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "94 kg",
      valueGu: "૯૪ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Current Weight",
      labelGu: "હાલનું વજન",
      valueEn: "80 kg",
      valueGu: "૮૦ કિલો",
    },
    highlightResult: {
      en: "-14 kg Visceral Fat Reduction",
      gu: "-૧૪ કિલો વજન અને ચરબી ઘટાડો",
    },
    featured: true,
    description:
      "A structured lifestyle protocol that brought weight down from 94 kg to 80 kg, improving mobility, posture alignment, and day-to-day energy.",
    gujaratiDescription:
      "૯૪ કિલોથી ૮૦ કિલો વજન ઘટાડવાથી શરીર હળવુંફૂલ થયું. સમયસર ભોજન અને યોગ્ય આદતોથી ચાલવામાં અને દૈનિક કામોમાં હવે કોઈ થાક લાગતો નથી.",
  },
  {
    id: "journey-04-recovery-gain",
    title: "10 kg Healthy Lean Gain & Vitality Recovery",
    gujaratiTitle: "૪૫ કિલો થી ૫૫ કિલો – ૧૦ કિલો સ્વસ્થ વજન વધારો",
    category: "vitality",
    categoryLabel: "Lean Health & Recovery",
    gujaratiCategoryLabel: "સ્વાસ્થ્ય સુધાર અને વજન વધારો",
    image: "/images/transformations/transformation-2-recovery-gain.jpg",
    startingMeasurement: {
      labelEn: "Starting Weight",
      labelGu: "શરૂઆતનું વજન",
      valueEn: "45 kg",
      valueGu: "૪૫ કિલો",
    },
    achievedMeasurement: {
      labelEn: "Achieved Weight",
      labelGu: "મેળવેલ વજન",
      valueEn: "55 kg",
      valueGu: "૫૫ કિલો",
    },
    highlightResult: {
      en: "+10 kg Healthy Lean Mass",
      gu: "+૧૦ કિલો સ્વસ્થ વજન વધારો",
    },
    featured: true,
    description:
      "Rebuilding physical vitality after health setback. Transitioned from 45 kg of weakness to 55 kg of lean muscle mass, daily stamina, and digestion comfort.",
    gujaratiDescription:
      "શારીરિક નબળાઈ અને ઓછા વજનમાંથી મુક્તિ. યોગ્ય પોષક તત્વોના ઉપયોગથી ૪૫ કિલોથી ૫૫ કિલો સુધી પહોંચી નવી શક્તિ અને ઉત્સાહ પ્રાપ્ત કર્યા.",
  },
  {
    id: "journey-05-skin-vitality",
    title: "Skin Radiance & Internal Metabolic Cleansing",
    gujaratiTitle: "આંતરિક પોષણથી ત્વચાની તાજગી અને નવીન સ્ફૂર્તિ",
    category: "lifestyle",
    categoryLabel: "Cellular Nutrition & Glow",
    gujaratiCategoryLabel: "ત્વચા અને આંતરિક સુખાકારી",
    image: "/images/transformations/transformation-skin-radiance-4x3.jpg",
    startingMeasurement: {
      labelEn: "Vitality State",
      labelGu: "શરૂઆતની સ્થિતિ",
      valueEn: "Fatigued",
      valueGu: "થાક અને નિસ્તેજ",
    },
    achievedMeasurement: {
      labelEn: "Current State",
      labelGu: "હાલની સ્થિતિ",
      valueEn: "Vibrant & Radiant",
      valueGu: "તાજગી અને ચમક",
    },
    highlightResult: {
      en: "Radiant Skin & Clean Nutrition",
      gu: "ત્વચાની તાજગી અને ઉત્સાહ",
    },
    featured: true,
    description:
      "Addressing skin dullness and daily sluggishness from the inside out through targeted cellular micronutrients, hydration scheduling, and clean eating.",
    gujaratiDescription:
      "બહારના મોંઘા ઉપચારો વિના, અંદરથી શુદ્ધ પોષણ અને નિયમિત પાણીથી ચહેરા પર કુદરતી ચમક અને આખા શરીરમાં તાજગી મેળવી.",
  },
];
