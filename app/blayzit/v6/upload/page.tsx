// app/blayzit/v6/upload/page.tsx
"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import TextManualUpload from "@/components/blayzit/v6/upload/TextManualUpload";
import MultiFileUpload from "@/components/blayzit/v6/upload/MultiFileUpload";
import LogUpload from "@/components/blayzit/v6/upload/LogUpload";
import PdfUpload from "@/components/blayzit/v6/upload/PdfUpload";
import ImageOcrUpload from "@/components/blayzit/v6/upload/ImageOcrUpload";
import V6MasterDashboard from "@/components/blayzit/master/V6MasterDashboard";

export default function BlayzitV6UploadPage() {
  const [analysis, setAnalysis] = useState<any>(null);

  return (
    <Section>
      <Title>BLAYZIT V6 · Ingestión Inteligente</Title>

      {/* Texto manual */}
      <div className="border rounded-lg p-4 bg-slate-50 mb-6">
        <h2 className="font-semibold mb-2">Subida de texto manual</h2>
        <TextManualUpload onResult={setAnalysis} />
      </div>

      {/* Múltiples archivos */}
      <div className="border rounded-lg p-4 bg-slate-50 mb-6">
        <h2 className="font-semibold mb-2">Subida de múltiples archivos</h2>
        <MultiFileUpload onResult={setAnalysis} />
      </div>

      {/* Logs */}
      <div className="border rounded-lg p-4 bg-slate-50 mb-6">
        <h2 className="font-semibold mb-2">Subida de logs (JSON, CSV, TXT)</h2>
        <LogUpload onResult={setAnalysis} />
      </div>

      {/* PDFs */}
      <div className="border rounded-lg p-4 bg-slate-50 mb-6">
        <h2 className="font-semibold mb-2">Subida de PDFs con extracción de texto</h2>
        <PdfUpload onResult={setAnalysis} />
      </div>

      {/* Imágenes con OCR */}
      <div className="border rounded-lg p-4 bg-slate-50 mb-6">
        <h2 className="font-semibold mb-2">Subida de imágenes con OCR</h2>
        <ImageOcrUpload onResult={setAnalysis} />
        <p className="text-xs text-slate-500 mt-2">
          OCR listo para conectar a tu backend (Tesseract, Vision API, etc.).
        </p>
      </div>

      {analysis && (
        <div className="mt-6">
          <V6MasterDashboard analysis={analysis} />
        </div>
      )}
    </Section>
  );
}
