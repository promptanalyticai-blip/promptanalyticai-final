export default function WarningCard({ count, label }) {
  return (
    <div className="p-5 rounded-xl bg-gradient-to-br from-amber-900/60 to-amber-700/40 border border-amber-500/40 shadow-lg shadow-amber-900/30">
      <h3 className="text-lg font-semibold text-amber-300 mb-1">Warning Alerts</h3>
      <p className="text-4xl font-bold text-amber-200">{count}</p>
      <p className="text-sm text-amber-300 mt-1">{label}</p>
    </div>
  );
}
