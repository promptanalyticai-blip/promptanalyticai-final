import DashboardShell from "@/components/dashboard/DashboardShell";

export default function JobsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Jobs y Tareas del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300">
            Monitoreo de tareas en segundo plano: procesamiento de señales,
            generación de reportes, exportaciones, análisis predictivo y
            mantenimiento del motor DNIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
