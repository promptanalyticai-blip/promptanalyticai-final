"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Check, X, Crown, Zap } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PlanesPage() {
  const [userPlan, setUserPlan] = useState("basic");

  useEffect(() => {
    const getPlan = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("user_plans")
        .select("plan")
        .eq("user_id", user.id)
        .single();

      setUserPlan(data?.plan || "basic");
    };

    getPlan();
  }, []);

  const plans = {
    basic: {
      name: "Basic",
      price: "$0 / mes",
      features: [
        "Acceso a módulos principales",
        "Registrar actividad",
        "Notificaciones básicas",
        "Acceso limitado a IA",
      ],
      limitations: [
        "Sin auditoría personal",
        "Sin telemetría avanzada",
        "Sin decisiones inteligentes",
        "Sin correlación de señales",
      ],
    },
    premium: {
      name: "Premium",
      price: "$19 / mes",
      features: [
        "Todo lo de Basic",
        "Auditoría personal",
        "Telemetría avanzada",
        "Decisiones sugeridas por IA",
        "Correlación de señales",
        "Historial extendido",
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "Contactar ventas",
      features: [
        "Todo lo de Premium",
        "IA predictiva avanzada",
        "Integraciones externas",
        "Retención de datos extendida",
        "Roles avanzados",
        "Soporte dedicado",
      ],
    },
  };

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12">
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">
        Planes y Facturación
      </h1>

      {/* PLAN ACTUAL */}
      <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl shadow-sm mb-12">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Tu plan actual</h2>
        <p className="text-slate-600 text-sm mb-4">
          Estás usando el plan <strong>{plans[userPlan].name}</strong>.
        </p>

        <button className="px-5 py-2 bg-slate-300 text-slate-600 rounded-lg text-sm cursor-not-allowed">
          Stripe no está configurado
        </button>
      </div>

      {/* COMPARACIÓN DE PLANES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BASIC */}
        <PlanCard
          title="Basic"
          price="$0 / mes"
          features={plans.basic.features}
          limitations={plans.basic.limitations}
          active={userPlan === "basic"}
        />

        {/* PREMIUM */}
        <PlanCard
          title="Premium"
          price="$19 / mes"
          icon={<Crown className="h-5 w-5 text-indigo-600" />}
          features={plans.premium.features}
          active={userPlan === "premium"}
        />

        {/* ENTERPRISE */}
        <PlanCard
          title="Enterprise"
          price="Contactar ventas"
          icon={<Zap className="h-5 w-5 text-slate-700" />}
          features={plans.enterprise.features}
          active={userPlan === "enterprise"}
        />
      </div>
    </div>
  );
}

function PlanCard({ title, price, features, limitations = [], icon, active }) {
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <p className="text-slate-500 text-sm mb-4">{price}</p>

      <div className="space-y-2 mb-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
            <Check className="h-4 w-4 text-emerald-600" />
            {f}
          </div>
        ))}

        {limitations.map((l, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
            <X className="h-4 w-4 text-rose-500" />
            {l}
          </div>
        ))}
      </div>

      {active ? (
        <button className="w-full py-2 bg-slate-200 text-slate-600 rounded-lg text-sm cursor-not-allowed">
          Tu plan actual
        </button>
      ) : (
        <button className="w-full py-2 bg-slate-300 text-slate-600 rounded-lg text-sm cursor-not-allowed">
          Stripe no está configurado
        </button>
      )}
    </div>
  );
}
