//app/api/dnip/version/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      engine: "DNIP",
      version: "1.0.0",
      build: "stable",
      updated: "2026-10-12",
    },
    { status: 200 }
  );
}
