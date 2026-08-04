import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services — Vixora Studio',
  description:
    'Explore Vixora\'s product engineering and design capabilities. We build scalable digital products, AI solutions, and headless commerce platforms.',
  openGraph: {
    title: 'Our Services — Vixora Studio',
    description:
      'Explore Vixora\'s product engineering and design capabilities. We build scalable digital products, AI solutions, and headless commerce platforms.',
    type: 'website',
    url: 'https://vixora.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
