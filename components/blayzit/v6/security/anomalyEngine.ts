import { DNIPPatternEngine } from "@blayzit/dnip/DNIPPatternEngine";
import { TelemetryEngine } from "@blayzit/telemetry/TelemetryEngine";

export default function AnomalyEngineV6(data: any) {
  const patterns = DNIPPatternEngine(data);
  const telemetry = TelemetryEngine(data);

  return {
    patterns,
    telemetry,
    anomalyLevel:
      patterns.anomalyScore * 0.6 + telemetry.signalDeviation * 0.4,
    status:
      patterns.anomalyScore > 0.7 || telemetry.signalDeviation > 0.7
        ? "critical"
        : "stable",
  };
}
