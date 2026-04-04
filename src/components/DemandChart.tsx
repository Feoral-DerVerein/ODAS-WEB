import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: '1 mar', historical: 18, prediction: 18 },
  { name: '2 mar', historical: 19, prediction: 19 },
  { name: '3 mar', historical: 17, prediction: 17 },
  { name: '4 mar', historical: 21, prediction: 21 },
  { name: '5 mar', historical: 18, prediction: 18 },
  { name: '6 mar', historical: 22, prediction: 22 },
  { name: '7 mar', historical: 19, prediction: 19 },
  { name: '8 mar', historical: 21, prediction: 21 },
  { name: '9 mar', historical: 18, prediction: 18 },
  { name: '10 mar', historical: 20, prediction: 20 },
  { name: '11 mar', historical: 17, prediction: 17 },
  { name: '12 mar', historical: 19, prediction: 19 },
  { name: '13 mar', historical: 18, prediction: 18 },
  { name: '14 mar', historical: 17, prediction: 17 },
  // Prediction starts here
  { name: '15 mar', prediction: 19 },
  { name: '16 mar', prediction: 20 },
  { name: '17 mar', prediction: 18 },
  { name: '18 mar', prediction: 21 },
  { name: '19 mar', prediction: 19 },
];

export const DemandChart = () => {
  return (
    <div className="w-full h-[300px] mt-8">
      <div className="flex items-center gap-6 mb-4 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span>Ventas Históricas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>Predicción IA</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#94a3b8' }}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
          />
          <Area 
            type="monotone" 
            dataKey="historical" 
            stroke="#10b981" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorHistorical)" 
            dot={false}
          />
          <Area 
            type="monotone" 
            dataKey="prediction" 
            stroke="#3b82f6" 
            strokeWidth={2}
            strokeDasharray="5 5"
            fillOpacity={1} 
            fill="url(#colorPrediction)" 
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
