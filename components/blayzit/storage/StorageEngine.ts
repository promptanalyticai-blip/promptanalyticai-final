"use client";

import { supabase } from "@/lib/supabaseClient";

export async function saveFileVersion(file: File, analysis: any) {
  const timestamp = Date.now();
  const path = `blayzit/${file.name}/${timestamp}.txt`;

  const { data, error } = await supabase.storage
    .from("blayzit-files")
    .upload(path, file);

  if (error) throw error;

  const { data: publicUrl } = supabase.storage
    .from("blayzit-files")
    .getPublicUrl(path);

  return {
    url: publicUrl.publicUrl,
    timestamp,
    analysis,
    name: file.name,
  };
}

export async function listFileVersions(fileName: string) {
  const { data, error } = await supabase.storage
    .from("blayzit-files")
    .list(`blayzit/${fileName}`);

  if (error) throw error;

  return data;
}
