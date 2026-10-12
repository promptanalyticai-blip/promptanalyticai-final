//app/admin/roles/editor.tsx
"use client";

import { useState } from "react";
import { Role, Permission } from "@/core/admin/types";
import { saveRole, deleteRole } from "@/core/admin/roles";
import { permissionsList } from "@/core/admin/permissions";

export default function RolesEditor({ roles }: { roles: Role[] }) {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleSave = async () => {
    if (!selectedRole) return;
    await saveRole(selectedRole);
  };

  const handleDelete = async () => {
    if (!selectedRole) return;
    await deleteRole(selectedRole.id);
    setSelectedRole(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Editor de Roles</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 space-y-2">
          <h3 className="font-semibold">Roles</h3>
          {roles.map((role) => (
            <button
              key={role.id}
              className={`w-full p-2 rounded ${
                selectedRole?.id === role.id ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role.name}
            </button>
          ))}
        </div>

        {selectedRole && (
          <div className="col-span-2 space-y-4">
            <div>
              <label className="font-semibold">Nombre del Rol</label>
              <input
                className="w-full p-2 border rounded"
                value={selectedRole.name}
                onChange={(e) =>
                  setSelectedRole({ ...selectedRole, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="font-semibold">Nivel</label>
              <input
                type="number"
                min={1}
                max={5}
                className="w-full p-2 border rounded"
                value={selectedRole.level}
                onChange={(e) =>
                  setSelectedRole({ ...selectedRole, level: Number(e.target.value) })
                }
              />
            </div>

            <div>
              <label className="font-semibold">Permisos</label>
              <div className="grid grid-cols-2 gap-2">
                {permissionsList.map((perm: Permission) => (
                  <label key={perm.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedRole.permissions.includes(perm.id)}
                      onChange={(e) => {
                        const updated = e.target.checked
                          ? [...selectedRole.permissions, perm.id]
                          : selectedRole.permissions.filter((p) => p !== perm.id);

                        setSelectedRole({ ...selectedRole, permissions: updated });
                      }}
                    />
                    {perm.name}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={handleSave}
              >
                Guardar
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
