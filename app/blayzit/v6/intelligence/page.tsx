"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { Sparkles, BrainCircuit, Shield, Gauge } from "lucide-react";

export default function IntelligenceV6() {
  return (
    <div className="space-y-12">

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={Sparkles} color="indigo" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Intelligence V6 · Centro de Inteligencia Global
            </h1>
            <p className="text-sm text-slate-500">
              Consolida señales, riesgos y decisiones en un núcleo de inteligencia operativa.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ESTADO GLOBAL */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Estado global del sistema
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MÉTRICA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={BrainCircuit} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Señales procesadas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Total de señales analizadas por el motor de inteligencia.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">12,482</p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Shield} color="rose" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Riesgos activos
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Riesgos detectados en tiempo real por el sistema.
            </p>
            <p className="mt-4 text-3xl font-bold text-rose-600">7</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Gauge} color="emerald" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Estabilidad operativa
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de estabilidad del sistema global.
            </p>
            <p className="mt-4 text-3xl font-bold text-emerald-600">92%</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE INTELIGENCIA AVANZADA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Inteligencia avanzada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* TARJETA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Sparkles} color="indigo" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Insights generados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Información clave generada por el motor de inteligencia.
            </p>
            <p className="mt-4 text-2xl font-bold text-indigo-600">+248</p>
          </div>

          {/* TARJETA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={BrainCircuit} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Señales enriquecidas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Señales mejoradas con IA avanzada.
            </p>
            <p className="mt-4 text-2xl font-bold text-purple-600">+32%</p>
          </div>

        </div>
      </section>

    </div>
  );
}
