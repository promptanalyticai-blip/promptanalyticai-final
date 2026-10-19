"use client";

import CorrelationPanel from "./CorrelationPanel";
import type { CorrelationPair } from "./CorrelationEngine";

export default function V5RelationsDashboard({ pairs }: { pairs: CorrelationPair[] }) {
  return (
    <div className="space-y-8">
      <CorrelationPanel pairs={pairs} />
    </div>
  );
}
