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
    <div className="login-page">
      <LoginCard />
    </div>
  );
}
