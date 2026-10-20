import { DNIPHybridEngine as BaseHybridEngine } from "@blayzit/dnip/DNIPHybridEngine";
import PatternEngineV6 from "@blayzit/v6/dnip/patternEngine";

export default function HybridEngineV6(data: any) {
  const hybrid = BaseHybridEngine(data);
  const patterns = PatternEngineV6(data);

  return {
    hybrid,
    patterns,
    combinedScore: (hybrid.score + patterns.confidence) / 2,
    status: hybrid.score > 0.75 ? "optimized" : "learning",
  };
}
