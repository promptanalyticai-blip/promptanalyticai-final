// components/LoginCard.tsx
"use client";

import { useState } from "react";
import { saveSession } from "@/lib/session";

type LoadingButtonProps = {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
  children: React.ReactNode;
};

function LoadingButton({ onClick, loading, disabled, children }: LoadingButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white py-3 rounded-lg transition"
    >
      {loading ? "Cargando..." : children}
    </button>
  );
}

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pass }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error iniciando sesión");
        setLoading(false);
        return;
      }

      saveSession(data);

      // Redirigir según estado de la sesión
      if (!data.company) {
        window.location.href = "/register/company";
        return;
      }

      if (!data.workspace) {
        window.location.href = "/register/workspace";
        return;
      }

      window.location.href = "/enterprise";
    } catch (err) {
      setError("Error interno en el login");
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block mb-2 text-sm">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Contraseña</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <LoadingButton
          onClick={handleLogin}
          loading={loading}
          disabled={email.length < 3 || pass.length < 3}
        >
          Iniciar sesión
        </LoadingButton>
      </div>
    </div>
  );
}
