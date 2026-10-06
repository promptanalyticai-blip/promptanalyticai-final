// components/enterprise/enterprise-section.tsx
type EnterpriseSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function EnterpriseSection({ title, children }: EnterpriseSectionProps) {
  return (
    <section className="space-y-2">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div>{children}</div>
    </section>
  );
}

export default EnterpriseSection;
