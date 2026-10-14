import DashboardShell from "@/components/tech/DashboardShell";

export default function TelemetryPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Telemetry
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Telemetría interna del sistema DNIP: latencia, tiempos de respuesta,
            rendimiento y métricas internas del motor BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
