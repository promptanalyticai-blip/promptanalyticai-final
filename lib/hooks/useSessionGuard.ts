"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function useSessionGuard() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function check() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/auth/login");
      }
    }

    check();
  }, []);
}
