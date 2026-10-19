"use client";

import { Activity } from "lucide-react";

export default function OverviewCard() {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        border border-slate-200 
        p-8 
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

      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <div
          className="
            w-14 h-14 
            rounded-xl 
            bg-gradient-to-br from-blue-50 to-blue-100 
            flex items-center justify-center
            border border-slate-200
            shadow-sm
          "
        >
          <Activity className="w-7 h-7 text-blue-700" strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Overview del Sistema
          </h3>
          <p className="text-slate-600 text-sm">
            Resumen general del estado operativo
          </p>
        </div>
      </div>

      {/* Data Capsules */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {/* Eventos */}
        <div
          className="
            bg-slate-50 
            border border-slate-200 
            rounded-xl 
            p-5 
            shadow-sm
          "
        >
          <p className="text-sm text-slate-500">Eventos procesados</p>
          <p className="text-3xl font-semibold text-slate-900">128</p>
          <span className="text-green-600 text-sm font-medium">+12%</span>
        </div>

        {/* Estado */}
        <div
          className="
            bg-slate-50 
            border border-slate-200 
            rounded-xl 
            p-5 
            shadow-sm
          "
        >
          <p className="text-sm text-slate-500">Estado</p>
          <p className="text-xl font-semibold text-green-700">Operativo</p>
          <span className="text-green-600 text-sm font-medium">Estable</span>
        </div>

        {/* Latencia */}
        <div
          className="
            bg-slate-50 
            border border-slate-200 
            rounded-xl 
            p-5 
            shadow-sm
          "
        >
          <p className="text-sm text-slate-500">Latencia promedio</p>
          <p className="text-2xl font-semibold text-blue-700">84ms</p>
          <span className="text-blue-600 text-sm font-medium">-8%</span>
        </div>
      </div>

      {/* Mini Trendline */}
      <div
        className="
          h-14 
          bg-gradient-to-r 
          from-blue-100/60 
          via-blue-50 
          to-transparent 
          rounded-xl 
          border border-slate-200
          shadow-inner
          flex items-center justify-center
          text-slate-400 text-sm
        "
      >
        [ mini trendline ]
      </div>
    </div>
  );
}
