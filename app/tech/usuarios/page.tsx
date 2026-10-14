export default function UsuariosPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Usuarios</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Gestión de usuarios</h2>

        <ul className="space-y-3">
          <li className="border border-slate-200 rounded-lg p-3">
            <strong>Admin</strong> — Acceso completo
          </li>
          <li className="border border-slate-200 rounded-lg p-3">
            <strong>Analista</strong> — Métricas y decisiones
          </li>
          <li className="border border-slate-200 rounded-lg p-3">
            <strong>Operador</strong> — Alertas y pipelines
          </li>
        </ul>
      </div>
    </div>
  );
}
