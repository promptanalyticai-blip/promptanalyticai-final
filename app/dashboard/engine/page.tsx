import DashboardShell from "@/components/dashboard/DashboardShell";

export default function EnginePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Motor DNIP — Núcleo del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Núcleo del motor DNIP. Aquí se ejecutan pipelines, decisiones,
            señales, correlaciones y procesos internos que alimentan el sistema
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
