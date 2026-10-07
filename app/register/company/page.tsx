//app/register/company/page.tsx
"use client";

import { useEffect, useState } from "react";
import { isLoggedIn, hasCompany, saveSession, getSession } from "@/lib/session";

export default function RegisterCompanyPage() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Protección de ruta
  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
      return;
    }

    if (hasCompany()) {
      window.location.href = "/enterprise";
      return;
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const session = getSession();

      const res = await fetch("/api/company/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          userId: session?.user?.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error creando compañía");
        setLoading(false);
        return;
      }

      // Actualizar sesión enterprise
      saveSession(data);

      // Redirigir al siguiente paso
      window.location.href = "/register/workspace";

    } catch (err) {
      setError("Error interno creando compañía");
    }

    setLoading(false);
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Registrar Compañía</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">

        <label className="text-lg">Nombre de la compañía</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-slate-800 border border-slate-700 text-white"
          placeholder="Ejemplo: BLAYZIT Corp"
        />

        {error && <p className="text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading || name.length < 3}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Creando compañía…" : "Crear compañía"}
        </button>
      </form>
    </div>
  );
}
