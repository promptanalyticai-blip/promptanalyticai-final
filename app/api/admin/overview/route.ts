// app/api/admin/overview/route.ts
import { NextResponse } from "next/server";
import { getAdminMetrics } from "@/lib/admin-engine";

export async function GET() {
  const metrics = await getAdminMetrics();
  return NextResponse.json({ ok: true, metrics });
}
