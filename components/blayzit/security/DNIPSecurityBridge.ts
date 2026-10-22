import { SecurityEngine } from "./SecurityEngine";

export function DNIPSecurityBridge(payload: any) {
  const engine = new SecurityEngine();
  const status = engine.getSecurityStatus();

  return {
    input: payload,
    security: status,
    processedAt: new Date().toISOString(),
  };
}
