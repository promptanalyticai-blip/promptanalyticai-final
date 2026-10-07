// components/LoginCard.tsx
"use client";

import LogoAnimated from "./LogoAnimated";
import OAuthButtons from "./OAuthButtons";
import PasswordInput from "./PasswordInput";
import MagicLink from "./MagicLink";
import FooterEnterprise from "./FooterEnterprise";
import ValidationMessages from "./ValidationMessages";
import LoadingButton from "./LoadingButton";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validation";
import { saveSession } from "@/lib/session";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailValid = validateEmail(email);
  const passwordValid = validatePassword(password);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error en login");
        setLoading(false);
        return;
      }

      // Guardar sesión enterprise
      saveSession(data);

      // Redirección inteligente
      if (!data.company) {
        window.location.href = "/register/company";
        return;
      }

      if (!data.workspace) {
        window.location.href = "/register/workspace";
        return;
      }

      if (!data.roles || data.roles.length === 0) {
        window.location.href = "/error/role";
        return;
      }

      // Todo OK → panel enterprise
      window.location.href = "/enterprise";

    } catch (err) {
      setError("Error interno en login");
    }

    setLoading(false);
  }

  return (
    <div className="login-card">

      <h2 className="login-title">Bienvenido a BLAYZIT</h2>

      <LogoAnimated />

      <p className="login-tagline">
        Tecnología para decisiones inteligentes — DNIP
      </p>

      <p className="login-branding">
        DNIP — Arquitectura inteligente que convierte datos en decisiones.
      </p>

      <OAuthButtons />

      <form
        onSubmit={handleLogin}
        aria-label="Formulario de inicio de sesión"
      >
        <div className="input-group">
          <label>Email</label>
          <input
            aria-label="Campo de email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={!emailValid && email.length > 0 ? "input-error" : ""}
          />
        </div>

        <PasswordInput
          password={password}
          setPassword={setPassword}
          valid={passwordValid}
        />

        <ValidationMessages
          emailValid={emailValid}
          passwordValid={passwordValid}
        />

        {error && (
          <div className="error-text">
            {error}
          </div>
        )}

        <LoadingButton
          loading={loading}
          disabled={!emailValid || !passwordValid}
        >
          Ingresar
        </LoadingButton>
      </form>

      <MagicLink email={email} />

      <div className="login-links">
        <a href="/forgot">¿Olvidaste tu contraseña?</a>
        <a href="/register">Crear cuenta nueva</a>
      </div>

      <nav aria-label="Enlaces legales y de soporte">
        <FooterEnterprise />
      </nav>

    </div>
  );
}
