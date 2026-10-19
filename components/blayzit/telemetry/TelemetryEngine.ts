"use client";

export type TelemetryMetric = {
  id: string;
  module: string;
  durationMs: number;
  timestamp: string;
};

export class TelemetryEngine {
  private metrics: TelemetryMetric[] = [];

  measure(module: string, fn: () => any) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();

    this.metrics.push({
      id: crypto.randomUUID(),
      module,
      durationMs: Number((end - start).toFixed(2)),
      timestamp: new Date().toLocaleTimeString(),
    });

    return result;
  }

  getMetrics() {
    return this.metrics;
  }

  clear() {
    this.metrics = [];
  }
}

export const telemetryEngine = new TelemetryEngine();
