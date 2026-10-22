export default function Progress({
  value,
}: {
  value: number;
}) {
  const pct = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
