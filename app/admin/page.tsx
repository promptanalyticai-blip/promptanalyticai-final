// app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getSession, isLoggedIn } from "@/lib/session";
import { userHasRole } from "@/lib/roles";

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [roles, setRoles] = useState<any[]>([]);
  const [workspaceId, setWorkspaceId] = useState<string>("");

  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
      return;
    }

    const s = getSession();
    setSession(s);

    if (!userHasRole(s, "owner") && !userHasRole(s, "admin")) {
      window.location.href = "/enterprise";
      return;
    }

    setWorkspaceId(s.workspace?.id || "");

    fetchRoles(s.workspace?.id);
  }, []);

  async function fetchRoles(wsId: string) {
    const res = await fetch(`/api/workspace/roles?workspaceId=${wsId}`);
    const data = await res.json();
    setRoles(data || []);
  }

  async function updateRole(userId: string, role: string) {
    await fetch("/api/roles/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, workspaceId, role }),
    });

    fetchRoles(workspaceId);
  }

  if (!session) {
    return (
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">Cargando panel admin…</h1>
      </div>
    );
  }

  return (
    <div className="p-10 text-white flex flex-col gap-8">

      <h1 className="text-4xl font-bold">BLAYZIT Admin — Roles y Permisos</h1>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Usuarios del Workspace</h2>

        {roles.length === 0 && (
          <p className="text-slate-400">No hay usuarios en este workspace.</p>
        )}

        {roles.map((r: any) => (
          <div
            key={r.id}
            className="p-4 bg-slate-800 rounded-lg mb-4 flex justify-between items-center"
          >
            <div>
              <p><strong>Usuario:</strong> {r.user_id}</p>
              <p><strong>Rol actual:</strong> {r.role}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => updateRole(r.user_id, "admin")}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Admin
              </button>

              <button
                onClick={() => updateRole(r.user_id, "editor")}
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                Editor
              </button>

              <button
                onClick={() => updateRole(r.user_id, "viewer")}
                className="px-3 py-1 bg-gray-600 text-white rounded"
              >
                Viewer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
