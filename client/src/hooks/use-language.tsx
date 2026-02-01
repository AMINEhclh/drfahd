import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.specialties": "Spécialités",
    "nav.qualifications": "Qualifications",
    "nav.cabinet": "Cabinet",
    "nav.contact": "Contact",
    "hero.subtitle": "Ophtalmologue",
    "hero.title": "Dr Fahd Jendoubi",
    "hero.description": "Ophtalmologue à Ezzahrouni – Tunis, spécialisé en chirurgie oculaire et traitement au laser.",
    "hero.cta": "Prendre rendez-vous",
    "about.title": "À propos du Docteur",
    "about.text": "Le Dr Fahd JENDOUBI est Ophtalmologue exerçant à Ezzahrouni, Tunis. Il possède des Masters complémentaires en contactologie, microchirurgie oculaire, oculoplastie et neuro-ophtalmologie. Il pratique la chirurgie de la cataracte (y compris premium), la chirurgie réfractive au laser (LASIK, PKR), la chirurgie du glaucome et la chirurgie vitréo-rétinienne.",
    "specialties.title": "Spécialités",
    "spec.cataract": "Chirurgie de la Cataracte",
    "spec.refractive": "Chirurgie Réfractive (LASIK, PKR)",
    "spec.glaucoma": "Glaucome",
    "spec.retina": "Vitréo-rétine",
    "spec.oculoplasty": "Oculoplastie",
    "spec.lenses": "Contactologie",
    "qualifications.title": "Qualifications",
    "qual.doctorate": "Doctorat en Médecine – Faculté de Médecine de Monastir",
    "qual.specialty": "Spécialité en Ophtalmologie",
    "qual.masters": "Masters complémentaires",
    "qual.contactology": "Contactologie",
    "qual.microsurgery": "Microchirurgie oculaire",
    "qual.oculoplasty": "Oculoplastie",
    "qual.neuro": "Neuro-ophtalmologie",
    "qual.trauma": "Traumatologie de l'œil",
    "qual.uveitis": "Uvéites",
    "cabinet.title": "Cabinet du Dr Fahd Jendoubi",
    "info.hours": "Horaires",
    "info.hours.weekdays": "Lundi – Vendredi: 08:30 – 17:00",
    "info.hours.saturday": "Samedi: 09:00 – 13:00",
    "info.hours.sunday": "Dimanche: 10:00 – 12:00",
    "info.payment": "Modes de règlement",
    "info.payment.cash": "Espèces",
    "info.payment.cnam": "CNAM",
    "contact.title": "Contactez-nous",
    "contact.name": "Nom complet",
    "contact.phone": "Numéro de téléphone",
    "contact.message": "Message (Optionnel)",
    "contact.submit": "Envoyer",
    "contact.sending": "Envoi en cours...",
    "location.title": "Localisation",
    "location.address": "49 rue Ennakhil, Ezzahrouni, Tunis",
    "footer.rights": "Tous droits réservés.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "نبذة",
    "nav.specialties": "الاختصاصات",
    "nav.qualifications": "المؤهلات",
    "nav.cabinet": "العيادة",
    "nav.contact": "اتصل بنا",
    "hero.subtitle": "اختصاصي طب وجراحة العيون",
    "hero.title": "الدكتور فهد الجندوبي",
    "hero.description": "اختصاصي في طب وجراحة العيون بتونس – الزهروني",
    "hero.cta": "حجز موعد",
    "about.title": "نبذة عن الدكتور",
    "about.text": "الدكتور فهد الجندوبي طبيب عيون يمارس في الزهروني، تونس. يحمل ماجستيرات تكميلية في طب العدسات اللاصقة، جراحة العيون المجهرية، جراحة تجميل العين وطب الأعصاب البصرية. يقوم بإجراء جراحة الساد (بما في ذلك المتميزة)، جراحة تصحيح النظر بالليزر (LASIK، PKR)، جراحة الجلوكوما وجراحة الشبكية والزجاجية.",
    "specialties.title": "الاختصاصات",
    "spec.cataract": "جراحة الساد (المياه البيضاء)",
    "spec.refractive": "جراحة تصحيح النظر (LASIK، PKR)",
    "spec.glaucoma": "الجلوكوما (المياه الزرقاء)",
    "spec.retina": "الشبكية والزجاجية",
    "spec.oculoplasty": "جراحة تجميل العين",
    "spec.lenses": "طب العدسات اللاصقة",
    "qualifications.title": "المؤهلات",
    "qual.doctorate": "دكتوراه في الطب – كلية الطب بالمنستير",
    "qual.specialty": "اختصاص في طب العيون",
    "qual.masters": "ماجستيرات تكميلية",
    "qual.contactology": "طب العدسات اللاصقة",
    "qual.microsurgery": "جراحة العيون المجهرية",
    "qual.oculoplasty": "جراحة تجميل العين",
    "qual.neuro": "طب الأعصاب البصرية",
    "qual.trauma": "إصابات العين",
    "qual.uveitis": "التهاب العنبية",
    "cabinet.title": "عيادة الدكتور فهد الجندوبي",
    "info.hours": "أوقات العمل",
    "info.hours.weekdays": "الإثنين – الجمعة: 08:30 – 17:00",
    "info.hours.saturday": "السبت: 09:00 – 13:00",
    "info.hours.sunday": "الأحد: 10:00 – 12:00",
    "info.payment": "طرق الدفع",
    "info.payment.cash": "نقداً",
    "info.payment.cnam": "الصندوق الوطني للتأمين على المرض",
    "contact.title": "اتصل بنا",
    "contact.name": "الاسم الكامل",
    "contact.phone": "رقم الهاتف",
    "contact.message": "رسالة (اختياري)",
    "contact.submit": "إرسال",
    "contact.sending": "جاري الإرسال...",
    "location.title": "الموقع",
    "location.address": "49 نهج النخيل، الزهروني، تونس",
    "footer.rights": "جميع الحقوق محفوظة.",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const direction = language === "ar" ? "rtl" : "ltr";

  // Update HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["fr"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
