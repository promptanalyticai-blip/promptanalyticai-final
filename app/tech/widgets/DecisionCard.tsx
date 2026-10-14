"use client";

import { getWOWA11Y } from "@/lib/wow-a11y";

export default function DecisionCard({ wow, decision }: any) {
  const a11y = getWOWA11Y(wow);

  return (
    <div
      role={a11y.ariaRoles.decision}
      tabIndex={0}
      aria-label={`Decisión ${decision.title} con impacto ${decision.impact}`}
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
      <h3 className="text-lg font-semibold mb-2">{decision.title}</h3>
      <p className="opacity-80">{decision.summary}</p>
      <div className="mt-2 text-sm opacity-60">Impacto: {decision.impact}</div>
    </div>
  );
}
