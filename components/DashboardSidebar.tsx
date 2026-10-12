//components/DashboardSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Activity,
  ShieldCheck,
  BarChart3,
  FileText,
  Users,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Alertas", href: "/dashboard/alerts", icon: Activity },
    { name: "Analítica", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Exportación", href: "/dashboard/export", icon: FileText },
    { name: "WOW Engine", href: "/dashboard/wow", icon: ShieldCheck },
    { name: "Usuarios", href: "/dashboard/users", icon: Users },
    { name: "Ajustes", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 h-full bg-slate-900/80 border-r border-slate-800 backdrop-blur-xl shadow-xl shadow-black/40 p-6 flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <img
          src="/boxer.png"
          alt="BLAYZIT Logo"
          className="h-10 w-10 rounded-md shadow-lg"
        />
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-100">
            BLAYZIT
          </h1>
          <p className="text-xs text-slate-400">Decision Intelligence</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                active
                  ? "bg-sky-600/20 text-sky-300 border border-sky-700 shadow-md"
                  : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"
              }`}
            >
              <Icon size={16} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
