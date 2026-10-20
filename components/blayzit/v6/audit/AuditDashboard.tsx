"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import AuditEngineV6 from "@blayzit/v6/audit/auditEngine";
import AuditSummary from "./AuditSummary";
import AuditTimeline from "./AuditTimeline";
import AuditPanel from "./AuditPanel";
import AuditMetrics from "./AuditMetrics";

export default function AuditDashboard() {
  const sample = {
    events: 240,
    errors: 3,
    spikes: 2,
    risk: 0.42,
    signals: [0.2, 0.8, 0.5],
  };

  const audit = AuditEngineV6(sample);

  return (
    <div className="space-y-10 fade-in">
      <Section title="Audit V6 · ULTRA PRIME">
        <AuditSummary audit={audit} />
        <AuditMetrics audit={audit} />
        <AuditPanel audit={audit} />
        <AuditTimeline audit={audit} />
      </Section>
    </div>
  );
}
