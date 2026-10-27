"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import NotaIA from "@/components/blayzit/v6/ui/NotaIA";
import { FileSearch, Shield, Gauge, Activity } from "lucide-react";

export default function AuditoriaModuleV6() {
  return (
    <div className="space-y-12">

      {/* ⭐ Nota IA Global */}
      <NotaIA modulo="auditoria" />

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={FileSearch} color="amber" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Audit V6 · Auditoría Operativa
            </h1>
            <p className="text-sm text-slate-500">
              Revisión avanzada de eventos, decisiones y señales del sistema.
            </p>
          </div>
        </div>
      </section>

      {/* ESTADO DE AUDITORÍA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Estado de auditoría
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MÉTRICA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={FileSearch} color="amber" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Eventos auditados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Total de eventos revisados por el sistema.
            </p>
            <p className="mt-4 text-3xl font-bold text-amber-600">3,284</p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Shield} color="rose" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Riesgos detectados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Riesgos encontrados durante auditorías.
            </p>
            <p className="mt-4 text-3xl font-bold text-rose-600">12</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Gauge} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Precisión del sistema
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de precisión en auditorías automáticas.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">94%</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE AUDITORÍA AVANZADA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Auditoría avanzada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* TARJETA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Activity} color="red" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Análisis de actividad
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Revisión de actividad operativa reciente.
            </p>
            <p className="mt-4 text-2xl font-bold text-red-600">Activo</p>
          </div>

          {/* TARJETA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={FileSearch} color="blue" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Registros detallados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Registros completos de auditoría del sistema.
            </p>
            <p className="mt-4 text-2xl font-bold text-blue-600">482</p>
          </div>

        </div>
      </section>

    </div>
  );
}
