import { Card } from "@/components/ui/Card";
import { SubTitle } from "@/components/ui/SubTitle";

export default function DnipSummary({ score, level }: any) {
  return (
    <Card>
      <SubTitle>Resumen DNIP</SubTitle>
      <p className="text-gray-500 mt-2">
        Score: <strong>{score}</strong>
      </p>
      <p className="text-gray-500">
        Nivel: <strong>{level}</strong>
      </p>
    </Card>
  );
}
