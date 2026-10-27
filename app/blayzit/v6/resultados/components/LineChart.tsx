"use client";

export default function LineChart({ data }) {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const points = data
    .map((v, i) => `${i * 40},${150 - (v / max) * 140}`)
    .join(" ");

  return (
    <svg viewBox="0 0 400 160" className="w-full h-40">
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        points={points}
        className="drop-shadow-sm"
      />
      {data.map((v, i) => (
        <circle
          key={i}
          cx={i * 40}
          cy={150 - (v / max) * 140}
          r="4"
          fill="#6366f1"
        />
      ))}
    </svg>
  );
}
