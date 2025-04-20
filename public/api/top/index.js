
// Dies ist eine einfache Simulation der finBrain API, um die Frontend-Funktionalität zu demonstrieren
// In einer echten Anwendung sollte dies durch eine Supabase Edge Function ersetzt werden

export async function onRequest(context) {
  // CORS-Header für lokale Entwicklung
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });

  // Abfrageparameter aus der URL extrahieren
  const url = new URL(context.request.url);
  const mode = url.searchParams.get("mode");
  const count = parseInt(url.searchParams.get("count"), 10) || 3;

  // Validierung
  if (!["stocks", "forex"].includes(mode)) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Ungültiger mode-Parameter. Verwenden Sie 'stocks' oder 'forex'.",
      }),
      { headers, status: 400 }
    );
  }

  try {
    // Beispieldaten basierend auf dem Modus generieren
    const data = generateSampleData(mode, count);

    // Erfolgreiche Antwort zurückgeben
    return new Response(
      JSON.stringify({
        success: true,
        mode,
        requestedCount: count,
        returnedCount: data.length,
        data,
      }),
      { headers }
    );
  } catch (error) {
    // Fehlerbehandlung
    return new Response(
      JSON.stringify({
        success: false,
        error: "Interner Serverfehler: " + error.message,
      }),
      { headers, status: 500 }
    );
  }
}

// Beispieldaten basierend auf dem angeforderten Modus generieren
function generateSampleData(mode, count) {
  const stocksData = [
    { ticker: "AAPL", name: "Apple Inc.", expectedShort: "2.75", sentimentScore: "0.68" },
    { ticker: "MSFT", name: "Microsoft Corporation", expectedShort: "3.21", sentimentScore: "0.72" },
    { ticker: "AMZN", name: "Amazon.com Inc.", expectedShort: "4.12", sentimentScore: "0.65" },
    { ticker: "GOOGL", name: "Alphabet Inc.", expectedShort: "2.85", sentimentScore: "0.61" },
    { ticker: "TSLA", name: "Tesla, Inc.", expectedShort: "5.32", sentimentScore: "0.59" },
    { ticker: "META", name: "Meta Platforms, Inc.", expectedShort: "1.98", sentimentScore: "0.52" },
    { ticker: "NVDA", name: "NVIDIA Corporation", expectedShort: "6.47", sentimentScore: "0.81" },
    { ticker: "BRK.A", name: "Berkshire Hathaway Inc.", expectedShort: "1.65", sentimentScore: "0.63" },
    { ticker: "JPM", name: "JPMorgan Chase & Co.", expectedShort: "2.33", sentimentScore: "0.56" },
    { ticker: "V", name: "Visa Inc.", expectedShort: "1.87", sentimentScore: "0.60" },
  ];

  const forexData = [
    { ticker: "EUR/USD", name: "Euro / US Dollar", expectedShort: "0.45", sentimentScore: "0.52" },
    { ticker: "USD/JPY", name: "US Dollar / Japanese Yen", expectedShort: "0.67", sentimentScore: "0.59" },
    { ticker: "GBP/USD", name: "British Pound / US Dollar", expectedShort: "0.38", sentimentScore: "0.48" },
    { ticker: "USD/CHF", name: "US Dollar / Swiss Franc", expectedShort: "0.29", sentimentScore: "0.43" },
    { ticker: "AUD/USD", name: "Australian Dollar / US Dollar", expectedShort: "0.51", sentimentScore: "0.56" },
    { ticker: "USD/CAD", name: "US Dollar / Canadian Dollar", expectedShort: "0.33", sentimentScore: "0.51" },
    { ticker: "NZD/USD", name: "New Zealand Dollar / US Dollar", expectedShort: "0.42", sentimentScore: "0.54" },
    { ticker: "EUR/GBP", name: "Euro / British Pound", expectedShort: "0.25", sentimentScore: "0.47" },
    { ticker: "EUR/JPY", name: "Euro / Japanese Yen", expectedShort: "0.61", sentimentScore: "0.58" },
    { ticker: "GBP/JPY", name: "British Pound / Japanese Yen", expectedShort: "0.72", sentimentScore: "0.62" },
  ];

  // Daten basierend auf dem Modus auswählen
  const data = mode === "stocks" ? stocksData : forexData;
  
  // Zufällige Abweichungen hinzufügen, um realistischere Daten zu simulieren
  return data.slice(0, count).map(item => ({
    ...item,
    expectedShort: (parseFloat(item.expectedShort) + (Math.random() * 2 - 1)).toFixed(2),
    sentimentScore: (parseFloat(item.sentimentScore) + (Math.random() * 0.2 - 0.1)).toFixed(2)
  }));
}
