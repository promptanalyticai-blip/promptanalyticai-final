"use client";

export default function QualityPanel({ analysis }: { analysis: any }) {
  const { file, ai } = analysis;

  const clarityScore = Math.min(1, ai.summary.length / 300);
  const sizeScore = file.size < 2_000_000 ? 1 : 0.5;
  const structureScore = analysis.contentLength > 500 ? 0.8 : 0.4;

  const finalQuality = (clarityScore + sizeScore + structureScore) / 3;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Calidad del archivo
      </h2>

      <p className="text-sm text-slate-700">
        Claridad: <strong>{(clarityScore * 100).toFixed(1)}%</strong>
      </p>

      <p className="text-sm text-slate-700">
        Tamaño: <strong>{(sizeScore * 100).toFixed(1)}%</strong>
      </p>

      <p className="text-sm text-slate-700">
        Estructura: <strong>{(structureScore * 100).toFixed(1)}%</strong>
      </p>

      <p className="text-sm text-slate-700">
        Calidad final:{" "}
        <strong>{(finalQuality * 100).toFixed(1)}%</strong>
      </p>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${finalQuality * 100}%` }}
        />
      </div>
    </div>
  );
}
