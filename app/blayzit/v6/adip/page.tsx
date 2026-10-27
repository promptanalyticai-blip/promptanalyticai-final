"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { BarChart3, CheckCircle, Gauge, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ADIPV6() {
  const [decision, setDecision] = useState("");

  return (
    <div className="space-y-12">

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={BarChart3} color="emerald" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              ADIP V6 · Decisiones Inteligentes
            </h1>
            <p className="text-sm text-slate-500">
              Procesa decisiones operativas con análisis inteligente y métricas avanzadas.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREA DE DECISIÓN */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Procesar decisión
        </h2>

        <textarea
          value={decision}
          onChange={(e) => setDecision(e.target.value)}
          placeholder="Describe la decisión operativa que deseas procesar..."
          className="w-full h-40 p-4 rounded-2xl border border-slate-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          className="
            flex items-center gap-3 px-6 py-3 rounded-xl 
            bg-gradient-to-br from-emerald-500 to-teal-600 
            text-white font-medium shadow-md hover:shadow-lg transition
          "
        >
          <PremiumIcon icon={BarChart3} color="emerald" size={18} />
          Ejecutar ADIP
        </button>
      </section>

      {/* RESULTADOS */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Resultados del análisis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MÉTRICA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={CheckCircle} color="emerald" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Decisión recomendada
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Acción óptima basada en el análisis ADIP.
            </p>
            <p className="mt-4 text-2xl font-bold text-emerald-600">
              Ejecutar
            </p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Gauge} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Intensidad ADIP
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de impacto de la decisión procesada.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">0.82</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Sparkles} color="indigo" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Eficiencia operativa
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Mejora estimada tras aplicar la decisión.
            </p>
            <p className="mt-4 text-3xl font-bold text-indigo-600">+12%</p>
          </div>

        </div>
      </section>

    </div>
  );
}
