import DashboardShell from "@/components/tech/DashboardShell";

export default function RedundancyPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Redundancy Layer
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Capa de redundancia del sistema DNIP. Aquí se monitora la duplicación
            de procesos, respaldo de señales y tolerancia a fallos del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
