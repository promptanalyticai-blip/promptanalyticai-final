// components/dnip/dnip-charts.tsx
import React from "react";
import { getDnipChart, DnipChartPoint } from "@/lib/dnip-engine";

export async function DnipCharts() {
  const points: DnipChartPoint[] = await getDnipChart();

  return (
    <div className="space-y-2">
      {points.map((p) => (
        <div key={p.timestamp} className="flex items-center justify-between text-xs">
          <span>{new Date(p.timestamp).toLocaleTimeString()}</span>
          <span>{Math.round(p.load * 100)}%</span>
        </div>
      ))}
    </div>
  );
}
