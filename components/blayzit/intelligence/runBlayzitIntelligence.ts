import { BlayzitIntelligenceBridge } from "./BlayzitIntelligenceBridge";

export default function runBlayzitIntelligence(text: string) {
  const engine = new BlayzitIntelligenceBridge();

  return {
    classify: engine.classify(text),
    embeddings: engine.embeddings(text),
    summarize: engine.summarize(text),
    insights: engine.insights(text),
    timestamp: new Date().toISOString(),
  };
}
