"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Upload, Brain, Shield, Activity, FileSearch, LayoutDashboard } from "lucide-react";

export default function SidebarV6() {
  return (
    <aside className="w-64 bg-white shadow-lg border-r border-slate-200 flex flex-col p-6">
      
      {/* LOGO */}
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/blayzit-logo.png"
          alt="BLAYZIT V6 Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <h1 className="text-xl font-bold text-slate-800">BLAYZIT V6</h1>
      </div>

      {/* MENU */}
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
          <LayoutDashboard size={18} /> Telemetría V6
        </Link>

        <Link href="/blayzit/v6/panel" className="flex items-center gap-3 hover:text-blue-600">
          <LayoutDashboard size={18} /> Panel Maestro V6
        </Link>
      </nav>
    </aside>
  );
}
