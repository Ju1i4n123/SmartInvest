
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { InvestmentChart } from "@/components/Dashboard/InvestmentChart";
import { InvestmentAllocation } from "@/components/Dashboard/InvestmentAllocation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Wallet, Sparkles, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stocksActive, setStocksActive] = useState(true);

  const handleLogout = () => {
    navigate("/");
  };

  const recentTransactions = [
    { id: 1, type: "buy", stock: "Apple Inc.", amount: "€2,500", date: "Apr 18, 2025", change: "+2.4%" },
    { id: 2, type: "buy", stock: "Microsoft Corp.", amount: "€1,800", date: "Apr 15, 2025", change: "+1.7%" },
    { id: 3, type: "sell", stock: "Tesla Inc.", amount: "€3,200", date: "Apr 10, 2025", change: "-0.8%" },
    { id: 4, type: "buy", stock: "Amazon.com Inc.", amount: "€2,100", date: "Apr 05, 2025", change: "+3.2%" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardSidebar onLogout={handleLogout} />

      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="container p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Willkommen zurück! Hier ist ein Überblick über deine Investitionen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardDescription>Gesamtwert</CardDescription>
                <CardTitle className="text-2xl">€25,890.75</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+12.5% seit Start</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardDescription>Monatlicher Gewinn</CardDescription>
                <CardTitle className="text-2xl">€1,245.32</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>+5.3% im letzten Monat</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardDescription>Aktien</CardDescription>
                <CardTitle className="text-2xl">18</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-1 text-primary" />
                  <span>4 Top-Performer</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardDescription>Verfügbares Guthaben</CardDescription>
                <CardTitle className="text-2xl">€5,432.10</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="h-4 w-4 mr-1" /> Hinzufügen
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <InvestmentChart />
            </div>
            <div>
              <InvestmentAllocation />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Aktuelle Investitionen</h2>
              <div className="flex space-x-2">
                <Button
                  variant={stocksActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStocksActive(true)}
                >
                  Aktien
                </Button>
                <Button
                  variant={!stocksActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStocksActive(false)}
                >
                  ETFs
                </Button>
              </div>
            </div>

            <Card className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Anzahl</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Kaufpreis</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Aktueller Wert</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rendite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Apple Inc.</div>
                          <div className="text-xs text-muted-foreground">AAPL</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">15</td>
                      <td className="px-4 py-3">€154.23</td>
                      <td className="px-4 py-3">€168.92</td>
                      <td className="px-4 py-3 text-green-500">+9.5%</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Microsoft Corp.</div>
                          <div className="text-xs text-muted-foreground">MSFT</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">8</td>
                      <td className="px-4 py-3">€287.65</td>
                      <td className="px-4 py-3">€312.18</td>
                      <td className="px-4 py-3 text-green-500">+8.5%</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Amazon.com Inc.</div>
                          <div className="text-xs text-muted-foreground">AMZN</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">12</td>
                      <td className="px-4 py-3">€134.87</td>
                      <td className="px-4 py-3">€148.32</td>
                      <td className="px-4 py-3 text-green-500">+10.0%</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Tesla Inc.</div>
                          <div className="text-xs text-muted-foreground">TSLA</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">€654.32</td>
                      <td className="px-4 py-3">€623.45</td>
                      <td className="px-4 py-3 text-red-500">-4.7%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Google (Alphabet)</div>
                          <div className="text-xs text-muted-foreground">GOOGL</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">10</td>
                      <td className="px-4 py-3">€123.45</td>
                      <td className="px-4 py-3">€145.67</td>
                      <td className="px-4 py-3 text-green-500">+18.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Neueste Transaktionen</h2>
            <Card className="glass-card">
              <div className="divide-y divide-border/40">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`rounded-full p-2 ${transaction.type === 'buy' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {transaction.type === 'buy' ? (
                          <ArrowUp className={`h-4 w-4 text-green-500`} />
                        ) : (
                          <ArrowDown className={`h-4 w-4 text-red-500`} />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.stock}</div>
                        <div className="text-sm text-muted-foreground">{transaction.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{transaction.amount}</div>
                      <div className={`text-sm ${transaction.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
