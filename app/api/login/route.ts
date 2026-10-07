//app/api/login/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y password son requeridos" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Validar credenciales
    const { data: authUser, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError || !authUser.user) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    const userId = authUser.user.id;

    // 2. Obtener empresa
    const { data: company } = await supabase
      .from("companies")
      .select("*")
      .eq("owner_id", userId)
      .single();

    // 3. Obtener workspace
    const { data: workspace } = await supabase
      .from("workspaces")
      .select("*")
      .eq("company_id", company?.id)
      .single();

    // 4. Obtener roles
    const { data: roles } = await supabase
      .from("roles")
      .select("*")
      .eq("user_id", userId);

    return NextResponse.json(
      {
        user: authUser.user,
        company,
        workspace,
        roles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { error: "Error interno en login" },
      { status: 500 }
    );
  }
}
