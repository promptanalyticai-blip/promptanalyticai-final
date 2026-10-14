export const dynamic = "force-dynamic";

export default function DNIPPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">DNIP — Data Normalization & Ingestion Pipeline</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-2">Estado del Pipeline</h2>
        <p className="text-slate-600">Monitoreo del estado actual del DNIP.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-2">Ingesta de Datos</h2>
        <p className="text-slate-600">Control de ingesta y normalización.</p>
      </div>
    </div>
  );
}
