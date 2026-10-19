"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "00:00", value: 40 },
  { name: "00:05", value: 32 },
  { name: "00:10", value: 28 },
  { name: "00:15", value: 35 },
  { name: "00:20", value: 30 },
];

export default function RealLineChart() {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        border border-slate-200 
        p-7 
        flex flex-col 
        gap-4
      "
    >
      <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
        Latencia en tiempo
      </h3>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1F7FCC" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
