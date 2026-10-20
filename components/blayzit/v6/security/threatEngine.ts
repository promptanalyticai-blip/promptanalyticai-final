import { ADIPAutomationEngine } from "@blayzit/adip/ADIPAutomationEngine";
import { DNIPRulesEngine } from "@blayzit/dnip/DNIPRulesEngine";

export default function ThreatEngineV6(payload: any) {
  const automation = ADIPAutomationEngine(payload);
  const rules = DNIPRulesEngine(payload);

  return {
    automation,
    rules,
    threatScore: (automation.score + rules.score) / 2,
    status: automation.score > 70 || rules.score > 70 ? "high-risk" : "normal",
  };
}
