'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

// Composant pour les mots interactifs avec effet hover discret
const InteractiveWord = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const glowColors = [
    { color: 'rgba(217, 70, 239, 0.7)', textColor: 'rgba(217, 70, 239, 0.9)' }, // Magenta
    { color: 'rgba(139, 92, 246, 0.7)', textColor: 'rgba(139, 92, 246, 0.9)' }, // Purple
    { color: 'rgba(74, 144, 226, 0.7)', textColor: 'rgba(74, 144, 226, 0.9)' },  // Cyan
  ];
  const glowIndex = index % 3;
  const glowColor = glowColors[glowIndex].color;
  const textColor = glowColors[glowIndex].textColor;
  
  return (
    <span
      className="inline-block transition-all duration-500 cursor-default"
      style={{
        textShadow: 'none',
        color: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.textShadow = `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`;
        e.currentTarget.style.color = textColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textShadow = 'none';
        e.currentTarget.style.color = 'inherit';
      }}
    >
      {children}
    </span>
  );
};

// Fonction pour diviser le texte en mots et appliquer l'effet
const TextWithHover = ({ text, highlightWords }: { text: string; highlightWords?: string[] }) => {
  const words = text.split(/(\s+)/);
  let wordIndex = 0;
  
  return ( 
    <>
      {words.map((word, i) => {
        if (word.trim() === '') {
          return <span key={i}>{word}</span>;
        }
        const isHighlighted = highlightWords?.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        const currentIndex = wordIndex++;
        
        if (isHighlighted) {
          return (
            <strong key={i} className="text-white font-semibold">
              <InteractiveWord index={currentIndex}>{word}</InteractiveWord>
            </strong>
          );
        }
        return <InteractiveWord key={i} index={currentIndex}>{word}</InteractiveWord>;
      })}
    </>
  );
};

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('journey');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
        {/* Main Title avec effet hover subtil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight group cursor-default">
            <span className="block text-white transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]">
              Nathan Ramelet
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl text-slate-300 mb-4">
          Ingénieur généraliste
          </h2>
        </motion.div>

        {/* Description - Citation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed relative pl-8 md:pl-12 italic"
        >
          {/* Guillemets décoratifs */}
          <span className="absolute left-0 top-0 text-6xl md:text-8xl text-nebula-cyan/30 font-serif leading-none">&quot;</span>
          <span className="absolute right-0 bottom-0 text-6xl md:text-8xl text-nebula-magenta/30 font-serif leading-none transform rotate-180">&quot;</span>
          
          {/* Contenu de la citation */}
          <span className="relative z-10">
            <TextWithHover
              text="Entre jeux vidéo, musculation et ingénierie, il y a un point commun : la quête de progression. Passionné par les nouvelles technologies depuis toujours, j'aborde chaque projet comme un nouveau niveau à explorer : comprendre les mécaniques, optimiser les performances et créer une expérience fluide. Du jeu vidéo au code, c'est la même logique : s'améliorer, performer et créer ce que j'aurais envie d'utiliser."
              highlightWords={['progression', 'nouvelles technologies', 'comprendre', 'optimiser', 'créer', 's\'améliorer', 'performer']}
            />
          </span>
        </motion.blockquote>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Voir mes projets
          </Button>
          <Button
            variant="ghost"
            size="lg" 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Me contacter
          </Button>
        </motion.div>

        {/* Scroll Indicator - Positionné sous les boutons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-nebula-cyan transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-cyan/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}

