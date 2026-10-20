import { BlayzitIntelligenceBridge } from "@blayzit/intelligence/BlayzitIntelligenceBridge";

export default async function insightsV6(text: string) {
  return BlayzitIntelligenceBridge().insights(text);
}
