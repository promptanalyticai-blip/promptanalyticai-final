//app/blayzit/enterprise/page.tsx
export default function BlayzitEnterpriseHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">BLAYZIT Enterprise</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h2 className="font-medium mb-2">DNIP</h2>
          <p className="text-sm text-gray-600">Ingesta de datos operativos.</p>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h2 className="font-medium mb-2">ADIP</h2>
          <p className="text-sm text-gray-600">Análisis inteligente.</p>
        </div>

        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h2 className="font-medium mb-2">WOW Engine</h2>
          <p className="text-sm text-gray-600">IA avanzada.</p>
        </div>
      </div>
    </div>
  );
}
