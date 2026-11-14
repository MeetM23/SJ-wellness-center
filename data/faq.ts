export interface FAQItem {
  id: string;
  question: string;
  questionGujarati: string;
  answer: string;
  answerGujarati: string;
  category: "consultation" | "nutrition" | "lifestyle";
}

export const faqs: FAQItem[] = [
  {
    id: "faq-01",
    question: "Do I have to follow an extreme diet or starve myself?",
    questionGujarati: "શું મારે કોઈ કઠોર ડાયેટ કરવો પડશે કે ભૂખ્યા રહેવું પડશે?",
    answer:
      "Not at all. At Swasth Jeevan Wellness Center, we strictly oppose crash diets and starvation. Our approach is based on balanced cellular nutrition, regular hydration, and natural adjustments to your everyday home meals so the results last for life.",
    answerGujarati:
      "બિલકુલ નહિ. સ્વસ્થ જીવન વેલનેસ સેન્ટરમાં અમે ભૂખમરા કે કઠોર ડાયેટિંગમાં માનતા નથી. અમારો અભિગમ સંતુલિત પોષણ, પૂરતું પાણી અને ઘરના સામાન્ય ભોજન સાથે યોગ્ય આદતો કેળવવાનો છે જેથી પરિણામ કાયમી રહે.",
    category: "nutrition",
  },
  {
    id: "faq-02",
    question: "How does the 1-on-1 coaching by Coach Kaushikbhai work?",
    questionGujarati: "કોચ કૌશિકભાઈનું ૧-ઓન-૧ માર્ગદર્શન કેવી રીતે કાર્ય કરે છે?",
    answer:
      "We begin with a thorough lifestyle, hydration, and nutrition assessment. Coach Kaushikbhai then designs a personalized daily routine tailored to your body type, daily schedule, and goals, tracking your progress weekly with actionable adjustments.",
    answerGujarati:
      "સૌ પ્રથમ તમારી દિનચર્યા, પાણી પીવાની રીત અને પોષણનું વિશ્લેષણ કરવામાં આવે છે. ત્યારબાદ કોચ કૌશિકભાઈ તમારા શરીર અને સમય અનુસાર વ્યક્તિગત રૂટિન તૈયાર કરે છે અને સાપ્તાહિક ધોરણે તમારી પ્રગતિ તપાસે છે.",
    category: "consultation",
  },
  {
    id: "faq-03",
    question: "Is this program suitable for individuals aged 40 and above?",
    questionGujarati: "શું આ કાર્યક્રમ ૪૦ વર્ષથી વધુ ઉંમરના લોકો માટે યોગ્ય છે?",
    answer:
      "Yes, absolutely. Our lifestyle and nutrition protocols are gentle, joint-friendly, and specifically designed to support metabolic health, digestion, energy recovery, and joint mobility in middle-aged and senior adults.",
    answerGujarati:
      "હા, ચોક્કસ. અમારી પદ્ધતિ સહજ અને સલામત છે. ૪૦ વર્ષથી મોટી ઉંમરના ભાઈઓ-બહેનો માટે પાચન, સ્ફૂર્તિ, સાંધાની હળવાશ અને વજન નિયંત્રણ માટે આ અત્યંત ઉપયોગી અને આરામદાયક છે.",
    category: "lifestyle",
  },
  {
    id: "faq-04",
    question: "Where is Swasth Jeevan Wellness Center located?",
    questionGujarati: "સ્વસ્થ જીવન વેલનેસ સેન્ટર ક્યાં આવેલું છે?",
    answer:
      "Our center is conveniently located at Block No. C/8/89, Government Colony, Near Pradarshan Ground in Jamnagar (Pin 361001). You can visit in person or book a virtual consultation over WhatsApp.",
    answerGujarati:
      "અમારું કેન્દ્ર જામનગરમાં પ્રદર્શન ગ્રાઉન્ડ નજીક સરકારી કોલોનીમાં (બ્લોક નં. C/8/89, પીન ૩૬૧૦૦૧) આવેલું છે. તમે રૂબરૂ મુલાકાત લઈ શકો છો અથવા વોટ્સએપ દ્વારા ઓનલાઈન કન્સલ્ટેશન પણ મેળવી શકો છો.",
    category: "consultation",
  },
  {
    id: "faq-05",
    question: "How can I book an initial consultation?",
    questionGujarati: "હું શરૂઆતનું કન્સલ્ટેશન કેવી રીતે બુક કરી શકું?",
    answer:
      "Simply click the 'Book a Consultation' button, send a message to +91 97148 22933 on WhatsApp, or call directly. We will schedule a comfortable time to understand your goals and guide you step-by-step.",
    answerGujarati:
      "સરળતાથી 'કન્સલ્ટેશન બુક કરો' બટન પર ક્લિક કરો, અથવા +91 97148 22933 પર વોટ્સએપ મેસેજ કરો કે સીધો ફોન કરો. અમે તમારી અનુકૂળતા મુજબ સમય ફાળવીને તમને માર્ગદર્શન આપીશું.",
    category: "consultation",
  },
];

