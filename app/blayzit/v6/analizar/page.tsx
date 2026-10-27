"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { FileSearch, Gauge, Sparkles, Activity } from "lucide-react";
import { useState } from "react";

export default function AnalyzeV6() {
  const [text, setText] = useState("");

  return (
    <div className="space-y-12">

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={FileSearch} color="slate" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Analyze V6 · Análisis General
            </h1>
            <p className="text-sm text-slate-500">
              Analiza texto con motores DNIP, ADIP e IA para obtener señales, patrones y métricas.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREA DE ANÁLISIS */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Analizar texto
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Pega texto aquí para analizar con Analyze V6..."
          className="w-full h-40 p-4 rounded-2xl border border-slate-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-slate-400"
        />

        <button
          className="
            flex items-center gap-3 px-6 py-3 rounded-xl 
            bg-gradient-to-br from-slate-600 to-slate-800 
            text-white font-medium shadow-md hover:shadow-lg transition
          "
        >
          <PremiumIcon icon={FileSearch} color="slate" size={18} />
          Ejecutar análisis
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
            <PremiumIcon icon={Gauge} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Intensidad del texto
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de impacto del contenido analizado.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">0.58</p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Sparkles} color="indigo" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Señales detectadas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Señales encontradas por los motores DNIP/IA.
            </p>
            <p className="mt-4 text-3xl font-bold text-indigo-600">9</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Activity} color="red" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Patrones críticos
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Patrones de riesgo detectados en el texto.
            </p>
            <p className="mt-4 text-3xl font-bold text-red-600">3</p>
          </div>

        </div>
      </section>

    </div>
  );
}
