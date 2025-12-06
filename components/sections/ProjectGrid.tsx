'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { Project } from '@/data/portfolio';
import { Github, ExternalLink, Star, Download, Play, FileText, Link2 } from 'lucide-react';
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import VideoModal from '@/components/ui/VideoModal';

interface ProjectGridProps {
  projects: Project[];
}

// Contexte pour gérer le survol entre projets liés
interface HoverContextType {
  hoveredProjectId: number | null;
  setHoveredProjectId: (projectId: number | null) => void;
  projects: Project[];
}

const HoverContext = createContext<HoverContextType | null>(null);

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <HoverContext.Provider value={{ hoveredProjectId, setHoveredProjectId, projects }}>
      <Section id="projects" className="relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">Projets</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences techniques et ma passion pour créer des solutions innovantes.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>
    </HoverContext.Provider>
  );
}

// Composant de carte de projet avec support vidéo
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverContext = useContext(HoverContext);
  
  // Vérifier si ce projet ou son projet lié est survolé
  const isThisProjectHovered = hoverContext?.hoveredProjectId === project.id;
  const linkedProject = hoverContext?.projects.find(p => p.id === project.linkedProjectId);
  const isLinkedProjectHovered = linkedProject && hoverContext?.hoveredProjectId === linkedProject.id;
  const shouldHighlight = isThisProjectHovered || isLinkedProjectHovered;

  // Gérer la lecture de la vidéo au survol
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.video) return;

    if (isHovered) {
      video.currentTime = 0; // Revenir au début
      video.play().catch((err) => {
        console.warn('Erreur de lecture vidéo:', err);
      });
    } else {
      video.pause();
      video.currentTime = 0; // Réinitialiser à 0 quand on quitte
    }
  }, [isHovered, project.video]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (hoverContext) {
          hoverContext.setHoveredProjectId(project.id);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (hoverContext) {
          hoverContext.setHoveredProjectId(null);
        }
      }}
      animate={shouldHighlight ? {
        scale: [1, 1.02, 1],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : {}}
      className="relative"
    >
      <Card 
        variant="glass" 
        hoverable 
        className={`h-full flex flex-col group relative overflow-hidden transition-all duration-300 ${
          shouldHighlight 
            ? 'bg-white/15 backdrop-blur-xl shadow-2xl shadow-nebula-cyan/40' 
            : ''
        }`}
      >
        {/* Effet de clignotement sur le background */}
        {shouldHighlight && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-nebula-cyan/20 to-nebula-purple/20 rounded-2xl pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1 px-3 py-1 bg-star-gold/20 border border-star-gold/50 rounded-full backdrop-blur-sm">
              <Star size={14} className="text-star-gold fill-star-gold" />
              <span className="text-star-gold text-xs font-medium">Featured</span>
            </div>
          </div>
        )}

        {/* Linked Project Badge */}
        {project.linkedProjectId && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1 px-3 py-1 bg-nebula-cyan/20 border border-nebula-cyan/50 rounded-full backdrop-blur-sm">
              <Link2 size={14} className="text-nebula-cyan" />
              <span className="text-nebula-cyan text-xs font-medium">Project link</span>
            </div>
          </div>
        )}

        {/* Project Image/Video */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-space-900">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/15 to-nebula-cyan/15 group-hover:opacity-0 transition-opacity duration-300 z-10" />
          
          {/* Image (toujours présente comme fallback) */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered && project.video ? 'opacity-0 scale-110' : 'opacity-100 group-hover:scale-110'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Vidéo (si disponible) */}
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-nebula-cyan transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 mb-4 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <Tag
                key={techIndex}
                text={tech}
                variant={
                  techIndex % 4 === 0
                    ? 'cyan'
                    : techIndex % 4 === 1
                    ? 'purple'
                    : techIndex % 4 === 2
                    ? 'magenta'
                    : 'gold'
                }
                size="sm"
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            {project.repoLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-[100px]"
                onClick={() => window.open(project.repoLink, '_blank')}
              >
                <Github size={16} className="mr-2" />
                Code
              </Button>
            )}
            {project.demoVideo && (
              <Button
                variant="primary"
                size="sm"
                className="flex-1 min-w-[100px]"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play size={16} className="mr-2" />
                Demo
              </Button>
            )}
            {project.liveLink && !project.demoVideo && (
              <Button
                variant="primary"
                size="sm"
                className="flex-1 min-w-[100px]"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                <ExternalLink size={16} className="mr-2" />
                Demo
              </Button>
            )}
            {project.downloadLink && (() => {
              const isPDF = project.downloadLink.toLowerCase().endsWith('.pdf');
              return (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 min-w-[100px]"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = project.downloadLink!;
                    link.download = '';
                    link.click();
                  }}
                >
                  {isPDF ? (
                    <>
                      <FileText size={16} className="mr-2" />
                      PDF
                    </>
                  ) : (
                    <>
                      <Download size={16} className="mr-2" />
                      ZIP
                    </>
                  )}
                </Button>
              );
            })()}
          </div>
        </div>
      </Card>

      {/* Modal vidéo de démonstration */}
      {project.demoVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc={project.demoVideo}
          title={`Démonstration - ${project.title}`}
        />
      )}
    </motion.div>
  );
}


