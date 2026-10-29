"use client";

import { useState } from "react";
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { Activity, AlertTriangle, FileSearch, Gauge } from "lucide-react";

export default function DNIPV6() {
  const [text, setText] = useState("");

  return (
    <div className="space-y-12">

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={Activity} color="red" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              DNIP V6 · Detección de Riesgos
            </h1>
            <p className="text-sm text-slate-500">
              Analiza texto para detectar señales de riesgo, anomalías y patrones críticos.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREA DE ANÁLISIS */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Análisis de texto
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Pega texto aquí para analizar con DNIP V6..."
          className="w-full h-40 p-4 rounded-2xl border border-slate-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-red-400"
        />

        <button
          className="
            flex items-center gap-3 px-6 py-3 rounded-xl
            bg-gradient-to-br from-red-500 to-rose-600
            text-white font-medium shadow-md hover:shadow-lg transition
          "
        >
          <PremiumIcon icon={Activity} color="red" size={18} />
          Ejecutar DNIP
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
            <PremiumIcon icon={AlertTriangle} color="amber" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Riesgos detectados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Señales críticas encontradas en el texto.
            </p>
            <p className="mt-4 text-3xl font-bold text-amber-600">3</p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Gauge} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Intensidad DNIP
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de impacto de las señales detectadas.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">0.467</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={FileSearch} color="blue" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Patrones encontrados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Coincidencias con patrones DNIP.
            </p>
            <p className="mt-4 text-3xl font-bold text-blue-600">12</p>
          </div>

        </div>
      </section>

    </div>
  );
}
