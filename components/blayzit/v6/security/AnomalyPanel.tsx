"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function AnomalyPanel({ data }: { data: any }) {
  const anomaly = AnomalyEngineV6(data);

  return (
    <Card>
      <SubTitle>Anomaly Detection</SubTitle>
      <pre className="text-xs">{JSON.stringify(anomaly, null, 2)}</pre>
    </Card>
  );
}
