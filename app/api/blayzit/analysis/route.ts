// app/api/blayzit/analysis/route.ts
import { NextResponse } from "next/server";
import { runBlayzit } from "@/services/blayzit";

export async function GET() {
  const analysis = await runBlayzit();
  return NextResponse.json({ ok: true, analysis });
}
