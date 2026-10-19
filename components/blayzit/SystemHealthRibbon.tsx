"use client";

import { ShieldCheck, AlertTriangle, Activity } from "lucide-react";

export default function SystemHealthRibbon() {
  return (
    <div
      className="
        w-full 
        bg-gradient-to-r from-green-50 via-blue-50 to-slate-50 
        border border-slate-200 
        rounded-2xl 
        px-6 py-4 
        flex items-center 
        gap-6
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
      "
    >
      <div
        className="
          w-10 h-10 
          rounded-xl 
          bg-white 
          border border-slate-200 
          flex items-center justify-center
          shadow-sm
        "
      >
        <ShieldCheck className="w-6 h-6 text-green-600" />
      </div>

      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Salud del sistema
          </p>
          <p className="text-sm text-slate-700">
            Sistema operativo estable, sin incidentes críticos en los últimos 24 minutos.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700">Latencia: 84ms</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span className="text-slate-700">Riesgo: Bajo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
