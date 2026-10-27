"use client";

import { useRouter } from "next/navigation";
import { Activity, AlertTriangle, Brain, ChevronRight } from "lucide-react";

export default function OverviewCard({ data }) {
  const router = useRouter();

  return (
    <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm w-full">

      {/* TÍTULO */}
      <h3 className="text-lg font-semibold text-slate-800 mb-6">
        Estado Operativo Actual
      </h3>

      {/* MÉTRICAS */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        {/* Riesgos activos */}
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-slate-700">Riesgos activos</span>
          </div>
          <p className="text-2xl font-semibold text-slate-800">
            {data.riesgos}
          </p>
        </div>

        {/* Decisiones pendientes */}
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-medium text-slate-700">Decisiones pendientes</span>
          </div>
          <p className="text-2xl font-semibold text-slate-800">
            {data.decisiones}
          </p>
        </div>

        {/* Telemetría actual */}
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">Telemetría</span>
          </div>
          <p className="text-2xl font-semibold text-slate-800">
            {data.telemetria}
          </p>
        </div>

      </div>

      {/* PREDICCIÓN IA */}
      <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl mb-8">
        <p className="text-sm text-slate-600">
          La IA anticipa <span className="font-medium text-slate-800">{data.prediccion}</span> en los próximos 3–5 minutos.
        </p>
      </div>

      {/* ACCIÓN */}
      <button
        onClick={() => router.push("/blayzit/v6/riesgos?mode=analitico")}
        className="w-full flex items-center justify-between px-5 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition"
      >
        <span className="text-sm font-medium">Ver detalles operativos</span>
        <ChevronRight className="h-5 w-5" />
      </button>

    </div>
  );
}
