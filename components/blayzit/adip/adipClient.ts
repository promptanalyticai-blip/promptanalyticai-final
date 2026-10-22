export function adipClient() {
  return {
    version: "ADIP V6",
    status: "connected",
    latency: Math.random() * 120,
    timestamp: new Date().toISOString(),
    info: "ADIP client operational under WOW architecture.",
  };
}
