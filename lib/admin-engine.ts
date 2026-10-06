// lib/admin-engine.ts
import { getDnipMetrics, DnipMetrics } from "@/lib/dnip-engine";
import { getAdipSummary, AdipSummary } from "@/lib/adip-engine";

export type AdminMetrics = {
  dnip: DnipMetrics;
  adip: AdipSummary;
};

export async function getAdminMetrics(): Promise<AdminMetrics> {
  const dnip = await getDnipMetrics();
  const adip = await getAdipSummary();

  return { dnip, adip };
}
