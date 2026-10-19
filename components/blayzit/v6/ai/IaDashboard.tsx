// components/blayzit/v6/ia/IaDashboard.tsx
"use client";

type IaInsight = {
  label: string;
  value: string;
};

type IaCategory = {
  name: string;
  confidence: number;
};

type IaData = {
  summary: string;
  sentiment: "positive" | "neutral" | "negative";
  categories: IaCategory[];
  insights: IaInsight[];
  similarityScore: number;
};

export default function IaDashboard({ data }: { data: IaData }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">IA · Análisis Inteligente</h2>

      {/* Resumen */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Resumen</p>
        <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded-md">
          {data.summary}
        </p>
      </div>

      {/* Sentimiento */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Sentimiento</p>
        <span
          className={
            "text-xs px-2 py-1 rounded-full " +
            (data.sentiment === "positive"
              ? "bg-green-100 text-green-700"
              : data.sentiment === "negative"
              ? "bg-red-100 text-red-700"
              : "bg-slate-100 text-slate-700")
          }
        >
          {data.sentiment.toUpperCase()}
        </span>
      </div>

      {/* Categorías */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Clasificación</p>
        <div className="space-y-1">
          {data.categories.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between text-xs px-2 py-1 rounded-md bg-slate-50"
            >
              <span>{c.name}</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                {Math.round(c.confidence * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Insights IA</p>
        <ul className="text-xs text-slate-700 list-disc pl-4">
          {data.insights.map((i) => (
            <li key={i.label}>
              <strong>{i.label}:</strong> {i.value}
            </li>
          ))}
        </ul>
      </div>

      {/* Similitud */}
      <div>
        <p className="text-sm font-medium mb-1">Similitud semántica</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xl font-bold">{Math.round(data.similarityScore * 100)}%</span>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">
            {data.similarityScore >= 0.75
              ? "ALTA"
              : data.similarityScore >= 0.45
              ? "MEDIA"
              : "BAJA"}
          </span>
        </div>
      </div>
    </div>
  );
}
