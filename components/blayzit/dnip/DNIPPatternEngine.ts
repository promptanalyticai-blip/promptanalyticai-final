"use client";

import { runDNIP } from "./DNIPEngine";

export function runDNIPPatternEngine(signals: any, patterns: string[]) {
  const base = runDNIP(signals);

  const patternRiskBoost =
    patterns.includes("Patrón de error") ||
    patterns.includes("Patrón financiero")
      ? 0.15
      : 0;

  return {
    ...base,
    patternRiskBoost,
    finalRisk: Math.min(1, base.riskLevel + patternRiskBoost),
  };
}
