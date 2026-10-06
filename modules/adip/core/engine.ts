// lib/adip-engine.ts

// INSIGHTS — CONTRATO ESTABLE
export type AdipInsight = {
  id: string;
  title: string;
  description: string;
};

// SUMMARY — CONTRATO ESTABLE
export type AdipSummary = {
  score: number;     // 0–1
  focus: string[];   // áreas de enfoque
};

// SUMMARY ADIP
export async function getAdipSummary(workspaceId?: string): Promise<AdipSummary> {
  return {
    score: 0.78,
    focus: ["dnip", "latency", "errors"],
  };
}

// INSIGHTS ADIP
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
    {
      id: "3",
      title: "Errores controlados",
      description: "El sistema mantiene una tasa de errores mínima.",
    },
  ];
}
