// lib/adip-engine.ts
export type AdipInsight = {
  id: string;
  title: string;
  description: string;
};

export type AdipSummary = {
  score: number;     // 0–1, salud general
  focus: string[];   // áreas de foco: ["dnip", "latency", ...]
};

export async function getAdipSummary(workspaceId?: string): Promise<AdipSummary> {
  // Conecta con tu motor ADIP real cuando quieras,
  // pero este contrato NO cambia.
  return {
    score: 0.78,
    focus: ["dnip", "latency", "errors"],
  };
}

export async function getAdipInsights(workspaceId?: string): Promise<AdipInsight[]> {
  return [
    {
      id: "1",
      title: "DNIP estable bajo carga",
      description: "El motor mantiene buen rendimiento con baja tasa de errores.",
    },
    {
      id: "2",
      title: "Latencia aceptable",
      description: "La latencia promedio está dentro de los límites definidos.",
    },
  ];
}
