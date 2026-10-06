// app/api/blayzit/run/route.ts
import { NextResponse } from "next/server";
import { runBlayzit } from "@/services/blayzit";

export async function POST(req: Request) {
  try {
    const result = await runBlayzit();
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    console.error("Blayzit run error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
