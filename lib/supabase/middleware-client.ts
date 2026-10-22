import { createClient } from "@supabase/supabase-js";

export function createMiddlewareClient(req) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
        storage: {
          getItem: (key) => req.cookies.get(key)?.value ?? null,
          setItem: () => {},
          removeItem: () => {},
        },
      },
    }
  );

  return supabase;
}
