//app/dashboard/logs/page.tsx
export default function LogsPage() {
  const logs = [
    { level: "INFO", message: "BLAYZIT Engine iniciado.", time: "2026-10-12 12:00" },
    { level: "WARN", message: "Latencia elevada en DNIP.", time: "2026-10-12 12:05" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Logs</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Logs recientes</h2>

        <div className="space-y-2 text-sm font-mono">
          {logs.map((l, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-2">
              <span className="text-xs text-slate-500">{l.time}</span>
              <span className="ml-2 text-xs font-semibold">[{l.level}]</span>
              <span className="ml-2 text-slate-800">{l.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
