"use client";

import ThemeToggle from "@ui/theme-toggle";
import { Bell, User } from "lucide-react";

export default function TopbarV6() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="text-lg font-semibold text-gray-900 tracking-tight">
        BLAYZIT V6 Console
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-700" />
        </button>

        <ThemeToggle />

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <User className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
