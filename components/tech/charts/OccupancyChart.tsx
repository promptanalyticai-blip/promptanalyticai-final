"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jul", towerA: 82, towerB: 75, towerC: 68 },
  { name: "Aug", towerA: 78, towerB: 70, towerC: 65 },
  { name: "Sep", towerA: 62, towerB: 58, towerC: 55 },
];

export default function OccupancyChart() {
  return (
    <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Occupancy Rate Trend</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Line
              type="monotone"
              dataKey="towerA"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="towerB"
              stroke="#818cf8"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="towerC"
              stroke="#f472b6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
