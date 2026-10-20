"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import ThreatEngineV6 from "@blayzit/v6/security/threatEngine";

export default function ThreatPanel({ data }: { data: any }) {
  const threat = ThreatEngineV6(data);

  return (
    <Card>
      <SubTitle>Threat Analysis</SubTitle>
      <pre className="text-xs">{JSON.stringify(threat, null, 2)}</pre>
    </Card>
  );
}
