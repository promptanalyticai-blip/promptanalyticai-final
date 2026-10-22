import { runDNIPPatternEngine as BasePatternEngine } from "@blayzit/dnip/DNIPPatternEngine";

export default function PatternEngineV6(data: any) {
  const signals = data.signals || [];
  const patterns = data.patterns || [];

  return BasePatternEngine(signals, patterns);
}
