//app/api/roles/update/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { userId, workspaceId, role } = await req.json();

    if (!userId || !workspaceId || !role) {
      return NextResponse.json(
        { error: "userId, workspaceId y role son requeridos" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Actualizar rol
    const { error } = await supabase
      .from("roles")
      .upsert({
        user_id: userId,
        workspace_id: workspaceId,
        role,
      });

    if (error) {
      return NextResponse.json(
        { error: "Error actualizando rol" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("ROLES UPDATE ERROR:", err);
    return NextResponse.json(
      { error: "Error interno actualizando rol" },
      { status: 500 }
    );
  }
}
