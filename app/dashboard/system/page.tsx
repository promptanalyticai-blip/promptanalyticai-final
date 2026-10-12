import DashboardShell from "@/components/dashboard/DashboardShell";

export default function SystemOverviewPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Visión General del Sistema DNIP/BLAYZIT
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel de control general del sistema DNIP/BLAYZIT. Aquí puedes ver
            el estado global del motor de decisiones, módulos activos, señales
            procesadas, rendimiento y estabilidad del sistema.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
