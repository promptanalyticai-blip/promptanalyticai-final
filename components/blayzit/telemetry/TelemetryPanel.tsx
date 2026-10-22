"use client";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SubTitle from "@/components/ui/SubTitle";
import { Activity, Gauge } from "lucide-react";
import { TelemetryEngine } from "./TelemetryEngine";

export default function TelemetryPanel() {
  const engine = new TelemetryEngine();
  const metrics = engine.getMetrics();

  return (
    <Section title="Telemetría del Sistema">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SubTitle>
            <Activity className="inline-block mr-2 text-blue-600" />
            Métricas Generales
          </SubTitle>
          <pre className="text-sm">{JSON.stringify(metrics.general, null, 2)}</pre>
        </Card>

        <Card>
          <SubTitle>
            <Gauge className="inline-block mr-2 text-purple-600" />
            Latencia
          </SubTitle>
          <pre className="text-sm">{JSON.stringify(metrics.latency, null, 2)}</pre>
        </Card>
      </div>
    </Section>
  );
}
