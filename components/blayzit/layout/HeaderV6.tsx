"use client";

import { useRouter } from "next/navigation";

export default function HeaderV6() {
  const router = useRouter();

  const handleLogout = async () => {
    alert("CLICK DETECTADO");

    try {
      await fetch("/api/logout", { method: "POST" });
    } catch (e) {
      console.error("Logout error:", e);
    }

    router.push("/auth/login");
  };

  return (
    <header
      style={{
        width: "100%",
        height: "64px",
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "relative",
        zIndex: 9999999,
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#1e293b" }}>
        BLAYZIT V6 — Operational Intelligence
      </h1>

      <button
        onClick={handleLogout}
        style={{
          padding: "8px 16px",
          background: "red",
          color: "white",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          zIndex: 99999999,
          position: "relative",
        }}
      >
        Salir
      </button>
    </header>
  );
}
