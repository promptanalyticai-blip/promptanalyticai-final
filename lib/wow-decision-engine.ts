// lib/wow-decision-engine.ts
import { auditModes } from "@/core/audit/modes";
import { wowCriticalMode } from "./wow-critical-mode";
import { wowRecoveryMode } from "./wow-recovery-mode";
import { wowAutohealEngine } from "./wow-autoheal-engine";
import { wowThreat } from "./wow-threat";
import { wowStabilityEngine } from "./wow-stability-engine";
import { wowPredictiveEngine } from "./wow-predictive-engine";

export const wowEngine = {
  handleSignal(tenantId: string, signal: any, modes: any) {
    if (signal.type === "risk" && modes.threatDetection) {
      auditModes.activated("ThreatDetection", "Señal de riesgo", tenantId);
      wowThreat.activate(tenantId, signal);
    }

    if (signal.type === "anomaly" && modes.autoHealing) {
      auditModes.activated("AutoHealing", "Anomalía detectada", tenantId);
      wowAutohealEngine.heal(tenantId, signal);
    }

    if (signal.type === "stability" && modes.stability) {
      auditModes.activated("Stability", "Evento de estabilidad", tenantId);
      wowStabilityEngine.stabilize(tenantId);
    }

    if (signal.type === "predict" && modes.predictive) {
      auditModes.activated("Predictive", "Predicción activada", tenantId);
      wowPredictiveEngine.predict(tenantId, signal);
    }
  },

  triggerCriticalMode(tenantId: string) {
    auditModes.activated("Critical", "Acción fallida", tenantId);
    wowCriticalMode.activate(tenantId);
  },

  triggerRecoveryMode(tenantId: string) {
    auditModes.activated("Recovery", "Falla detectada", tenantId);
    wowRecoveryMode.activate(tenantId);
  }
};
