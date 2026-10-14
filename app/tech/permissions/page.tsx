import DashboardShell from "@/components/dashboard/DashboardShell";

export default function PermissionsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Permisos y Accesos
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300">
            Control de permisos del sistema DNIP/BLAYZIT. Define qué módulos,
            acciones y decisiones puede ejecutar cada rol dentro del sistema.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
