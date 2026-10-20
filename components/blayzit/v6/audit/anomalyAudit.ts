import AnomalyEngineV6 from "@blayzit/v6/security/anomalyEngine";

export default function AnomalyAuditV6(data: any) {
  const anomaly = AnomalyEngineV6(data);

  return {
    ...anomaly,
    auditTimestamp: new Date().toISOString(),
    auditStatus:
      anomaly.anomalyLevel > 0.7 ? "requires-review" : "normal",
    notes:
      anomaly.anomalyLevel > 0.7
        ? "High anomaly level detected. Review recommended."
        : "Anomaly levels within normal range.",
  };
}
