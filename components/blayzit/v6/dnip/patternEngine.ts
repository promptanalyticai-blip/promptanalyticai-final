export default function PatternEngineV6(data: any) {
  const signals = data.signals || [];
  const patterns = data.patterns || [];

  const avg =
    signals.length > 0
      ? signals.reduce((a, b) => a + b, 0) / signals.length
      : 0;

  const patternRiskBoost = patterns.length > 0 ? avg * 0.25 : 0;
  const finalRisk = avg + patternRiskBoost;

  return {
    avg,
    patternRiskBoost,
    finalRisk
  };
}
