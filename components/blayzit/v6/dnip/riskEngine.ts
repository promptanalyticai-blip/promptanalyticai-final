import { runDNIP } from "@blayzit/dnip/DNIPEngine";

export default function RiskEngineV6(data: any) {
  const signals = data.signals || [];
  const base = runDNIP(signals);

  return {
    ...base,
    riskScore: base.riskLevel * 100,
  };
}
