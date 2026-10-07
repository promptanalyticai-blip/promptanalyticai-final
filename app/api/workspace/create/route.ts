// app/api/workspace/create/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { name, companyId, userId } = await req.json();

    if (!name || !companyId || !userId) {
      return NextResponse.json(
        { error: "Nombre, compañía y usuario son requeridos" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Crear workspace
    const { data: workspace, error: workspaceError } = await supabase
      .from("workspaces")
      .insert({
        name,
        company_id: companyId,
      })
      .select("*")
      .single();

    if (workspaceError) {
      return NextResponse.json(
        { error: "Error creando workspace" },
        { status: 500 }
      );
    }

    // Asignar rol owner al usuario
    await supabase.from("roles").insert({
      user_id: userId,
      workspace_id: workspace.id,
      role: "owner",
    });

    // Actualizar sesión enterprise
    const { data: roles } = await supabase
      .from("roles")
      .select("*")
      .eq("user_id", userId);

    const { data: company } = await supabase
      .from("companies")
      .select("*")
      .eq("id", companyId)
      .single();

    return NextResponse.json(
      {
        user: { id: userId },
        company,
        workspace,
        roles,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("WORKSPACE CREATE ERROR:", err);
    return NextResponse.json(
      { error: "Error interno creando workspace" },
      { status: 500 }
    );
  }
}
