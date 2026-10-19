"use client";

export async function AIAnalyzer(text: string) {
  // Aquí puedes conectar OpenAI, Anthropic, Gemini, etc.
  // Por ahora dejamos una versión simulada para no romper nada.

  const summary = text.slice(0, 300);

  return {
    summary,
    insights: [
      "El archivo contiene patrones relevantes.",
      "Se detecta estructura semántica consistente.",
      "Posible clasificación: documento técnico.",
    ],
    score: Math.min(1, text.length / 10000),
  };
}
