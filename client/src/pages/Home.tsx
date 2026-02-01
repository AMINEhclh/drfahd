import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { 
  Eye, 
  Glasses, 
  ScanEye, 
  Baby, 
  Microscope, 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CreditCard,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import drImage from "@assets/226538_dr-fahd-jendoubi_1748858999_1769960405473.webp";
import cabinetImage1 from "@assets/226538-dr-fahd-jendoubi-1752834936_(1)_1769960324610.webp";
import cabinetImage2 from "@assets/226538-dr-fahd-jendoubi-1752834936_1769960324610.webp";
import cabinetImage3 from "@assets/226538-dr-fahd-jendoubi-1752834978_1769960324610.webp";
import cabinetImage4 from "@assets/226538-dr-fahd-jendoubi-1752834998_1769960324611.webp";

export default function Home() {
  const { t, direction } = useLanguage();

  const specialties = [
    { icon: Eye, key: "spec.cataract" },
    { icon: Glasses, key: "spec.refractive" },
    { icon: Activity, key: "spec.glaucoma" },
    { icon: ScanEye, key: "spec.retina" },
    { icon: Baby, key: "spec.oculoplasty" },
    { icon: Microscope, key: "spec.lenses" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-12 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 text-center lg:text-start z-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-xs md:text-sm mb-4">
                  {t("hero.subtitle")}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                  {t("hero.title")}
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t("hero.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                  <Button 
                    size="lg" 
                    className="text-base md:text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all w-full sm:w-auto"
                    onClick={() => window.open('https://www.med.tn/rendez-vous/dr-fahd-jendoubi/226538', '_blank')}
                  >
                    {t("hero.cta")}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-base md:text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary/5 text-primary w-full sm:w-auto"
                    onClick={() => document.querySelector('#specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t("nav.specialties")}
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="flex-1 relative w-full max-w-[450px] lg:max-w-none mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Doctor Placeholder Image */}
                <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-gray-200 to-gray-100 relative">
                  <img 
                    src={drImage} 
                    alt="Dr Fahd Jendoubi" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* Floating card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-bottom-6 sm:left-6 sm:translate-x-0 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 sm:gap-3 max-w-[180px] sm:max-w-[200px] z-20"
                >
                  <div className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600 shrink-0">
                    <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-xs sm:text-base">Expert</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">Chirurgie oculaire</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Background decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-2xl sm:blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            <div className="flex-1 w-full">
               <img 
                 src={cabinetImage4}
                 alt="Cabinet du Dr Fahd Jendoubi"
                 className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-video"
               />
            </div>
            <div className="flex-1 w-full">
              <SectionHeader title={t("about.title")} subtitle={t("nav.about")} centered={false} />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-start">
                {t("about.text")}
              </p>
              
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Diplômé en Ophtalmologie",
                  "Chirurgie Expert",
                  "Technologie Avancée",
                  "Suivi Personnalisé"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="font-medium text-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title={t("specialties.title")} subtitle={t("nav.specialties")} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {specialties.map((spec, idx) => (
              <motion.div
                key={spec.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <spec.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{t(spec.key)}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Cabinet Photos */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Qualifications */}
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-secondary" />
                {t("qualifications.title")}
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1 h-auto rounded-full bg-primary/20 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{t("qual.doctorate")}</h4>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1 h-auto rounded-full bg-primary/20 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{t("qual.specialty")}</h4>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1 h-auto rounded-full bg-primary/20 shrink-0" />
                  <div className="w-full">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{t("qual.masters")}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs md:text-sm text-gray-500">
                      <span>• {t("qual.contactology")}</span>
                      <span>• {t("qual.microsurgery")}</span>
                      <span>• {t("qual.oculoplasty")}</span>
                      <span>• {t("qual.neuro")}</span>
                      <span>• {t("qual.trauma")}</span>
                      <span>• {t("qual.uveitis")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cabinet Photos Grid */}
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary" />
                {t("cabinet.title")}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[cabinetImage1, cabinetImage2, cabinetImage3, cabinetImage4].map((img, i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={`Cabinet Photo ${i + 1}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title={t("contact.title")} subtitle={t("nav.contact")} />
          
          <div className="max-w-3xl mx-auto w-full space-y-4 sm:space-y-6">
            {/* Hours */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2.5 sm:p-3 bg-blue-50 rounded-lg text-primary shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-2">{t("info.hours")}</h4>
                  <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                    <p>{t("info.hours.weekdays")}</p>
                    <p>{t("info.hours.saturday")}</p>
                    <p>{t("info.hours.sunday")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2.5 sm:p-3 bg-green-50 rounded-lg text-secondary shrink-0">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-2">{t("info.payment")}</h4>
                  <div className="text-sm sm:text-base text-muted-foreground space-y-1">
                    <p>{t("info.payment.cash")}</p>
                    <p>{t("info.payment.cnam")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                   <Phone className="w-5 h-5 text-primary shrink-0" />
                   <span dir="ltr">+216 20 988 415</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                   <Phone className="w-5 h-5 text-primary shrink-0" />
                   <span dir="ltr">+216 20 988 742</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base overflow-hidden">
                   <Mail className="w-5 h-5 text-primary shrink-0" />
                   <span className="truncate">jendoubi.fahd@gmail.com</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                   <MapPin className="w-5 h-5 text-primary shrink-0" />
                   <span>{t("location.address")}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Google Maps Integration
          </p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5097789438!2d10.1090278!3d36.7910833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ3JzI3LjkiTiAxMMKwMDYnMzIuNSJF!5e0!3m2!1sfr!2stn!4v1620000000000!5m2!1sfr!2stn" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-start">
              <h2 className="text-2xl font-bold mb-2">Dr Fahd Jendoubi</h2>
              <p className="text-blue-200 text-sm">{t("hero.subtitle")}</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61576203074480" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dr_fahd_jendoubi" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-blue-200">
            <p>&copy; {new Date().getFullYear()} Dr Fahd Jendoubi. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
