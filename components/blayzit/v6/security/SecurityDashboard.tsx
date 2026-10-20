"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import ThreatPanel from "./ThreatPanel";
import AnomalyPanel from "./AnomalyPanel";
import IngestPanel from "./IngestPanel";
import SecurityMetrics from "./SecurityMetrics";

export default function SecurityDashboard() {
  const sample = { events: 120, errors: 3, spikes: 2 };

  return (
    <div className="space-y-10 fade-in">
      <Section title="Security V6 · ULTRA PRIME">
        <SecurityMetrics data={sample} />
        <ThreatPanel data={sample} />
        <AnomalyPanel data={sample} />
        <IngestPanel data={sample} />
      </Section>
    </div>
  );
}
