import DashboardShell from "@/components/dashboard/DashboardShell";

export default function DiagnosticsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Diagnostics
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Diagnóstico interno del sistema DNIP: fallos, trazabilidad,
            inspección técnica y análisis profundo del motor BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
