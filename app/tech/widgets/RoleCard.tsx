//app/dashboard/widgets/RoleCard.tsx
"use client";

import { getWOWA11Y } from "@/lib/wow-a11y";

export default function RoleCard({ wow, role }: any) {
  const a11y = getWOWA11Y(wow);

  return (
    <div
      role={a11y.ariaRoles.role}
      tabIndex={0}
      aria-label={`Rol ${role.name}`}
      className={`
        p-4 rounded-xl border
        ${wow.animations.enter} ${wow.animations.hover} ${wow.animations.glow}
        ${a11y.fontSize} ${a11y.spacing} ${a11y.contrast} ${a11y.focusStyle}
        ${wow.tone === "executive" ? "border-yellow-300" : ""}
        ${wow.tone === "operational" ? "border-green-300" : ""}
        ${wow.tone === "technical" ? "border-indigo-300" : ""}
        ${wow.tone === "light" ? "border-blue-300" : ""}
      `}
    >
      <h3 className="text-lg font-semibold mb-2">{role.name}</h3>
      <p className="opacity-80">{role.description}</p>
      <div className="mt-2 text-sm opacity-60">
        Permisos: {role.permissions.join(", ")}
      </div>
    </div>
  );
}
