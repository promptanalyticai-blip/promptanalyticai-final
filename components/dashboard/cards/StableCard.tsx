export default function StableCard({ count, label }) {
  return (
    <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-900/60 to-emerald-700/40 border border-emerald-500/40 shadow-lg shadow-emerald-900/30">
      <h3 className="text-lg font-semibold text-emerald-300 mb-1">Stable Zones</h3>
      <p className="text-4xl font-bold text-emerald-200">{count}</p>
      <p className="text-sm text-emerald-300 mt-1">{label}</p>
    </div>
  );
}
