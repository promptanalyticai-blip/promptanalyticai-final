"use client";

import AnalyzerBridge from "@/components/blayzit/analizar/AnalyzerBridge";

export async function analyzeInParallel(files: any[]) {
  const tasks = files.map(async (fileObj) => {
    const processed = {
      file: fileObj.file,
      content: fileObj.content,
    };

    const start = performance.now();
    const result = await AnalyzerBridge(processed);
    const end = performance.now();

    return {
      name: fileObj.file.name,
      analysis: result,
      timeMs: Number((end - start).toFixed(2)),
    };
  });

  const results = await Promise.all(tasks);

  return {
    totalFiles: results.length,
    totalTimeMs: results.reduce((acc, r) => acc + r.timeMs, 0),
    averageTimeMs:
      results.reduce((acc, r) => acc + r.timeMs, 0) / results.length,
    results,
  };
}
