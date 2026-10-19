"use client";

import { runDNIP } from "./DNIPEngine";

export function runDNIPHybrid(signals: any, ai: any) {
  const base = runDNIP(signals);

  const hybridDecision = {
    ...base,
    aiScore: ai.score,
    aiSummary: ai.summary,
    aiInsights: ai.insights,
    finalRisk:
      (signals.dnip.riskLevel * 0.7) +
      (ai.score * 0.3),
  };

  return hybridDecision;
}
