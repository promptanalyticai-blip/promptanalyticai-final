export default function HybridEngineV6(data: any) {
  const signals = data.signals || [];
  const hybridFactor = data.hybridFactor || 0.3;

  const avg =
    signals.length > 0
      ? signals.reduce((a, b) => a + b, 0) / signals.length
      : 0;

  const hybridBoost = avg * hybridFactor;
  const finalRisk = avg + hybridBoost;

  return {
    avg,
    hybridBoost,
    finalRisk
  };
}
