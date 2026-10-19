// app/api/blayzit/v6/dnip/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // === Procesamiento DNIP V6 ===
    const riskScore = 62;

    const patterns = [
      "Patrón de acceso irregular",
      "Eventos fuera de horario",
    ];

    const anomalies = [
      { label: "Acceso desde IP desconocida", severity: "high" },
      { label: "Incremento de errores 5xx", severity: "medium" },
    ];

    const threats = [
      { label: "Posible scraping", level: "warning" },
      { label: "Intento de fuerza bruta", level: "critical" },
    ];

    // === Respuesta DNIP ===
    return NextResponse.json({
      ok: true,
      dnip: {
        riskScore,
        patterns,
        anomalies,
        threats,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
