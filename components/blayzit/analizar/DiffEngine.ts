"use client";

export function diffAnalysis(prev: any, next: any) {
  const diff = {
    fileChanged: prev.file.name !== next.file.name,
    sizeDiff: next.file.size - prev.file.size,
    riskDiff: next.decisions.finalRisk - prev.decisions.finalRisk,
    aiScoreDiff: next.ai.score - prev.ai.score,
    newTags: next.tags.filter((t: string) => !prev.tags.includes(t)),
    removedTags: prev.tags.filter((t: string) => !next.tags.includes(t)),
    actionsAdded: next.actions.filter(
      (a: any) => !prev.actions.some((p: any) => p.id === a.id)
    ),
    actionsRemoved: prev.actions.filter(
      (a: any) => !next.actions.some((p: any) => p.id === a.id)
    ),
  };

  return diff;
}
