"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  LineChart,
  Search,
  FileUp,
  History,
  Activity,
  ShieldAlert,
  Cpu,
  Brain,
  Settings,
  LogOut,
} from "lucide-react";

export default function SidebarV6() {
  const pathname = usePathname();

  const itemClass = (active) =>
    `group flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 relative text-[14px] ${
      active
        ? "text-indigo-700 font-semibold"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  const ActiveBorder = ({ active }) =>
    active ? (
      <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500 to-blue-500 shadow-[0_0_6px_rgba(99,102,241,0.6)] rounded-full" />
    ) : null;

  const Tooltip = ({ text }) => (
    <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-150 ease-out bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-3 py-1 rounded-md text-xs text-slate-600 whitespace-nowrap z-50">
      {text}
    </span>
  );

  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-8 animate-[fadeIn_0.3s_ease]">

      {/* LOGO */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/blayzit-logo.png"
          alt="BLAYZIT Logo"
          width={350}
          height={350}
          loading="eager"
          className="object-contain"
        />

        <div className="text-center text-xs text-slate-500 leading-tight">
          <p>Decisiones en Acciones</p>
          <p>Acciones en Decisiones</p>
        </div>
      </div>

      {/* INICIO */}
      <div>
        <p className="text-base font-bold text-slate-700 mb-2">Inicio</p>

        <Link href="/blayzit/v6" className={itemClass(pathname === "/blayzit/v6")}>
          <ActiveBorder active={pathname === "/blayzit/v6"} />
          <LayoutDashboard size={16} color="#6366F1" />
          Dashboard
          <Tooltip text="Vista general del sistema" />
        </Link>

        <Link
          href="/blayzit/v6/overview"
          className={itemClass(pathname.includes("overview"))}
        >
          <ActiveBorder active={pathname.includes("overview")} />
          <LineChart size={16} color="#3B82F6" />
          Análisis Inteligente
          <Tooltip text="Análisis avanzado con IA" />
        </Link>

        <p className="text-xs text-slate-400 ml-9 -mt-1">Insights</p>
      </div>

      {/* SISTEMA */}
      <div>
        <p className="text-base font-bold text-slate-700 mb-2">Sistema</p>

        <Link
          href="/blayzit/v6/analizar"
          className={itemClass(pathname.includes("analizar"))}
        >
          <ActiveBorder active={pathname.includes("analizar")} />
          <Search size={16} color="#10B981" />
          Analizar
          <Tooltip text="Analizar datos del sistema" />
        </Link>

        <Link
          href="/blayzit/v6/upload"
          className={itemClass(pathname.includes("upload"))}
        >
          <ActiveBorder active={pathname.includes("upload")} />
          <FileUp size={16} color="#F59E0B" />
          Upload
          <Tooltip text="Subir archivos y datos" />
        </Link>

        <Link
          href="/blayzit/v6/audit"
          className={itemClass(pathname.includes("audit"))}
        >
          <ActiveBorder active={pathname.includes("audit")} />
          <History size={16} color="#8B5CF6" />
          Auditoría
          <Tooltip text="Historial y auditorías del sistema" />
        </Link>

        <Link
          href="/blayzit/v6/telemetry"
          className={itemClass(pathname.includes("telemetry"))}
        >
          <ActiveBorder active={pathname.includes("telemetry")} />
          <Activity size={16} color="#EC4899" />
          Telemetría
          <Tooltip text="Monitoreo en tiempo real" />
        </Link>

        <p className="text-xs text-slate-400 ml-9 -mt-1">Monitoreo</p>

        <Link
          href="/blayzit/v6/riesgos"
          className={itemClass(pathname.includes("riesgos"))}
        >
          <ActiveBorder active={pathname.includes("riesgos")} />
          <ShieldAlert size={16} color="#EF4444" />
          Riesgos
          <Tooltip text="Riesgos detectados en el sistema" />
        </Link>
      </div>

      {/* INTELIGENCIA OPERATIVA */}
      <div>
        <p className="text-base font-bold text-slate-700 mb-2">Inteligencia Operativa</p>

        <Link
          href="/blayzit/v6/dnip"
          className={itemClass(pathname.includes("dnip"))}
        >
          <ActiveBorder active={pathname.includes("dnip")} />
          <Cpu size={16} color="#0EA5E9" />
          Detecciones (DNIP)
          <Tooltip text="Detecciones automáticas basadas en IA" />
        </Link>

        <Link
          href="/blayzit/v6/adip"
          className={itemClass(pathname.includes("adip"))}
        >
          <ActiveBorder active={pathname.includes("adip")} />
          <Brain size={16} color="#6366F1" />
          Decisiones (ADIP)
          <Tooltip text="Decisiones inteligentes del sistema" />
        </Link>

        <p className="text-xs text-slate-400 ml-9 -mt-1">Predicciones IA</p>

        <Link
          href="/blayzit/v6/actions"
          className={itemClass(pathname.includes("actions"))}
        >
          <ActiveBorder active={pathname.includes("actions")} />
          <Cpu size={16} color="#10B981" />
          Acciones Inteligentes
          <Tooltip text="Acciones automáticas recomendadas por IA" />
        </Link>
      </div>

      {/* CUENTA */}
      <div className="pt-6">
        <p className="text-base font-bold text-slate-700 mb-2">Cuenta</p>

        <Link
          href="/blayzit/v6/ia"
          className={itemClass(pathname.includes("ia"))}
        >
          <ActiveBorder active={pathname.includes("ia")} />
          <Brain size={16} color="#3B82F6" />
          Ayuda IA
          <Tooltip text="Asistente inteligente de BLAYZIT" />
        </Link>

        <Link
          href="/blayzit/v6/settings"
          className={itemClass(pathname.includes("settings"))}
        >
          <ActiveBorder active={pathname.includes("settings")} />
          <Settings size={16} color="#6366F1" />
          Settings
          <Tooltip text="Configuración de tu cuenta" />
        </Link>

        <Link href="/logout" className={itemClass(false)}>
          <ActiveBorder active={false} />
          <LogOut size={16} color="#64748B" />
          Cerrar sesión
          <Tooltip text="Salir de tu cuenta" />
        </Link>
      </div>
    </aside>
  );
}
