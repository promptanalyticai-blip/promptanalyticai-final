import ThreatEngineV6 from "@blayzit/v6/security/threatEngine";
import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function SecurityAuditV6(data: any) {
  const threat = ThreatEngineV6(data);
  const anomaly = AnomalyEngineV6(data);

  return {
    auditTimestamp: new Date().toISOString(),
    auditType: "security",
    threat,
    anomaly,
    riskLevel: (threat.threatScore + anomaly.anomalyLevel) / 2,
    status:
      threat.threatScore > 70 || anomaly.anomalyLevel > 0.7
        ? "critical"
        : "normal",
    notes:
      threat.threatScore > 70 || anomaly.anomalyLevel > 0.7
        ? "Critical security signals detected. Immediate review recommended."
        : "Security signals within acceptable range.",
  };
}
