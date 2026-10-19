"use client";

import DNIPConfigPanel from "./DNIPConfigPanel";
import ADIPConfigPanel from "./ADIPConfigPanel";
import AIConfigPanel from "./AIConfigPanel";

export default function V5ConfigDashboard() {
  return (
    <div className="space-y-8">
      <DNIPConfigPanel />
      <ADIPConfigPanel />
      <AIConfigPanel />
    </div>
  );
}
