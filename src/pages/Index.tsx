import { LanguageProvider } from '@/contexts/LanguageContext';


import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { TargetSection } from '@/components/TargetSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CourseModulesSection } from '@/components/CourseModulesSection';
import { BonusSection } from '@/components/BonusSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';

import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">


        <main>
          <HeroSection />
          <AboutSection />
          <TargetSection />
          <ServicesSection />
          <CourseModulesSection />
          <BonusSection />
          <GuaranteeSection />

          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
