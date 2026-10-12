// lib/wow-stream.ts
// Streaming WOW con señales, decisiones, acciones, auditoría y amenazas (FASE 54)

import { processWOWRealtimeSignal } from "./wow-realtime";
import { processWOWDecisionFlow } from "./wow-decision-flow";
import { processWOWActionFlow } from "./wow-action-flow";
import { processThreatFromSignal, processThreatFromDecision, processThreatFromAction } from "./wow-threat-flow";
import { auditEvent } from "./wow-audit-shield";

export function startWOWStream(wow: any, updateState: Function) {
  const source = new EventSource("/api/stream");

  source.onmessage = async (event) => {
    try {
      const data = JSON.parse(event.data);

      if (data.type === "signal") {
        processWOWRealtimeSignal(wow, data.payload, updateState);

        const decision = processWOWDecisionFlow(wow, data.payload, updateState);

        const actionResult = await processWOWActionFlow(wow, decision, updateState);

        await processThreatFromSignal(wow, data.payload, updateState);
        await processThreatFromDecision(wow, decision, updateState);

        if (actionResult && actionResult.payload) {
          await processThreatFromAction(wow, actionResult.payload, updateState);
        }

        await auditEvent(
          wow,
          "STREAM_SIGNAL",
          "Señal procesada vía streaming con threat detection",
          data.payload
        );

        return;
      }

    } catch (err) {
      console.error("WOW Stream Error:", err);
      await auditEvent(
        wow,
        "STREAM_ERROR",
        "Error en streaming",
        { error: err },
        "critical"
      );
    }
  };

  return source;
}
