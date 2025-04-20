import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, LayoutDashboard, Lock, ChartLine } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Link to="/register">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                  {t('hero.cta.start')} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="#how-it-works">
                <Button variant="outline" className="px-8 py-6">
                  {t('hero.cta.howItWorks')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="glass-card rounded-2xl p-1 shadow-xl animate-fade-in" style={{ animationDelay: "450ms" }}>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                  alt="SmartInvest Dashboard Preview" 
                  className="w-full h-auto rounded-xl relative z-10 opacity-90"
                />
                <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl rounded-xl z-5"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-3xl opacity-20 animate-float"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/80 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl text-center">
            <h3 className="text-gradient text-4xl font-bold mb-2">+32%</h3>
            <p className="text-muted-foreground">{t('stats.return')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <h3 className="text-gradient text-4xl font-bold mb-2">10.000+</h3>
            <p className="text-muted-foreground">{t('stats.investors')}</p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <h3 className="text-gradient text-4xl font-bold mb-2">€150M+</h3>
            <p className="text-muted-foreground">{t('stats.aum')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl hover-lift">
            <ChartLine className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">KI-Marktanalyse</h3>
            <p className="text-muted-foreground">
              Unsere KI analysiert kontinuierlich Markttrends und macht intelligente Vorhersagen für optimale Investitionen.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl hover-lift">
            <LayoutDashboard className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Personalisiertes Dashboard</h3>
            <p className="text-muted-foreground">
              Behalte den Überblick über deine Investitionen mit unserem intuitiven und benutzerfreundlichen Dashboard.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl hover-lift">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Sicherheit an erster Stelle</h3>
            <p className="text-muted-foreground">
              Deine Daten und Investitionen sind durch modernste Sicherheitsmaßnahmen geschützt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie SmartInvest funktioniert</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          In nur wenigen Schritten zu intelligenten, KI-gesteuerten Investitionen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="relative">
          <div className="glass-card p-8 rounded-xl h-full">
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Registrieren</h3>
            <p className="text-muted-foreground">
              Erstelle ein Konto in nur wenigen Minuten und verifiziere deine Identität.
            </p>
          </div>
          <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            <ArrowRight className="text-primary/50 h-8 w-8" />
          </div>
        </div>
        
        <div className="relative">
          <div className="glass-card p-8 rounded-xl h-full">
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Einzahlen</h3>
            <p className="text-muted-foreground">
              Zahle Geld auf dein Konto ein und lege deine Investitionsziele fest.
            </p>
          </div>
          <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            <ArrowRight className="text-primary/50 h-8 w-8" />
          </div>
        </div>
        
        <div className="relative">
          <div className="glass-card p-8 rounded-xl h-full">
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">KI arbeitet</h3>
            <p className="text-muted-foreground">
              Unsere KI identifiziert die besten Anlagemöglichkeiten basierend auf deinen Zielen.
            </p>
          </div>
          <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
            <ArrowRight className="text-primary/50 h-8 w-8" />
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl h-full">
          <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">4</div>
          <h3 className="text-xl font-bold mb-2">Wachstum beobachten</h3>
          <p className="text-muted-foreground">
            Verfolge deine Rendite in Echtzeit und passe deine Strategie bei Bedarf an.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="glass-card rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit, deine finanzielle Zukunft zu verändern?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Schließe dich Tausenden von zufriedenen Investoren an, die SmartInvest nutzen, um ihre finanziellen Ziele zu erreichen.
          </p>
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Kostenloses Konto erstellen <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
