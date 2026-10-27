"use client";

import { Activity, BarChart3, Brain, Shield, Radar } from "lucide-react";

const icons = {
  activity: Activity,
  "bar-chart-3": BarChart3,
  brain: Brain,
  shield: Shield,
  radar: Radar,
};

export default function ModuleCardV6({ title, description, icon, status }) {
  const Icon = icons[icon];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-200">
      
      {/* Icono */}
      <div className="w-12 h-12 rounded-lg bg-[#F0F8FF] flex items-center justify-center border border-slate-200">
        <Icon className="w-6 h-6 text-[#1F7FCC]" strokeWidth={1.8} />
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>

      {/* Descripción */}
      <p className="text-sm text-slate-600">{description}</p>

      {/* Estado */}
      <span className="text-xs px-3 py-1 bg-slate-100 border border-slate-300 rounded-lg text-slate-700 w-fit">
        {status}
      </span>
    </div>
  );
}
