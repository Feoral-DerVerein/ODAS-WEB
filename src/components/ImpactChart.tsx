import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart
} from 'recharts';

const data = [
  { year: '2026', sinODAS: 55.9, conODAS: 55.9 },
  { year: '2027', sinODAS: 56.4, conODAS: 51.5 },
  { year: '2028', sinODAS: 56.9, conODAS: 46.8 },
  { year: '2029', sinODAS: 57.5, conODAS: 40.5 },
  { year: '2030', sinODAS: 57.9, conODAS: 34.0 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const sinValue = payload.find((p: any) => p.dataKey === 'sinODAS')?.value;
    const conValue = payload.find((p: any) => p.dataKey === 'conODAS')?.value;
    const diff = (sinValue - conValue).toFixed(1);
    const pct = Math.round(((sinValue - conValue) / sinValue) * 100);

    return (
      <div className="bg-white p-4 border border-slate-100 shadow-xl rounded-xl font-serif">
        <p className="font-bold text-slate-800 mb-2">{label}</p>
        <p className="text-sm text-[#E24B4A] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E24B4A]" />
          Sin ODAS: {sinValue.toFixed(1)} M ton
        </p>
        <p className="text-sm text-[#1D9E75] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
          Con ODAS: {conValue.toFixed(1)} M ton
        </p>
        {sinValue !== conValue && (
          <div className="mt-2 pt-2 border-t border-slate-50">
            <p className="text-xs font-bold text-blue-600">
              Ahorro: {diff} M ton ({pct}%)
            </p>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export const ImpactChart = () => {
  return (
    <div className="w-full">
      {/* Legend */}
      <div className="flex flex-wrap gap-6 mb-6 text-[11px] font-bold uppercase tracking-widest text-slate-400 justify-center lg:justify-start">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#E24B4A]" />
          Tendencia sin ODAS
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#1D9E75]" />
          Proyección con ODAS
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-1.5 bg-[#378ADD]/20" />
          Zona de impacto
        </div>
      </div>

      {/* Chart Wrap */}
      <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="h-[300px] md:h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#378ADD" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#378ADD" stopOpacity={0.02}/>
                </linearGradient>
                <filter id="shadow" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.2" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }}
                dy={10}
              />
              <YAxis 
                domain={[28, 62]}
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fill: '#94a3b8' }}
                tickFormatter={(v) => `${v} M`}
                label={{ 
                  value: 'Toneladas de desperdicio (millones)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 10, fill: '#cbd5e1', fontWeight: 500 },
                  offset: 10
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Impact Area */}
              <Area 
                type="monotone" 
                dataKey="sinODAS" 
                stroke="none" 
                fill="transparent" 
              />
              <Area 
                type="monotone" 
                dataKey="conODAS" 
                stroke="none" 
                fill="url(#impactGradient)" 
                baseLine={57.9}
              />

              <Line 
                type="monotone" 
                dataKey="sinODAS" 
                stroke="#E24B4A" 
                strokeWidth={3} 
                dot={{ r: 5, fill: '#E24B4A', stroke: '#fff', strokeWidth: 2 }}
                activeDot={{ r: 7, stroke: '#fff', strokeWidth: 2 }}
                animationDuration={2000}
                style={{ filter: 'url(#shadow)' }}
              />
              <Line 
                type="monotone" 
                dataKey="conODAS" 
                stroke="#1D9E75" 
                strokeWidth={3} 
                dot={{ r: 5, fill: '#1D9E75', stroke: '#fff', strokeWidth: 2 }}
                activeDot={{ r: 7, stroke: '#fff', strokeWidth: 2 }}
                animationDuration={2500}
                style={{ filter: 'url(#shadow)' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[11px] text-slate-400 mt-6 leading-relaxed text-center max-w-2xl mx-auto">
          ODAS opera desde 2026. Proyección basada en datos europeos (FUSIONS 2016, EU Farm to Fork 2030).
          Escenario sin ODAS asume crecimiento del 0.8% anual.
          Escenario con ODAS proyecta reducción progresiva con adopción del 15% del mercado objetivo al 2030.
        </p>
      </div>
    </div>
  );
};
