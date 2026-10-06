// components/adip/adip-insights.tsx
import React from "react";
import { getAdipInsights, getAdipSummary } from "@/lib/adip-engine";

export async function AdipInsights() {
  const [summary, insights] = await Promise.all([getAdipSummary(), getAdipInsights()]);

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <h2 className="text-lg font-semibold">Score ADIP</h2>
        <p className="text-sm">Score: {Math.round(summary.score * 100)}%</p>
        <p className="text-sm">Focus: {summary.focus.join(", ")}</p>
      </section>

      <section className="space-y-2">
        {insights.map((insight) => (
          <div key={insight.id} className="rounded border bg-muted p-3">
            <h3 className="text-sm font-semibold">{insight.title}</h3>
            <p className="text-xs text-muted-foreground">{insight.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
