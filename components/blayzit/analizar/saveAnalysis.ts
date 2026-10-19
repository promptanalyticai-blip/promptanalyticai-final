"use client";

import { createClient } from "@/lib/supabase/Client";

export async function saveAnalysis(analysis: any) {
  const supabase = createClient();

  const { file, signals } = analysis;

  const { error } = await supabase.from("blayzit_analysis_history").insert({
    file_name: file.name,
    file_type: file.type,
    file_size: file.size,
    risk_level: signals.dnip.riskLevel,
  });

  if (error) console.error("Error guardando análisis:", error);
}
