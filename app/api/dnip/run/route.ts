//app/api/dnip/run/route.ts
import { NextResponse } from "next/server";

// GET → para probar en navegador
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      message: "DNIP run activo",
      example: {
        metrics: ["risk", "occupancy", "revenue"],
      },
    },
    { status: 200 }
  );
}

// POST → para ejecutar DNIP Engine
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = {
      status: "ok",
      received: body,
      analysis: {
        critical: 2,
        warning: 3,
        stable: 5,
      },
      timestamp: Date.now(),
    };

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("DNIP RUN ERROR:", err);
    return NextResponse.json(
      { error: "Error interno en DNIP run" },
      { status: 500 }
    );
  }
}
