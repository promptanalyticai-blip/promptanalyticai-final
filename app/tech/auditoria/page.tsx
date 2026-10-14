//app/dashboard/auditoria/page.tsx
export default function AuditoriaPage() {
  const eventos = [
    { actor: "Admin", action: "Modificó configuración de BLAYZIT", time: "2026-10-12 14:32" },
    { actor: "Analista", action: "Exportó métricas de DNIP", time: "2026-10-12 13:10" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Auditoría</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Eventos recientes</h2>

        <div className="space-y-3">
          {eventos.map((e, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-3">
              <div className="text-sm text-slate-800">{e.action}</div>
              <div className="text-xs text-slate-500">{e.actor} — {e.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
