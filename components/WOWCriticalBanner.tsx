//app/components/WOWCriticalBanner.tsx
export default function WOWCriticalBanner() {
  return (
    <div className="p-4 rounded-lg border border-red-500/40 bg-gradient-to-r from-red-900/40 to-red-700/20 text-red-300 shadow-md">
      <strong className="block text-lg mb-1">Modo Crítico</strong>
      Eventos críticos detectados por WOW Engine.
    </div>
  );
}
