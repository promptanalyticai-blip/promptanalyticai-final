export function dnipClient() {
  return {
    version: "DNIP V6",
    status: "connected",
    patternsLoaded: true,
    latency: Math.random() * 80,
    timestamp: new Date().toISOString(),
    info: "DNIP client operational under WOW architecture.",
  };
}
