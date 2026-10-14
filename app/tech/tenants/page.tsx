export default function TenantsPage() {
  const tenants = [
    { name: "Tenant A", status: "Activo" },
    { name: "Tenant B", status: "En revisión" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tenants</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Gestión de tenants</h2>

        <div className="space-y-3">
          {tenants.map((t) => (
            <div key={t.name} className="border border-slate-200 rounded-lg p-3 flex justify-between">
              <span className="font-semibold text-slate-900">{t.name}</span>
              <span className="text-sm text-slate-600">{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
