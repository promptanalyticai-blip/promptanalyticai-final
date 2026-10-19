"use client";

import { computeSimilarity } from "./SimilarityEngine";

export function clusterAnalyses(analyses: any[]) {
  const clusters: any[] = [];

  for (const analysis of analyses) {
    let placed = false;

    for (const cluster of clusters) {
      const sim = computeSimilarity(
        analysis.file.content,
        cluster.representative.file.content
      );

      if (sim > 0.35) {
        cluster.items.push(analysis);
        placed = true;
        break;
      }
    }

    if (!placed) {
      clusters.push({
        representative: analysis,
        items: [analysis],
      });
    }
  }

  return clusters;
}
