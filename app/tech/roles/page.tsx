export default function RolesPage() {
  const roles = [
    { name: "Admin", description: "Acceso completo al sistema." },
    { name: "Analista", description: "Acceso a métricas y decisiones." },
    { name: "Operador", description: "Gestión de alertas y pipelines." },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Roles</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Definición de roles</h2>

        <div className="space-y-3">
          {roles.map((role) => (
            <div key={role.name} className="border border-slate-200 rounded-lg p-3">
              <div className="font-semibold text-slate-900">{role.name}</div>
              <div className="text-sm text-slate-600">{role.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
