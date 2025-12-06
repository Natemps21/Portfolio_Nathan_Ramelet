import HeroSection from '@/components/sections/HeroSection';
import DiplomesSection from '@/components/sections/DiplomesSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProjectGrid from '@/components/sections/ProjectGrid';
import EvenementsSection from '@/components/sections/EvenementsSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import CVPreview from '@/components/sections/CVPreview';
import Footer from '@/components/layout/Footer';
import { diplomesData, timelineData, projectsData, evenementsData, hobbiesData } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full screen */}
      <HeroSection />
      
      {/* Diplômes Section - NOUVEAU */}
      <DiplomesSection diplomes={diplomesData} />
      
      {/* Timeline Section - Journey */}
      <TimelineSection items={timelineData} />
      
      {/* Projects Grid */}
      <ProjectGrid projects={projectsData} />
      
      {/* Événements Section */}
      <EvenementsSection evenements={evenementsData} />
      
      {/* Hobbies Section */}
      <HobbiesSection hobbies={hobbiesData} />
      
      {/* CV Preview */}
      <CVPreview />
      
      {/* Footer with Contact */}
      <Footer />
    </>
  );
}

