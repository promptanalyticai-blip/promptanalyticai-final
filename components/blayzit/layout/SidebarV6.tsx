"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Upload,
  FileSearch,
  Brain,
  Activity,
  Shield,
  Gauge,
  LayoutDashboard,
} from "lucide-react";

export default function SidebarV6() {
  const pathname = usePathname();

  const current =
    pathname?.split("/").pop()?.toUpperCase() || "BLAYZIT";

  return (
    <aside className="w-64 bg-white border-r border-slate-200 shadow-md flex flex-col p-6">
      
      {/* LOGO + SECCIÓN ACTUAL */}
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/blayzit-logo.png"
          alt="BLAYZIT Logo"
          width={42}
          height={42}
          className="rounded-md"
        />
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          {current}
        </h1>
      </div>

      {/* MENÚ */}
      <nav className="flex flex-col gap-4 text-slate-700">
        <Link href="/blayzit/v6" className="flex items-center gap-3 hover:text-blue-600">
          <Home size={18} /> Home V6
        </Link>

        <Link href="/blayzit/v6/upload" className="flex items-center gap-3 hover:text-blue-600">
          <Upload size={18} /> Upload V6
        </Link>

        <Link href="/blayzit/v6/analyze" className="flex items-center gap-3 hover:text-blue-600">
          <FileSearch size={18} /> Analyze V6
        </Link>

        <Link href="/blayzit/v6/intelligence" className="flex items-center gap-3 hover:text-blue-600">
          <Brain size={18} /> Intelligence V6
        </Link>

        <Link href="/blayzit/v6/dnip" className="flex items-center gap-3 hover:text-blue-600">
          <Activity size={18} /> DNIP · Riesgos
        </Link>

        <Link href="/blayzit/v6/adip" className="flex items-center gap-3 hover:text-blue-600">
          <Shield size={18} /> ADIP · Decisiones
        </Link>

        <Link href="/blayzit/v6/security" className="flex items-center gap-3 hover:text-blue-600">
          <Shield size={18} /> Seguridad V6
        </Link>

        <Link href="/blayzit/v6/audit" className="flex items-center gap-3 hover:text-blue-600">
          <Activity size={18} /> Auditoría V6
        </Link>

        <Link href="/blayzit/v6/telemetry" className="flex items-center gap-3 hover:text-blue-600">
          <Gauge size={18} /> Telemetría V6
        </Link>

        <Link href="/blayzit/v6/panel" className="flex items-center gap-3 hover:text-blue-600">
          <LayoutDashboard size={18} /> Panel Maestro V6
        </Link>
      </nav>
    </aside>
  );
}
