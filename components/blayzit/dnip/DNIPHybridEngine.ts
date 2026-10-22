"use client";

import { runDNIP } from "./DNIPEngine";

/**
 * DNIP Hybrid Engine
 * Combina señales con un factor híbrido para ajustar el riesgo.
 */

export function runDNIPHybrid(signals: number[], hybridFactor: number = 0.2) {
  const base = runDNIP(signals);

  const hybridBoost = hybridFactor * base.riskLevel;

  return {
    ...base,
    hybridBoost,
    finalRisk: Math.min(1, base.riskLevel + hybridBoost),
  };
}
