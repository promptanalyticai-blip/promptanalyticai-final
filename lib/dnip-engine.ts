// lib/dnip-engine.ts

export type DnipMetrics = {
  requestsPerMin: number;
  workspacesActive: number;
};

export type DnipHistoryItem = {
  id: string;
  timestamp: string;
  status: string;
};

export function getDnipMetrics(): DnipMetrics {
  return {
    requestsPerMin: 120,
    workspacesActive: 4,
  };
}

export function getDnipHistory(): DnipHistoryItem[] {
  return [
    { id: "1", timestamp: "2024-01-01", status: "ok" },
    { id: "2", timestamp: "2024-01-02", status: "warning" },
  ];
}

/**
 * Alias para compatibilidad con módulos antiguos
 * (tu API está llamando getMetrics, así que lo exponemos)
 */
export function getMetrics() {
  return getDnipMetrics();
}
