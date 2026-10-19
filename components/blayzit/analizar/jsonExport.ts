"use client";

export function exportAnalysisJSON(analysis: any) {
  const blob = new Blob([JSON.stringify(analysis, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `BLAYZIT-${analysis.file.name}.json`;
  a.click();

  URL.revokeObjectURL(url);
}
