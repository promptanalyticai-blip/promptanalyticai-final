// proxy.ts
import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/Client";

export function proxy(request: Request) {
  const supabase = createServerClient();

  // Clonar URL
  const url = new URL(request.url);

  // Obtener sesión
  const accessToken = supabase.auth.getSession()?.data?.session?.access_token;
  const isLoggedIn = Boolean(accessToken);

  // Permitir login si no hay sesión
  if (!isLoggedIn && url.pathname === "/login") {
    return NextResponse.next();
  }

  // Bloquear dashboard si no hay sesión
  if (!isLoggedIn && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Redirigir login → init si hay sesión
  if (isLoggedIn && url.pathname === "/login") {
    url.pathname = "/init";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/enterprise/:path*", "/dnip/:path*", "/login"],
};
