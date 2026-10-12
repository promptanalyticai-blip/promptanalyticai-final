"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { subject: "Vacancy Risk", value: 85 },
  { subject: "Anomaly", value: 70 },
  { subject: "Cost Rate", value: 60 },
  { subject: "Impact", value: 75 },
];

export default function RiskChart() {
  return (
    <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Risk & Impact Analysis</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
            <PolarRadiusAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Radar
              name="Risk"
              dataKey="value"
              stroke="#818cf8"
              fill="#818cf8"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
