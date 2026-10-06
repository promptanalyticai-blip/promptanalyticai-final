// app/api/blayzit/historial/route.ts
import { NextResponse } from "next/server";
import { runBlayzit } from "@/services/blayzit";

export async function GET() {
  const history = await runBlayzit();
  return NextResponse.json({ ok: true, history });
}
