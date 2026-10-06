// lib/dnip-engine.ts
export type DnipMetrics = {
  load: number;        // 0–1, carga relativa del motor
  latencyMs: number;   // latencia promedio en ms
  errorRate: number;   // 0–1, porcentaje de errores
  jobsInQueue: number; // trabajos pendientes
};

export type DnipChartPoint = {
  timestamp: string;   // ISO string
  load: number;
};

export async function getDnipMetrics(workspaceId?: string): Promise<DnipMetrics> {
  // Aquí conectas con DNIP real (Supabase, engine, etc.)
  // Por ahora dejamos una implementación estable que no rompe el build.
  return {
    load: 0.35,
    latencyMs: 140,
    errorRate: 0.02,
    jobsInQueue: 3,
  };
}

export async function getDnipChart(workspaceId?: string): Promise<DnipChartPoint[]> {
  return [
    { timestamp: new Date().toISOString(), load: 0.3 },
    { timestamp: new Date(Date.now() - 60000).toISOString(), load: 0.4 },
  ];
}
