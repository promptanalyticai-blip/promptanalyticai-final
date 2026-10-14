import DashboardShell from "@/components/dashboard/DashboardShell";

export default function LatencyPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Latency
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Latencia del sistema DNIP. Aquí se monitorean tiempos de respuesta,
            demoras internas, rendimiento de señales y velocidad del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
