"use client";

import { usePathname } from "next/navigation";
import BuscadorV6 from "./BuscadorV6";
import NotificacionesV6 from "./NotificacionesV6";
import UsuarioV6 from "./UsuarioV6";

export default function TopbarV6() {
  const pathname = usePathname();

  // Módulo detectado según rutas reales V6
  const module = (() => {
    if (pathname.includes("/blayzit/v6/riesgos")) return "riesgos";
    if (pathname.includes("/blayzit/v6/senales")) return "señales";
    if (pathname.includes("/blayzit/v6/decisiones")) return "decisiones";
    if (pathname.includes("/blayzit/v6/predicciones")) return "predicciones";
    if (pathname.includes("/blayzit/v6/telemetria")) return "telemetría";
    if (pathname.includes("/blayzit/v6/operaciones")) return "operaciones";
    if (pathname.includes("/blayzit/v6/pipelines")) return "pipelines";
    if (pathname.includes("/blayzit/v6/planes")) return "planes";
    if (pathname.includes("/blayzit/v6/overview")) return "overview";
    if (pathname.includes("/blayzit/v6/perfil")) return "perfil";
    if (pathname.includes("/blayzit/v6/settings")) return "configuración";
    if (pathname.includes("/blayzit/v6/upload")) return "subidas";

    return "inicio";
  })();

  // Fecha y hora en formato 24h manual
  const now = new Date();
  const fecha = now.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const hora = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <header className="w-full bg-white border-b border-slate-200 px-8 py-3 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.06)]">

      {/* IZQUIERDA */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-slate-900 tracking-tight">
          {module}
        </span>
        <span className="text-xs text-slate-500">
          navegación inteligente del sistema
        </span>
      </div>

      {/* CENTRO */}
      <div className="flex-1 flex justify-center px-10">
        <BuscadorV6 />
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-6">
        <div className="text-xs text-slate-500 font-medium">
          {fecha} — {hora}
        </div>

        <NotificacionesV6 />
        <UsuarioV6 />
      </div>
    </header>
  );
}
