
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const generateRandomData = (months: number, startValue: number, volatility: number) => {
  const data = [];
  let currentValue = startValue;
  
  for (let i = 0; i < months; i++) {
    // Random growth between -volatility% and +volatility%
    const randomGrowth = ((Math.random() * volatility * 2) - volatility) / 100;
    currentValue = currentValue * (1 + randomGrowth);
    
    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth() - (months - i - 1), 1);
    
    data.push({
      date: date.toLocaleDateString('de-DE', { month: 'short', year: 'numeric' }),
      value: parseFloat(currentValue.toFixed(2)),
    });
  }
  
  return data;
};

const calculateGrowth = (data: { date: string, value: number }[]) => {
  if (data.length < 2) return 0;
  const startValue = data[0].value;
  const endValue = data[data.length - 1].value;
  return ((endValue - startValue) / startValue) * 100;
};

type TimeRange = '1M' | '3M' | '6M' | '1Y' | 'ALL';

export function InvestmentChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('1Y');
  const [chartData, setChartData] = useState<{ date: string, value: number }[]>([]);
  const [growth, setGrowth] = useState(0);
  
  useEffect(() => {
    // Generate random data based on selected time range
    const months = 
      timeRange === '1M' ? 1 :
      timeRange === '3M' ? 3 :
      timeRange === '6M' ? 6 :
      timeRange === '1Y' ? 12 :
      36; // ALL (3 years)
    
    const startValue = 10000; // Starting with 10,000 €
    const volatility = timeRange === '1M' ? 3 : timeRange === '3M' ? 5 : 8; // Higher volatility for longer periods
    
    const generatedData = generateRandomData(months, startValue, volatility);
    setChartData(generatedData);
    
    // Calculate growth percentage
    const calculatedGrowth = calculateGrowth(generatedData);
    setGrowth(parseFloat(calculatedGrowth.toFixed(2)));
  }, [timeRange]);

  return (
    <Card className="glass-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Portfolio Performance</CardTitle>
        <div className="flex items-center gap-4">
          <div className={`text-${growth >= 0 ? 'green-500' : 'red-500'} text-xl font-semibold`}>
            {growth >= 0 ? '+' : ''}{growth}%
          </div>
          <Select
            value={timeRange}
            onValueChange={(value) => setTimeRange(value as TimeRange)}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">1M</SelectItem>
              <SelectItem value="3M">3M</SelectItem>
              <SelectItem value="6M">6M</SelectItem>
              <SelectItem value="1Y">1Y</SelectItem>
              <SelectItem value="ALL">ALL</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.2} />
              <XAxis dataKey="date" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `€${value.toLocaleString()}`}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--card-foreground))'
                }}
                formatter={(value: number) => [`€${value.toLocaleString()}`, 'Value']}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
