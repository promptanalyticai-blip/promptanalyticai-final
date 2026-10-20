import IngestAuditV6 from "@blayzit/v6/audit/ingestAudit";
import SecurityAuditV6 from "@blayzit/v6/audit/securityAudit";
import AnomalyAuditV6 from "@blayzit/v6/audit/anomalyAudit";

export default function AuditEngineV6(data: any) {
  const ingest = IngestAuditV6(data);
  const security = SecurityAuditV6(data);
  const anomaly = AnomalyAuditV6(data);

  return {
    auditTimestamp: new Date().toISOString(),
    audits: {
      ingest,
      security,
      anomaly,
    },
    summary: {
      critical:
        security.status === "critical" ||
        anomaly.auditStatus === "requires-review",
      notes:
        security.status === "critical"
          ? "Critical security issues detected."
          : anomaly.auditStatus === "requires-review"
          ? "Anomaly levels require review."
          : "All systems stable.",
    },
  };
}
