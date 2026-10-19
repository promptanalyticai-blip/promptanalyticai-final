"use client";

import { summarize } from "@/components/blayzit/v6/ai/summarize";
import { computeRisk } from "@/components/blayzit/v6/dnip/riskEngine";
import { automationEngine } from "@/components/blayzit/v6/adip/automationEngine";
import { auditEngine } from "@/components/blayzit/v6/audit/auditEngine";
import { computeEmbeddings } from "@/components/blayzit/v6/ai/embeddings";
import { detectPatterns } from "@/components/blayzit/v6/dnip/patternEngine";
import { detectAnomalies } from "@/components/blayzit/v6/security/anomalyEngine";
import { detectThreats } from "@/components/blayzit/v6/security/threatEngine";
import { measureMetric } from "@/components/blayzit/v6/telemetry/metricsEngine";

export default async function AnalyzarV6(processed: any) {
  const metrics: any[] = [];

  auditEngine.log("file", `Analizando archivo: ${processed.file.name}`);

  // IA · resumen
  const summaryMetric = await measureMetric("IA · resumen", async () =>
    summarize(processed.content)
  );
  const summary = summaryMetric.result;
  metrics.push(summaryMetric);

  // IA · embeddings
  const embeddingsMetric = await measureMetric("IA · embeddings", async () =>
    computeEmbeddings(processed.content)
  );
  const embeddings = embeddingsMetric.result;
  metrics.push(embeddingsMetric);

  // DNIP · patrones
  const patternsMetric = await measureMetric("DNIP · patrones", async () =>
    detectPatterns(processed.content)
  );
  const patterns = patternsMetric.result;
  metrics.push(patternsMetric);

  // Seguridad · anomalías
  const anomaliesMetric = await measureMetric("Seguridad · anomalías", async () =>
    detectAnomalies(processed.content)
  );
  const anomalies = anomaliesMetric.result;
  metrics.push(anomaliesMetric);

  // Seguridad · amenazas
  const threatsMetric = await measureMetric("Seguridad · amenazas", async () =>
    detectThreats(processed.content)
  );
  const threats = threatsMetric.result;
  metrics.push(threatsMetric);

  // DNIP · riesgo
  const riskMetric = await measureMetric("DNIP · riesgo", async () =>
    computeRisk({
      embeddings,
      patterns,
      anomalies: [...anomalies, ...threats],
    })
  );
  const risk = riskMetric.result;
  metrics.push(riskMetric);

  // ADIP · acciones
  const actionsMetric = await measureMetric("ADIP · acciones", async () =>
    automationEngine({
      risk,
      tags: processed.tags || [],
    })
  );
  const actions = actionsMetric.result;
  metrics.push(actionsMetric);

  return {
    file: processed.file,
    summary,
    risk,
    actions,
    patterns,
    anomalies,
    threats,
    metrics,
  };
}
