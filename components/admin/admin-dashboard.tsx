// components/admin/admin-dashboard.tsx
"use client";

import { useEffect, useState } from "react";
import { getAdminMetrics, AdminMetrics } from "@/lib/admin-engine";

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);

  useEffect(() => {
    (async () => {
      setMetrics(await getAdminMetrics());
    })();
  }, []);

  if (!metrics) return <p>Cargando Admin…</p>;

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">DNIP (Admin)</h2>
        <p>Load: {Math.round(metrics.dnip.load * 100)}%</p>
        <p>Latency: {metrics.dnip.latencyMs} ms</p>
        <p>Error rate: {Math.round(metrics.dnip.errorRate * 100)}%</p>
        <p>Jobs: {metrics.dnip.jobsInQueue}</p>
      </section>

      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">ADIP (Admin)</h2>
        <p>Score: {Math.round(metrics.adip.score * 100)}%</p>
        <p>Focus: {metrics.adip.focus.join(", ")}</p>
      </section>
    </div>
  );
}
