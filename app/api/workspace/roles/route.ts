// app/api/workspace/roles/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return NextResponse.json(
        { error: "workspaceId requerido" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("roles")
      .select("*")
      .eq("workspace_id", workspaceId);

    if (error) {
      return NextResponse.json(
        { error: "Error obteniendo roles" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("WORKSPACE ROLES ERROR:", err);
    return NextResponse.json(
      { error: "Error interno obteniendo roles" },
      { status: 500 }
    );
  }
}
