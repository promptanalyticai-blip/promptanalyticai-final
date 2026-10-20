"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import automationEngineV6 from "@blayzit/v6/adip/automationEngine";
import predictiveEngineV6 from "@blayzit/v6/adip/predictiveEngine";
import ruleEngineV6 from "@blayzit/v6/adip/ruleEngine";
import AdipMetrics from "./AdipMetrics";
import AdipPanel from "./AdipPanel";

export default function AdipDashboard() {
  const sample = {
    events: 180,
    rulesTriggered: 12,
    automationRuns: 34,
    predictions: [{ score: 0.82 }, { score: 0.64 }],
  };

  const automation = automationEngineV6(sample);
  const predictive = predictiveEngineV6(sample);
  const rules = ruleEngineV6(sample);

  return (
    <div className="space-y-10 fade-in">
      <Section title="ADIP V6 · ULTRA PRIME">
        <AdipMetrics automation={automation} predictive={predictive} rules={rules} />
        <AdipPanel automation={automation} predictive={predictive} rules={rules} />
      </Section>
    </div>
  );
}
