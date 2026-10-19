// components/blayzit/master/V6AdvancedCharts.tsx
"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function V6AdvancedCharts({
  dnip,
  ia,
  metrics,
  audit,
}: {
  dnip: any;
  ia: any;
  metrics: any[];
  audit: any[];
}) {
  // === Heatmap de Riesgo (DNIP) ===
  const heatmapData = dnip.patterns.map((p: string, i: number) => ({
    name: p,
    value: dnip.riskScore + i * 5,
  }));

  // === Timeline de Auditoría ===
  const auditTimeline = audit.map((e, i) => ({
    index: i + 1,
    event: e.eventType,
    time: e.timestamp,
  }));

  // === Correlación DNIP ↔ IA ===
  const correlationData = dnip.anomalies.map((a: any, i: number) => ({
    x: dnip.riskScore + i * 3,
    y: ia.similarityScore * 100 - i * 4,
    z: (a.severity === "high" ? 40 : a.severity === "medium" ? 25 : 10),
    label: a.label,
  }));

  // === Evolución de Latencia ===
  const latencyEvolution = metrics.map((m, i) => ({
    index: i + 1,
    module: m.module,
    value: m.durationMs,
  }));

  // === Evolución de Riesgo DNIP ===
  const riskEvolution = [
    { step: "Inicio", value: dnip.riskScore - 10 },
    { step: "Patrones", value: dnip.riskScore - 5 },
    { step: "Anomalías", value: dnip.riskScore },
    { step: "Amenazas", value: dnip.riskScore + 8 },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">

      {/* HEATMAP */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">Heatmap · Riesgo DNIP</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={heatmapData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#dc2626" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TIMELINE AUDITORÍA */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">Timeline · Auditoría</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={auditTimeline}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="index" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* CORRELACIÓN DNIP ↔ IA */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">Correlación · DNIP ↔ IA</h3>
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" name="Riesgo DNIP" />
            <YAxis dataKey="y" name="Similitud IA" />
            <ZAxis dataKey="z" range={[10, 50]} />
            <Tooltip />
            <Scatter data={correlationData} fill="#16a34a" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* EVOLUCIÓN DE LATENCIA */}
      <div className="border rounded-lg p-4 bg-white col-span-2">
        <h3 className="font-semibold mb-3">Evolución · Latencia</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={latencyEvolution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* EVOLUCIÓN DE RIESGO DNIP */}
      <div className="border rounded-lg p-4 bg-white col-span-2">
        <h3 className="font-semibold mb-3">Evolución · Riesgo DNIP</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={riskEvolution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="step" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#dc2626" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
