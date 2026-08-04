import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import LegalLayout from '@/features/legal/components/LegalLayout';
import { termsOfServiceData } from '@/features/legal/data/termsOfService';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />
      <main>
        <LegalLayout data={termsOfServiceData} />
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}
