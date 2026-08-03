import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Vixora Studio',
  description:
    'Read the Terms of Service governing your access to and use of the website, content, and digital services owned and operated by Vixora Studio.',
  openGraph: {
    title: 'Terms of Service — Vixora Studio',
    description:
      'Read the Terms of Service governing your access to and use of the website, content, and digital services owned and operated by Vixora Studio.',
    type: 'website',
    url: 'https://vixora.com/terms-of-service',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
