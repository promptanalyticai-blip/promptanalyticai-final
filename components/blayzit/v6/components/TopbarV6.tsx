"use client";

import Image from "next/image";
import { Bell, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/Client";

const supabase = createClient();

export default function TopbarV6() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  return (
    <header className="w-full h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between">

      {/* LOGO MINI */}
      <div className="flex items-center gap-3">
        <Image
          src="/blayzit-logo.png"
          alt="BLAYZIT Logo"
          width={55}
          height={55}
          className="object-contain"
        />
        <span className="text-lg font-semibold text-slate-800 tracking-tight">
          BLAYZIT
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-600 hover:text-indigo-600 transition">
          <Bell size={22} />
        </button>

        <button className="text-slate-600 hover:text-indigo-600 transition">
          <HelpCircle size={22} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
            {user?.email?.[0]?.toUpperCase() || "U"}
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-800">
              {user?.email || "Usuario"}
            </span>
            <span className="text-xs text-slate-500">
              Cuenta activa
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
