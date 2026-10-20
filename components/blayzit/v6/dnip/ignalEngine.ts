export default function SignalEngineV6(data: any) {
  const signals = data.signals || [];

  const avg =
    signals.length > 0
      ? signals.reduce((a: number, b: number) => a + b, 0) / signals.length
      : 0;

  return {
    signals,
    average: avg,
    volatility: Math.abs(avg - 0.5),
    status: avg > 0.7 ? "high-signal" : avg < 0.3 ? "low-signal" : "normal",
  };
}
