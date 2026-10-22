"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarV6() {
  const pathname = usePathname();

  const nav = [
    { name: "Dashboard V6", href: "/blayzit/v6" },
    { name: "Analizar", href: "/blayzit/v6/analizar" },
    { name: "ADIP", href: "/blayzit/v6/adip" },
    { name: "DNIP", href: "/blayzit/v6/dnip" },
    { name: "Telemetry", href: "/blayzit/v6/telemetry" },
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-slate-900">
          BLAYZIT V6
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Operational Intelligence
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {nav.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition
                ${
                  active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-700 hover:bg-gray-100"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
