///app/api/dnip/ingest/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { status: "ok", message: "DNIP ingest activo" },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json(
      { status: "ok", received: body },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Error interno en DNIP ingest" },
      { status: 500 }
    );
  }
}
