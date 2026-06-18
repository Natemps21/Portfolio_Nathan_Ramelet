export const ui = {
  fr: {
    lang: {
      toggleLabel: 'Changer la langue',
      fr: 'FR',
      en: 'EN',
    },
    nav: {
      home: 'Accueil',
      diplomes: 'Diplômes',
      journey: 'Parcours',
      projects: 'Projets',
      evenements: 'Événements',
      hobbies: 'Loisirs',
      cv: 'CV',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Ingénieur généraliste',
      quote: `Entre jeux vidéo, musculation et ingénierie, il y a finalement la même logique : progresser.
Passionné par les nouvelles technologies depuis longtemps, j'aime aborder chaque projet comme un nouveau défi : comprendre comment les choses fonctionnent, modéliser des solutions et chercher la meilleure façon de les mettre en œuvre.

Mais un projet ne se résume pas seulement à la technique. Il repose aussi sur l'organisation, la gestion des priorités et la collaboration. Travailler sur un projet, c'est autant structurer les idées que coordonner les efforts pour faire avancer l'ensemble.

Que ce soit dans le code, la conception ou la gestion d'un projet, la motivation reste la même : apprendre, s'améliorer et construire des solutions utiles.`,
      highlightWords: [
        'progresser',
        'logique',
        'nouvelles',
        'technologies',
        'comprendre',
        'modéliser',
        'solutions',
        'collaboration',
        'organisation',
        'apprendre',
        'construire',
      ],
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      scroll: 'Scroll',
    },
    sections: {
      diplomes: {
        title: 'Diplômes & Certifications',
        subtitle: 'Mon parcours académique et mes certifications professionnelles.',
        viewDiploma: 'Voir le diplôme',
      },
      journey: {
        title: 'Mon Parcours',
        subtitle: "De l'apprentissage à l'expertise : une constellation d'expériences qui façonnent mon voyage dans le monde l'ingénierie informatique/électronique.",
      },
      projects: {
        title: 'Projets',
        subtitle: 'Une sélection de projets qui démontrent mes compétences techniques et ma passion pour créer des solutions innovantes.',
        featured: 'Featured',
        projectLink: 'Project link',
        viewSite: 'Voir le site',
        code: 'Code',
        demo: 'Démo',
        demoModalPrefix: 'Démonstration',
      },
      evenements: {
        title: 'Événements',
        subtitle: "Retracez les événements auxquels j'ai participé et les expériences qui ont marqué mon parcours.",
        prev: 'Événement précédent',
        next: 'Événement suivant',
        goTo: (n: number) => `Aller à l'événement ${n}`,
        demoModalPrefix: 'Démonstration',
      },
      hobbies: {
        title: 'Mes Loisirs',
        subtitle: "En dehors du code, voici ce qui me passionne et m'inspire au quotidien.",
      },
      cv: {
        title: 'Curriculum Vitae',
        subtitle: 'Un aperçu complet de mes compétences techniques et de mon expérience professionnelle.',
        fullCv: 'CV Complet',
        downloadHint: 'Téléchargez mon CV au format PDF, disponible en français et en anglais.',
        downloadFr: 'Télécharger (FR)',
        downloadEn: 'Download (EN)',
        lastUpdate: 'PDF • Dernière mise à jour : Mai 2026',
        categories: [
          {
            id: 'human',
            title: 'Leadership et gestion de projet',
            skills: ['Gestion d\'équipe', 'Conduite du changement', 'Gestion du stress', 'Marketing & Communication', 'Club Ciné - Responsable Com'],
          },
          {
            id: 'engineering',
            title: 'Langages de programmation',
            skills: ['Python', 'C', 'C++', 'Java', 'C#'],
          },
          {
            id: 'web',
            title: 'Développement Web',
            skills: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', '.NET', 'Visual studio', 'VS Code', 'Cursor'],
          },
          {
            id: 'iot',
            title: 'Smart Building & IoT',
            skills: ['BOS', 'BIM', 'Domotique', 'Arduino', 'MQTT', 'HTTP', 'Node-RED'],
          },
          {
            id: 'data',
            title: "Data & Systèmes d'Information",
            skills: ["Système d'Information", 'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'PostGIS', 'QGIS'],
          },
          {
            id: '3d',
            title: 'Immersion & 3D',
            skills: ['Unity', 'C#', 'Réalité Augmentée', 'Réalité Virtuelle'],
          },
          {
            id: 'ai',
            title: 'Intelligence Artificielle',
            skills: ['Perplexity', 'GPT', 'Gemini', 'Claude', 'Cursor'],
          },
          {
            id: 'devops',
            title: 'DevOps & Pilotage',
            skills: ['Git', 'GitHub', 'Azure', 'Azure DevOps', 'Gestion de projet'],
          },
        ],
      },
    },
    footer: {
      bio: "Ingénieur généraliste ESEO en électronique/informatique passionné par les nouvelles technologies, l'IA et le développement web.",
      navigation: 'Navigation',
      contact: 'Contact',
      navLabels: {
        journey: 'Mon Parcours',
        diplomes: 'Diplômes & Certifications',
        projects: 'Projets',
        evenements: 'Événements',
        hobbies: 'Loisirs',
        cv: 'CV',
        contact: 'Contact',
      },
      engineered: 'Engineered with',
      engineeredStack: 'using Next.js & React Three Fiber.',
      rights: 'Tous droits réservés',
    },
  },
  en: {
    // TODO: à affiner — English draft UI strings
    lang: {
      toggleLabel: 'Switch language',
      fr: 'FR',
      en: 'EN',
    },
    nav: {
      home: 'Home',
      diplomes: 'Degrees',
      journey: 'Journey',
      projects: 'Projects',
      evenements: 'Events',
      hobbies: 'Hobbies',
      cv: 'Resume',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'General Engineer',
      quote: `Between video games, weight training and engineering, there is ultimately the same logic: progress.
Passionate about new technologies for a long time, I approach every project as a new challenge: understand how things work, model solutions and find the best way to implement them.

But a project is not only about technology. It also relies on organization, priority management and collaboration. Working on a project means structuring ideas as much as coordinating efforts to move everything forward.

Whether in code, design or project management, the motivation stays the same: learn, improve and build useful solutions.`,
      highlightWords: [
        'progress',
        'logic',
        'new',
        'technologies',
        'understand',
        'model',
        'solutions',
        'collaboration',
        'organization',
        'learn',
        'build',
      ],
      ctaProjects: 'View my projects',
      ctaContact: 'Contact me',
      scroll: 'Scroll',
    },
    sections: {
      diplomes: {
        title: 'Degrees & Certifications',
        subtitle: 'My academic background and professional certifications.',
        viewDiploma: 'View certificate',
      },
      journey: {
        title: 'My Journey',
        subtitle: 'From learning to expertise: a constellation of experiences shaping my path in software and electronics engineering.',
      },
      projects: {
        title: 'Projects',
        subtitle: 'A selection of projects showcasing my technical skills and passion for building innovative solutions.',
        featured: 'Featured',
        projectLink: 'Linked project',
        viewSite: 'View site',
        code: 'Code',
        demo: 'Demo',
        demoModalPrefix: 'Demo',
      },
      evenements: {
        title: 'Events',
        subtitle: 'Events I have taken part in and experiences that have shaped my journey.',
        prev: 'Previous event',
        next: 'Next event',
        goTo: (n: number) => `Go to event ${n}`,
        demoModalPrefix: 'Demo',
      },
      hobbies: {
        title: 'My Hobbies',
        subtitle: 'Outside of code, here is what inspires and motivates me every day.',
      },
      cv: {
        title: 'Curriculum Vitae',
        subtitle: 'A complete overview of my technical skills and professional experience.',
        fullCv: 'Full Resume',
        downloadHint: 'Download my resume as PDF, available in French and English.',
        downloadFr: 'Télécharger (FR)',
        downloadEn: 'Download (EN)',
        lastUpdate: 'PDF • Last updated: May 2026',
        categories: [
          {
            id: 'human',
            title: 'Leadership & Project Management',
            skills: ['Team Management', 'Change Management', 'Stress Management', 'Marketing & Communication', 'Cin\'ESEO Club — Comms Lead'],
          },
          {
            id: 'engineering',
            title: 'Programming Languages',
            skills: ['Python', 'C', 'C++', 'Java', 'C#'],
          },
          {
            id: 'web',
            title: 'Web Development',
            skills: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', '.NET', 'Visual Studio', 'VS Code', 'Cursor'],
          },
          {
            id: 'iot',
            title: 'Smart Building & IoT',
            skills: ['BOS', 'BIM', 'Home Automation', 'Arduino', 'MQTT', 'HTTP', 'Node-RED'],
          },
          {
            id: 'data',
            title: 'Data & Information Systems',
            skills: ['Information Systems', 'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'PostGIS', 'QGIS'],
          },
          {
            id: '3d',
            title: 'Immersion & 3D',
            skills: ['Unity', 'C#', 'Augmented Reality', 'Virtual Reality'],
          },
          {
            id: 'ai',
            title: 'Artificial Intelligence',
            skills: ['Perplexity', 'GPT', 'Gemini', 'Claude', 'Cursor'],
          },
          {
            id: 'devops',
            title: 'DevOps & Delivery',
            skills: ['Git', 'GitHub', 'Azure', 'Azure DevOps', 'Project Management'],
          },
        ],
      },
    },
    footer: {
      bio: 'ESEO general engineer in electronics/IT, passionate about new technologies, AI and web development.',
      navigation: 'Navigation',
      contact: 'Contact',
      navLabels: {
        journey: 'My Journey',
        diplomes: 'Degrees & Certifications',
        projects: 'Projects',
        evenements: 'Events',
        hobbies: 'Hobbies',
        cv: 'Resume',
        contact: 'Contact',
      },
      engineered: 'Engineered with',
      engineeredStack: 'using Next.js & React Three Fiber.',
      rights: 'All rights reserved',
    },
  },
} as const;

import type { Locale } from '@/types';

export type UIStrings = (typeof ui)[Locale];
