// components/ui/tabs.tsx
export function Tabs({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TabsTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <button className={className}>{children}</button>;
}

export function TabsContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
