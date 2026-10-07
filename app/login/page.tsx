//app/login/page.tsx
"use client";

import { useEffect } from "react";
import { isLoggedIn } from "@/lib/session";
import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = "/enterprise";
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <LoginCard />
    </main>
  );
}
