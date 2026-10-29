"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Supabase (CORRECTO)
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// Icons
import { User, Shield, Activity, ChevronRight } from "lucide-react";

export default function PerfilPage() {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [plan, setPlan] = useState("basic");

  useEffect(() => {
    cargarPerfil();
  }, []);

  async function cargarPerfil() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (!user) return;

    // PLAN
    const { data: planData } = await supabase
      .from("user_plans")
      .select("plan")
      .eq("user_id", user.id)
      .single();

    setPlan(planData?.plan || "basic");

    // ROLES
    const { data: rolesData } = await supabase
      .from("user_roles")
      .select("*")
      .eq("user_id", user.id);

    setRoles(rolesData || []);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12">
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">
        Perfil del usuario
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* PANEL IZQUIERDO */}
        <div className="space-y-6">

          {/* Usuario */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/blayzit-logo.png"
                alt="User"
                width={70}
                height={70}
                className="rounded-full border border-slate-300 shadow-sm"
              />
              <div>
                <p className="text-lg font-semibold text-slate-800">
                  {user?.email || "Usuario"}
                </p>
                <p className="text-sm text-slate-500">Operaciones</p>
              </div>
            </div>
          </div>

          {/* Seguridad */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-slate-600" />
              <h3 className="text-sm font-semibold text-slate-800">
                Seguridad
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">
                  Autenticación en dos pasos
                </span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </div>
            </div>
          </div>

        </div>

        {/* PANEL DERECHO */}
        <div className="col-span-2 space-y-10">

          {/* Roles */}
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-5 w-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-800">
                Roles y permisos
              </h3>
            </div>

            <div className="space-y-4">
              {roles.map((r) => (
                <div
                  key={r.id}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <p className="text-sm font-semibold text-slate-700">
                    Workspace: {r.workspace_id || "Principal"}
                  </p>

                  <p className="text-xs text-slate-500 mb-2">
                    Rol: {r.role}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {r.permissions?.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs text-slate-600"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auditoría */}
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="h-5 w-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-800">
                Auditoría personal
              </h3>
            </div>

            {plan === "basic" ? (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Disponible en plan Premium
                  </p>
                  <p className="text-xs text-slate-500">
                    Accede a tu historial y trazabilidad personal
                  </p>
                </div>

                <button className="px-4 py-2 bg-slate-300 text-slate-600 rounded-lg text-sm cursor-not-allowed">
                  Stripe no está configurado
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <AuditItem title="Últimas acciones" />
                <AuditItem title="Eventos relacionados" />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

function AuditItem({ title }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
      <div>
        <p className="text-sm font-medium text-slate-700">{title}</p>
        <p className="text-xs text-slate-500">
          Datos reales cuando conectemos Stripe
        </p>
      </div>
      <ChevronRight className="h-5 w-5 text-slate-500" />
    </div>
  );
}
