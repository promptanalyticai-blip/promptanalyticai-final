// core/registry.ts
import Blayzit from "@/services/blayzit";
import { getDnipMetrics } from "@/lib/dnip-engine";
import { getAdipSummary } from "@/lib/adip-engine";

export const EngineRegistry = {
  blayzit: Blayzit,
  dnip: {
    metrics: getDnipMetrics,
  },
  adip: {
    summary: getAdipSummary,
  },
};

export default EngineRegistry;
