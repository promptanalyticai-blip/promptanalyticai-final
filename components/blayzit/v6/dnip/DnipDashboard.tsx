"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import PatternEngineV6 from "@blayzit/v6/dnip/patternEngine";
import HybridEngineV6 from "@blayzit/v6/dnip/hybridEngine";
import RiskEngineV6 from "@blayzit/v6/dnip/riskEngine";
import SignalEngineV6 from "@blayzit/v6/dnip/ignalEngine";

import DnipMetrics from "./DnipMetrics";
import DnipPanel from "./DnipPanel";

export default function DnipDashboard() {
  const sample = {
    events: 120,
    anomalies: 4,
    patterns: ["loop", "burst"],
    risk: 0.42,
    signals: [0.2, 0.8, 0.5],
  };

  const pattern = PatternEngineV6(sample);
  const hybrid = HybridEngineV6(sample);
  const risk = RiskEngineV6(sample);
  const signal = SignalEngineV6(sample);

  return (
    <div className="space-y-10 fade-in">
      <Section title="DNIP V6 · ULTRA PRIME">
        <DnipMetrics pattern={pattern} hybrid={hybrid} risk={risk} signal={signal} />
        <DnipPanel pattern={pattern} hybrid={hybrid} risk={risk} signal={signal} />
      </Section>
    </div>
  );
}
