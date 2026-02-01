import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Eye, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

import logoImg from "@assets/fb8c1414-e81c-43ed-afa9-634708714d64_removalai_preview_1769960469953.png";

export function Navigation() {
  const { language, setLanguage, t, direction } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "ar" : "fr");
  };

  const navLinks = [
    { href: "#home", label: "nav.home" },
    { href: "#about", label: "nav.about" },
    { href: "#specialties", label: "nav.specialties" },
    { href: "#contact", label: "nav.contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="flex items-center">
              <img src={logoImg} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold text-primary leading-tight">
                Dr Fahd Jendoubi
              </span>
              <span className="text-xs text-muted-foreground hidden sm:inline-block">
                {t("hero.subtitle")}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {t(link.label)}
              </button>
            ))}
            
            <div className="h-6 w-px bg-border mx-2" />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === "fr" ? "العربية" : "Français"}
            </Button>
            
            <Button 
              size="sm" 
              onClick={() => window.open('https://www.med.tn/rendez-vous/dr-fahd-jendoubi/226538', '_blank')}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            >
              {t("hero.cta")}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
            >
              <span className="font-bold text-xs">{language === "fr" ? "AR" : "FR"}</span>
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-1"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-base font-medium text-foreground/80 hover:text-primary py-2 text-start"
                >
                  {t(link.label)}
                </button>
              ))}
              <Button 
                className="w-full mt-2" 
                onClick={() => window.open('https://www.med.tn/rendez-vous/dr-fahd-jendoubi/226538', '_blank')}
              >
                {t("hero.cta")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
