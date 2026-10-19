"use client";

export type CorrelationPair = {
  a: string;
  b: string;
  riskCorrelation: number;
  aiCorrelation: number;
  sizeCorrelation: number;
  sharedTags: string[];
};

export function computeCorrelationMatrix(analyses: any[]): CorrelationPair[] {
  const pairs: CorrelationPair[] = [];

  for (let i = 0; i < analyses.length; i++) {
    for (let j = i + 1; j < analyses.length; j++) {
      const A = analyses[i];
      const B = analyses[j];

      const riskCorrelation = 1 - Math.abs(A.decisions.finalRisk - B.decisions.finalRisk);
      const aiCorrelation = 1 - Math.abs(A.ai.score - B.ai.score);
      const sizeCorrelation =
        1 -
        Math.abs(A.contentLength - B.contentLength) /
          Math.max(A.contentLength, B.contentLength);

      const sharedTags = A.tags.filter((t: string) => B.tags.includes(t));

      pairs.push({
        a: A.file.name,
        b: B.file.name,
        riskCorrelation: Number(riskCorrelation.toFixed(3)),
        aiCorrelation: Number(aiCorrelation.toFixed(3)),
        sizeCorrelation: Number(sizeCorrelation.toFixed(3)),
        sharedTags,
      });
    }
  }

  return pairs;
}
