import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Technology from '@/components/Technology';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Work />
      <Process />
      <Technology />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
