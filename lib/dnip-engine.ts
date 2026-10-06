// lib/dnip-engine.ts
export type DnipChartPoint = {
  timestamp: string;
  value: number;
};

export type DnipHistoryItem = {
  id: string;
  timestamp: string;
  status: string;
};

export type DnipMetrics = {
  requestsPerMin: number;
  workspacesActive: number;
};

export function getDnipMetrics(): DnipMetrics {
  return {
    requestsPerMin: 120,
    workspacesActive: 4,
  };
}
