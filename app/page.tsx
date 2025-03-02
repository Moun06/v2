import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import EmergencyCallSection from '@/components/EmergencyCallSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import InterventionZonesSection from '@/components/InterventionZonesSection';
import FooterSection from '@/components/FooterSection';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <EmergencyCallSection />
      <TestimonialsSection />
      <AdvantagesSection />
      <InterventionZonesSection />
      <FooterSection />
      <StructuredData />
    </main>
  );
}