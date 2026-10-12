//app/admin/modes/config.tsx
"use client";

import { useEffect, useState } from "react";
import { getTenantModes, updateTenantMode } from "@/core/tenant/modes";

export default function ModesConfig({ tenantId }: { tenantId: string }) {
  const [modes, setModes] = useState<any>({});

  useEffect(() => {
    getTenantModes(tenantId).then(setModes);
  }, [tenantId]);

  const toggleMode = async (mode: string) => {
    const updated = { ...modes, [mode]: !modes[mode] };
    setModes(updated);
    await updateTenantMode(tenantId, mode, updated[mode]);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Configuración de Modos WOW</h2>

      <div className="space-y-4">
        {Object.keys(modes).map((mode) => (
          <div key={mode} className="flex items-center justify-between p-4 border rounded">
            <span className="font-semibold">{mode}</span>
            <button
              className={`px-4 py-2 rounded ${
                modes[mode] ? "bg-green-600 text-white" : "bg-gray-300"
              }`}
              onClick={() => toggleMode(mode)}
            >
              {modes[mode] ? "Activado" : "Desactivado"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

