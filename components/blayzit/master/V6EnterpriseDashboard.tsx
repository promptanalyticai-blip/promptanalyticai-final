// components/blayzit/master/V6EnterpriseDashboard.tsx
"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function V6EnterpriseDashboard({
  dnip,
  adip,
  ia,
  security,
  metrics,
  audit,
}: {
  dnip: any;
  adip: any;
  ia: any;
  security: any;
  metrics: any[];
  audit: any[];
}) {
  const dnipRiskData = [
    { name: "Riesgo", value: dnip.riskScore ?? 0 },
    { name: "Máximo", value: 100 },
  ];

  const adipAutoData = [
    { name: "Automatización", value: adip.automationScore ?? 0 },
    { name: "Máximo", value: 100 },
  ];

  const iaSimilarityData = [
    { name: "Similitud", value: Math.round((ia.similarityScore ?? 0) * 100) },
    { name: "Máximo", value: 100 },
  ];

  const securityData = [
    { name: "Permitidos", value: security.allowed ?? 0 },
    { name: "Bloqueados", value: security.blocked ?? 0 },
  ];

  const telemetryData = metrics.map((m) => ({
    name: m.module,
    value: m.durationMs,
  }));

  const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b"];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">

      {/* DNIP */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">DNIP · Riesgo Global</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dnipRiskData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
            >
              {dnipRiskData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ADIP */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">ADIP · Nivel de Automatización</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={adipAutoData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
            >
              {adipAutoData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* IA */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">IA · Similitud Semántica</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={iaSimilarityData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
            >
              {iaSimilarityData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Seguridad */}
      <div className="border rounded-lg p-4 bg-white">
        <h3 className="font-semibold mb-3">Seguridad · Actividad</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={securityData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {securityData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Telemetría */}
      <div className="border rounded-lg p-4 bg-white col-span-2">
        <h3 className="font-semibold mb-3">Telemetría · Latencia por Módulo</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={telemetryData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Auditoría */}
      <div className="border rounded-lg p-4 bg-white col-span-2">
        <h3 className="font-semibold mb-3">Auditoría · Últimos Eventos</h3>
        <ul className="space-y-2 text-xs text-slate-700">
          {audit.map((l, i) => (
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
      </div>

    </div>
  );
}
