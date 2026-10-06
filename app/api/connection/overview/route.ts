// app/api/connection/overview/route.ts
import { NextResponse } from "next/server";
import { getDnipMetrics } from "@/lib/dnip-engine";
import { getAdipSummary } from "@/lib/adip-engine";

export async function GET() {
  const dnip = await getDnipMetrics();
  const adip = await getAdipSummary();

  return NextResponse.json({ ok: true, dnip, adip });
}
