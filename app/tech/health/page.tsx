import DashboardShell from "@/components/tech/DashboardShell";

export default function HealthPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Salud del Sistema DNIP
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Estado general del sistema DNIP/BLAYZIT. Aquí se monitorean fallos,
            estabilidad, uptime, latencia y salud de los módulos internos.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
