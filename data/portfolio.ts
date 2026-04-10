// ============================================
// PORTFOLIO DATA STRUCTURES
// ============================================

export interface Diplome {
  id: number;
  titre: string;
  etablissement: string;
  annee: string;
  description: string;
  specialites?: string[]; // Tableau de spécialités
  mention?: string; 
  note?: string; 
  identifiantCertification?: string;
  lienDiplome?: string; // Lien vers le PDF du diplôme
}

export interface TimelineItem {
  id: number;
  type: "education" | "experience";
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
  video?: string; // Chemin vers la vidéo (optionnel) - se lance au survol
  repoLink?: string;
  liveLink?: string; // Lien vers une démo en ligne
  demoVideo?: string; // Chemin vers la vidéo de démonstration (optionnel) - s'ouvre dans un modal
  downloadLink?: string; // Lien vers un fichier ZIP à télécharger (optionnel)
  featured?: boolean;
  linkedProjectId?: number; // ID du projet lié (pour afficher un badge "Duo")
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools";
  level: number; // 1-5
}

export interface Hobby {
  id: number;
  title: string;
  description: string;
  image: string; // Chemin vers l'image dans /public/images/hobbies/
  icon?: string; // Nom de l'icône Lucide (optionnel)
}

export interface EvenementSection {
  title: string; // Sous-titre de la section
  content: string; // Contenu de la section
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
  image: string; // Image principale
  video?: string; // Vidéo au survol (optionnel)
  photos?: string[]; // Tableau de photos pour diaporama (optionnel, alternative à video)
  linkedinLink?: string; // Lien vers le post LinkedIn (déprécié, utiliser linkedinPosts)
  linkedinPosts?: LinkedInPost[]; // Liste de posts LinkedIn avec titres
  videos?: VideoOption[]; // Liste de vidéos avec titres
  githubLink?: string; // Lien GitHub (optionnel)
  demoLink?: string; // Lien vers la démo (optionnel)
  downloadLink?: string; // Lien vers PDF/ZIP (optionnel)
  zipLink?: string; // Lien vers le ZIP (optionnel)
  posterLink?: string; // Lien vers le poster PNG (optionnel)
  badge?: string; // Badge à afficher (ex: "2ème - Coup de coeur du jury")
  sections?: EvenementSection[]; // Sections structurées avec sous-titres (optionnel)
}

// ============================================
// MOCK DATA - Diplômes
// ============================================

export const diplomesData: Diplome[] = [
  {
    id: 1,
    titre: "Baccalauréat Général",
    etablissement: "Lycée Désiré Nisard",
    annee: "2021",
    description: "Baccalauréat général avec spécialités Mathématiques, Physique/chimie et Sciences de l'ingénieur.",
    specialites: ["Mathématiques", "Physique/Chimie", "Sciences de l'Ingénieur","Mathématiques expertes", "Mandarin"],
    mention: "Mention Bien",
    note: "15.5/20",
    // Pas d'identifiant ni de lien pour le bac
  },
  {
    id: 2,
    titre: "MOOC Gestion de Projet - Spécialisation OAW",
    etablissement: "MOOC Gestion de Projet",
    annee: "Novembre 2023",
    description: "Outils et applications web pour la gestion de projet. Certification en ligne validant les compétences en gestion de projet avec outils numériques.",
    specialites: ["Outils Web", "Gestion de Projet", "OAW"],
    note: "Obtenu",
    identifiantCertification: "2639b99f16724b8c94fa82972b22b3bc",
    lienDiplome: "https://moocgdp.gestiondeprojet.pm/certificates/2639b99f16724b8c94fa82972b22b3bc" // À remplacer
  },
  {
    id: 3,
    titre: "MOOC Gestion de Projet Agile avec Scrum",
    etablissement: "MOOC Gestion de Projet",
    annee: "Novembre 2023",
    description: "Spécialisation en gestion de projet agile avec la méthodologie Scrum. Maîtrise des méthodes agiles pour la gestion de projets informatiques.",
    specialites: ["Gestion de Projet", "Méthodes Agiles", "Scrum"],
    note: "Obtenu",
    identifiantCertification: "35c0c27df9b04bb3a6cf24adbaabcd4d",
    lienDiplome: "https://moocgdp.gestiondeprojet.pm/certificates/35c0c27df9b04bb3a6cf24adbaabc4d4" // À remplacer
  },
  {
    id: 4,
    titre: "Certificat Voltaire",
    etablissement: "ESEO Dijon",
    annee: "02/05/2024",
    description: "Certification en orthographe et expression. Niveau Orthographe Professionnelle - Aptitudes pour rédiger des textes élaborés.",
    specialites: ["Orthographe Professionnelle", "Expression"],
    note: "600/1000",
    identifiantCertification: "P6WCVG7",
    lienDiplome: "https://mon.certificat-voltaire.fr/verification-certificat?code=P6WCVG7"
  },
  
  {
    id: 5,
    titre: "TOEIC® Listening and Reading",
    etablissement: "ESEO Dijon",
    annee: "11/06/2025",
    description: "Test d'anglais professionnel. Score de 825/990 correspondant au niveau B2+.",
    specialites: ["Listening", "Reading", "Business English"],
    note: "825/990",
    identifiantCertification: "5508079682",
    lienDiplome: "https://www.etsglobal.org/fr/en/digital-score-report/60EAA7ACDDEA657A58F94091FC73D5B373315F8675C559E683F78BBCE4A9A844YzdBZmdKNXJ1NHRkb25Oc0FZbjE5YnJsMHlWUE1tVDZ1bnhldkUzbVRGMWh4R1ZI"
  }
];

// ============================================
// MOCK DATA - Timeline (Education & Experience)
// ============================================

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "Collège",
    institution: "Collège Fontaines-les-ducs",
    date: "2014 - 2018",
    description: "Formation générale. Développement d'un intérêt pour les mathématiques appliquées.",
    location: "Châtillon sur Seine, France",
    tags: ["Base", "Anglais", "Allemand", "Mathématiques", "Physiques"]
  },
  {
    id: 2,
    type: "education",
    title: "Lycée - Bac Général",
    institution: "Lycée Désiré Nisard",
    date: "2018 - 2021",
    description: "Spécialité Mathématiques, Physique/Chimie et Sciences de l'Ingénieur. Options Mathématiques expertes et Mandarin.",
    location: "Châtillon sur Seine, France",
    tags: ["Mathématiques", "Physiques", "Mandarin", "Anglais", "Allemand"]
  },
  {
    id: 3,
    type: "education",
    title: "Classes Préparatoires Intégrées",
    institution: "École Supérieure d'Électronique de l'Ouest (ESEO)",
    date: "2021 - 2023 (2 ans)",
    description: "Formation intensive en mathématiques, électronique, développement et management de projet. Acquisition de compétences techniques et managériales solides.",
    location: "Dijon, France",
    tags: ["Mathématiques", "Physiques", "Sciences de l'Ingénieur", "Gestion de Projet", "Mandarin", "Anglais"]
  },
  {
    id: 4,
    type: "education",
    title: "Classes Préparatoires (Fin)",
    institution: "Universidad Europea del Atlántico",
    date: "2023 (5 mois)",
    description: "Fin du parcours de classe préparatoire avec un stage à l'étranger. Immersion internationale et approfondissement des compétences techniques.",
    location: "Santander, Espagne",
    tags: ["Électronique Analogique", "Électronique Numérique", "Base de Données", "Anglais", "Espagnol"]
  },
  {
    id: 5,
    type: "education",
    title: "École d'Ingénieur",
    institution: "École Supérieure d'Électronique de l'Ouest (ESEO)",
    date: "2023 - 2026",
    description: "Formation d'ingénieur avec réalisation de projets en informatique et électronique. Option Smart City en dernière année. Création de jeux vidéo (Unity), développement de sites web et conception de systèmes d'information.",
    location: "Dijon, France",
    tags: ["Chefferie de Projet", "Domotique", "BIM", "BOS", "Hyperviseur", "SIG", "Optimisation de Flux"]
  },
  {
    id: 6,
    type: "experience",
    title: "Stage Technique - Technicien Assurance Qualité Produit et Process",
    institution: "Schneider Electric – Service Qualité",
    date: "2024 (5 mois)",
    description: "Digitalisation des contrôles qualité, déploiement de Quasar (logiciel de contrôle qualité) et développement de macros VBA pour étude et résolution d'une task force.",
    location: "Dijon, France",
    tags: ["Task Force", "Excel", "VBA", "Digitalisation", "Conduite du Changement"]
  },
  {
    id: 7,
    type: "experience",
    title: "Contrat de Professionnalisation - Alternant Ingénieur Chefferie de Projet",
    institution: "APRR – Service Méthodes, Maintenance et Projets (SMMP)",
    date: "2025 - 2026 (1 an)",
    description: "Conversion de fichiers Excel en base de données Dataverse, automatisation et création d'un outil d'aide à la décision via Power Apps à partir d'un Proof of Concept. Déploiement vers site pilote.",
    location: "Dijon, France",
    tags: ["Power Apps", "Dataverse", "Formule FX", "HTML", "Développement","Gestion de projet", "Management Transverse","Conduite du changement"]
  }
];

// ============================================
// MOCK DATA - Projects
// ============================================

export const projectsData: Project[] = [
  {
    id: 1,
    title: "BOS - Building Operating System",
    video: "/videos/Video_BOS.mp4", // Video preview dans le projet
    description: "Tableau de bord intelligent pour la gestion technique de bâtiment. Visualisation graphique des consommations (eau, électricité), températures et occupation. Chatbot IA (Gemini) intégré pour analyser les données en temps réel. Upload et nettoyage automatique de fichiers CSV.",
    tech: ["React", "TypeScript", "Vite", ".NET Core", "C#", "Recharts", "Gemini API"],
    image: "/images/Project/Image_Projet_BOS.png",
    repoLink: "https://github.com/Natemps21/Site-web---Building-Operating-System-B.O.S.-",
    demoVideo: "/videos/Video_BOS.mp4", // Video en entièreté dans le modal
    featured: true
  }, 
  {
    id: 2,
    title: "Computer Vision",
    video: "/videos/Video_ComputerVision.mp4",
    description: "Ce projet modélise des trajectoires balistiques 2D à l'aide d'OpenCV, en appliquant calibration et homographie pour assurer la précision des mesures physiques. Il intègre un filtre de Kalman permettant de prédire fiablement la position future des balles, y compris lors de leur passage dans une zone non visible.",
    tech: ["OpenCV", "Python", "Kalman", "Balistique","Projet en duo"],
    image: "/images/Project/Image_ComputerVision.png",
    repoLink: "https://github.com/Natemps21/Projet-groupe-Computer-Vision", 
    downloadLink: "/downloads/Rapport_et_Diaporama_Projet_Computer_Vision.zip", 
    featured: true
  },
  {
    id: 3,
    title: "CinéVerdict - BigData",
    video: "/videos/Video_Cineverdict_pres.mp4", // Video preview dans le projet
    description: "Inspiré de Letterboxd, ce projet Big Data exploite une architecture MongoDB et Flask pour analyser et visualiser de vastes données cinématographiques. Malgré des défis de performance identifiés, l'application respecte les meilleurs standards web et valide la maîtrise complète de la chaîne de traitement, de l'ingestion JSON à la restitution utilisateur.",
    tech: ["Flask", "Python", "MongoDB","HTML","CSS", "PyMongo","Responsive"],
    image: "/images/Project/Image_Cineverdict.png",
    repoLink: "https://github.com/Natemps21/Cineverdict---BigData",
    downloadLink: "/downloads/Diaporama_BigData.pdf", 
    demoVideo: "/videos/Video_Cineverdict.mp4",
    featured: false
  },
  {
    id: 4,
    title: "Arm'ESEO - Bras Robotisé 3 Axes",
    video: "/videos/Video_ArmESEO.mp4",
    description: "Réalisé par P-E. Martin-Grandvoinnet, N. Ramelet et H. Boloba , ce projet vise à concevoir un bras robotisé 3 axes capable de déplacer des objets. Piloté par une carte STM32 et programmé en C , le prototype allie une structure imprimée en 3D à une carte électronique conçue sous Altium.",
    tech: ["C", "Arduino", "Hardware", "Software", "Altium","Gestion de projet"],
    image: "/images/Project/Image_ArmESEO.png",
    repoLink: "https://github.com/Natemps21/Arm-ESEO---Bras-robotis-3-axes",
    downloadLink: "/downloads/Rapport_et_Diaporama_ArmESEO.zip", 
    demoVideo: "/videos/Video_ArmESEO.mp4", 
    linkedProjectId: 5
  },
  {
    id: 5,
    title: "Arm'ESEO - PCB",
    video: "/videos/Video_PCB.mp4",
    description: "Conception d'une carte électronique (PCB) sous Altium Designer. Cette carte électronique pilote le robot. Elle intègre une STM32 Bluepill , trois drivers A4988 pour les moteurs et un régulateur TPS54302  (12V vers 5V). Le routage double face inclut des plans de masse pour la stabilité.",
    tech: ["Altium Designer", "STM32", "PCB Design", "Electronics", "Hardware", "Embedded Systems"],
    image: "/images/Project/Image_PCB.png", 
    repoLink: "https://github.com/Natemps21/Arm-ESEO---Bras-robotis-3-axes",
    downloadLink: "/downloads/Rapport_et_Diaporama_ArmESEO.zip", 
    linkedProjectId: 4
  },
  {
    id: 6,
    title: "Club cinéma Application web",
    description: "Application web pour le club cinéma de l'ESEO Cin'ESEO. Il permet de gérer les votes des étudiants pour les films à projeter, les sorties ciné et les actualités cinématographiques.",
    tech: ["Modèle C4", "Azure devops", "MongoDB", "React","Vite","API", "C#", "Architecture N-Tier","CSS"],
    image: "/images/Project/Image_CinESEO.png",
    repoLink: "https://github.com/Natemps21/Appli-web---Gestion-Cin-ESEO",
    downloadLink: "/downloads/Diaporama_CinEseo.pdf",
    featured: false
  },
  {
    id: 7,
    title: "Simulation incendie - Unity",
    video: "/videos/Video_simulation_Unity.mp4",
    description: "Simulation d'incendie à l'interieur d'une école en suivant la théorie des agents. Nombre d'étudiant, de serre-file et de leader variables. Interface utilisateur pour lancer et paramétrer la simulation.",
    tech: ["Unity", "C#", "Excel", "Asset store", "UI","UX","théorie des agents"],
    image: "/images/Project/Image_TheorieAgent.png",
    repoLink: "https://github.com/Natemps21/Simulation-Incendie---theorie-des-agents",
    downloadLink: "/downloads/Rapport_Evacuation_incendie.pdf",
    demoVideo: "/videos/Video_simulation_Unity.mp4",
    featured: false
  },
  {
    id: 8,
    title: "ESEO/ESTP en réalité augmentée",
    video: "/videos/Video_Demo_RARV.mp4",
    description:
      "Application APK pour téléphone portable en réalité augmentée réalisé avec Unity et Blender. Elle permet de visualiser le bâtiment de l'ESEO/ESTP en réalité augmentée. Placement des étages, rotation/pivotement, zoom, etc.",
    tech: ["Unity#", "C#", "Blender", "RA", "UI/UX"],
    image: "/images/Project/Image_RARV.png",
    downloadLink: "/downloads/Guide_User_et_Technique_RA.zip", 
    repoLink: "https://github.com/Natemps21/RARV_Batiment_En_Realit-_Augment-",
    demoVideo: "/videos/Video_RARV.mp4" ,
    featured: false
  },
  {
    id: 9,
    title: "Portfolio",
    description:
      "Portfolio personnel conçu avec Next.js et TypeScript : scène 3D interactive (Three.js / React Three Fiber), navigation satellite et interface futuriste type glassmorphism. Projet dockerisé, pipeline GitHub Actions (lint, build) et mise en production sur Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js","Vercel"],
    image: "/images/Project/Image_Portfolio.png",
    repoLink: "https://github.com/Natemps21/Portfolio_Nathan_Ramelet",
    featured: false
  }
];

// ============================================
// MOCK DATA - Skills
// ============================================

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 5 },
  { name: "Next.js", category: "frontend", level: 5 },
  { name: "TypeScript", category: "frontend", level: 4 },
  { name: "Vue.js", category: "frontend", level: 3 },
  { name: "Tailwind CSS", category: "frontend", level: 5 },
  { name: "Three.js", category: "frontend", level: 4 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 5 },
  { name: "Express", category: "backend", level: 4 },
  { name: "PostgreSQL", category: "backend", level: 4 },
  { name: "MongoDB", category: "backend", level: 4 },
  { name: "Prisma", category: "backend", level: 4 },
  { name: "GraphQL", category: "backend", level: 3 },
  
  // DevOps
  { name: "Docker", category: "devops", level: 4 },
  { name: "Kubernetes", category: "devops", level: 3 },
  { name: "GitHub Actions", category: "devops", level: 4 },
  { name: "AWS", category: "devops", level: 3 },
  
  // Tools
  { name: "Git", category: "tools", level: 5 },
  { name: "VS Code", category: "tools", level: 5 },
  { name: "Figma", category: "tools", level: 3 },
  { name: "Postman", category: "tools", level: 4 },
];

// ============================================
// MOCK DATA - Loisirs
// ============================================

export const hobbiesData: Hobby[] = [
  {
    id: 1,
    title: "Jeux vidéos",
    description: "Passionné de jeux vidéos, j'aime partager mes expériences de jeux avec mes amis et découvrir de nouveaux jeux.",
    image: "/images/hobbies/Image_Jeux_Vidéo.jpg"
  },
  {
    id: 2,
    title: "Musculation",
    description: "Pratique régulère de la musculation en salle de sport pour maintenir un équilibre de vie ainsi qu'acroître ma discipline.",
    image: "/images/hobbies/Image_Musculation.jpg"
  },
  {
    id: 3,
    title: "Street workout",
    description: "Pratique régulère de street workout/calisthenie, apprentissage de nouvelles figures et défis pour m'améliorer.",
    image: "/images/hobbies/Image_StreetWorkout.jpg"
  },
  {
    id: 4,
    title: "Cinéma",
    description: "Culture du cinéma. J'aime découvrir de nouveaux films et partager mes avis avec mes amis. Responsable communication du club de cinéma de l'ESEO.",
    image: "/images/hobbies/Image_Cinéma.jpg"
  },
  {
    id: 5,
    title: "Intelligence artificielle",
    description: "Passionné par l'intelligence artificielle, j'aime découvrir de nouvelles technologies et m'informer sur les dernières avancées. Création de site web sur mon temps libre.",
    image: "/images/hobbies/Image_IA.jpg"
  },
  {
    id: 6,
    title: "Voyages",
    description: "Amateur de voyages, j'aime découvrir de nouvelles cultures et paysages à travers mes voyages. Apprendre de nouvelles langues est un de mes objectifs.",
    image: "/images/hobbies/Image_Voyage.jpg"
  }
];

// ============================================
// MOCK DATA - Événements
// ============================================

export const evenementsData: Evenement[] = [
  {
    id: 1,
    title: "Hack2Horizon - Ville verte 4.0",
    description: "Hackathon de 48h organisé dans le cadre du projet H2020 RESPONSE porté par Dijon Métropole. Développement d'un prototype en réalité virtuelle pour la requalification urbaine de la rue Auguste Comte.",
    date: "nov 2025",
    location: "Dijon",
    image: "/images/events/hack2horizon.jpg",
    photos: [
      "/images/Project/Hackathon/Image_1_H.jpg",
      "/images/Project/Hackathon/Image_2_H.jpg",
      "/images/Project/Hackathon/Image_3_H.png",
      "/images/Project/Hackathon/Image_4_H.png",
      "/images/Project/Hackathon/Image_5_H.png",
      "/images/Project/Hackathon/Image_7_H.png",
      "/images/Project/Hackathon/Image_8_H.png",
    ],
    zipLink: "/downloads/Rapport_et_Diaporama_Hack2Horizon.zip",
    downloadLink: "/downloads/Rapport_Hack2Horizon.pdf",
    badge: "2ème - Coup de coeur du jury",
    videos: [
      { title: "Comparaison Maps(Cesium)/3D(Unity)", url: "videos/Hackathon/Video_Pres_Hackathon.mp4" },
      { title: "Démo avec brouillard", url: "videos/Hackathon/Video_Fog_Hackathon.mp4" }    
    ],
    linkedinPosts: [
      { title: "Post Nathan Ramelet", url: "https://www.linkedin.com/posts/nathan-ramelet-49579b2a0_vincifacilities-hack2horizon-hackathon-activity-7402011360642973696-czdA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi7OfEB7iIYbNflb1S7n6svSWiAAkbOTfg" },
      { title: "Post ESEO", url: "https://www.linkedin.com/posts/eseo_retour-sur-le-festival-de-la-transition-activity-7397306503646580757-ktXO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi7OfEB7iIYbNflb1S7n6svSWiAAkbOTfg" }
    ],
    sections: [
      {
        title: "Contexte",
        content: "Hackathon organisé par Vinci Facilities sur le thème 'Ville verte 4.0 : de l'idée à la réalité virtuelle'. Problématique : les projets d'aménagement urbain sont souvent présentés via des supports statiques (diapositives, schémas 2D) qui limitent la capacité à immerger et convaincre un auditoire."
      },
      {
        title: "Mission",
        content: "Concevoir un projet de réaménagement pour la rue Auguste Comte à Dijon et développer un prototype en réalité virtuelle (VR) pour en faire la démonstration, prouvant ainsi la supériorité de cet outil pour la visualisation de projets urbains."
      },
      {
        title: "Solution Technique",
        content: "Équipe pluridisciplinaire : 4 étudiants ESTP (analyse urbaine, gestion de projet, conception) et 2 étudiants ESEO (modélisation 3D, développement VR). Méthodologie agile avec travail en parallèle. Développement d'un environnement VR interactif permettant de comparer l'état actuel et le projet proposé."
      },
      {
        title: "Résultats",
        content: "Prototype fonctionnel en réalité virtuelle démontrant la valeur ajoutée de l'immersion 3D. Outil d'aide à la décision permettant de ressentir les volumes, apprécier les ambiances créées par la végétalisation, et valider l'ergonomie des aménagements. Comparaison immédiate entre l'état actuel et le projet proposé."
      }
    ]
  },
  {
    id: 2,
    title: "Projet de synthèse - Cartographie des Températures",
    description: "Développement d'une solution innovante pour Dijon Métropole visant à anticiper les canicules et identifier les îlots de chaleur urbains.",
    date: "juin 2024",
    location: "Dijon Métropole",
    image: "/images/events/dijon-metropole.jpg",
    photos: [
      "/images/Project/Projet_Synthese/Image_1.png",
      "/images/Project/Projet_Synthese/Image_2.png",
      "/images/Project/Projet_Synthese/Image_3.png",
      "/images/Project/Projet_Synthese/Image_4.png",
      "/images/Project/Projet_Synthese/Image_5.png",
      "/images/Project/Projet_Synthese/Image_6.png",
      "/images/Project/Projet_Synthese/Image_7.png",
      "/images/Project/Projet_Synthese/Image_8.png",
      "/images/Project/Projet_Synthese/Image_9.png",
      "/images/Project/Projet_Synthese/Image_10.png"
    ],
    linkedinLink: "https://www.linkedin.com/posts/maria-alice-bertolim_f%C3%A9licitations-%C3%A0-nos-%C3%A9tudiants-de-eseo-dijon-activity-7337132531193962496-SmD0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi7OfEB7iIYbNflb1S7n6svSWiAAkbOTfg",
    downloadLink: "/downloads/Diaporama_ProjetSynthese.pdf",
    posterLink: "/images/Project/Image_Poster_Projet_Synthese.png",
    sections: [
      {
        title: "Solution Technique",
        content: "Architecture web avec backend C# .NET, base de données SQL et API structurée. Exploitation des données de 80 capteurs (réseau MUSTARD) répartis dans la ville de Dijon."
      },
      {
        title: "Fonctionnalités",
        content: "Cartographie interactive en temps réel, timelapse des températures et gestion complète des données (import/édition)."
      },
      {
        title: "Innovation IA",
        content: "Développement d'un modèle d'intelligence artificielle (LSTM) pour prédire la température capteur par capteur. Croisement des données locales avec les prévisions de Météo France pour une précision optimale."
      },
      {
        title: "Présentation",
        content: "Présentation du projet devant un jury composé de professeurs et représentants de Dijon Métropole en amphithéâtre."
      }
    ]
  }
];

// ============================================
// CONTACT INFO
// ============================================

export const contactInfo = {
  email: "nathan.ramelet21@gmail.com",
  location: "Dijon - France",
  socials: {
    github: "https://github.com/Natemps21",
    linkedin: "https://www.linkedin.com/in/nathan-ramelet-49579b2a0/",
  }
};

