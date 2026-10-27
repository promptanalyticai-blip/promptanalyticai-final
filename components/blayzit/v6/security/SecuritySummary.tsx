"use client";

export default function SecurityDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          BLAYZIT V6 · Security
        </h1>
        <p className="text-sm text-slate-500">
          Seguridad operativa, alertas y trazabilidad híbrida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Alertas activas
          </h2>
          <p className="text-3xl font-bold text-red-600">9</p>
          <p className="text-xs text-slate-500 mt-1">
            Alertas de seguridad detectadas por el motor híbrido.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Incidentes críticos
          </h2>
          <p className="text-3xl font-bold text-amber-600">3</p>
          <p className="text-xs text-slate-500 mt-1">
            Incidentes que requieren intervención inmediata.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Integridad del sistema
          </h2>
          <p className="text-3xl font-bold text-emerald-600">97%</p>
          <p className="text-xs text-slate-500 mt-1">
            Nivel de integridad del sistema DNIP/ADIP.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <h2 className="text-sm font-semibold text-slate-700 mb-2">
          Motor de seguridad V6
        </h2>
        <p className="text-xs text-slate-500">
          Arquitectura WOW ULTRA PRIME aplicada sobre trazas de seguridad y
          riesgo híbrido.
        </p>
      </div>
    </div>
  );
}
