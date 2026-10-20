"use client";

import Link from "next/link";
import { v6Routes } from "./v6Routes";

export default function SidebarV6() {
  return (
    <aside className="w-64 bg-white shadow-xl border-r border-gray-200 p-6 space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight">BLAYZIT V6</h1>
        <p className="text-xs text-gray-500">Consola Enterprise</p>
      </div>

      <nav className="space-y-3">
        {v6Routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm font-medium text-gray-700"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
