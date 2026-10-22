"use client";

import { Wifi, WifiOff, Search, Bell, User, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeaderV6({
  title = "BLAYZIT V6",
  section = "",
  offline = false
}) {
  return (
    <header
      className="
        w-full h-16 
        bg-white/70 backdrop-blur-md 
        border-b border-slate-200/50 
        shadow-sm 
        flex items-center justify-between 
        px-6 sticky top-0 z-50
      "
    >
      {/* IZQUIERDA: Breadcrumb + Estado */}
      <div className="flex items-center gap-3">
        <Link href="/blayzit/v6">
          <span className="text-lg font-semibold text-slate-800 tracking-tight hover:text-slate-600 transition">
            {title}
          </span>
        </Link>

        {section && (
          <>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-600">
              {section}
            </span>
          </>
        )}

        {/* Estado del sistema */}
        {offline ? (
          <WifiOff className="text-red-500" size={18} />
        ) : (
          <Wifi className="text-green-600" size={18} />
        )}
      </div>

      {/* CENTRO: Buscador global */}
      <div className="hidden md:flex items-center w-80 bg-slate-100/70 backdrop-blur-sm rounded-md px-3 py-2 border border-slate-200/50 shadow-inner">
        <Search className="w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Buscar en BLAYZIT V6..."
          className="ml-2 bg-transparent outline-none text-sm text-slate-700 w-full"
        />
      </div>

      {/* DERECHA: Notificaciones + Usuario */}
      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <button
          className="
            p-2 rounded-md hover:bg-slate-100 transition
          "
        >
          <Bell size={20} className="text-slate-600" />
        </button>

        {/* Usuario */}
        <button
          className="
            flex items-center gap-2 px-3 py-2 rounded-md 
            bg-slate-100/70 backdrop-blur-sm 
            hover:bg-slate-200 transition border border-slate-200/50
          "
        >
          <User size={18} className="text-slate-700" />
          <span className="text-sm font-medium text-slate-700">
            Usuario
          </span>
        </button>
      </div>
    </header>
  );
}
