"use client";

import CorrelationPanel from "./CorrelationPanel";
import AdvancedAnomaliesPanel from "./AdvancedAnomaliesPanel";
import RiskPanel from "./RiskPanel";

export default function V5PatternDashboard({ analysis }: { analysis: any }) {
  return (
    <div className="space-y-8">
      <CorrelationPanel analysis={analysis} />
      <AdvancedAnomaliesPanel analysis={analysis} />
      <RiskPanel analysis={analysis} />
    </div>
  );
}
