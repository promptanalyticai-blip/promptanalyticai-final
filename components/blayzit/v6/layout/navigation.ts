export function getModuleName(pathname: string) {
  if (pathname.includes("dnip")) return "DNIP Intelligence";
  if (pathname.includes("adip")) return "ADIP Automation";
  if (pathname.includes("ia")) return "IA Intelligence";
  if (pathname.includes("security")) return "Security Engine";
  if (pathname.includes("audit")) return "Audit Engine";
  if (pathname.includes("analizar")) return "Analyze Engine";
  if (pathname.includes("telemetry")) return "Telemetry Engine";
  return "BLAYZIT V6";
}
