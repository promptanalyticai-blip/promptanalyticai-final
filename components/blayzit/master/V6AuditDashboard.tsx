// components/blayzit/master/V6AuditDashboard.tsx
"use client";

type AuditEntry = {
  eventType: string;
  timestamp: string;
  payload: any;
};

export default function V6AuditDashboard({ logs }: { logs: AuditEntry[] }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">Auditoría · Eventos</h2>

      {logs?.length ? (
        <ul className="space-y-2 text-xs text-slate-700">
          {logs.map((l, i) => (
            <li key={i} className="border rounded-md p-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{l.eventType}</span>
                <span className="text-slate-500">{l.timestamp}</span>
              </div>
              <pre className="text-[10px] bg-slate-50 p-2 rounded-md mt-1 overflow-x-auto">
                {JSON.stringify(l.payload, null, 2)}
              </pre>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-slate-500">Sin eventos registrados.</p>
      )}
    </div>
  );
}
