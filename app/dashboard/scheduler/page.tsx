import DashboardShell from "@/components/dashboard/DashboardShell";

export default function SchedulerPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Scheduler
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Programador interno del sistema DNIP. Aquí se gestionan tareas
            programadas, ciclos automáticos, intervalos y procesos recurrentes
            del ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
