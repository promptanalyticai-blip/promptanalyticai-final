type TelemetryRecord = {
  id: string;
  label: string;
  durationMs: number;
  timestamp: string;
};

class TelemetryEngineClass {
  private records: TelemetryRecord[] = [];

  measure<T>(label: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();

    this.records.push({
      id: crypto.randomUUID(),
      label,
      durationMs: Number((end - start).toFixed(2)),
      timestamp: new Date().toISOString(),
    });

    return result;
  }

  getMetrics() {
    return {
      general: {
        totalMeasurements: this.records.length,
        lastMeasurement: this.records.at(-1)?.timestamp ?? null,
        version: "V6",
      },
      latency: this.records.map((r) => ({
        label: r.label,
        durationMs: r.durationMs,
        timestamp: r.timestamp,
      })),
    };
  }
}

export const telemetryEngine = new TelemetryEngineClass();
export { TelemetryEngineClass as TelemetryEngine };
