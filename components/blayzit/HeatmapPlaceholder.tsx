"use client";

import { Grid3x3 } from "lucide-react";

export function HeatmapPlaceholder() {
  return (
    <div className="
      bg-white 
      rounded-xl 
      shadow-lg 
      border border-slate-200 
      p-7 
      flex flex-col 
      gap-5
    ">
      
      {/* Icono */}
      <div className="
        w-12 h-12 
        rounded-lg 
        bg-[#F0F8FF] 
        flex items-center justify-center
        border border-slate-200
      ">
        <Grid3x3 className="w-6 h-6 text-[#1F7FCC]" strokeWidth={1.8} />
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-slate-800">
        Heatmap de decisiones
      </h3>

      {/* Placeholder */}
      <div className="
        h-48 
        bg-slate-50 
        border border-slate-200 
        rounded-lg 
        flex items-center justify-center 
        text-slate-400
      ">
        [Heatmap Placeholder]
      </div>
    </div>
  );
}

export default HeatmapPlaceholder;
