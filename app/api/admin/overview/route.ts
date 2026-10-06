// app/api/admin/overview/route.ts
import { NextResponse } from "next/server";
import { getMetrics } from "@/lib/dnip-engine";
import { analyzeMetrics } from "@/lib/adip-engine";
import { computeSystemHealth } from "@/lib/admin-engine";

export async function GET() {
  const dnipMetrics = getMetrics();
  const adipAnalysis = analyzeMetrics(dnipMetrics);
  const systemHealth = computeSystemHealth(dnipMetrics, adipAnalysis);

  return NextResponse.json({
    dnip: dnipMetrics,
    adip: adipAnalysis,
    health: systemHealth,
  });
}
