// app/auth/login/page.tsx
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import BlayzitLogoClean from "@/components/blayzit/BlayzitLogoClean";
import "./login.css";

export default function LoginPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Credenciales incorrectas");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 150));

    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      setError("Error inesperado. Intenta nuevamente.");
      return;
    }

    window.location.href = "/blayzit";
  };

  return (
    <div className="login-card">

      {/* ⭐ LOGO WOW ULTRA PRIME */}
      <div className="login-logo">
        <BlayzitLogoClean />
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" disabled={loading} className="login-button">
          {loading ? "Ingresando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
