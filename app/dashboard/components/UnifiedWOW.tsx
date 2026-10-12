//app/dashboard/components/UnifiedWOW.tsx
"use client";

import { useEffect, useState } from "react";
import { getHybridWOW } from "@/lib/wow-hybrid";
import DNIPPanel from "@/app/dnip/components/DNIPPanel";
import ADIPPanel from "@/app/adip/components/ADIPPanel";
import BlayzitPanel from "@/app/blayzit/components/BlayzitPanel";

export default function UnifiedWOW({ level, role, dnip, adip, blayzit }: any) {
  const [wow, setWow] = useState(null);

  useEffect(() => {
    if (level && role) {
      setWow(getHybridWOW(level.level, role));
    }
  }, [level, role]);

  if (!wow) return <div>Cargando dashboard...</div>;

  return (
    <div
      className={`min-h-screen p-10 transition-all duration-700 
        ${wow.theme === "gradient-blue-soft" ? "bg-gradient-to-br from-blue-50 to-blue-200" : ""}
        ${wow.theme === "gradient-blue-gray" ? "bg-gradient-to-br from-gray-50 to-blue-200" : ""}
        ${wow.theme === "gradient-dark-blue" ? "bg-gradient-to-br from-blue-900 to-blue-700" : ""}
      `}
    >
      {/* HEADER GLOBAL */}
      <h1
        className={`text-4xl font-bold mb-10 
          ${wow.tone === "executive" ? "text-yellow-400" : ""}
          ${wow.tone === "operational" ? "text-green-600" : ""}
          ${wow.tone === "technical" ? "text-indigo-700" : ""}
          ${wow.tone === "light" ? "text-blue-700" : ""}
        `}
      >
        Dashboard Inteligente — {role.toUpperCase()} / {level.level.toUpperCase()}
      </h1>

      {/* GRID UNIFICADO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {wow.permissions.canViewDNIP && (
          <div className="col-span-1">
            <DNIPPanel level={level} dnip={dnip} adip={adip} wow={wow} />
          </div>
        )}

        {wow.permissions.canViewADIP && (
          <div className="col-span-1">
            <ADIPPanel level={level} adip={adip} wow={wow} />
          </div>
        )}

        {wow.permissions.canViewBlayzit && (
          <div className="col-span-1">
            <BlayzitPanel level={level} blayzit={blayzit} wow={wow} />
          </div>
        )}
      </div>
    </div>
  );
}
