// components/dnip/dnip-dashboard.tsx
"use client";

import { useEffect, useState } from "react";
import { getDnipMetrics, getDnipHistory, DnipMetrics, DnipHistoryItem } from "@/lib/dnip-engine";

export default function DnipDashboard() {
  const [metrics, setMetrics] = useState<DnipMetrics | null>(null);
  const [history, setHistory] = useState<DnipHistoryItem[]>([]);

  useEffect(() => {
    (async () => {
      setMetrics(await getDnipMetrics());
      setHistory(await getDnipHistory());
    })();
  }, []);

  if (!metrics) return <p>Cargando DNIP…</p>;

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">Estado DNIP</h2>
        <p>Load: {Math.round(metrics.load * 100)}%</p>
        <p>Latency: {metrics.latencyMs} ms</p>
        <p>Error rate: {Math.round(metrics.errorRate * 100)}%</p>
        <p>Jobs: {metrics.jobsInQueue}</p>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold">Historial</h3>
        {history.map((item) => (
          <div key={item.id} className="flex justify-between text-xs">
            <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
            <span>
              {Math.round(item.load * 100)}% · {item.latencyMs} ms ·{" "}
              {Math.round(item.errorRate * 100)}%
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
