//components/DashboardSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/blayzit/enterprise", label: "Inicio" },
  { href: "/blayzit/enterprise/dnip", label: "DNIP" },
  { href: "/blayzit/enterprise/adip", label: "ADIP" },
  { href: "/blayzit/enterprise/wow", label: "WOW Engine" },
  { href: "/blayzit/enterprise/analitica", label: "Analítica" },
  { href: "/blayzit/enterprise/auditoria", label: "Auditoría" },
  { href: "/blayzit/enterprise/alertas", label: "Alertas" },
  { href: "/blayzit/enterprise/exportacion", label: "Exportación" },
  { href: "/blayzit/enterprise/roles", label: "Roles" },
  { href: "/blayzit/enterprise/usuarios", label: "Usuarios" },
  { href: "/blayzit/enterprise/tenants", label: "Tenants" },
];




export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="text-xl font-bold mb-6">BLAYZIT</div>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md ${
              pathname === link.href
                ? "bg-gray-100 font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
