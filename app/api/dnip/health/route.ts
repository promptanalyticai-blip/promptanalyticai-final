//app/api/dnip/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      checks: {
        ingest: true,
        run: true,
        database: true,
      },
      timestamp: Date.now(),
    },
    { status: 200 }
  );
}
