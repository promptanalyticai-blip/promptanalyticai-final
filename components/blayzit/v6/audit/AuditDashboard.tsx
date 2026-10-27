"use client";

export default function AuditDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="max-w-6xl mx-auto py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            BLAYZIT V6 · Audit
          </h1>
          <p className="text-sm text-slate-500">
            Auditoría de decisiones, señales y motores híbridos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Decisiones auditadas
              </h2>
              <p className="mt-3 text-4xl font-semibold text-slate-900">128</p>
              <p className="mt-2 text-xs text-slate-500">
                Decisiones recientes revisadas por el motor de auditoría.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-red-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-red-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Alertas críticas
              </h2>
              <p className="mt-3 text-4xl font-semibold text-red-700">5</p>
              <p className="mt-2 text-xs text-slate-500">
                Casos que requieren revisión manual inmediata.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 backdrop-blur-sm shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="relative p-5">
              <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Cumplimiento
              </h2>
              <p className="mt-3 text-4xl font-semibold text-emerald-700">
                93%
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Porcentaje de decisiones alineadas con las reglas DNIP/ADIP.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
          <div className="p-5 space-y-2">
            <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Motor de auditoría V6
            </h2>
            <p className="text-xs text-slate-500">
              Arquitectura WOW ULTRA PRIME aplicada sobre trazas de decisiones,
              señales y riesgo híbrido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
