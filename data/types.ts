export interface Diplome {
  id: number;
  titre: string;
  etablissement: string;
  annee: string;
  description: string;
  specialites?: string[];
  mention?: string;
  note?: string;
  identifiantCertification?: string;
  lienDiplome?: string;
}

export interface TimelineItem {
  id: number;
  type: 'education' | 'experience';
  title: string;
  institution: string;
  date: string;
  description: string;
  location?: string;
  tags?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  video?: string;
  repoLink?: string;
  liveLink?: string;
  demoVideo?: string;
  downloadLink?: string;
  featured?: boolean;
  linkedProjectId?: number;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  level: number;
}

export interface Hobby {
  id: number;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface EvenementSection {
  title: string;
  content: string;
}

export interface VideoOption {
  title: string;
  url: string;
}

export interface LinkedInPost {
  title: string;
  url: string;
}

export interface Evenement {
  id: number;
  title: string;
  description: string;
  date: string;
  location?: string;
  image: string;
  video?: string;
  photos?: string[];
  linkedinLink?: string;
  linkedinPosts?: LinkedInPost[];
  videos?: VideoOption[];
  githubLink?: string;
  demoLink?: string;
  downloadLink?: string;
  zipLink?: string;
  posterLink?: string;
  badge?: string;
  sections?: EvenementSection[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface PortfolioData {
  diplomesData: Diplome[];
  timelineData: TimelineItem[];
  projectsData: Project[];
  skillsData: Skill[];
  hobbiesData: Hobby[];
  evenementsData: Evenement[];
  contactInfo: ContactInfo;
}
