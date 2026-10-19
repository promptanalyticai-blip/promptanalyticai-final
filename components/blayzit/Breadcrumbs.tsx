"use client";

import { usePathname } from "next/navigation";

const LABELS: Record<string, string> = {
  "/blayzit": "Inicio",
  "/blayzit/notificaciones": "Notificaciones",
  "/blayzit/telemetria": "Telemetría",
  "/blayzit/auditoria": "Auditoría",
  "/blayzit/seguridad": "Seguridad",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean); // ["blayzit", "telemetria"]
  const pathParts: { href: string; label: string }[] = [];

  let current = "";
  segments.forEach((seg) => {
    current += `/${seg}`;
    const label = LABELS[current] ?? seg;
    pathParts.push({ href: current, label });
  });

  return (
    <nav className="mb-4 text-xs text-slate-500">
      <span className="text-slate-400">BLAYZIT</span>
      {pathParts.map((part, index) => (
        <span key={part.href}>
          {" / "}
          <span
            className={
              index === pathParts.length - 1
                ? "text-slate-700 font-medium"
                : "text-slate-500"
            }
          >
            {part.label}
          </span>
        </span>
      ))}
    </nav>
  );
}
