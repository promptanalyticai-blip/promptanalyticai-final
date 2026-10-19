"use client";

import { DNIPDecision } from "@/components/blayzit/dnip/DNIPEngine";

export function extractRiskDecisions(decisions: DNIPDecision[]) {
  return decisions.filter((d) => d.type === "riesgo");
}
