
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

const COLORS = [
  'hsl(217.2, 91.2%, 59.8%)',  // Primary
  'hsl(262.1, 83.3%, 57.8%)',  // Purple
  'hsl(193, 98%, 70%)',        // Light Blue
  'hsl(316, 73%, 52%)',        // Pink
  'hsl(47, 100%, 77%)',        // Yellow
  'hsl(142, 70%, 49%)',        // Green
];

const data = [
  { name: 'Tech', value: 35 },
  { name: 'Finance', value: 20 },
  { name: 'Healthcare', value: 15 },
  { name: 'Consumer', value: 12 },
  { name: 'Energy', value: 10 },
  { name: 'Other', value: 8 },
];

export function InvestmentAllocation() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Portfolio Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Allocation']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--card-foreground))'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
