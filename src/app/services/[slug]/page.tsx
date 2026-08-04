import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesData } from '@/features/services/data/servicesData';
import ServiceDetailLayout from '@/features/services/components/ServiceDetailLayout';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return {
      title: 'Service Not Found — Vixora Studio',
    };
  }

  return {
    title: `${service.name} Services — Vixora Studio`,
    description: service.tagline,
    openGraph: {
      title: `${service.name} Services — Vixora Studio`,
      description: service.tagline,
      url: `https://vixora.com/services/${slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />
      <main>
        <ServiceDetailLayout service={service} />
      </main>
      <Footer />
    </div>
  );
}
