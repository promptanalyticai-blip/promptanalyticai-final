//app/api/dnip/status/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      engine: "DNIP",
      uptime: "active",
      version: "1.0.0",
    },
    { status: 200 }
  );
}
