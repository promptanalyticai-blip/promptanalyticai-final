"use client";

import BlayzitLogo from "@/components/blayzit/BlayzitLogo";
import { Bell, UserCircle, Search } from "lucide-react";
import { useBlayzit } from "@/components/blayzit/BlayzitContext";

export default function EnterpriseTopbar() {
  const { activeModule } = useBlayzit();

  return (
    <header
      className="
        w-full 
        bg-white 
        border-b border-slate-200 
        px-6 py-3 
        flex items-center justify-between
        shadow-[0_2px_12px_rgba(0,0,0,0.04)]
        relative
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <BlayzitLogo />
        <span className="text-sm text-slate-500 capitalize">
          {activeModule}
        </span>
      </div>

      {/* Search */}
      <div
        className="
          flex items-center gap-2 
          bg-slate-50 
          border border-slate-200 
          px-3 py-2 
          rounded-lg 
          w-72
        "
      >
        <Search className="w-4 h-4 text-slate-500" />
        <span className="text-sm text-slate-600">Buscar…</span>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-5">
        <Bell className="w-6 h-6 text-slate-700 hover:text-slate-900 cursor-pointer transition" />
        <UserCircle className="w-7 h-7 text-slate-700 hover:text-slate-900 cursor-pointer transition" />
      </div>
    </header>
  );
}
