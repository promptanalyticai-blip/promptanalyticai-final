import DashboardShell from "@/components/tech/DashboardShell";

export default function IntegrationsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Integraciones del Sistema DNIP/BLAYZIT
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel de integraciones del sistema DNIP. Aquí se administran
            conexiones externas, APIs, servicios de terceros, pipelines
            conectados y módulos externos del ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
