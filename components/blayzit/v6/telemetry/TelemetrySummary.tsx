"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function TelemetrySummary({ metrics }: { metrics: any }) {
  return (
    <Card>
      <SubTitle>Resumen del Sistema</SubTitle>
      <pre className="text-xs">
        {JSON.stringify(metrics.metricsSummary, null, 2)}
      </pre>
    </Card>
  );
}
