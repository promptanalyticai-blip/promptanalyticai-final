// lib/admin-engine.ts
import type { DnipMetrics } from "@/lib/dnip-engine";
import type { AdipSummary } from "@/lib/adip-engine";
import { getDnipMetrics } from "@/lib/dnip-engine";
import { getAdipSummary } from "@/lib/adip-engine";


export type AdminMetrics = {
  dnip: DnipMetrics;
  adip: AdipSummary;
};

export async function getAdminMetrics(): Promise<AdminMetrics> {
  const dnip = await getAdminDnipMetrics();
  const adip = await getAdminAdipSummary();

  return { dnip, adip };
}

async function getAdminDnipMetrics(): Promise<DnipMetrics> {
  // Punto único para extender lógica DNIP en contexto admin
  return {
    load: 0.42,
    latencyMs: 160,
    errorRate: 0.03,
    jobsInQueue: 4,
  };
}

async function getAdminAdipSummary(): Promise<AdipSummary> {
  return {
    score: 0.72,
    focus: ["dnip", "adip", "enterprise"],
  };
}
