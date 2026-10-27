"use client";

export default function AreaChart({ data }) {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const points = data
    .map((v, i) => `${i * 40},${150 - (v / max) * 140}`)
    .join(" ");

  return (
    <svg viewBox="0 0 400 160" className="w-full h-40">
      <polyline
        fill="rgba(99,102,241,0.15)"
        stroke="none"
        points={`${points} 400,160 0,160`}
      />
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        points={points}
      />
    </svg>
  );
}
