import type { PortfolioData } from './types';
import * as portfolioFr from './portfolio.fr';
import * as portfolioEn from './portfolio.en';
import type { Locale } from '@/types';

export * from './types';

export function getPortfolioData(locale: Locale): PortfolioData {
  return locale === 'en' ? portfolioEn : portfolioFr;
}

// Backward-compatible default exports (French)
export const {
  diplomesData,
  timelineData,
  projectsData,
  skillsData,
  hobbiesData,
  evenementsData,
  contactInfo,
} = portfolioFr;
