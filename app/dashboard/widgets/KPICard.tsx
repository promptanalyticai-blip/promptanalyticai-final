//app/dashboard/widgets/KPICard.tsx
"use client";

import { getWOWA11Y } from "@/lib/wow-a11y";

export default function KPICard({ wow, kpi }: any) {
  const a11y = getWOWA11Y(wow);

  return (
    <div
      role={a11y.ariaRoles.kpi}
      tabIndex={0}
      aria-label={`KPI ${kpi.label} con valor ${kpi.value}`}
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
      <h3 className="text-lg font-semibold mb-2">{kpi.label}</h3>
      <div className="text-3xl font-bold">{kpi.value}</div>
      <p className="opacity-60 text-sm mt-2">{kpi.description}</p>
    </div>
  );
}
