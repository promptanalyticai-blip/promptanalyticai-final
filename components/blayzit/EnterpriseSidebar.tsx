"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bell, BarChart3, Shield, Activity } from "lucide-react";
import { useBlayzit } from "@/components/blayzit/BlayzitContext";

export default function EnterpriseSidebar() {
  const pathname = usePathname();
  const { setActiveModule } = useBlayzit();

  const items = [
  { label: "Inicio", icon: Home, href: "/blayzit", key: "inicio" },
  { label: "Notificaciones", icon: Bell, href: "/blayzit/notificaciones", key: "notificaciones" },
  { label: "Telemetría", icon: Activity, href: "/blayzit/telemetria", key: "telemetria" },
  { label: "Auditoría", icon: BarChart3, href: "/blayzit/auditoria", key: "auditoria" },
  { label: "Seguridad", icon: Shield, href: "/blayzit/seguridad", key: "seguridad" },
  { label: "DNIP", icon: BarChart3, href: "/blayzit/dnip", key: "dnip" },
  { label: "ADIP", icon: Activity, href: "/blayzit/adip", key: "adip" },
];


  return (
    <aside
      className="
        h-full w-64 bg-white border-r border-slate-200 flex flex-col shadow-sm
        animate-[fadeIn_0.25s_ease-out]
      "
    >
      <div className="px-4 py-4 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-500">BLAYZIT</span>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveModule(item.key)}
              className={`
                w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
                ${active
                  ? "bg-slate-100 border border-slate-300 text-slate-900 shadow-sm"
                  : "text-slate-700 hover:bg-slate-50 hover:border-slate-200 border border-transparent"}
              `}
            >
              <item.icon className="w-4 h-4 text-slate-700" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-slate-200 text-xs text-slate-500">
        BLAYZIT V1.2 · Navegación avanzada
      </div>
    </aside>
  );
}
