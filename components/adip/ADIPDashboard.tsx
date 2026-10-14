// components/adip/adip-dashboard.tsx
"use client";

import { useEffect, useState } from "react";
import { getAdipSummary, getAdipInsights, AdipSummary, AdipInsight } from "@/lib/adip-engine";

export default function AdipDashboard() {
  const [summary, setSummary] = useState<AdipSummary | null>(null);
  const [insights, setInsights] = useState<AdipInsight[]>([]);

  useEffect(() => {
    (async () => {
      setSummary(await getAdipSummary());
      setInsights(await getAdipInsights());
    })();
  }, []);

  if (!summary) return <p>Cargando ADIP…</p>;

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">Resumen ADIP</h2>
        <p>Score: {Math.round(summary.score * 100)}%</p>
        <p>Focus: {summary.focus.join(", ")}</p>
      </section>

      <section className="space-y-2">
        {insights.map((i) => (
          <div key={i.id} className="rounded border bg-muted p-3">
            <h3 className="text-sm font-semibold">{i.title}</h3>
            <p className="text-xs text-muted-foreground">{i.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
