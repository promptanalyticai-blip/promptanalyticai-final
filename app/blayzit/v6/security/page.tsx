"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { Shield, Lock, AlertTriangle, Gauge } from "lucide-react";

export default function SecurityV6() {
  return (
    <div className="space-y-12">

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={Shield} color="rose" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Security V6 · Seguridad Operativa
            </h1>
            <p className="text-sm text-slate-500">
              Monitoreo avanzado de seguridad, riesgos y protección del sistema.
            </p>
          </div>
        </div>
      </section>

      {/* ESTADO DE SEGURIDAD */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Estado de seguridad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MÉTRICA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Lock} color="rose" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Integridad del sistema
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de protección de los componentes críticos.
            </p>
            <p className="mt-4 text-3xl font-bold text-rose-600">98%</p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={AlertTriangle} color="amber" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Alertas activas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Riesgos detectados por el sistema de seguridad.
            </p>
            <p className="mt-4 text-3xl font-bold text-amber-600">3</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Gauge} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Estabilidad de seguridad
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de estabilidad del sistema de protección.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">91%</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN DE PROTECCIÓN AVANZADA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Protección avanzada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* TARJETA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Shield} color="rose" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Firewall inteligente
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Protección dinámica contra amenazas externas.
            </p>
            <p className="mt-4 text-2xl font-bold text-rose-600">Activo</p>
          </div>

          {/* TARJETA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Lock} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Cifrado avanzado
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Cifrado de datos en tránsito y en reposo.
            </p>
            <p className="mt-4 text-2xl font-bold text-purple-600">AES-256</p>
          </div>

        </div>
      </section>

    </div>
  );
}
