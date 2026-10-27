"use client";

export default function DnipDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="max-w-6xl mx-auto py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            BLAYZIT V6 · DNIP
          </h1>
          <p className="text-sm text-slate-500">
            Motor de análisis inteligente — arquitectura WOW ULTRA PRIME.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Señales procesadas */}
          <div className="relative overflow-hidden rounded-2xl border border-sky-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/70 via-transparent to-indigo-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Señales procesadas
              </h2>
              <p className="mt-3 text-4xl font-semibold text-slate-900">0.467</p>
              <p className="mt-2 text-xs text-slate-500">
                Promedio de intensidad de señales.
              </p>
            </div>
          </div>

          {/* Riesgo base */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-amber-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-transparent to-orange-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Riesgo base DNIP
              </h2>
              <p className="mt-3 text-4xl font-semibold text-amber-700">
                46.7%
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Nivel de riesgo antes de aplicar patrones.
              </p>
            </div>
          </div>

          {/* Riesgo final */}
          <div className="relative overflow-hidden rounded-2xl border border-red-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-red-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/70 via-transparent to-red-50/40 opacity-80" />
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Riesgo final DNIP
              </h2>
              <p className="mt-3 text-4xl font-semibold text-red-700">58.3%</p>
              <p className="mt-2 text-xs text-slate-500">
                Riesgo tras aplicar patrones financieros.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Patrones */}
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
            <div className="p-5 space-y-2">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Patrones detectados
              </h2>
              <p className="text-sm font-medium text-slate-900">
                Patrón financiero
              </p>
              <p className="text-xs text-slate-500">
                Boost por patrones:{" "}
                <span className="font-semibold text-slate-900">11.7%</span>
              </p>
            </div>
          </div>

          {/* Motor híbrido */}
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
            <div className="p-5 space-y-2">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Motor Híbrido DNIP V6
              </h2>
              <p className="text-xs text-slate-500">
                Boost híbrido:{" "}
                <span className="font-semibold text-slate-900">14.0%</span>
              </p>
              <p className="text-xs text-slate-500">
                Riesgo final híbrido:{" "}
                <span className="font-semibold text-red-700">60.7%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
