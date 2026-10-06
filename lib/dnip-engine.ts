// lib/dnip-engine.ts

// MÉTRICAS BASE — CONTRATO ESTABLE
export type DnipMetrics = {
  load: number;        // 0–1
  latencyMs: number;   // milisegundos
  errorRate: number;   // 0–1
  jobsInQueue: number; // cantidad de jobs
};

// HISTORIAL — CONTRATO ESTABLE
export type DnipHistoryItem = {
  id: string;
  timestamp: string;
  load: number;
  latencyMs: number;
  errorRate: number;
};

// CHART — CONTRATO ESTABLE
export type DnipChartPoint = {
  timestamp: string;
  load: number;
};

// MÉTRICAS DNIP
export async function getDnipMetrics(workspaceId?: string): Promise<DnipMetrics> {
  return {
    load: 0.35,
    latencyMs: 140,
    errorRate: 0.02,
    jobsInQueue: 3,
  };
}

// HISTORIAL DNIP
export async function getDnipHistory(workspaceId?: string): Promise<DnipHistoryItem[]> {
  return [
    {
      id: "1",
      timestamp: new Date().toISOString(),
      load: 0.3,
      latencyMs: 130,
      errorRate: 0.01,
    },
    {
      id: "2",
      timestamp: new Date(Date.now() - 60000).toISOString(),
      load: 0.4,
      latencyMs: 150,
      errorRate: 0.02,
    },
  ];
}

// CHART DNIP
export async function getDnipChart(workspaceId?: string): Promise<DnipChartPoint[]> {
  return [
    {
      timestamp: new Date().toISOString(),
      load: 0.35,
    },
    {
      timestamp: new Date(Date.now() - 60000).toISOString(),
      load: 0.42,
    },
  ];
}
