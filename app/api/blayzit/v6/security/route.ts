// app/api/blayzit/v6/security/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // === Procesamiento Seguridad V6 ===
    const threats = [
      { label: "Intento de fuerza bruta", level: "critical" },
      { label: "Scraping detectado", level: "warning" },
    ];

    const anomalies = [
      { label: "Acceso fuera de horario", severity: "medium" },
    ];

    const blocked = 3;
    const allowed = 12;

    // === Respuesta Seguridad ===
    return NextResponse.json({
      ok: true,
      security: {
        threats,
        anomalies,
        blocked,
        allowed,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
