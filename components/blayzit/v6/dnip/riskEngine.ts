export default function RiskEngineV6(data: any) {
  const risk = data.risk ?? 0;

  return {
    risk,
    normalized: Math.min(1, Math.max(0, risk)),
    category:
      risk > 0.75 ? "critical" : risk > 0.5 ? "high" : risk > 0.25 ? "medium" : "low",
    summary: `Risk level detected: ${risk}`,
  };
}
