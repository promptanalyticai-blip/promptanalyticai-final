"use client";

import { runDNIP } from "@/components/blayzit/dnip/DNIPEngine";
import { runDNIPHybrid } from "@/components/blayzit/dnip/DNIPHybridEngine";
import { runDNIPPatternEngine } from "@/components/blayzit/dnip/DNIPPatternEngine";

import { runADIP } from "@/components/blayzit/adip/ADIPEngine";
import { runADIPHybrid } from "@/components/blayzit/adip/ADIPHybridEngine";
import { runADIPPredictive } from "@/components/blayzit/adip/ADIPPredictiveEngine";

import { automationEngine } from "@/components/blayzit/adip/ADIPDefaultTriggers";

import { classifyFile } from "@/components/blayzit/analizar/FileClassifier";
import { generateTags } from "@/components/blayzit/analizar/TagEngine";
import { detectPatterns } from "@/components/blayzit/analizar/PatternEngine";

import { rulesEngine } from "@/components/blayzit/dnip/DNIPDefaultRules";

import { auditEngine } from "@/components/blayzit/audit/AuditEngine";
import { runSecurityEngine } from "@/components/blayzit/security/SecurityEngine";

import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";

export default async function AnalyzerBridge(processed: any) {
  auditEngine.log("file", `Analizando archivo: ${processed.file.name}`);

  // -----------------------------------------
  // IA (simulada)
  // -----------------------------------------
  const ai = telemetryEngine.measure("IA", () => ({
    summary: processed.content.slice(0, 300),
    insights: ["Insight 1", "Insight 2", "Insight 3"],
    score: Math.random(),
  }));
  auditEngine.log("ai", "IA generó resumen y score.");

  // -----------------------------------------
  // Señales DNIP
  // -----------------------------------------
  const signals = telemetryEngine.measure("DNIP Signals", () => ({
    dnip: {
      riskLevel: Math.random(),
      anomalies: Math.random() > 0.7,
    },
  }));
  auditEngine.log("dnip", "Señales DNIP generadas.");

  // -----------------------------------------
  // Patrones
  // -----------------------------------------
  const patterns = telemetryEngine.measure("Pattern Engine", () =>
    detectPatterns(processed.content)
  );
  auditEngine.log("patterns", "Patrones detectados en el archivo.");

  // -----------------------------------------
  // DNIP Engines
  // -----------------------------------------
  const dnipBase = telemetryEngine.measure("DNIP Base", () =>
    runDNIP(signals)
  );

  const dnipHybrid = telemetryEngine.measure("DNIP Hybrid", () =>
    runDNIPHybrid(signals, ai)
  );

  const dnipPattern = telemetryEngine.measure("DNIP Pattern", () =>
    runDNIPPatternEngine(signals, patterns)
  );

  auditEngine.log("dnip", "Decisiones DNIP calculadas.");

  // -----------------------------------------
  // DECISIONES (ARRAY)
  // -----------------------------------------
  const decisions = [
    {
      id: crypto.randomUUID(),
      type: "riesgo",
      level: Number(dnipHybrid.hybridScore) || 0,
      message: "Evaluación híbrida DNIP",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: crypto.randomUUID(),
      type: "patrones",
      level: Number(dnipPattern.finalRisk) || 0,
      message: "Patrones detectados en el archivo",
      timestamp: new Date().toLocaleTimeString(),
    },
  ];

  // -----------------------------------------
  // ADIP Engines
  // -----------------------------------------
  const adipBase = telemetryEngine.measure("ADIP Base", () =>
    runADIP(decisions)
  );

  const adipHybrid = telemetryEngine.measure("ADIP Hybrid", () =>
    runADIPHybrid(decisions)
  );

  const adipPredictive = telemetryEngine.measure("ADIP Predictive", () =>
    runADIPPredictive({
      decisions,
      ai,
      tags: generateTags(processed.content),
    })
  );

  const actions = [...adipBase, ...adipHybrid, ...adipPredictive];

  auditEngine.log("adip", "Acciones ADIP generadas.");

  // -----------------------------------------
  // Clasificación + Tags
  // -----------------------------------------
  const classification = telemetryEngine.measure("Classifier", () =>
    classifyFile(processed.content)
  );

  const tags = telemetryEngine.measure("Tags Engine", () =>
    generateTags(processed.content)
  );

  auditEngine.log("classification", "Archivo clasificado.");
  auditEngine.log("tags", "Tags generados.");

  // -----------------------------------------
  // Reglas DNIP
  // -----------------------------------------
  const rules = telemetryEngine.measure("DNIP Rules", () =>
    rulesEngine.evaluate({
      file: processed.file,
      contentLength: processed.content.length,
      signals,
      decisions,
      ai,
      tags,
      patterns,
    })
  );

  auditEngine.log("rules", "Reglas DNIP evaluadas.");

  // -----------------------------------------
  // Automatización ADIP
  // -----------------------------------------
  const automation = telemetryEngine.measure("ADIP Automation", () =>
    automationEngine.run({
      file: processed.file,
      contentLength: processed.content.length,
      signals,
      decisions,
      ai,
      tags,
      patterns,
    })
  );

  auditEngine.log("automation", "Automatizaciones ADIP ejecutadas.");

  // -----------------------------------------
  // Seguridad (Bloque 18)
  // -----------------------------------------
  const security = telemetryEngine.measure("Security Engine", () =>
    runSecurityEngine({
      decisions,
      automation,
      patterns,
      tags,
    })
  );

  auditEngine.log("security", "Señales de seguridad generadas.");

  auditEngine.log("complete", "Análisis completado.");

  // -----------------------------------------
  // RETORNO FINAL
  // -----------------------------------------
  return {
    file: processed.file,
    content: processed.content,
    contentLength: processed.content.length,

    ai,
    signals,
    decisions,
    actions,

    classification,
    tags,
    patterns,

    rules,
    automation,

    security,
    audit: auditEngine.getEvents(),
    telemetry: telemetryEngine.getMetrics(),
  };
}
