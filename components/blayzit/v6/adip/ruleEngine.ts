import ADIPDefaultTriggers from "@blayzit/adip/ADIPDefaultTriggers";

export default function ruleEngineV6(data: any) {
  return ADIPDefaultTriggers.process(data);
}
