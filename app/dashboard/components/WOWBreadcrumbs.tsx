//app/dashboard/components/WOWBreadcrumbs.tsx
"use client";

export default function WOWBreadcrumbs({ wow, path }: any) {
  if (!wow) return null;

  const segments = path.split("/").filter(Boolean);

  return (
    <nav className="text-sm mb-6 opacity-80">
      {segments.map((seg: string, i: number) => (
        <span key={i}>
          {seg.toUpperCase()}
          {i < segments.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
