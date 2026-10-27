import { Card } from "@/components/ui/Card";
import { SubTitle } from "@/components/ui/SubTitle";

export default function UploadSummary({ count }: any) {
  return (
    <Card>
      <SubTitle>Resumen de Upload</SubTitle>
      <p className="text-gray-500 mt-2">
        Archivos recientes: <strong>{count}</strong>
      </p>
    </Card>
  );
}
