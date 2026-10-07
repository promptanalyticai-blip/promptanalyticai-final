"use client";

import { ReactNode, useEffect } from "react";
import { isLoggedIn } from "@/lib/session";

export default function EnterpriseLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="enterprise-layout">
      {children}
    </div>
  );
}
