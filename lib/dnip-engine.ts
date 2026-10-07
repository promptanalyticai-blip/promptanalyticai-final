// lib/dnip-engine.ts
//
// DNIP ENGINE v1.0 — Motor inteligente base
// Organiza, analiza, transforma, detecta anomalías, resume tendencias, estima costos,
// y genera una decisión estructurada para ADIP / BLAYZIT.
//

export type DnipStatus = "ok" | "warning" | "critical";

export interface DnipInput {
  workspaceId: string;
  companyId?: string;
  userId: string;
  roles: string[];

  // Métricas de negocio (ejemplo genérico)
  metrics: {
    revenueGrowth?: number;   // % crecimiento
    churnRate?: number;       // % churn
    activeUsers?: number;     // usuarios activos
    errorRate?: number;       // % errores
    ticketBacklog?: number;   // tickets pendientes
  };

  // Flags de contexto
  flags?: {
    isNewWorkspace?: boolean;
    isCriticalClient?: boolean;
    hasRecentIncidents?: boolean;
  };
}

export interface DnipDecision {
  status: DnipStatus;
  priority: number;        // 1–100
  actions: string[];
  notes?: string;
  trends?: string;
  anomalies?: string[];
  costEstimate?: number;   // impacto/costo estimado (escala 0–100)
}

//
// Normalización básica de métricas
//
function normalizeMetrics(metrics: DnipInput["metrics"]) {
  return {
    revenueGrowth: metrics.revenueGrowth ?? 0,
    churnRate: metrics.churnRate ?? 0,
    activeUsers: metrics.activeUsers ?? 0,
    errorRate: metrics.errorRate ?? 0,
    ticketBacklog: metrics.ticketBacklog ?? 0,
  };
}

//
// Detección simple de anomalías (v1.0)
//
function detectAnomalies(m: ReturnType<typeof normalizeMetrics>): string[] {
  const anomalies: string[] = [];

  if (m.churnRate > 15) anomalies.push("Churn elevado");
  if (m.errorRate > 5) anomalies.push("Tasa de errores alta");
  if (m.ticketBacklog > 100) anomalies.push("Backlog de tickets crítico");
  if (m.revenueGrowth < 0) anomalies.push("Crecimiento negativo");

  return anomalies;
}

//
// Resumen de tendencias (v1.0)
//
function summarizeTrends(m: ReturnType<typeof normalizeMetrics>): string {
  const parts: string[] = [];

  if (m.revenueGrowth > 10) parts.push("Buen crecimiento de ingresos.");
  else if (m.revenueGrowth < 0) parts.push("Ingresos en caída.");

  if (m.churnRate < 5) parts.push("Churn controlado.");
  else if (m.churnRate > 15) parts.push("Churn preocupante.");

  if (m.activeUsers > 1000) parts.push("Base de usuarios activa sólida.");
  else if (m.activeUsers < 100) parts.push("Poca actividad de usuarios.");

  if (parts.length === 0) return "Sin tendencias destacables.";
  return parts.join(" ");
}

//
// Estimación de impacto/costo (v1.0)
// Escala 0–100 basada en churn, errores y backlog.
//
function estimateCost(m: ReturnType<typeof normalizeMetrics>): number {
  let score = 0;

  score += m.churnRate * 2;        // churn pesa más
  score += m.errorRate * 3;        // errores pesan mucho
  score += Math.min(m.ticketBacklog / 2, 40); // backlog limitado

  return Math.min(score, 100);
}

//
// Cálculo de prioridad y status
//
function computeStatusAndPriority(
  m: ReturnType<typeof normalizeMetrics>,
  anomalies: string[],
  costEstimate: number,
  roles: string[]
): { status: DnipStatus; priority: number; notes?: string } {
  let status: DnipStatus = "ok";
  let priority = 20;
  let notes = "";

  if (anomalies.length > 0 || costEstimate > 60) {
    status = "warning";
    priority = 60;
    notes = "Se detectaron riesgos relevantes en métricas clave.";
  }

  if (costEstimate > 80 || m.errorRate > 10 || m.churnRate > 25) {
    status = "critical";
    priority = 90;
    notes = "Riesgo crítico detectado. Requiere atención inmediata.";
  }

  // Ajuste por rol (owner/admin ven más crítico)
  if (roles.includes("owner") || roles.includes("admin")) {
    priority = Math.min(priority + 5, 100);
  }

  return { status, priority, notes };
}

//
// Función principal del motor DNIP v1.0
//
export function runDnipEngine(input: DnipInput): DnipDecision {
  const metrics = normalizeMetrics(input.metrics);
  const anomalies = detectAnomalies(metrics);
  const trends = summarizeTrends(metrics);
  const costEstimate = estimateCost(metrics);

  const { status, priority, notes } = computeStatusAndPriority(
    metrics,
    anomalies,
    costEstimate,
    input.roles
  );

  const actions: string[] = [];

  if (status === "critical") {
    actions.push("Escalar a equipo de operaciones.");
    actions.push("Revisar incidentes recientes.");
    actions.push("Priorizar reducción de errores y churn.");
  } else if (status === "warning") {
    actions.push("Monitorear métricas diariamente.");
    actions.push("Revisar backlog de tickets.");
  } else {
    actions.push("Mantener estrategia actual.");
    actions.push("Explorar oportunidades de crecimiento.");
  }

  return {
    status,
    priority,
    actions,
    notes,
    trends,
    anomalies,
    costEstimate,
  };
}
