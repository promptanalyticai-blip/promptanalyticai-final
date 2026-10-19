// app/api/blayzit/v6/adip/route.ts
import { NextResponse } from "next/server";

type DnipSignal = {
  id: string;
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  source: string;
  tags: string[];
};

type AdipDecision = {
  globalSeverity: "low" | "medium" | "high" | "critical";
  riskScore: number;
  recommendedActions: string[];
  rationale: string;
};

function computeRiskScore(signals: DnipSignal[]): number {
  return signals.reduce((acc, s) => {
    if (s.severity === "low") return acc + 10;
    if (s.severity === "medium") return acc + 25;
    if (s.severity === "high") return acc + 50;
    if (s.severity === "critical") return acc + 80;
    return acc;
  }, 0);
}

function computeGlobalSeverity(score: number): AdipDecision["globalSeverity"] {
  if (score >= 150) return "critical";
  if (score >= 80) return "high";
  if (score >= 40) return "medium";
  return "low";
}

function buildRecommendedActions(
  severity: AdipDecision["globalSeverity"],
  signals: DnipSignal[]
): string[] {
  const actions: string[] = [];

  if (severity === "critical") {
    actions.push(
      "Activar protocolo de emergencia.",
      "Notificar al equipo de seguridad y operaciones.",
      "Detener procesos afectados hasta evaluación completa."
    );
  } else if (severity === "high") {
    actions.push(
      "Priorizar revisión técnica inmediata.",
      "Asignar responsable para cada señal de riesgo.",
      "Registrar incidente en sistema de auditoría."
    );
  } else if (severity === "medium") {
    actions.push(
      "Programar revisión en la próxima ventana de mantenimiento.",
      "Documentar hallazgos en el sistema de seguimiento.",
      "Monitorizar métricas relacionadas durante las próximas 24-48 horas."
    );
  } else {
    actions.push(
      "Mantener monitoreo estándar.",
      "Registrar el análisis como referencia histórica.",
      "No se requieren acciones inmediatas."
    );
  }

  const hasSecurity = signals.some((s) => s.source === "security");
  const hasPerformance = signals.some((s) => s.source === "performance");
  const hasRuntime = signals.some((s) => s.source === "runtime");

  if (hasSecurity) {
    actions.push(
      "Ejecutar revisión de seguridad focalizada.",
      "Validar configuración de acceso, permisos y cifrado."
    );
  }

  if (hasPerformance) {
    actions.push(
      "Analizar métricas de latencia y uso de recursos.",
      "Revisar timeouts, colas y puntos de congestión."
    );
  }

  if (hasRuntime) {
    actions.push(
      "Revisar logs de errores y excepciones.",
      "Validar manejo de errores y mecanismos de retry."
    );
  }

  return actions;
}

function buildRationale(
  severity: AdipDecision["globalSeverity"],
  score: number,
  signals: DnipSignal[]
): string {
  if (signals.length === 0) {
    return "ADIP no recibió señales DNIP; se asume un estado de riesgo bajo por falta de evidencia.";
  }

  const types = Array.from(new Set(signals.map((s) => s.type))).join(", ");
  const sources = Array.from(new Set(signals.map((s) => s.source))).join(", ");

  return `ADIP evaluó ${signals.length} señales DNIP con un puntaje total de ${score}, clasificando el riesgo global como '${severity}'. Tipos de señales: ${types}. Fuentes principales: ${sources}. Las acciones recomendadas se derivan de la severidad global y de la presencia de señales de seguridad, rendimiento y errores de ejecución.`;
}

function runAdipEngine(signals: DnipSignal[]): AdipDecision {
  const score = computeRiskScore(signals);
  const severity = computeGlobalSeverity(score);
  const actions = buildRecommendedActions(severity, signals);
  const rationale = buildRationale(severity, score, signals);

  return {
    globalSeverity: severity,
    riskScore: score,
    recommendedActions: actions,
    rationale,
  };
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || !Array.isArray(body.signals)) {
    return NextResponse.json(
      { error: "Se requiere el campo 'signals' como arreglo de señales DNIP." },
      { status: 400 }
    );
  }

  const signals = body.signals as DnipSignal[];

  const decision = runAdipEngine(signals);

  return NextResponse.json({
    engine: "ADIP_V6",
    signalsCount: signals.length,
    ...decision,
  });
}
