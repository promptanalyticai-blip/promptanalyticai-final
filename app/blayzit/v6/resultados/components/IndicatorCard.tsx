"use client";

export default function IndicatorCard({ label, value, color }) {
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`text-xl font-semibold mt-1 text-${color}-600`}>
        {value}
      </p>
    </div>
  );
}
