"use client";

import RiskEvolutionPanel from "./RiskEvolutionPanel";
import AIEvolutionPanel from "./AIEvolutionPanel";
import SizeEvolutionPanel from "./SizeEvolutionPanel";

export default function V5TemporalDashboard({ trend }: { trend: any }) {
  return (
    <div className="space-y-8">
      <RiskEvolutionPanel trend={trend} />
      <AIEvolutionPanel trend={trend} />
      <SizeEvolutionPanel trend={trend} />
    </div>
  );
}
