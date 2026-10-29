"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { User, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const supabase = createClient();

export default function UsuarioV6() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    cargarUsuario();
  }, []);

  async function cargarUsuario() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  }

  return (
    <div className="relative">
      {/* BOTÓN */}
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition"
        onClick={() => setOpen(!open)}
      >
        <User className="h-6 w-6 text-slate-600" />
      </button>

      {/* PANEL */}
      {open && (
        <div className="absolute right-0 top-12 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 space-y-4">

          {/* INFO */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800">
              {user?.email || "superadmin"}
            </span>
            <span className="text-xs text-slate-500">
              {user ? "usuario registrado" : "modo desarrollo"}
            </span>
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-3">

            <Link
              href="/blayzit/v6/perfil"
              className="flex items-center gap-3 text-sm text-slate-700 hover:text-indigo-600 transition"
            >
              <User size={16} />
              Perfil
            </Link>

            <Link
              href="/blayzit/v6/settings"
              className="flex items-center gap-3 text-sm text-slate-700 hover:text-indigo-600 transition"
            >
              <Settings size={16} />
              Configuración
            </Link>

            <Link
              href="/logout"
              className="flex items-center gap-3 text-sm text-slate-700 hover:text-rose-600 transition"
            >
              <LogOut size={16} />
              Cerrar sesión
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}
