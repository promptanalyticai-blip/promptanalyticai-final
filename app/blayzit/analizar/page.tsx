"use client";

import { useState } from "react";
import Uploader from "@/components/blayzit/analizar/Uploader";
import FileProcessor from "@/components/blayzit/analizar/FileProcessor";
import AnalyzerBridge from "@/components/blayzit/analizar/AnalyzerBridge";
import V5Dashboard from "@/components/blayzit/analizar/V5Dashboard";
import AuditPanel from "@/components/blayzit/analizar/AuditPanel";
import SecurityPanel from "@/components/blayzit/analizar/SecurityPanel";
import { classifyFile } from "@/components/blayzit/analizar/FileClassifier";
import { generateTags } from "@/components/blayzit/analizar/TagEngine";

export default function AnalizarPage() {
  const [analysis, setAnalysis] = useState<any>(null);

  const handleFileUpload = async (file: File) => {
    const processed = await FileProcessor(file);
    const result = await AnalyzerBridge(processed);

    result.classification = classifyFile(processed.content);
    result.tags = generateTags(processed.content);

    setAnalysis(result);
  };

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold text-slate-900">
        Analizar Archivo · BLAYZIT V5 Enterprise
      </h1>

      <Uploader onUpload={handleFileUpload} />

      {analysis && (
        <>
          <V5Dashboard analysis={analysis} />
          <SecurityPanel analysis={analysis} />
          <AuditPanel analysis={analysis} />
        </>
      )}
    </section>
  );
}
