// lib/wow-decision-flow.ts

import { generateWOWDecision } from "./wow-decision-engine";
import { saveToWOWCache } from "./wow-cache";

export function processWOWDecisionFlow(wow: any, signal: any, updateState: Function) {
  const decision = generateWOWDecision(wow, signal);

  updateState((prev: any) => {
    const updated = [...(prev.dnip?.decisions || []), decision];
    saveToWOWCache("decisions", updated, 30000);

    return {
      ...prev,
      dnip: {
        ...prev.dnip,
        decisions: updated,
      },
    };
  });

  return decision;
}
