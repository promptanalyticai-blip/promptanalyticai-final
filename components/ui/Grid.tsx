"use client";

type GridProps = {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
};

export default function Grid({ children, cols = 3 }: GridProps) {
  const map: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return <div className={`grid gap-6 ${map[cols]}`}>{children}</div>;
}
