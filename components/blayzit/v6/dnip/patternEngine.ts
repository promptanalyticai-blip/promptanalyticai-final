import { DNIPPatternEngine as BasePatternEngine } from "@blayzit/dnip/DNIPPatternEngine";

export default function PatternEngineV6(data: any) {
  const result = BasePatternEngine(data);

  return {
    ...result,
    confidence: result.patterns.length > 0 ? 0.92 : 0.35,
    summary: `Detected ${result.patterns.length} behavioral patterns.`,
  };
}
