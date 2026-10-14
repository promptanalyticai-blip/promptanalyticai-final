// app/blayzit/enterprise/adip/page.tsx
import ADIPPanel from "@/components/adip/ADIPPanel";

export default function BlayzitADIPAnalyze() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">ADIP — Análisis Inteligente</h1>

      <p className="text-gray-600">
        Este módulo permite el análisis inteligente de señales operativas y patrones detectados por BLAYZIT.
      </p>

      <ADIPPanel />
    </div>
  );
}
