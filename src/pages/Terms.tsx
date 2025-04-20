
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using SmartInvest, you agree to these terms. Please read them carefully.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain account confidentiality</li>
              <li>Use the service responsibly</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Investment Disclaimer</h2>
            <p className="text-muted-foreground">
              Investment involves risk. SmartInvest provides recommendations, but users are responsible for their investment decisions.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
