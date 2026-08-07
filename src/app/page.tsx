import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { HeroSection } from "@/features/hero/hero-section";
import { AboutSection } from "@/features/about/about-section";
import { ServicesSection } from "@/features/services/services-section";
import { TechnologiesSection } from "@/features/technologies/technologies-section";
import { ProcessSection } from "@/features/process/process-section";
import { TestimonialsSection } from "@/features/testimonials/testimonials-section";
import { ContactSection } from "@/features/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar>
        <span className="font-bold">🚀 Let's Build the Future Together 🚀</span>
        <a href="#" className="text-[#6c2bd9] font-bold ml-2 hover:underline">Apply Here</a>
      </AnnouncementBar>
      <Navbar />
      <PageWrapper>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </PageWrapper>
      <Footer />
    </>
  );
}
