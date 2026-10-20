import { TelemetryEngine } from "@blayzit/telemetry/TelemetryEngine";

export default function MetricsEngineV6(data: any) {
  const telemetry = TelemetryEngine(data);

  return {
    ...telemetry,
    metricsSummary: {
      totalEvents: telemetry.events ?? 0,
      avgSignal: telemetry.signalDeviation ?? 0,
      stability:
        telemetry.signalDeviation > 0.7
          ? "unstable"
          : telemetry.signalDeviation > 0.4
          ? "warning"
          : "stable",
    },
    timestamp: new Date().toISOString(),
  };
}
