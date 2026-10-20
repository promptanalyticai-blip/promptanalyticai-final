"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import ThreatEngineV6 from "@blayzit/v6/security/threatEngine";
import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function SecurityMetrics({ data }: { data: any }) {
  const threat = ThreatEngineV6(data);
  const anomaly = AnomalyEngineV6(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Threat Score</SubTitle>
        <pre className="text-xs">{JSON.stringify(threat, null, 2)}</pre>
      </Card>

      <Card>
        <SubTitle>Anomaly Level</SubTitle>
        <pre className="text-xs">{JSON.stringify(anomaly, null, 2)}</pre>
      </Card>
    </div>
  );
}
