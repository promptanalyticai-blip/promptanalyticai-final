"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function TelemetryPanel({ metrics }: { metrics: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Total de Eventos</SubTitle>
        <p className="text-sm text-slate-700">
          <strong>{metrics.metricsSummary.totalEvents}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Estabilidad del Sistema</SubTitle>
        <p className="text-sm text-slate-700">
          Estado: <strong>{metrics.metricsSummary.stability}</strong>
        </p>
      </Card>
    </div>
  );
}
