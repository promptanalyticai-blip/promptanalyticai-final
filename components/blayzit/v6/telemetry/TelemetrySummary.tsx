import { Card } from "@/components/ui/Card";
import { SubTitle } from "@/components/ui/SubTitle";

export default function TelemetrySummary({ stability }: any) {
  return (
    <Card>
      <SubTitle>Resumen de Telemetría</SubTitle>
      <p className="text-gray-500 mt-2">
        Estabilidad: <strong>{stability}</strong>
      </p>
    </Card>
  );
}
