"use client";

export default function AdipDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          BLAYZIT V6 · ADIP
        </h1>
        <p className="text-sm text-slate-500">
          Motor de análisis de desempeño e impacto operativo.
        </p>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Índice de desempeño
          </h2>
          <p className="text-3xl font-bold text-slate-900">0.82</p>
          <p className="text-xs text-slate-500 mt-1">
            Promedio de desempeño operativo en el periodo actual.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Impacto operativo
          </h2>
          <p className="text-3xl font-bold text-emerald-600">67%</p>
          <p className="text-xs text-slate-500 mt-1">
            Porcentaje de operaciones con impacto positivo.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Alertas ADIP
          </h2>
          <p className="text-3xl font-bold text-amber-600">12</p>
          <p className="text-xs text-slate-500 mt-1">
            Alertas activas relacionadas con desempeño crítico.
          </p>
        </div>
      </div>

      {/* Bloques secundarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Segmentos con mayor impacto
          </h2>
          <ul className="text-xs text-slate-600 space-y-1">
            <li>• Operaciones financieras</li>
            <li>• Operaciones logísticas</li>
            <li>• Operaciones de riesgo</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Motor ADIP V6
          </h2>
          <p className="text-xs text-slate-500">
            Arquitectura híbrida aplicada sobre métricas de desempeño y riesgo
            operativo.
          </p>
        </div>
      </div>
    </div>
  );
}
