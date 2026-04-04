import React from 'react';
import { 
  LayoutDashboard, 
  Plus, 
  Leaf, 
  Scale, 
  Settings, 
  LogOut,
  BarChart3
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarItemProps {
  icon: React.ElementType;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "p-3 rounded-xl transition-all duration-200",
      active 
        ? "bg-blue-50 text-blue-600 shadow-sm" 
        : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
    )}
  >
    <Icon size={20} />
  </button>
);

export const Sidebar = () => {
  return (
    <aside className="w-20 h-screen bg-white border-r border-slate-100 flex flex-col items-center py-8 gap-8 fixed left-0 top-0 z-50">
      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-200">
        O
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        <SidebarItem icon={LayoutDashboard} active />
        <SidebarItem icon={Plus} />
        <SidebarItem icon={Leaf} />
        <SidebarItem icon={Scale} />
        <SidebarItem icon={BarChart3} />
      </nav>

      <div className="flex flex-col gap-4 mt-auto">
        <SidebarItem icon={Settings} />
        <SidebarItem icon={LogOut} />
      </div>
    </aside>
  );
};
