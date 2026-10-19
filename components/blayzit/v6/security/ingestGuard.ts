// components/blayzit/v6/security/ingestGuard.ts
import { logSecurity } from "@/components/blayzit/v6/audit/securityAudit";

const MAX_SIZE_BYTES = 5 * 1024 * 1024;
const BLOCKED_PATTERNS = [
  "<script",
  "<iframe",
  "javascript:",
  "onload=",
  "onclick=",
  "onerror=",
  "eval(",
  "DROP TABLE",
  "UNION SELECT",
  "INSERT INTO",
  "DELETE FROM",
  "--",
];

type IngestContext = {
  kind: "text" | "file" | "log" | "pdf" | "image";
  filename?: string;
};

export function validateIngest(file: File | null, content: string, ctx: IngestContext) {
  // Tamaño
  if (file && file.size > MAX_SIZE_BYTES) {
    logSecurity({
      status: "blocked",
      reason: "Archivo demasiado grande",
      filename: ctx.filename,
      kind: ctx.kind,
    });
    throw new Error("Archivo demasiado grande para la etapa inicial de análisis.");
  }

  // Formato
  if (ctx.kind === "pdf" && file && !file.name.toLowerCase().endsWith(".pdf")) {
    logSecurity({
      status: "blocked",
      reason: "Formato PDF inválido",
      filename: ctx.filename,
      kind: ctx.kind,
    });
    throw new Error("El archivo no es un PDF válido.");
  }

  if (ctx.kind === "image" && file) {
    const name = file.name.toLowerCase();
    if (!name.endsWith(".png") && !name.endsWith(".jpg") && !name.endsWith(".jpeg") && !name.endsWith(".webp")) {
      logSecurity({
        status: "blocked",
        reason: "Formato de imagen inválido",
        filename: ctx.filename,
        kind: ctx.kind,
      });
      throw new Error("El archivo no es una imagen válida.");
    }
  }

  // Patrones maliciosos
  const lower = content.toLowerCase();
  for (const pattern of BLOCKED_PATTERNS) {
    if (lower.includes(pattern.toLowerCase())) {
      logSecurity({
        status: "blocked",
        reason: `Patrón malicioso detectado: ${pattern}`,
        filename: ctx.filename,
        kind: ctx.kind,
      });
      throw new Error("Contenido bloqueado por seguridad en ingestión.");
    }
  }

  // Si pasa todo:
  logSecurity({
    status: "allowed",
    filename: ctx.filename,
    kind: ctx.kind,
  });

  return true;
}
