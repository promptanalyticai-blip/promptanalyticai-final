export default function RiskEngineV6(data: any) {
  const signals = data.signals || [];

  const avg =
    signals.length > 0
      ? signals.reduce((a, b) => a + b, 0) / signals.length
      : 0;

  const riskLevel = avg;
  const riskScore = riskLevel * 100;

  return {
    avg,
    riskLevel,
    riskScore
  };
}
