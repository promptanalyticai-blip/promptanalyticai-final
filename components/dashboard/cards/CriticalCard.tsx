//components/dashboard/cards/CriticalCard.tsx
export default function CriticalCard({ count, label }) {
  return (
    <div className="p-5 rounded-xl bg-gradient-to-br from-red-900/60 to-red-700/40 border border-red-500/40 shadow-lg shadow-red-900/30">
      <h3 className="text-lg font-semibold text-red-300 mb-1">Critical Alerts</h3>
      <p className="text-4xl font-bold text-red-200">{count}</p>
      <p className="text-sm text-red-300 mt-1">{label}</p>
    </div>
  );
}
