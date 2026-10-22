export default function Grid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: number;
}) {
  return (
    <div
      className={`grid gap-6 ${
        cols === 1
          ? "grid-cols-1"
          : cols === 2
          ? "grid-cols-1 md:grid-cols-2"
          : cols === 3
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-1 md:grid-cols-4"
      }`}
    >
      {children}
    </div>
  );
}
