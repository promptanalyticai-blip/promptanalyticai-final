"use client";

export default function TelemetryDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="max-w-6xl mx-auto py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            BLAYZIT V6 · Telemetry
          </h1>
          <p className="text-sm text-slate-500">
            Telemetría avanzada sobre señales, motores y rendimiento híbrido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Latencia del motor
              </h2>
              <p className="mt-3 text-4xl font-semibold text-slate-900">
                12ms
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Tiempo promedio de respuesta del motor híbrido.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-amber-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Carga del sistema
              </h2>
              <p className="mt-3 text-4xl font-semibold text-amber-700">
                68%
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Carga actual del sistema DNIP/ADIP.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Rendimiento híbrido
              </h2>
              <p className="mt-3 text-4xl font-semibold text-emerald-700">
                92%
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Rendimiento del motor híbrido V6.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
          <div className="p-5 space-y-2">
            <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Telemetría V6
            </h2>
            <p className="text-xs text-slate-500">
              Arquitectura WOW ULTRA PRIME aplicada sobre telemetría de motores
              y señales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
