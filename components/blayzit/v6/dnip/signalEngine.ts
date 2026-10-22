export default function SignalEngineV6(data: any) {
  const signals = data.signals || [];

  const avg =
    signals.length > 0
      ? signals.reduce((a, b) => a + b, 0) / signals.length
      : 0;

  const riskLevel = avg;

  return {
    avg,
    riskLevel,
    signals
  };
}
