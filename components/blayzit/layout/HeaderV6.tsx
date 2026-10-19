"use client";

import { usePathname } from "next/navigation";
import { Bell, User } from "lucide-react";

export default function HeaderV6() {
  const pathname = usePathname();

  // Detecta la sección actual
  const current =
    pathname?.split("/").pop()?.toUpperCase() || "BLAYZIT";

  return (
    <header className="w-full bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
      
      {/* Sección actual */}
      <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
        {current}
      </h2>

      {/* Acciones rápidas del usuario */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-slate-100 transition">
          <Bell size={20} className="text-slate-600" />
        </button>

        <button className="p-2 rounded-md hover:bg-slate-100 transition">
          <User size={20} className="text-slate-600" />
        </button>
      </div>
    </header>
  );
}
