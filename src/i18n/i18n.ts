import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            features: "Features",
            howItWorks: "How It Works",
            debug: "Debug",
            login: "Login",
            getStarted: "Get Started"
          },
          hero: {
            title: "AI-powered Investment for your Future",
            subtitle: "SmartInvest uses advanced AI to intelligently invest your money and achieve maximum returns.",
            cta: {
              start: "Get Started",
              howItWorks: "How It Works"
            }
          },
          stats: {
            return: "Average Annual Return",
            investors: "Happy Investors",
            aum: "Assets Under Management"
          },
          features: {
            title: "Why Choose SmartInvest?",
            subtitle: "Our advanced AI technology offers advantages that traditional investment platforms cannot provide."
          }
        }
      },
      de: {
        translation: {
          nav: {
            home: "Start",
            features: "Funktionen",
            howItWorks: "Wie es funktioniert",
            debug: "Debug",
            login: "Anmelden",
            getStarted: "Jetzt starten"
          },
          hero: {
            title: "KI-gesteuerte Investitionen für deine Zukunft",
            subtitle: "SmartInvest nutzt fortschrittliche KI, um dein Geld intelligent zu investieren und maximale Renditen zu erzielen.",
            cta: {
              start: "Jetzt starten",
              howItWorks: "Wie es funktioniert"
            }
          },
          stats: {
            return: "Durchschnittliche jährliche Rendite",
            investors: "Zufriedene Investoren",
            aum: "Verwaltetes Vermögen"
          },
          features: {
            title: "Warum SmartInvest wählen?",
            subtitle: "Unsere fortschrittliche KI-Technologie bietet dir Vorteile, die traditionelle Investmentplattformen nicht bieten können."
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            features: "Características",
            howItWorks: "Cómo Funciona",
            debug: "Debug",
            login: "Iniciar Sesión",
            getStarted: "Empezar"
          },
          hero: {
            title: "Inversión Impulsada por IA para tu Futuro",
            subtitle: "SmartInvest utiliza IA avanzada para invertir tu dinero de manera inteligente y lograr máximos rendimientos.",
            cta: {
              start: "Empezar",
              howItWorks: "Cómo Funciona"
            }
          },
          stats: {
            return: "Rendimiento Anual Promedio",
            investors: "Inversores Satisfechos",
            aum: "Activos Bajo Gestión"
          },
          features: {
            title: "¿Por qué elegir SmartInvest?",
            subtitle: "Nuestra tecnología de IA avanzada ofrece ventajas que las plataformas de inversión tradicionales no pueden proporcionar."
          }
        }
      },
      fr: {
        translation: {
          nav: {
            home: "Accueil",
            features: "Fonctionnalités",
            howItWorks: "Comment ça Marche",
            debug: "Debug",
            login: "Connexion",
            getStarted: "Commencer"
          },
          hero: {
            title: "Investissement Alimenté par l'IA pour votre Avenir",
            subtitle: "SmartInvest utilise l'IA avancée pour investir intelligemment votre argent et obtenir des rendements maximaux.",
            cta: {
              start: "Commencer",
              howItWorks: "Comment ça Marche"
            }
          },
          stats: {
            return: "Rendement Annuel Moyen",
            investors: "Investisseurs Satisfaits",
            aum: "Actifs Sous Gestion"
          },
          features: {
            title: "Pourquoi Choisir SmartInvest?",
            subtitle: "Notre technologie d'IA avancée offre des avantages que les plateformes d'investissement traditionnelles ne peuvent pas fournir."
          }
        }
      },
      it: {
        translation: {
          nav: {
            home: "Home",
            features: "Funzionalità",
            howItWorks: "Come Funziona",
            debug: "Debug",
            login: "Accedi",
            getStarted: "Inizia"
          },
          hero: {
            title: "Investimenti Potenziati dall'IA per il tuo Futuro",
            subtitle: "SmartInvest utilizza l'IA avanzata per investire in modo intelligente il tuo denaro e ottenere il massimo rendimento.",
            cta: {
              start: "Inizia",
              howItWorks: "Come Funziona"
            }
          },
          stats: {
            return: "Rendimento Medio Annuo",
            investors: "Investitori Soddisfatti",
            aum: "Patrimonio Gestito"
          },
          features: {
            title: "Perché Scegliere SmartInvest?",
            subtitle: "La nostra tecnologia IA avanzata offre vantaggi che le piattaforme di investimento tradizionali non possono fornire."
          }
        }
      }
    },
    fallbackLng: "en",
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
