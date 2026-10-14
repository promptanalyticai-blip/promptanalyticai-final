import DashboardShell from "@/components/tech/DashboardShell";

export default function ThroughputPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Throughput
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Throughput del sistema DNIP. Aquí se visualiza la cantidad de
            señales procesadas por segundo, carga de trabajo y capacidad del
            motor BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
