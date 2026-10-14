import DashboardShell from "@/components/tech/DashboardShell";

export default function OperationsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Operaciones del Sistema DNIP
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel de operaciones del sistema DNIP/BLAYZIT. Aquí se visualizan
            procesos operativos, ejecución de decisiones, señales activas y
            estados internos del motor.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
