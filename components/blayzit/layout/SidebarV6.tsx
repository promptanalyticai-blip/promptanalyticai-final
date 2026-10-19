"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Upload,
  FileSearch,
  Brain,
  Radar,
  ShieldCheck,
  Activity,
  LayoutDashboard,
} from "lucide-react";

export default function SidebarV6() {
  const pathname = usePathname();

  const nav = [
    {
      label: "Panel Maestro",
      href: "/blayzit/v6/panel",
      icon: <LayoutDashboard size={18} />,
    },
    {
      label: "Upload V6",
      href: "/blayzit/v6/upload",
      icon: <Upload size={18} />,
    },
    {
      label: "Analyze V6",
      href: "/blayzit/v6/analyze",
      icon: <FileSearch size={18} />,
    },
    {
      label: "Intelligence V6",
      href: "/blayzit/v6/intelligence",
      icon: <Brain size={18} />,
    },
    {
      label: "DNIP · Riesgos",
      href: "/blayzit/v6/dnip",
      icon: <Radar size={18} />,
    },
    {
      label: "ADIP · Decisiones",
      href: "/blayzit/v6/adip",
      icon: <ShieldCheck size={18} />,
    },
    {
      label: "Telemetría V6",
      href: "/blayzit/v6/telemetry",
      icon: <Activity size={18} />,
    },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 p-6 flex flex-col gap-6 shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-slate-900">BLAYZIT V6</h1>
        <p className="text-xs text-slate-500">Arquitectura Operativa</p>
      </div>

      <nav className="flex flex-col gap-2">
        {nav.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
                ${
                  active
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
