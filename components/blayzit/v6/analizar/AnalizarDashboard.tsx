"use client";

export default function AnalizarDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="max-w-6xl mx-auto py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            BLAYZIT V6 · Analizar
          </h1>
          <p className="text-sm text-slate-500">
            Módulo de análisis profundo de señales y patrones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-sky-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-transparent to-indigo-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Señales activas
              </h2>
              <p className="mt-3 text-4xl font-semibold text-slate-900">34</p>
              <p className="mt-2 text-xs text-slate-500">
                Señales actualmente en análisis profundo.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-amber-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-transparent to-orange-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Patrones en revisión
              </h2>
              <p className="mt-3 text-4xl font-semibold text-amber-700">7</p>
              <p className="mt-2 text-xs text-slate-500">
                Patrones DNIP/ADIP en proceso de validación.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
          <div className="p-5 space-y-2">
            <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Motor de análisis V6
            </h2>
            <p className="text-xs text-slate-500">
              Este módulo permite explorar señales, patrones y correlaciones
              utilizando la arquitectura WOW ULTRA PRIME.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
