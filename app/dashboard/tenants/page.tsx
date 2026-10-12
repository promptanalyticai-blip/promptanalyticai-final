import DashboardShell from "@/components/dashboard/DashboardShell";

export default function TenantsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Gestión de Tenants
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
          <p className="text-slate-300">
            Aquí podrás administrar los tenants, workspaces y configuraciones
            empresariales del sistema DNIP/BLAYZIT.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
