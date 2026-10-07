// app/api/company/create/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { name, userId } = await req.json();

    if (!name || !userId) {
      return NextResponse.json(
        { error: "Nombre y usuario son requeridos" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Crear compañía
    const { data: company, error: companyError } = await supabase
      .from("companies")
      .insert({
        name,
        owner_id: userId,
      })
      .select("*")
      .single();

    if (companyError) {
      return NextResponse.json(
        { error: "Error creando compañía" },
        { status: 500 }
      );
    }

    // Actualizar sesión enterprise
    const { data: workspace } = await supabase
      .from("workspaces")
      .select("*")
      .eq("company_id", company.id)
      .single();

    const { data: roles } = await supabase
      .from("roles")
      .select("*")
      .eq("user_id", userId);

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
    console.error("COMPANY CREATE ERROR:", err);
    return NextResponse.json(
      { error: "Error interno creando compañía" },
      { status: 500 }
    );
  }
}
