import { BlayzitIntelligenceBridge } from "@blayzit/intelligence/BlayzitIntelligenceBridge";

export default async function embeddingsV6(text: string) {
  return BlayzitIntelligenceBridge().embeddings(text);
}
