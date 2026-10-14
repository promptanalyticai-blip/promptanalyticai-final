"use client";

import { getWOWA11Y } from "@/lib/wow-a11y";

export default function UserCard({ wow, user }: any) {
  const a11y = getWOWA11Y(wow);

  return (
    <div
      role={a11y.ariaRoles.user}
      tabIndex={0}
      aria-label={`Usuario ${user.name} con rol ${user.role}`}
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
      <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
      <p className="opacity-80">Rol: {user.role}</p>
      <p className="opacity-60 text-sm mt-2">Estado: {user.status}</p>
    </div>
  );
}
