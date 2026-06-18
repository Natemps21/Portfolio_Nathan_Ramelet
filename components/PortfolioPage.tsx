'use client';

import HeroSection from '@/components/sections/HeroSection';
import DiplomesSection from '@/components/sections/DiplomesSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProjectGrid from '@/components/sections/ProjectGrid';
import EvenementsSection from '@/components/sections/EvenementsSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import CVPreview from '@/components/sections/CVPreview';
import Footer from '@/components/layout/Footer';
import { getPortfolioData } from '@/data';
import { useLocaleStore } from '@/lib/stores/localeStore';

export default function PortfolioPage() {
  const locale = useLocaleStore((state) => state.locale);
  const { diplomesData, timelineData, projectsData, evenementsData, hobbiesData } =
    getPortfolioData(locale);

  return (
    <>
      <HeroSection />
      <DiplomesSection diplomes={diplomesData} />
      <TimelineSection items={timelineData} />
      <ProjectGrid projects={projectsData} />
      <EvenementsSection evenements={evenementsData} />
      <HobbiesSection hobbies={hobbiesData} />
      <CVPreview />
      <Footer />
    </>
  );
}
