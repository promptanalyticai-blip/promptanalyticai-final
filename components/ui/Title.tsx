"use client";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-slate-900">
      {children}
    </h2>
  );
}
