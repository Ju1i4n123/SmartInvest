
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">SmartInvest</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{t('nav.home')}</Link>
            <Link to="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{t('nav.features')}</Link>
            <Link to="#how-it-works" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{t('nav.howItWorks')}</Link>
            <Link to="/debug" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{t('nav.debug')}</Link>
            <Link to="/login" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{t('nav.login')}</Link>
            <LanguageSwitcher />
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white">{t('nav.getStarted')}</Button>
            </Link>
          </nav>
          
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden neo-blur animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary/50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link to="#features" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary/50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}>
              {t('nav.features')}
            </Link>
            <Link to="#how-it-works" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary/50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}>
              {t('nav.howItWorks')}
            </Link>
            <Link to="/debug" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary/50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}>
              {t('nav.debug')}
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary/50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}>
              {t('nav.login')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            <Link to="/register" className="block px-3 py-2 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}>
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
