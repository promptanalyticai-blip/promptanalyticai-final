// services/blayzit.ts
import { BlayzitCore } from "./blayzit-core";

export async function runBlayzit(prompt: string): Promise<string> {
  return BlayzitCore.run(prompt);
}

export async function runBlayzitSummary(prompt: string): Promise<string> {
  const base = await BlayzitCore.run(prompt);
  return `SUMMARY: ${base}`;
}
