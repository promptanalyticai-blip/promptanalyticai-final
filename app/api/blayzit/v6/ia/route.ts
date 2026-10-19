// app/api/blayzit/v6/ia/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // === Procesamiento IA V6 ===
    const summary =
      "El contenido describe un comportamiento irregular con posibles riesgos operativos.";

    const sentiment = "neutral";

    const categories = [
      { name: "Riesgo Operativo", confidence: 0.82 },
      { name: "Comportamiento Irregular", confidence: 0.67 },
    ];

    const insights = [
      { label: "Patrón dominante", value: "Acceso fuera de horario" },
      { label: "Nivel de riesgo", value: "Moderado" },
    ];

    const similarityScore = 0.63;

    // === Respuesta IA ===
    return NextResponse.json({
      ok: true,
      ia: {
        summary,
        sentiment,
        categories,
        insights,
        similarityScore,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
