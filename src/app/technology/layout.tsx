import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology — Engineering Stack | Vixora',
  description:
    'The battle-tested technology stack behind every Vixora product — AI, SaaS, cloud, and full-stack engineering capabilities explained.',
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

