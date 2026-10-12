import DashboardShell from "@/components/dashboard/DashboardShell";

export default function RolesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Roles del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300">
            Administración de roles empresariales: SuperAdmin, Admin, Analyst,
            Operator, Auditor y más. Control granular del acceso al motor DNIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
