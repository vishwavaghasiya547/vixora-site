import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Technology from '@/components/Technology';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="relative">
        <TrustedBy />
      </div>
      <div className="relative">
        <About />
      </div>
      <div className="relative">
        <Services />
      </div>
      <div className="relative">
        <Work />
      </div>
      <div className="relative">
        <Process />
      </div>
      <div className="relative">
        <Technology />
      </div>
      <div className="relative">
        <Testimonials />
      </div>
      <div className="relative">
        <FinalCTA />
      </div>
      <div className="relative">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
