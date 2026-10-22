import { runDNIPHybrid as BaseHybridEngine } from "@blayzit/dnip/DNIPHybridEngine";

export default function HybridEngineV6(data: any) {
  const signals = data.signals || [];
  const hybridFactor = data.hybridFactor || 0.2;

  return BaseHybridEngine(signals, hybridFactor);
}
