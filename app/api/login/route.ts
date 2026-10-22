// app/api/login/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { email, password } = await req.json();

  // 1. Autenticación real (Supabase Auth)
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({ email, password });

  if (authError || !authData.user) {
    return NextResponse.json(
      { error: "Credenciales inválidas" },
      { status: 401 }
    );
  }

  const userId = authData.user.id;

  // 2. Perfil universal (tabla users)
  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  // 3. Rol universal (tabla roles)
  const { data: role } = await supabase
    .from("roles")
    .select("*")
    .eq("user_id", userId)
    .single();

  // 4. Workspace global (tabla workspaces)
  const { data: workspace } = await supabase
    .from("workspaces")
    .select("*")
    .eq("type", "universal")
    .single();

  return NextResponse.json({
    authUser: authData.user,
    profile,
    role,
    workspace,
  });
}
