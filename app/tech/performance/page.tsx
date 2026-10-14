import DashboardShell from "@/components/tech/DashboardShell";

export default function PerformancePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Rendimiento del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Métricas de rendimiento del sistema DNIP: velocidad de procesamiento,
            eficiencia del motor, tiempos de respuesta y carga de trabajo.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
