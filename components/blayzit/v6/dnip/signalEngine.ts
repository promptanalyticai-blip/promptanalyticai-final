import { runDNIP as BaseSignalEngine } from "@blayzit/dnip/DNIPEngine";

export default function SignalEngineV6(data: any) {
  const signals = data.signals || [];
  return BaseSignalEngine(signals);
}
