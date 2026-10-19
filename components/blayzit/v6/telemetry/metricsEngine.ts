export async function measureMetric(module: string, fn: () => Promise<any>) {
  const start = performance.now();
  const result = await fn(); // ✔ async soportado
  const end = performance.now();

  return {
    id: crypto.randomUUID(),
    module,
    durationMs: Number((end - start).toFixed(2)),
    timestamp: new Date().toLocaleTimeString(),
    result,
  };
}
