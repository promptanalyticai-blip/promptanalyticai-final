"use client";

import { LineChart as LineIcon } from "lucide-react";

export function SimpleLineChart() {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        border border-slate-200 
        p-7 
        flex flex-col 
        gap-6
        transition-all 
        duration-300 
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
        hover:-translate-y-[3px]
        relative
        overflow-hidden
      "
    >
      {/* Glow semántico */}
      <div
        className="
          absolute inset-0 
          pointer-events-none 
          rounded-2xl 
          ring-1 ring-blue-200/40
        "
      />

      {/* Icono */}
      <div
        className="
          w-12 h-12 
          rounded-xl 
          bg-[#F0F8FF] 
          flex items-center justify-center
          border border-slate-200
          shadow-sm
        "
      >
        <LineIcon className="w-6 h-6 text-[#1F7FCC]" strokeWidth={1.8} />
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
        Actividad de decisiones
      </h3>

      {/* Placeholder del gráfico */}
      <div
        className="
          h-56 
          bg-slate-50 
          border border-slate-200 
          rounded-xl 
          flex items-center justify-center 
          text-slate-400 
          shadow-inner
        "
      >
        [Line Chart Placeholder]
      </div>
    </div>
  );
}

export default SimpleLineChart;
