// components/admin/admin-dashboard.tsx
import React from "react";
import { getAdminMetrics } from "@/lib/admin-engine";

export async function AdminDashboard() {
  const metrics = await getAdminMetrics();

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">DNIP (Admin)</h2>
        <p className="text-sm">Load: {Math.round(metrics.dnip.load * 100)}%</p>
        <p className="text-sm">Latency: {metrics.dnip.latencyMs} ms</p>
        <p className="text-sm">Error rate: {Math.round(metrics.dnip.errorRate * 100)}%</p>
        <p className="text-sm">Jobs in queue: {metrics.dnip.jobsInQueue}</p>
      </section>

      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">ADIP (Admin)</h2>
        <p className="text-sm">Score: {Math.round(metrics.adip.score * 100)}%</p>
        <p className="text-sm">Focus: {metrics.adip.focus.join(", ")}</p>
      </section>
    </div>
  );
}
