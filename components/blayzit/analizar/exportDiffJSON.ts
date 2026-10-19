"use client";

export function exportDiffJSON(diff: any) {
  const blob = new Blob([JSON.stringify(diff, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `BLAYZIT-Diff-${Date.now()}.json`;
  a.click();

  URL.revokeObjectURL(url);
}
