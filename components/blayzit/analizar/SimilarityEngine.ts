"use client";

export function computeSimilarity(a: string, b: string) {
  const tokenize = (text: string) =>
    text.toLowerCase().split(/\W+/).filter(Boolean);

  const tokensA = tokenize(a);
  const tokensB = tokenize(b);

  const setA = new Set(tokensA);
  const setB = new Set(tokensB);

  const intersection = [...setA].filter((t) => setB.has(t));

  const score =
    intersection.length / Math.sqrt(setA.size * setB.size);

  return Number(score.toFixed(3));
}
