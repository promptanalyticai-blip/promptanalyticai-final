"use client";

import { computeSimilarity } from "./SimilarityEngine";

export default function SimilarityPanel({
  current,
  previous,
}: {
  current: any;
  previous: any;
}) {
  const score = computeSimilarity(
    current.file.content,
    previous.file.content
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Similitud entre versiones
      </h2>

      <p className="text-sm text-slate-700">
        Similitud semántica:{" "}
        <strong>{(score * 100).toFixed(1)}%</strong>
      </p>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${score * 100}%` }}
        />
      </div>
    </div>
  );
}
