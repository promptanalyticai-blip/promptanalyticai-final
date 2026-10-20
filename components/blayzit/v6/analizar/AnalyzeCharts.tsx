"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";
import ChartsPanel from "@blayzit/telemetry/TelemetryPanel";

export default function AnalyzeCharts({ data }: { data: any }) {
  return (
    <Card>
      <SubTitle>Charts & Metrics</SubTitle>
      <ChartsPanel />
    </Card>
  );
}
