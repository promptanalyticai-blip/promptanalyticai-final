// components/connection/connection-dashboard.tsx
import React, { useEffect, useState } from "react";
import { getDnipMetrics, DnipMetrics } from "@/lib/dnip-engine";

export function ConnectionDashboard() {
  const [metrics, setMetrics] = useState<DnipMetrics | null>(null);

  useEffect(() => {
    (async () => {
      const m = await getDnipMetrics();
      setMetrics(m);
    })();
  }, []);

  if (!metrics) return <p className="text-sm">Cargando métricas…</p>;

  return (
    <div className="space-y-2 text-sm">
      <p>Load: {Math.round(metrics.load * 100)}%</p>
      <p>Latency: {metrics.latencyMs} ms</p>
      <p>Error rate: {Math.round(metrics.errorRate * 100)}%</p>
      <p>Jobs in queue: {metrics.jobsInQueue}</p>
    </div>
  );
}

export default ConnectionDashboard;
