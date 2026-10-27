"use client";

import { usePathname } from "next/navigation";
import NotificacionesV6 from "./NotificacionesV6";
import UsuarioV6 from "./UsuarioV6";
import BuscadorV6 from "./BuscadorV6";

export default function TopbarV6() {
  const pathname = usePathname();

  const module = (() => {
    if (pathname.includes("riesgos")) return "Riesgos";
    if (pathname.includes("dnip")) return "Detecciones (dnip)";
    if (pathname.includes("adip")) return "Decisiones (adip)";
    if (pathname.includes("telemetry")) return "Telemetría";
    if (pathname.includes("audit")) return "Auditoría";
    return "Dashboard";
  })();

  return (
    <header className="w-full bg-white border-b border-slate-200 px-8 py-3 flex items-center justify-between shadow-sm">

      {/* IZQUIERDA */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900 tracking-tight">
          {module}
        </span>
        <span className="text-xs text-slate-500">
          Navegación Inteligente del Sistema
        </span>
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-6">
        <BuscadorV6 />
        <NotificacionesV6 />
        <UsuarioV6 />
      </div>

    </header>
  );
}
