"use client";

import ResultsPanel from "./ResultsPanel";
import InsightsPanel from "./InsightsPanel";
import RiskPanel from "./RiskPanel";
import SmartActionsPanel from "./SmartActionsPanel";
import ChartsPanel from "./ChartsPanel";

export default function V5Dashboard({ analysis }: { analysis: any }) {
  return (
    <div className="space-y-8">
      <ResultsPanel analysis={analysis} />
      <RiskPanel analysis={analysis} />
      <InsightsPanel analysis={analysis} />
      <SmartActionsPanel analysis={analysis} />
      <ChartsPanel analysis={analysis} />
    </div>
  );
}
