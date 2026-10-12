"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/session";
import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/enterprise");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <LoginCard />
    </main>
  );
}
