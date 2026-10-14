import DashboardShell from "@/components/tech/DashboardShell";

export default function PipelinesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Pipelines
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Flujo interno del sistema DNIP: señales → procesamiento → decisión →
            exportación. Aquí se visualizan los pipelines que conectan los
            módulos del motor BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
