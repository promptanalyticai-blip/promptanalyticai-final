"use client";

import PredictionPanel from "./PredictionPanel";
import QualityPanel from "./QualityPanel";
import SmartActionsPanel from "./SmartActionsPanel";
import { generateRecommendations } from "./RecommendationEngine";

export default function V5PredictiveDashboard({ analysis }: { analysis: any }) {
  const recommendations = generateRecommendations(analysis);

  return (
    <div className="space-y-8">
      <PredictionPanel analysis={analysis} />
      <QualityPanel analysis={analysis} />

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Recomendaciones inteligentes
        </h2>

        <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
          {recommendations.map((r, idx) => (
            <li key={idx}>{r}</li>
          ))}
        </ul>
      </div>

      <SmartActionsPanel analysis={analysis} />
    </div>
  );
}
