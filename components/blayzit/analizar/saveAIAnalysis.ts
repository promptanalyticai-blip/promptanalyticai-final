"use client";

import { createClient } from "@/lib/supabase/Client";

export async function saveAIAnalysis(analysis: any) {
  const supabase = createClient();

  const { file, ai, decisions } = analysis;

  const { error } = await supabase.from("blayzit_ai_history").insert({
    file_name: file.name,
    ai_score: ai.score,
    ai_summary: ai.summary,
    final_risk: decisions.finalRisk,
  });

  if (error) console.error("Error guardando IA:", error);
}
