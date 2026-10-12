//app/admin/permissions/editor.tsx
"use client";

import { Permission } from "@/core/admin/types";
import { permissionsList, updatePermissionLevel } from "@/core/admin/permissions";

export default function PermissionsEditor() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Editor de Permisos</h2>

      <div className="space-y-4">
        {permissionsList.map((perm: Permission) => (
          <div key={perm.id} className="p-4 border rounded space-y-2">
            <h3 className="font-semibold">{perm.name}</h3>
            <p className="text-sm text-gray-600">{perm.description}</p>

            <label className="font-semibold">Nivel requerido</label>
            <input
              type="number"
              min={1}
              max={5}
              className="w-full p-2 border rounded"
              value={perm.levelRequired}
              onChange={(e) =>
                updatePermissionLevel(perm.id, Number(e.target.value))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
