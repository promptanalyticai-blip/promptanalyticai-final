// app/api/blayzit/v6/dnip/route.ts
import { NextResponse } from "next/server";

type DnipSignal = {
  id: string;
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  source: string;
  tags: string[];
};

type DnipResult = {
  signals: DnipSignal[];
  summary: string;
  riskScore: number;
};

function runDnipEngine(text: string): DnipResult {
  const signals: DnipSignal[] = [];
  const lower = text.toLowerCase();

  if (lower.includes("error") || lower.includes("exception")) {
    signals.push({
      id: "dnip-error-001",
      type: "runtime_error",
      severity: "high",
      message: "Se detectan errores o excepciones en el texto analizado.",
      source: "runtime",
      tags: ["error", "exception", "runtime"],
    });
  }

  if (lower.includes("timeout")) {
    signals.push({
      id: "dnip-timeout-001",
      type: "performance_issue",
      severity: "medium",
      message: "Se detectan posibles problemas de timeout o latencia.",
      source: "performance",
      tags: ["timeout", "latency", "performance"],
    });
  }

  if (lower.includes("security") || lower.includes("vulnerability")) {
    signals.push({
      id: "dnip-security-001",
      type: "security_risk",
      severity: "critical",
      message: "Se detectan posibles riesgos de seguridad o vulnerabilidades.",
      source: "security",
      tags: ["security", "vulnerability", "risk"],
    });
  }

  const riskScore =
    signals.reduce((acc, s) => {
      if (s.severity === "low") return acc + 10;
      if (s.severity === "medium") return acc + 25;
      if (s.severity === "high") return acc + 50;
      if (s.severity === "critical") return acc + 80;
      return acc;
    }, 0) || 0;

  const summary =
    signals.length === 0
      ? "DNIP no detectó señales de riesgo relevantes en este texto."
      : `DNIP detectó ${signals.length} señales de riesgo con un puntaje total de ${riskScore}.`;

  return {
    signals,
    summary,
    riskScore,
  };
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.text !== "string") {
    return NextResponse.json(
      { error: "Se requiere el campo 'text' en el cuerpo de la petición." },
      { status: 400 }
    );
  }

  const result = runDnipEngine(body.text);

  return NextResponse.json({
    engine: "DNIP_V6",
    inputLength: body.text.length,
    ...result,
  });
}
