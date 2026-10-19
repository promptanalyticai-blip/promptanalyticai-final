"use client";

import AutomationPanel from "./AutomationPanel";

export default function V5AutomationDashboard({ analysis }: { analysis: any }) {
  return (
    <div className="space-y-8">
      <AutomationPanel analysis={analysis} />
    </div>
  );
}
