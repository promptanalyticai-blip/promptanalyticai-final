import DashboardShell from "@/components/tech/DashboardShell";

export default function LimitsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Limits
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Límites del sistema DNIP. Aquí se visualizan restricciones internas,
            capacidades máximas, tolerancias y valores de seguridad del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
