import { BlayzitIntelligenceBridge } from "@blayzit/intelligence/BlayzitIntelligenceBridge";

export default async function classifyV6(text: string) {
  return BlayzitIntelligenceBridge().classify(text);
}
