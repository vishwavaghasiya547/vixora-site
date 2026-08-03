import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import LegalLayout from '@/features/legal/components/LegalLayout';
import { privacyPolicyData } from '@/features/legal/data/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />
      <main>
        <LegalLayout data={privacyPolicyData} />
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
}
