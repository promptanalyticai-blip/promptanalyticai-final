"use client";

export function computeTrends(versions: any[]) {
  const trend = {
    risk: [],
    aiScore: [],
    size: [],
    timestamps: [],
  };

  for (const v of versions) {
    trend.risk.push(v.analysis.decisions.finalRisk);
    trend.aiScore.push(v.analysis.ai.score);
    trend.size.push(v.analysis.file.size);
    trend.timestamps.push(v.timestamp);
  }

  return trend;
}
