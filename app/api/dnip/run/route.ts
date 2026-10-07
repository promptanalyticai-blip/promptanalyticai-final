//app/api/dnip/run/route.ts
import { NextResponse } from "next/server";
import { runDnipEngine, type DnipInput } from "@/lib/dnip-engine";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as DnipInput;

    if (!body.workspaceId || !body.userId || !body.metrics) {
      return NextResponse.json(
        { error: "workspaceId, userId y metrics son requeridos" },
        { status: 400 }
      );
    }

    const decision = runDnipEngine(body);

    return NextResponse.json(decision, { status: 200 });
  } catch (err) {
    console.error("DNIP ENGINE ERROR:", err);
    return NextResponse.json(
      { error: "Error interno ejecutando DNIP Engine" },
      { status: 500 }
    );
  }
}
