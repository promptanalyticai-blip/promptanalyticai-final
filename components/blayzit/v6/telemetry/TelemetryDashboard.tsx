"use client";

import Section from "@ui/Section";
import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

import MetricsEngineV6 from "@blayzit/v6/telemetry/metricsEngine";
import TelemetrySummary from "./TelemetrySummary";
import TelemetryModules from "./TelemetryModules";
import TelemetryPanel from "./TelemetryPanel";

export default function TelemetryDashboard() {
  const sample = {
    events: 240,
    signalDeviation: 0.52,
    modules: [
      { name: "IA · resumen", durationMs: 12.4, timestamp: "10:22:01" },
      { name: "DNIP · patrones", durationMs: 1.2, timestamp: "10:22:01" },
      { name: "ADIP · reglas", durationMs: 4.8, timestamp: "10:22:02" },
    ],
  };

  const metrics = MetricsEngineV6(sample);

  return (
    <div className="space-y-10 fade-in">
      <Section title="Telemetry V6 · ULTRA PRIME">
        <TelemetrySummary metrics={metrics} />
        <TelemetryPanel metrics={metrics} />
        <TelemetryModules modules={sample.modules} />
      </Section>
    </div>
  );
}
