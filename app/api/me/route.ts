// app/api/me/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // 1. Obtener usuario autenticado
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { user: null },
      { status: 200 }
    );
  }

  const userId = user.id;

  // 2. Perfil universal
  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  // 3. Rol universal
  const { data: role } = await supabase
    .from("roles")
    .select("*")
    .eq("user_id", userId)
    .single();

  // 4. Workspace global
  const { data: workspace } = await supabase
    .from("workspaces")
    .select("*")
    .eq("type", "universal")
    .single();

  return NextResponse.json({
    user: {
      authUser: user,
      profile,
      role,
      workspace,
    }
  });
}
