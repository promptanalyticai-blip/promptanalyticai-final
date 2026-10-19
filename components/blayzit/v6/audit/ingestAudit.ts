// components/blayzit/v6/audit/ingestAudit.ts
import { auditEngine } from "./auditEngine";

export function logIngest(event: {
  type: "text" | "file" | "log" | "pdf" | "image";
  source: "manual" | "upload";
  filename?: string;
  sizeBytes?: number;
}) {
  auditEngine.log("ingest", event);
}
