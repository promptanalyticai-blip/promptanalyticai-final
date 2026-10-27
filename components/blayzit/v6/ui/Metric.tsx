interface MetricProps {
  label: string;
  value: string;
  hint?: string;
}

export default function Metric({ label, value, hint }: MetricProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 flex flex-col gap-1">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-lg font-semibold text-slate-900">{value}</span>
      {hint && <span className="text-xs text-slate-400">{hint}</span>}
    </div>
  );
}
