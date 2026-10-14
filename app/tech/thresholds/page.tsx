import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ThresholdsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Thresholds
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Umbrales del sistema DNIP. Aquí se definen límites operativos,
            valores críticos, alertas automáticas y puntos de acción del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
