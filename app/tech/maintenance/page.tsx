import DashboardShell from "@/components/tech/DashboardShell";

export default function MaintenancePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Mantenimiento del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel de mantenimiento del sistema DNIP/BLAYZIT. Aquí se gestionan
            tareas de optimización, limpieza, procesos internos y estabilidad
            del motor de decisiones.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
