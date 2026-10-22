"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Shield,
  Activity,
  Upload,
  Brain,
  Search,
  FileSearch,
  BarChart3
} from "lucide-react";

export default function SidebarV6() {
  return (
    <aside className="h-screen w-64 bg-white/70 backdrop-blur-md border-r border-slate-200/50 shadow-sm p-6 flex flex-col gap-6">
      
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          BLAYZIT V6
        </h1>
        <p className="text-sm text-slate-500">Inteligencia Operativa</p>
      </div>

      <nav className="flex flex-col gap-3 text-slate-700">
        <Link href="/blayzit/v6/panel" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <LayoutDashboard className="w-5 h-5" />
          Panel
        </Link>

        <Link href="/blayzit/v6/dnip" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <Activity className="w-5 h-5" />
          DNIP
        </Link>

        <Link href="/blayzit/v6/adip" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <Brain className="w-5 h-5" />
          ADIP
        </Link>

        <Link href="/blayzit/v6/analizar" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <Search className="w-5 h-5" />
          Analizar
        </Link>

        <Link href="/blayzit/v6/audit" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <FileSearch className="w-5 h-5" />
          Audit
        </Link>

        <Link href="/blayzit/v6/intelligence" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <BarChart3 className="w-5 h-5" />
          Intelligence
        </Link>

        <Link href="/blayzit/v6/security" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <Shield className="w-5 h-5" />
          Security
        </Link>

        <Link href="/blayzit/v6/upload" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <Upload className="w-5 h-5" />
          Upload
        </Link>
      </nav>
    </aside>
  );
}
