"use client";

import { createClient as supabaseCreateClient } from "@supabase/supabase-js";

let supabase: ReturnType<typeof supabaseCreateClient> | null = null;

export function createClient() {
  if (!supabase) {
    supabase = supabaseCreateClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  return supabase;
}

export function createServerClient() {
  return supabaseCreateClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
