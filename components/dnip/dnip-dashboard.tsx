// components/dnip/dnip-dashboard.tsx
import React from "react";
import { getDnipMetrics, getDnipHistory, DnipMetrics, DnipHistoryItem } from "@/lib/dnip-engine";

export async function DnipDashboard() {
  const metrics: DnipMetrics = await getDnipMetrics();
  const history: DnipHistoryItem[] = await getDnipHistory();

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">Estado DNIP</h2>
        <p className="text-sm">Load: {Math.round(metrics.load * 100)}%</p>
        <p className="text-sm">Latency: {metrics.latencyMs} ms</p>
        <p className="text-sm">Error rate: {Math.round(metrics.errorRate * 100)}%</p>
        <p className="text-sm">Jobs in queue: {metrics.jobsInQueue}</p>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold">Historial</h3>
        {history.map((item) => (
          <div key={item.id} className="flex justify-between text-xs">
            <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
            <span>{Math.round(item.load * 100)}% · {item.latencyMs} ms · {Math.round(item.errorRate * 100)}%</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DnipDashboard;
