"use client";

import jsPDF from "jspdf";

export function exportAnalysisToPDF(analysis: any) {
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text("Reporte de análisis BLAYZIT", 10, 15);

  doc.setFontSize(10);
  doc.text("Archivo:", 10, 25);
  doc.text(JSON.stringify(analysis.file, null, 2), 10, 30);

  doc.text("Señales:", 10, 60);
  doc.text(JSON.stringify(analysis.signals, null, 2), 10, 65);

  doc.text("Decisiones DNIP:", 10, 95);
  doc.text(JSON.stringify(analysis.decisions, null, 2), 10, 100);

  doc.text("Acciones ADIP:", 10, 130);
  doc.text(JSON.stringify(analysis.actions, null, 2), 10, 135);

  doc.save(`blayzit-reporte-${analysis.file.name}.pdf`);
}
