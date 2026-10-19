"use client";

import RulesPanel from "./RulesPanel";
import RulesEditor from "./RulesEditor";

export default function V5RulesDashboard({ analysis }: { analysis: any }) {
  return (
    <div className="space-y-8">
      <RulesPanel analysis={analysis} />
      <RulesEditor />
    </div>
  );
}
