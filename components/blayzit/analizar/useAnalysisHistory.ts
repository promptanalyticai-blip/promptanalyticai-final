"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/blayzit/supabaseClient";

export type AnalysisRecord = {
  id: string;
  file_name: string;
  file_type: string;
  file_size: number;
  risk_level: number;
  created_at: string;
};

export function useAnalysisHistory() {
  const [history, setHistory] = useState<AnalysisRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blayzit_analysis_history")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setHistory(data as AnalysisRecord[]);
      }
      setLoading(false);
    };

    fetchHistory();
  }, []);

  return { history, loading };
}
