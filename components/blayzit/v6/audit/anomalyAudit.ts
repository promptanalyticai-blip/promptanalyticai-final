// components/blayzit/v6/audit/anomalyAudit.ts
import { auditEngine } from "./auditEngine";

export function logAnomaly(event: {
  kind: string;
  description: string;
  filename?: string;
}) {
  auditEngine.log("anomaly", event);
}
