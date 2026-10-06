// modules/adip/core/context.ts
import { createClient } from "@/lib/supabase/Client";

export const supabase = createClient();

export type AdipContext = {
  supabase: typeof supabase;
  tenantId: string | null;
  userId: string | null;
};

export function createAdipContext(
  tenantId: string | null,
  userId: string | null
): AdipContext {
  return {
    supabase,
    tenantId,
    userId,
  };
}
