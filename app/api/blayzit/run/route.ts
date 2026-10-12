// app/api/blayzit/run/route.ts
import { detectUserLevel } from "@/lib/level-engine";
import { configureBlayzit } from "@/lib/blayzit-engine";

export async function POST(req: Request) {
  const body = await req.json();

  // Detectar nivel del usuario según su actividad real
  const levelInfo = detectUserLevel({
    tenant: body.tenant,
    workspace: body.workspace,
    users: body.users,
    datasets: body.datasets,
    signals: body.signals,
    actions: body.actions,
    exports: body.exports,
    auditLog: body.auditLog,
  });

  // Configurar BLAYZIT según el nivel detectado
  const blayzit = configureBlayzit({
    level: levelInfo.level,
  });

  // Respuesta universal
  return Response.json({
    level: levelInfo,
    blayzit,
  });
}
