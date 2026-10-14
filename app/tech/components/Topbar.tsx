//app/dashboard/components/Topbar.tsx
"use client";

import { Bell, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full bg-slate-900/70 border-b border-slate-800 backdrop-blur-xl px-6 py-3 flex items-center justify-between shadow-lg shadow-black/30">
      <div>
        <h1 className="text-lg font-semibold text-slate-100 tracking-tight">
          Panel de Control
        </h1>
        <p className="text-xs text-slate-400">Monitoreo inteligente por tenant</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300">
          <Bell size={18} />
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300">
          <UserCircle size={20} />
          <span className="text-xs">Mindy</span>
        </button>
      </div>
    </header>
  );
}
