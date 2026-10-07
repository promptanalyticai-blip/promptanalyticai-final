//app/enterprise/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getSession, clearSession } from "@/lib/session";

export default function EnterprisePage() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const s = getSession();
    setSession(s);
  }, []);

  if (!session) {
    return (
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">Cargando panel enterprise…</h1>
      </div>
    );
  }

  const { user, company, workspace, roles } = session;

  return (
    <div className="p-10 text-white flex flex-col gap-8">

      <h1 className="text-4xl font-bold">Panel Enterprise</h1>

      {/* Usuario */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Usuario</h2>
        <p><strong>ID:</strong> {user?.id}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {/* Compañía */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Compañía</h2>
        {company ? (
          <>
            <p><strong>ID:</strong> {company.id}</p>
            <p><strong>Nombre:</strong> {company.name}</p>
            <p><strong>Owner:</strong> {company.owner_id}</p>
          </>
        ) : (
          <p className="text-slate-400">No tienes compañía registrada.</p>
        )}
      </div>

      {/* Workspace */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Workspace</h2>
        {workspace ? (
          <>
            <p><strong>ID:</strong> {workspace.id}</p>
            <p><strong>Nombre:</strong> {workspace.name}</p>
            <p><strong>Compañía:</strong> {workspace.company_id}</p>
          </>
        ) : (
          <p className="text-slate-400">No tienes workspace registrado.</p>
        )}
      </div>

      {/* Roles */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Roles</h2>
        {roles && roles.length > 0 ? (
          roles.map((r: any) => (
            <p key={r.id}>
              <strong>{r.role}</strong> — workspace {r.workspace_id}
            </p>
          ))
        ) : (
          <p className="text-slate-400">No tienes roles asignados.</p>
        )}
      </div>

      {/* Acciones sugeridas */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Acciones</h2>

        {!company && (
          <a
            href="/register/company"
            className="text-blue-400 underline"
          >
            Crear compañía
          </a>
        )}

        {company && !workspace && (
          <a
            href="/register/workspace"
            className="text-blue-400 underline"
          >
            Crear workspace
          </a>
        )}

        {company && workspace && (
          <p className="text-green-400">Todo listo. DNIP está vinculado.</p>
        )}
      </div>

      {/* Logout */}
      <button
        onClick={() => {
          clearSession();
          window.location.href = "/login";
        }}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg w-fit"
      >
        Cerrar sesión
      </button>

    </div>
  );
}
