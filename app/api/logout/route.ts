// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // Elimina la cookie de sesión
  const response = NextResponse.json({ message: "Logged out" });

  response.cookies.set({
    name: "session",
    value: "",
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(0), // ← destruye la cookie
  });

  return response;
}
