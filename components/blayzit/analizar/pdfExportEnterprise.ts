"use client";

import jsPDF from "jspdf";

export function exportAnalysisPDFEnterprise(analysis: any) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("BLAYZIT · Reporte de Análisis Enterprise", 10, 15);

  doc.setFontSize(12);
  doc.text("Archivo:", 10, 30);
  doc.text(JSON.stringify(analysis.file, null, 2), 10, 35);

  doc.text("Señales DNIP:", 10, 70);
  doc.text(JSON.stringify(analysis.signals, null, 2), 10, 75);

  doc.text("Decisiones híbridas:", 10, 110);
  doc.text(JSON.stringify(analysis.decisions, null, 2), 10, 115);

  doc.text("Acciones ADIP:", 10, 150);
  doc.text(JSON.stringify(analysis.actions, null, 2), 10, 155);

  doc.text("Insights IA:", 10, 190);
  doc.text(analysis.ai.summary, 10, 195);

  doc.save(`BLAYZIT-Enterprise-${analysis.file.name}.pdf`);
}
