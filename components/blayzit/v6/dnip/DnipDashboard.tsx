// components/blayzit/v6/dnip/DnipDashboard.tsx
"use client";

type DnipData = {
  riskScore: number;
  patterns: string[];
  anomalies: { label: string; severity: "low" | "medium" | "high" }[];
  threats: { label: string; level: "info" | "warning" | "critical" }[];
};

export default function DnipDashboard({ data }: { data: DnipData }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">DNIP · Riesgo y Patrones</h2>

      {/* Riesgo */}
      <div className="mb-4">
        <p className="text-sm text-slate-600">Riesgo global</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-2xl font-bold">{data.riskScore}</span>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">
            {data.riskScore >= 75 ? "ALTO" : data.riskScore >= 40 ? "MEDIO" : "BAJO"}
          </span>
        </div>
      </div>

      {/* Patrones */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Patrones detectados</p>
        <ul className="text-xs text-slate-700 list-disc pl-4">
          {data.patterns.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Anomalías */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Anomalías</p>
        <div className="space-y-1">
          {data.anomalies.map((a) => (
            <div
              key={a.label}
              className="flex items-center justify-between text-xs px-2 py-1 rounded-md bg-slate-50"
            >
              <span>{a.label}</span>
              <span
                className={
                  "px-2 py-0.5 rounded-full " +
                  (a.severity === "high"
                    ? "bg-red-100 text-red-700"
                    : a.severity === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700")
                }
              >
                {a.severity.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Threats */}
      <div>
        <p className="text-sm font-medium mb-1">Amenazas</p>
        <div className="space-y-1">
          {data.threats.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-between text-xs px-2 py-1 rounded-md bg-slate-50"
            >
              <span>{t.label}</span>
              <span
                className={
                  "px-2 py-0.5 rounded-full " +
                  (t.level === "critical"
                    ? "bg-red-100 text-red-700"
                    : t.level === "warning"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-slate-100 text-slate-700")
                }
              >
                {t.level.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
