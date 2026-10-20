import ThreatEngineV6 from "@blayzit/v6/security/threatEngine";
import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function IngestAuditV6(data: any) {
  const threat = ThreatEngineV6(data);
  const anomaly = AnomalyEngineV6(data);

  return {
    auditTimestamp: new Date().toISOString(),
    auditType: "ingest",
    threat,
    anomaly,
    status:
      threat.status === "high-risk" || anomaly.status === "critical"
        ? "requires-review"
        : "stable",
    notes:
      threat.status === "high-risk"
        ? "High-risk ingestion detected. Review required."
        : anomaly.status === "critical"
        ? "Critical anomaly detected. Review recommended."
        : "Ingestion pipeline stable.",
  };
}
