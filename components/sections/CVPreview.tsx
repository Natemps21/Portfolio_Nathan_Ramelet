'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import { Download, FileText, Users, Code2, Globe, Home, Database, Box, Brain, GitBranch } from 'lucide-react';

export default function CVPreview() {
  const colorClasses = {  
    cyan: {  
      bg: 'bg-nebula-cyan/20',
      text: 'text-nebula-cyan'
    },
    magenta: {
      bg: 'bg-nebula-magenta/20',
      text: 'text-nebula-magenta'
    },
    purple: {
      bg: 'bg-nebula-purple/20',
      text: 'text-nebula-purple'
    },
    gold: {
      bg: 'bg-star-gold/20',
      text: 'text-star-gold'
    }
  };

  const categories = [
    {
      id: 'human',
      title: 'Leadership et gestion de projet',
      icon: <Users size={24} />,
      color: 'cyan',
      skills: ['Gestion d\'équipe', 'Conduite du changement', 'Gestion du stress', 'Marketing & Communication', 'Club Ciné - Responsable Com']
    },
    {
      id: 'engineering',
      title: 'Langages de programmation',
      icon: <Code2 size={24} />,
      color: 'magenta',
      skills: ['Python', 'C', 'C++', 'Java', 'C#']
    },
    {
      id: 'web',
      title: 'Développement Web',
      icon: <Globe size={24} />,
      color: 'purple',
      skills: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', '.NET', 'Visual studio', 'VS Code', 'Cursor']
    },
    {
      id: 'iot',
      title: 'Smart Building & IoT',
      icon: <Home size={24} />,
      color: 'gold',
      skills: ['BOS', 'BIM', 'Domotique', 'Arduino', 'MQTT', 'HTTP', 'Node-RED']
    },
    {
      id: 'data',
      title: 'Data & Systèmes d\'Information',
      icon: <Database size={24} />,
      color: 'cyan',
      skills: ['Système d\'Information', 'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'PostGIS', 'QGIS']
    },
    {
      id: '3d',
      title: 'Immersion & 3D',
      icon: <Box size={24} />,
      color: 'magenta',
      skills: ['Unity', 'C#', 'Réalité Augmentée', 'Réalité Virtuelle']
    },
    {
      id: 'ai',
      title: 'Intelligence Artificielle',
      icon: <Brain size={24} />,
      color: 'purple',
      skills: ['Perplexity', 'GPT', 'Gemini', 'Claude', 'Cursor']
    },
    {
      id: 'devops',
      title: 'DevOps & Pilotage',
      icon: <GitBranch size={24} />,
      color: 'gold',
      skills: ['Git', 'GitHub', 'Azure', 'Azure DevOps', 'Gestion de projet']
    }
  ];

  return (
    <Section id="cv" className="relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold gradient-text mb-4">Curriculum Vitae</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Un aperçu complet de mes compétences techniques et de mon expérience professionnelle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side - CV Document Preview */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="gradient" className="h-full flex flex-col items-center justify-center p-12">
            {/* Document Icon */}
            <div className="relative mb-8">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 240, 255, 0.3)',
                    '0 0 40px rgba(255, 0, 170, 0.5)',
                    '0 0 20px rgba(0, 240, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-8 bg-gradient-to-br from-nebula-purple/30 to-nebula-cyan/30 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <FileText size={120} className="text-white" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              CV Complet
            </h3>
            <p className="text-slate-300 text-center mb-8 max-w-md">
              Téléchargez mon CV au format PDF pour une vue détaillée de mon parcours, mes compétences et mes réalisations.
            </p>

            {/* Download Button */}
            <Button variant="primary" size="lg" className="group">
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Télécharger le CV
            </Button>

            <p className="text-slate-500 text-sm mt-4">PDF • Dernière mise à jour : Dec 2025</p>
          </Card>
        </motion.div>

        {/* Right Side - Skills Summary */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card variant="glass" hoverable className="h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses].bg}`}>
                    <div className={colorClasses[category.color as keyof typeof colorClasses].text}>
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Tag
                      key={skillIndex}
                      text={skill}
                      variant={category.color as 'cyan' | 'magenta' | 'purple' | 'gold'}
                      size="sm"
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}









