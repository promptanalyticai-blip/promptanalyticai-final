"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import ThreatEngineV6 from "@blayzit/v6/security/threatEngine";
import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function IngestPanel({ data }: { data: any }) {
  const threat = ThreatEngineV6(data);
  const anomaly = AnomalyEngineV6(data);

  return (
    <Card>
      <SubTitle>Ingest Guard</SubTitle>
      <pre className="text-xs">
        {JSON.stringify({ threat, anomaly }, null, 2)}
      </pre>
    </Card>
  );
}
