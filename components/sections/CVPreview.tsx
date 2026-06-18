'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import { Download, FileText, Users, Code2, Globe, Home, Database, Box, Brain, GitBranch } from 'lucide-react';
import { useUI } from '@/lib/i18n';

const CV_FILES = {
  fr: {
    fileName: 'CV Nathan Ramelet mai 2026.pdf',
  },
  en: {
    fileName: 'CV Nathan Ramelet May 2026 EN.pdf',
  },
} as const;

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  human: <Users size={24} />,
  engineering: <Code2 size={24} />,
  web: <Globe size={24} />,
  iot: <Home size={24} />,
  data: <Database size={24} />,
  '3d': <Box size={24} />,
  ai: <Brain size={24} />,
  devops: <GitBranch size={24} />,
};

const CATEGORY_COLORS: Record<string, 'cyan' | 'magenta' | 'purple' | 'gold'> = {
  human: 'cyan',
  engineering: 'magenta',
  web: 'purple',
  iot: 'gold',
  data: 'cyan',
  '3d': 'magenta',
  ai: 'purple',
  devops: 'gold',
};

function downloadCV(lang: keyof typeof CV_FILES) {
  const { fileName } = CV_FILES[lang];
  const link = document.createElement('a');
  link.href = encodeURI(`/downloads/${fileName}`);
  link.download = fileName;
  link.click();
}

export default function CVPreview() {
  const t = useUI();

  const colorClasses = {
    cyan: {
      bg: 'bg-nebula-cyan/20',
      text: 'text-nebula-cyan',
    },
    magenta: {
      bg: 'bg-nebula-magenta/20',
      text: 'text-nebula-magenta',
    },
    purple: {
      bg: 'bg-nebula-purple/20',
      text: 'text-nebula-purple',
    },
    gold: {
      bg: 'bg-star-gold/20',
      text: 'text-star-gold',
    },
  };

  const categories = t.sections.cv.categories.map((category) => ({
    ...category,
    icon: CATEGORY_ICONS[category.id],
    color: CATEGORY_COLORS[category.id],
    skills: [...category.skills],
  }));

  return (
    <Section id="cv" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold gradient-text mb-4">{t.sections.cv.title}</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {t.sections.cv.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="gradient" className="h-full flex flex-col items-center justify-center p-12">
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

            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              {t.sections.cv.fullCv}
            </h3>
            <p className="text-slate-300 text-center mb-8 max-w-md">
              {t.sections.cv.downloadHint}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                className="group"
                onClick={() => downloadCV('fr')}
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                {t.sections.cv.downloadFr}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="group"
                onClick={() => downloadCV('en')}
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                {t.sections.cv.downloadEn}
              </Button>
            </div>

            <p className="text-slate-500 text-sm mt-4">{t.sections.cv.lastUpdate}</p>
          </Card>
        </motion.div>

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
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${colorClasses[category.color].bg}`}>
                    <div className={colorClasses[category.color].text}>{category.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-white">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Tag
                      key={skillIndex}
                      text={skill}
                      variant={category.color}
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
