"use client";

/**
 * DNIP Engine base
 * Procesa señales y devuelve un nivel de riesgo inicial.
 */

export function runDNIP(signals: number[]) {
  if (!Array.isArray(signals)) return { riskLevel: 0 };

  const avg = signals.reduce((a, b) => a + b, 0) / signals.length;

  const riskLevel = Math.min(1, avg);

  return {
    signals,
    avg,
    riskLevel,
  };
}
