export default function ExportacionPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Exportación</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-2">Exportar datos</h2>
        <p className="text-slate-600">Módulo para exportar métricas, logs y auditoría.</p>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Exportar CSV
        </button>
      </div>
    </div>
  );
}
