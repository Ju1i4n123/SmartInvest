
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/sonner";
import { LineChart, Search } from "lucide-react";

type Asset = {
  ticker: string;
  name: string;
  expectedShort: string;
  sentimentScore: string;
};

type ApiResponse = {
  success: boolean;
  mode: string;
  requestedCount: number;
  returnedCount: number;
  data: Asset[];
  error?: string;
};

const Debug = () => {
  const [mode, setMode] = useState<"stocks" | "forex">("stocks");
  const [count, setCount] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ApiResponse | null>(null);

  const fetchTopAssets = async () => {
    if (isNaN(count) || count < 1) {
      toast.error("Bitte geben Sie eine gültige positive Zahl ein");
      return;
    }

    setLoading(true);
    try {
      // In einer echten Anwendung würde dies zu einer Supabase Edge Function gehen
      // Da wir ohne Supabase arbeiten, ist dies nur ein Platzhalter für die API-Anfrage
      const response = await fetch(`/api/top?mode=${mode}&count=${count}`);
      const data = await response.json();
      
      if (data.success) {
        setResult(data);
        toast.success(`${data.returnedCount} Ergebnisse gefunden`);
      } else {
        toast.error(data.error || "Ein Fehler ist aufgetreten");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server- oder API-Fehler. Bitte prüfen Sie die Konsole.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-grow mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
            <Search className="mr-4 text-primary" /> FinBrain API Debug
          </h1>

          <div className="bg-secondary/20 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Top Assets Explorer</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="mode-selector">Asset-Typ</Label>
                <RadioGroup 
                  id="mode-selector" 
                  value={mode}
                  onValueChange={(value) => setMode(value as "stocks" | "forex")}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="stocks" id="stocks" />
                    <Label htmlFor="stocks">Aktien</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="forex" id="forex" />
                    <Label htmlFor="forex">Forex</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="count">Anzahl der Ergebnisse</Label>
                <Input
                  id="count"
                  type="number"
                  min="1"
                  max="20"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value, 10))}
                  className="mt-2 w-full md:w-1/4"
                />
              </div>
              
              <Button 
                onClick={fetchTopAssets} 
                className="mt-2"
                disabled={loading}
              >
                {loading ? "Wird geladen..." : "Top Assets abrufen"}
              </Button>
            </div>
          </div>

          {result && (
            <div className="bg-secondary/10 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <LineChart className="mr-2 text-primary" />
                Ergebnisse ({result.mode === "stocks" ? "Aktien" : "Forex"})
              </h2>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticker</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Erwarteter Kurzfrist-Return</TableHead>
                    <TableHead>Sentiment Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.data.map((asset) => (
                    <TableRow key={asset.ticker}>
                      <TableCell className="font-medium">{asset.ticker}</TableCell>
                      <TableCell>{asset.name}</TableCell>
                      <TableCell>
                        <span className={`font-semibold ${parseFloat(asset.expectedShort) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {parseFloat(asset.expectedShort).toFixed(2)}%
                        </span>
                      </TableCell>
                      <TableCell>{asset.sentimentScore}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="mt-8 p-4 border border-border rounded-md bg-secondary/5">
            <h3 className="text-lg font-medium mb-2">Hinweis zur Einrichtung</h3>
            <p className="text-muted-foreground">
              Um diese Funktionalität zu nutzen, müssen Sie eine <code>.env</code> Datei im Root-Verzeichnis 
              erstellen und Ihren FinBrain API-Key hinzufügen:
            </p>
            <pre className="bg-black text-white p-3 rounded mt-2 overflow-x-auto">
              FINBRAIN_KEY=ihr_finbrain_api_key
            </pre>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Debug;
