"use client";

import Card from "@ui/Card";
import Section from "@ui/Section";
import SubTitle from "@ui/SubTitle";
import ThreatEngineV6 from "@blayzit/v6/security/threatEngine";
import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function IngestGuard() {
  const sample = { events: 120, errors: 3, spikes: 2 };

  const threat = ThreatEngineV6(sample);
  const anomaly = AnomalyEngineV6(sample);

  return (
    <Section title="Ingest Guard">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SubTitle>Threat Analysis</SubTitle>
          <pre>{JSON.stringify(threat, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>Anomaly Detection</SubTitle>
          <pre>{JSON.stringify(anomaly, null, 2)}</pre>
        </Card>
      </div>
    </Section>
  );
}
