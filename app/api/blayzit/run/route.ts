// app/api/blayzit/run/route.ts
import { NextResponse } from "next/server";
import { runBlayzit } from "@/services/blayzit";

export async function POST() {
  const result = await runBlayzit();
  return NextResponse.json({ ok: true, result });
}
