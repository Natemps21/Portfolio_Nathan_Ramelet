import type { Diplome, TimelineItem, Project, Skill, Hobby, Evenement, ContactInfo } from './types';

// TODO: à affiner — English draft content. Edit freely to match your voice.

// ============================================
// MOCK DATA - Diplomas
// ============================================

export const diplomesData: Diplome[] = [
  {
    id: 1,
    titre: "General Baccalaureate",
    etablissement: "Lycée Désiré Nisard",
    annee: "2021",
    description: "General baccalaureate with majors in Mathematics, Physics/Chemistry and Engineering Sciences.",
    specialites: ["Mathematics", "Physics/Chemistry", "Engineering Sciences", "Advanced Mathematics", "Mandarin"],
    mention: "Honors — Good",
    note: "15.5/20",
  },
  {
    id: 2,
    titre: "Project Management MOOC — OAW Specialization",
    etablissement: "MOOC Gestion de Projet",
    annee: "November 2023",
    description: "Web tools and applications for project management. Online certification validating project management skills with digital tools.",
    specialites: ["Web Tools", "Project Management", "OAW"],
    note: "Obtained",
    identifiantCertification: "2639b99f16724b8c94fa82972b22b3bc",
    lienDiplome: "https://moocgdp.gestiondeprojet.pm/certificates/2639b99f16724b8c94fa82972b22b3bc"
  },
  {
    id: 3,
    titre: "Agile Project Management MOOC with Scrum",
    etablissement: "MOOC Gestion de Projet",
    annee: "November 2023",
    description: "Specialization in agile project management using the Scrum methodology. Mastery of agile methods for IT project management.",
    specialites: ["Project Management", "Agile Methods", "Scrum"],
    note: "Obtained",
    identifiantCertification: "35c0c27df9b04bb3a6cf24adbaabcd4d",
    lienDiplome: "https://moocgdp.gestiondeprojet.pm/certificates/35c0c27df9b04bb3a6cf24adbaabc4d4"
  },
  {
    id: 4,
    titre: "Voltaire Certificate",
    etablissement: "ESEO Dijon",
    annee: "02/05/2024",
    description: "Certification in spelling and written expression. Professional Spelling level — ability to write elaborate texts.",
    specialites: ["Professional Spelling", "Written Expression"],
    note: "600/1000",
    identifiantCertification: "P6WCVG7",
    lienDiplome: "https://mon.certificat-voltaire.fr/verification-certificat?code=P6WCVG7"
  },
  {
    id: 5,
    titre: "TOEIC® Listening and Reading",
    etablissement: "ESEO Dijon",
    annee: "11/06/2025",
    description: "Professional English test. Score of 825/990, equivalent to B2+ level.",
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
    title: "Middle School",
    institution: "Collège Fontaines-les-ducs",
    date: "2014 - 2018",
    description: "General education. Developed an interest in applied mathematics.",
    location: "Châtillon sur Seine, France",
    tags: ["Foundations", "English", "German", "Mathematics", "Physics"]
  },
  {
    id: 2,
    type: "education",
    title: "High School — General Baccalaureate",
    institution: "Lycée Désiré Nisard",
    date: "2018 - 2021",
    description: "Majors in Mathematics, Physics/Chemistry and Engineering Sciences. Advanced Mathematics and Mandarin electives.",
    location: "Châtillon sur Seine, France",
    tags: ["Mathematics", "Physics", "Mandarin", "English", "German"]
  },
  {
    id: 3,
    type: "education",
    title: "Integrated Preparatory Classes",
    institution: "École Supérieure d'Électronique de l'Ouest (ESEO)",
    date: "2021 - 2023 (2 years)",
    description: "Intensive training in mathematics, electronics, software development and project management. Built strong technical and managerial skills.",
    location: "Dijon, France",
    tags: ["Mathematics", "Physics", "Engineering Sciences", "Project Management", "Mandarin", "English"]
  },
  {
    id: 4,
    type: "education",
    title: "Preparatory Classes (Final Term)",
    institution: "Universidad Europea del Atlántico",
    date: "2023 (5 months)",
    description: "Final year of preparatory classes with an internship abroad. International immersion and deeper technical skills.",
    location: "Santander, Spain",
    tags: ["Analog Electronics", "Digital Electronics", "Databases", "English", "Spanish"]
  },
  {
    id: 5,
    type: "education",
    title: "Engineering School",
    institution: "École Supérieure d'Électronique de l'Ouest (ESEO)",
    date: "2023 - 2026",
    description: "Engineering degree with projects in IT and electronics. Smart City track in final year. Video game development (Unity), web development and information system design.",
    location: "Dijon, France",
    tags: ["Project Management", "Home Automation", "BIM", "BOS", "Supervisor", "GIS", "Flow Optimization"]
  },
  {
    id: 6,
    type: "experience",
    title: "Technical Internship — Product & Process Quality Assurance Technician",
    institution: "Schneider Electric — Quality Department",
    date: "2024 (5 months)",
    description: "Digitization of quality controls, deployment of Quasar (quality control software) and development of VBA macros for a task force study and resolution.",
    location: "Dijon, France",
    tags: ["Task Force", "Excel", "VBA", "Digitization", "Change Management"]
  },
  {
    id: 7,
    type: "experience",
    title: "Professional Contract — Project Management Engineering Apprentice",
    institution: "APRR — Methods, Maintenance and Projects Department (SMMP)",
    date: "2025 - 2026 (1 year)",
    description: "Conversion of Excel files to Dataverse databases, automation and creation of a decision-support tool via Power Apps from a Proof of Concept. Deployment to a pilot site.",
    location: "Dijon, France",
    tags: ["Power Apps", "Dataverse", "FX Formula", "HTML", "Development", "Project Management", "Cross-functional Management", "Change Management"]
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
    description: "Smart dashboard for building technical management. Graphical visualization of consumption (water, electricity), temperatures and occupancy. Integrated AI chatbot (Gemini) to analyze data in real time. Automatic CSV file upload and cleaning.",
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
    description: "This project models 2D ballistic trajectories using OpenCV, applying calibration and homography to ensure accurate physical measurements. It integrates a Kalman filter to reliably predict the future position of balls, including when they pass through a non-visible zone.",
    tech: ["OpenCV", "Python", "Kalman", "Ballistics", "Duo project"],
    image: "/images/Project/Image_ComputerVision.png",
    repoLink: "https://github.com/Natemps21/Projet-groupe-Computer-Vision", 
    downloadLink: "/downloads/Rapport_et_Diaporama_Projet_Computer_Vision.zip", 
    featured: true
  },
  {
    id: 3,
    title: "CinéVerdict - BigData",
    video: "/videos/Video_Cineverdict_pres.mp4", // Video preview dans le projet
    description: "Inspired by Letterboxd, this Big Data project uses a MongoDB and Flask architecture to analyze and visualize large-scale film data. Despite identified performance challenges, the application meets web best practices and validates end-to-end mastery from JSON ingestion to user display.",
    tech: ["Flask", "Python", "MongoDB","HTML","CSS", "PyMongo","Responsive"],
    image: "/images/Project/Image_Cineverdict.png",
    repoLink: "https://github.com/Natemps21/Cineverdict---BigData",
    downloadLink: "/downloads/Diaporama_BigData.pdf", 
    demoVideo: "/videos/Video_Cineverdict.mp4",
    featured: false
  },
  {
    id: 4,
    title: "Arm'ESEO - 3-Axis Robotic Arm",
    video: "/videos/Video_ArmESEO.mp4",
    description: "Built by P-E. Martin-Grandvoinnet, N. Ramelet and H. Boloba, this project aims to design a 3-axis robotic arm capable of moving objects. Driven by an STM32 board and programmed in C, the prototype combines a 3D-printed structure with a PCB designed in Altium.",
    tech: ["C", "Arduino", "Hardware", "Software", "Altium", "Project Management"],
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
    description: "Design of a printed circuit board (PCB) in Altium Designer. This board drives the robot. It integrates an STM32 Bluepill, three A4988 motor drivers and a TPS54302 regulator (12V to 5V). Double-sided routing includes ground planes for stability.",
    tech: ["Altium Designer", "STM32", "PCB Design", "Electronics", "Hardware", "Embedded Systems"],
    image: "/images/Project/Image_PCB.png", 
    repoLink: "https://github.com/Natemps21/Arm-ESEO---Bras-robotis-3-axes",
    downloadLink: "/downloads/Rapport_et_Diaporama_ArmESEO.zip", 
    linkedProjectId: 4
  },
  {
    id: 6,
    title: "Cin'ESEO Film Club Web App",
    description: "Web application for the ESEO Cin'ESEO film club. Manages student voting for films to screen, cinema outings and film news.",
    tech: ["C4 Model", "Azure DevOps", "MongoDB", "React", "Vite", "API", "C#", "N-Tier Architecture", "CSS"],
    image: "/images/Project/Image_CinESEO.png",
    repoLink: "https://github.com/Natemps21/Appli-web---Gestion-Cin-ESEO",
    downloadLink: "/downloads/Diaporama_CinEseo.pdf",
    featured: false
  },
  {
    id: 7,
    title: "Fire Evacuation Simulation — Unity",
    video: "/videos/Video_simulation_Unity.mp4",
    description: "Fire evacuation simulation inside a school using agent-based theory. Variable number of students, fire wardens and leaders. User interface to launch and configure the simulation.",
    tech: ["Unity", "C#", "Excel", "Asset Store", "UI", "UX", "Agent-based theory"],
    image: "/images/Project/Image_TheorieAgent.png",
    repoLink: "https://github.com/Natemps21/Simulation-Incendie---theorie-des-agents",
    downloadLink: "/downloads/Rapport_Evacuation_incendie.pdf",
    demoVideo: "/videos/Video_simulation_Unity.mp4",
    featured: false
  },
  {
    id: 8,
    title: "ESEO/ESTP in Augmented Reality",
    video: "/videos/Video_Demo_RARV.mp4",
    description:
      "Mobile APK application in augmented reality built with Unity and Blender. Visualizes the ESEO/ESTP building in AR. Floor placement, rotation/pivot, zoom, etc.",
    tech: ["Unity", "C#", "Blender", "AR", "UI/UX"],
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
      "Personal portfolio built with Next.js and TypeScript: interactive 3D scene (Three.js / React Three Fiber), satellite navigation and glassmorphism UI. Dockerized project, GitHub Actions pipeline (lint, build) and production deployment on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js","Vercel"],
    image: "/images/Project/Image_Portfolio.png",
    repoLink: "https://github.com/Natemps21/Portfolio_Nathan_Ramelet",
    featured: false
  },
  {
    id: 10,
    title: "Freelance - La Grande Vesvre",
    description:
      "Showcase website with booking module for guest rooms in Gigny (Yonne). Built with Next.js and TypeScript, with Sanity (CMS) for autonomous content management by the client. Booking notifications and confirmations via Resend.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Sanity", "Vercel"],
    image: "/images/Project/Image_LaGrandeVesvre.png",
    liveLink: "https://lagrandevesvre.com/",
    featured: false
  },
  {
    id: 11,
    title: "Calli'Suivie Website",
    description:
      "IN PROGRESS: sports performance tracking website, primarily for calisthenics, with plans to expand to weight training, running and hiking. Goal: record, quantify, analyze and track performance history. Planned features: AI training programs, calorie tracking, smart timer, smart rep/set counter and progress bars.",
    tech: [""],
    image: "",
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
    title: "Video Games",
    description: "Passionate about video games, I enjoy sharing gaming experiences with friends and discovering new titles.",
    image: "/images/hobbies/Image_Jeux_Vidéo.jpg"
  },
  {
    id: 2,
    title: "Weight Training",
    description: "Regular gym workouts to maintain life balance and strengthen discipline.",
    image: "/images/hobbies/Image_Musculation.jpg"
  },
  {
    id: 3,
    title: "Street Workout",
    description: "Regular street workout and calisthenics practice, learning new skills and challenges to keep improving.",
    image: "/images/hobbies/Image_StreetWorkout.jpg"
  },
  {
    id: 4,
    title: "Cinema",
    description: "Film enthusiast. I enjoy discovering new movies and sharing opinions with friends. Communications lead for the ESEO film club.",
    image: "/images/hobbies/Image_Cinéma.jpg"
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    description: "Passionate about AI, I like exploring new technologies and staying informed on the latest advances. I build websites in my spare time.",
    image: "/images/hobbies/Image_IA.jpg"
  },
  {
    id: 6,
    title: "Travel",
    description: "Travel enthusiast — I love discovering new cultures and landscapes. Learning new languages is one of my goals.",
    image: "/images/hobbies/Image_Voyage.jpg"
  }
];

// ============================================
// MOCK DATA - Événements
// ============================================

export const evenementsData: Evenement[] = [
  {
    id: 1,
    title: "Hack2Horizon - Green City 4.0",
    description: "48-hour hackathon as part of the H2020 RESPONSE project led by Dijon Métropole. Development of a virtual reality prototype for the urban redevelopment of Rue Auguste Comte.",
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
    badge: "2nd place — Jury's favorite",
    videos: [
      { title: "Maps (Cesium) / 3D (Unity) comparison", url: "videos/Hackathon/Video_Pres_Hackathon.mp4" },
      { title: "Demo with fog", url: "videos/Hackathon/Video_Fog_Hackathon.mp4" }    
    ],
    linkedinPosts: [
      { title: "Post Nathan Ramelet", url: "https://www.linkedin.com/posts/nathan-ramelet-49579b2a0_vincifacilities-hack2horizon-hackathon-activity-7402011360642973696-czdA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi7OfEB7iIYbNflb1S7n6svSWiAAkbOTfg" },
      { title: "Post ESEO", url: "https://www.linkedin.com/posts/eseo_retour-sur-le-festival-de-la-transition-activity-7397306503646580757-ktXO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEi7OfEB7iIYbNflb1S7n6svSWiAAkbOTfg" }
    ],
    sections: [
      {
        title: "Context",
        content: "Hackathon organized by Vinci Facilities on the theme 'Green City 4.0: from idea to virtual reality'. Challenge: urban planning projects are often presented through static media (slides, 2D diagrams) that limit the ability to immerse and convince an audience."
      },
      {
        title: "Mission",
        content: "Design a redevelopment project for Rue Auguste Comte in Dijon and develop a virtual reality (VR) prototype to demonstrate it, proving the superiority of this tool for visualizing urban projects."
      },
      {
        title: "Technical Solution",
        content: "Multidisciplinary team: 4 ESTP students (urban analysis, project management, design) and 2 ESEO students (3D modeling, VR development). Agile methodology with parallel workstreams. Development of an interactive VR environment to compare the current state and the proposed project."
      },
      {
        title: "Results",
        content: "Functional VR prototype demonstrating the added value of 3D immersion. Decision-support tool to experience volumes, appreciate atmospheres created by greening, and validate layout ergonomics. Immediate comparison between current state and proposed project."
      }
    ]
  },
  {
    id: 2,
    title: "Capstone Project — Temperature Mapping",
    description: "Development of an innovative solution for Dijon Métropole to anticipate heatwaves and identify urban heat islands.",
    date: "June 2024",
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
        title: "Technical Solution",
        content: "Web architecture with C# .NET backend, SQL database and structured API. Leverages data from 80 sensors (MUSTARD network) across the city of Dijon."
      },
      {
        title: "Features",
        content: "Real-time interactive mapping, temperature timelapse and full data management (import/edit)."
      },
      {
        title: "AI Innovation",
        content: "Development of an artificial intelligence model (LSTM) to predict temperature sensor by sensor. Cross-referencing local data with Météo France forecasts for optimal accuracy."
      },
      {
        title: "Presentation",
        content: "Project presentation before a jury of professors and Dijon Métropole representatives in the amphitheater."
      }
    ]
  }
];

// ============================================
// CONTACT INFO
// ============================================

export const contactInfo = {
  email: "nathan.ramelet21@gmail.com",
  phone: "",
  location: "Dijon - France",
  socials: {
    github: "https://github.com/Natemps21",
    linkedin: "https://www.linkedin.com/in/nathan-ramelet-49579b2a0/",
  }
};

