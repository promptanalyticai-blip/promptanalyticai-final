// components/enterprise/enterprise-card.tsx
type EnterpriseCardProps = {
  title: string;
  children: React.ReactNode;
};

export function EnterpriseCard({ title, children }: EnterpriseCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default EnterpriseCard;
