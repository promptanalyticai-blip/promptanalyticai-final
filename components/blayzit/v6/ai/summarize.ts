import { BlayzitIntelligenceBridge } from "@blayzit/intelligence/BlayzitIntelligenceBridge";

export default async function summarizeV6(text: string) {
  return BlayzitIntelligenceBridge().summarize(text);
}
