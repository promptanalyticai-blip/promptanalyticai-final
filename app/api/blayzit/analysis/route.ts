// app/api/blayzit/analysis/route.ts
import { NextResponse } from "next/server";
import { runBlayzit } from "@/services/blayzit";

export async function GET() {
  try {
    const analysis = await runBlayzit();
    return NextResponse.json({ ok: true, analysis });
  } catch (error) {
    console.error("Blayzit analysis error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
