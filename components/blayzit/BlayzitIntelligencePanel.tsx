"use client";

import { Brain, Sparkles } from "lucide-react";

export default function BlayzitIntelligencePanel() {
  return (
    <section className="w-full bg-transparent space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
          BLAYZIT Intelligence Panel
        </h2>
        <p className="text-slate-600 text-sm">
          Insights generados por el motor de inteligencia operativa.
        </p>
      </div>

      <div
        className="
          bg-white 
          rounded-2xl 
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          border border-slate-200 
          p-7 
          flex flex-col 
          gap-6
          relative
          overflow-hidden
        "
      >
        <div
          className="
            absolute inset-0 
            pointer-events-none 
            rounded-2xl 
            ring-1 ring-purple-200/40
          "
        />

        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12 
              rounded-xl 
              bg-gradient-to-br from-purple-50 to-purple-100 
              flex items-center justify-center
              border border-slate-200
              shadow-sm
            "
          >
            <Brain className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              Motor de IA
            </p>
            <p className="text-sm text-slate-700">
              Análisis automático de patrones de riesgo, latencia y carga del sistema.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Riesgo emergente
            </p>
            <p className="text-sm text-slate-700 mt-1">
              Incremento leve en eventos críticos en el último ciclo.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Latencia proyectada
            </p>
            <p className="text-sm text-slate-700 mt-1">
              Se espera mantener latencia bajo 100ms en las próximas 2 horas.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Carga del sistema
            </p>
            <p className="text-sm text-slate-700 mt-1">
              Capacidad operativa en rango óptimo, sin necesidad de escalar recursos.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Insights generados automáticamente por BLAYZIT Intelligence.</span>
        </div>
      </div>
    </section>
  );
}
