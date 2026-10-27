"use client";

export default function AdipDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="max-w-6xl mx-auto py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            BLAYZIT V6 · ADIP
          </h1>
          <p className="text-sm text-slate-500">
            Motor de análisis de desempeño e impacto operativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-transparent to-teal-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Índice de desempeño
              </h2>
              <p className="mt-3 text-4xl font-semibold text-slate-900">0.82</p>
              <p className="mt-2 text-xs text-slate-500">
                Promedio de desempeño operativo en el periodo actual.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-transparent to-green-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Impacto operativo
              </h2>
              <p className="mt-3 text-4xl font-semibold text-emerald-700">
                67%
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Porcentaje de operaciones con impacto positivo.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-amber-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-transparent to-orange-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Alertas ADIP
              </h2>
              <p className="mt-3 text-4xl font-semibold text-amber-700">12</p>
              <p className="mt-2 text-xs text-slate-500">
                Alertas activas relacionadas con desempeño crítico.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
            <div className="p-5 space-y-2">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Segmentos con mayor impacto
              </h2>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Operaciones financieras</li>
                <li>• Operaciones logísticas</li>
                <li>• Operaciones de riesgo</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
            <div className="p-5 space-y-2">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Motor ADIP V6
              </h2>
              <p className="text-xs text-slate-500">
                Arquitectura híbrida aplicada sobre métricas de desempeño y
                riesgo operativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
