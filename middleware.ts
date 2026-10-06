// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@/lib/supabase/Client";

export function middleware(req: NextRequest) {
  const supabase = createServerClient(); // ← SIN argumentos

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/enterprise/:path*", "/dnip/:path*"],
};
