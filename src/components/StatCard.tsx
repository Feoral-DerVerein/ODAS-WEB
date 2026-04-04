import React from 'react';
import { Leaf, Recycle, Heart, Info } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
}

export const StatCard = ({ title, value, subtitle, icon: Icon, iconColor, bgColor }: StatCardProps) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 flex-1 min-w-[200px]">
    <div className="flex justify-between items-start">
      <div className={`p-2 rounded-xl ${bgColor} ${iconColor}`}>
        <Icon size={20} />
      </div>
      <button className="text-slate-300 hover:text-slate-500">
        <Info size={16} />
      </button>
    </div>
    
    <div>
      <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      <p className="text-[10px] text-slate-400 mt-1">{subtitle}</p>
    </div>
  </div>
);
