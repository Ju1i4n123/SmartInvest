
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Über SmartInvest</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Unsere Mission</h2>
            <p className="text-muted-foreground">
              SmartInvest wurde mit dem Ziel gegründet, Investieren einfach, zugänglich und intelligent zu machen. 
              Durch KI-gestützte Technologie ermöglichen wir jedem, seine finanziellen Ziele zu erreichen.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Unser Team</h2>
            <p className="text-muted-foreground">
              Unser Team besteht aus erfahrenen Finanzexperten, Datenwissenschaftlern und KI-Entwicklern, 
              die sich der Schaffung innovativer Finanzlösungen verschrieben haben.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
