"use client";

import { Bell, Search, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      
      <div className="flex items-center gap-3 w-1/3">
        <Search className="text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Buscar en BLAYZIT..."
          className="w-full bg-slate-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-slate-600 hover:text-blue-600 cursor-pointer" size={22} />

        <div className="flex items-center gap-3 cursor-pointer">
          <User className="text-slate-600" size={22} />
          <span className="font-medium text-slate-700">Mindy</span>
        </div>
      </div>
    </header>
  );
}
