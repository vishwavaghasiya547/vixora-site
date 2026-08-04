import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vixora Studio',
  description:
    'Learn how Vixora Studio collects, uses, and safeguards your personal information when you use our website, platforms, or services.',
  openGraph: {
    title: 'Privacy Policy — Vixora Studio',
    description:
      'Learn how Vixora Studio collects, uses, and safeguards your personal information when you use our website, platforms, or services.',
    type: 'website',
    url: 'https://vixora.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
