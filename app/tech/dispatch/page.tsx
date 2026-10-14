import DashboardShell from "@/components/dashboard/DashboardShell";

export default function DispatchPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Dispatch Layer
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Capa de despacho del sistema DNIP. Aquí se visualiza cómo las tareas
            son enviadas, distribuidas y ejecutadas por los módulos internos del
            motor BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
