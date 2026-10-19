// components/blayzit/v6/adip/AdipDashboard.tsx
"use client";

type AdipAction = {
  label: string;
  type: "auto" | "predictive" | "rule";
  status: "executed" | "pending" | "failed";
};

type AdipData = {
  automationScore: number;
  executed: AdipAction[];
  pending: AdipAction[];
  failed: AdipAction[];
};

export default function AdipDashboard({ data }: { data: AdipData }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">ADIP · Automatización Inteligente</h2>

      {/* Score */}
      <div className="mb-4">
        <p className="text-sm text-slate-600">Nivel de automatización</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-2xl font-bold">{data.automationScore}</span>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">
            {data.automationScore >= 75 ? "ALTO" : data.automationScore >= 40 ? "MEDIO" : "BAJO"}
          </span>
        </div>
      </div>

      {/* Ejecutadas */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Acciones ejecutadas</p>
        <div className="space-y-1">
          {data.executed.map((a) => (
            <div key={a.label} className="flex items-center justify-between text-xs px-2 py-1 rounded-md bg-green-50">
              <span>{a.label}</span>
              <span className="px-2 py-0.5 rounded-full bg-green-200 text-green-800">
                {a.type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pendientes */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Acciones pendientes</p>
        <div className="space-y-1">
          {data.pending.map((a) => (
            <div key={a.label} className="flex items-center justify-between text-xs px-2 py-1 rounded-md bg-yellow-50">
              <span>{a.label}</span>
              <span className="px-2 py-0.5 rounded-full bg-yellow-200 text-yellow-800">
                {a.type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fallidas */}
      <div>
        <p className="text-sm font-medium mb-1">Acciones fallidas</p>
        <div className="space-y-1">
          {data.failed.map((a) => (
            <div key={a.label} className="flex items-center justify-between text-xs px-2 py-1 rounded-md bg-red-50">
              <span>{a.label}</span>
              <span className="px-2 py-0.5 rounded-full bg-red-200 text-red-800">
                {a.type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
