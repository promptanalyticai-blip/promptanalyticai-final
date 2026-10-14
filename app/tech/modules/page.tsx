import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ModulesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Módulos del Sistema DNIP
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel de módulos del sistema DNIP: procesamiento de señales,
            analítica, exportación, WOW Engine, inteligencia predictiva,
            mantenimiento y más.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
