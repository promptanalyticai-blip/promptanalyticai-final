// components/dnip/dnip-insights.tsx
import React from "react";
import { getDnipMetrics } from "@/lib/dnip-engine";

export async function DnipInsights() {
  const metrics = await getDnipMetrics();

  return (
    <div className="space-y-2">
      <p className="text-sm">Load: {Math.round(metrics.load * 100)}%</p>
      <p className="text-sm">Latency: {metrics.latencyMs} ms</p>
      <p className="text-sm">Error rate: {Math.round(metrics.errorRate * 100)}%</p>
      <p className="text-sm">Jobs in queue: {metrics.jobsInQueue}</p>
    </div>
  );
}
