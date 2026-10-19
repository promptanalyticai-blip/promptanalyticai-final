// components/blayzit/master/V6SecurityDashboard.tsx
"use client";

type Threat = {
  label: string;
  level: "info" | "warning" | "critical";
};

type Anomaly = {
  label: string;
  severity: "low" | "medium" | "high";
};

type SecurityData = {
  threats: Threat[];
  anomalies: Anomaly[];
  blocked: number;
  allowed: number;
};

export default function V6SecurityDashboard({ data }: { data: SecurityData }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">Seguridad · Análisis</h2>

      {/* Totales */}
      <div className="mb-4 flex gap-4">
        <div className="text-center">
          <p className="text-xs text-slate-600">Permitidos</p>
          <p className="text-xl font-bold text-green-600">{data.allowed}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-600">Bloqueados</p>
          <p className="text-xl font-bold text-red-600">{data.blocked}</p>
        </div>
      </div>

      {/* Amenazas */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Amenazas detectadas</p>
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
                    : "bg-slate-200 text-slate-700")
                }
              >
                {t.level.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Anomalías */}
      <div>
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
    </div>
  );
}
