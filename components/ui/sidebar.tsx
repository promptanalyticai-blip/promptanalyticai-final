"use client";

import Link from "next/link";
import { Home, Shield, Brain, Upload, Activity, FileSearch } from "lucide-react";

export default function SidebarV6() {
  const items = [
    { href: "/blayzit/v6", label: "Inicio", icon: Home },
    { href: "/blayzit/v6/upload", label: "Upload", icon: Upload },
    { href: "/blayzit/v6/adip", label: "ADIP", icon: Brain },
    { href: "/blayzit/v6/dnip", label: "DNIP", icon: Activity },
    { href: "/blayzit/v6/security", label: "Security", icon: Shield },
    { href: "/blayzit/v6/audit", label: "Audit", icon: FileSearch },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 space-y-4 shadow-sm">
      <h1 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
        BLAYZIT V6
      </h1>

      <nav className="space-y-2">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
