"use client";

import { useState } from "react";
import { rulesEngine } from "@/components/blayzit/dnip/DNIPDefaultRules";

export default function RulesEditor() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const addRule = () => {
    rulesEngine.addRule({
      id: crypto.randomUUID(),
      name,
      description: desc,
      condition: () => false,
      effect: () => ({ alert: "Regla personalizada activada" }),
    });

    setName("");
    setDesc("");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Editor de reglas DNIP
      </h2>

      <input
        className="border border-slate-300 rounded-lg px-3 py-2 w-full text-sm"
        placeholder="Nombre de la regla"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border border-slate-300 rounded-lg px-3 py-2 w-full text-sm"
        placeholder="Descripción"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        onClick={addRule}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
      >
        Crear regla
      </button>
    </div>
  );
}
