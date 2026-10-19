"use client";

export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-slate-600">
      {children}
    </p>
  );
}
