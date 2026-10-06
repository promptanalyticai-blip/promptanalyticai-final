// components/adip/adip-dashboard.tsx
import React from "react";
import { getAdipSummary } from "@/lib/adip-engine";
import { getDnipMetrics } from "@/lib/dnip-engine";

export async function AdipDashboard() {
  const adip = await getAdipSummary();
  const dnip = await getDnipMetrics();

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">Resumen ADIP</h2>
        <p className="text-sm">Score: {Math.round(adip.score * 100)}%</p>
        <p className="text-sm">Focus: {adip.focus.join(", ")}</p>
      </section>

      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">Estado DNIP</h2>
        <p className="text-sm">Load: {Math.round(dnip.load * 100)}%</p>
        <p className="text-sm">Latency: {dnip.latencyMs} ms</p>
        <p className="text-sm">Error rate: {Math.round(dnip.errorRate * 100)}%</p>
        <p className="text-sm">Jobs in queue: {dnip.jobsInQueue}</p>
      </section>
    </div>
  );
}
