import React from 'react';
import { FileText, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';

export const AIAssistant = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif text-slate-800 mb-8"
      >
        Hola,<br />
        <span className="text-blue-600">¿En qué puedo<br />ayudarte hoy?</span>
      </motion.h2>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-slate-600 text-sm font-medium">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <FileText size={18} />
          </div>
          Generar Informes
        </button>
        
        <button className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-slate-600 text-sm font-medium">
          <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
            <ClipboardList size={18} />
          </div>
          Tareas por hoy
        </button>
      </div>
    </div>
  );
};
