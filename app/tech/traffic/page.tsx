import DashboardShell from "@/components/tech/DashboardShell";

export default function TrafficPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Traffic
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Tráfico del sistema DNIP. Aquí se visualiza el volumen de señales,
            actividad entrante, flujo interno y distribución del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
