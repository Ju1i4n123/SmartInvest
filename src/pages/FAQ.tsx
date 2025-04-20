
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, MessageCircleQuestion, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "Wie funktioniert SmartInvest?",
      answer: "SmartInvest nutzt KI-Algorithmen, um personalisierte Investmentempfehlungen basierend auf Ihren finanziellen Zielen und Risikopräferenzen zu generieren."
    },
    {
      question: "Welche Arten von Investitionen bietet SmartInvest?",
      answer: "Wir bieten Anlageoptionen in Aktien, ETFs, Anleihen und andere Finanzinstrumente, die auf Ihre individuellen Ziele zugeschnitten sind."
    },
    {
      question: "Wie sicher sind meine Investitionen?",
      answer: "SmartInvest implementiert modernste Sicherheitsmaßnahmen, um Ihre Daten und Investitionen zu schützen. Dennoch unterliegen alle Investitionen einem gewissen Risiko."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
            <HelpCircle className="mr-4 text-primary" /> Häufig gestellte Fragen
          </h1>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <MessageCircleQuestion className="mr-3 text-primary" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start">
                    <Info className="mr-3 text-muted-foreground mt-1" />
                    <p>{item.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
