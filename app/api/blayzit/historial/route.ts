// app/api/blayzit/analysis/route.ts
import { NextResponse } from "next/server";
import { runBlayzit } from "@/services/blayzit";

export async function GET() {
  try {
    const history = await runBlayzit();
    return NextResponse.json({ ok: true, history });
  } catch (error) {
    console.error("Blayzit history error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
