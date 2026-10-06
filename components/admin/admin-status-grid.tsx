// components/admin/admin-status-grid.tsx
import React from "react";
import { getAdminMetrics } from "@/lib/admin-engine";

export async function AdminStatusGrid() {
  const metrics = await getAdminMetrics();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border bg-card p-3">
        <p className="text-xs text-muted-foreground">Load</p>
        <p className="text-lg font-semibold">{Math.round(metrics.dnip.load * 100)}%</p>
      </div>
      <div className="rounded-lg border bg-card p-3">
        <p className="text-xs text-muted-foreground">Latency</p>
        <p className="text-lg font-semibold">{metrics.dnip.latencyMs} ms</p>
      </div>
      <div className="rounded-lg border bg-card p-3">
        <p className="text-xs text-muted-foreground">Error rate</p>
        <p className="text-lg font-semibold">{Math.round(metrics.dnip.errorRate * 100)}%</p>
      </div>
      <div className="rounded-lg border bg-card p-3">
        <p className="text-xs text-muted-foreground">Jobs in queue</p>
        <p className="text-lg font-semibold">{metrics.dnip.jobsInQueue}</p>
      </div>
    </div>
  );
}
