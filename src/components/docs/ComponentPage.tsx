import type { ReactNode } from "react";
import { PageHeader } from "../../components/layout/PageHeader";

type ComponentPageProps = {
  badge?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ComponentPage({
  badge = "Components",
  title,
  description,
  children,
}: ComponentPageProps) {
  return (
    <div className="space-y-12">

      <PageHeader
        badge={badge}
        title={title}
        description={description}
      />

      {children}

    </div>
  );
}