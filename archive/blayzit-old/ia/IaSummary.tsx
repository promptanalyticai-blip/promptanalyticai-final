import { Card } from "@/components/ui/Card";
import { SubTitle } from "@/components/ui/SubTitle";

export default function IaSummary({ classification }: any) {
  return (
    <Card>
      <SubTitle>Resumen IA</SubTitle>
      <p className="text-gray-500 mt-2">
        Clasificación: <strong>{classification}</strong>
      </p>
    </Card>
  );
}
