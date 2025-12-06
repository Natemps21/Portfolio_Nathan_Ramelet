'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import { Evenement } from '@/data/portfolio';
import { Linkedin, Github, ExternalLink, Download, Play, FileText, ChevronLeft, ChevronRight, Image as ImageIcon, Award } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import PhotoCarousel from '@/components/ui/PhotoCarousel';
import VideoModal from '@/components/ui/VideoModal';
import DropdownButton from '@/components/ui/DropdownButton';

interface EvenementsSectionProps {
  evenements: Evenement[];
}

export default function EvenementsSection({ evenements }: EvenementsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + evenements.length) % evenements.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % evenements.length);
  };

  const goToEvent = (index: number) => {
    setCurrentIndex(index);
  };

  if (evenements.length === 0) return null;

  const currentEvenement = evenements[currentIndex];

  return (
    <>
      <Section id="evenements" className="relative overflow-visible">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">Événements</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Retracez les événements auxquels j&apos;ai participé et les expériences qui ont marqué mon parcours.
          </p>
        </motion.div>

        {/* Single Event Display with Navigation */}
        <div className="relative max-w-6xl mx-auto overflow-visible">
          {/* Navigation Buttons */}
          {evenements.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-30 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 border border-white/20"
                aria-label="Événement précédent"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-30 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 border border-white/20"
                aria-label="Événement suivant"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </>
          )}

          {/* Event Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <EvenementCard evenement={currentEvenement} index={currentIndex} />
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          {evenements.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {evenements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToEvent(index)}
                  className={`transition-all duration-200 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-nebula-cyan'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Aller à l'événement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Modal vidéo */}
      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => {
            setIsVideoModalOpen(false);
            setSelectedVideo(null);
            setSelectedTitle('');
          }}
          videoSrc={selectedVideo}
          title={`Démonstration - ${selectedTitle}`}
        />
      )}
    </>
  );
}

// Composant de carte d'événement
function EvenementCard({ evenement, index }: { evenement: Evenement; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  
  // Fonction pour ouvrir le modal vidéo
  const handleVideoClick = () => {
    if (evenement.video) {
      setSelectedVideo(evenement.video);
      setSelectedTitle(evenement.title);
      setIsVideoModalOpen(true);
    }
  };

  // Gérer la lecture de la vidéo au survol
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !evenement.video) return;

    if (isHovered) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.warn('Erreur de lecture vidéo:', err);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, evenement.video]);

  // Déterminer si on utilise une vidéo ou un diaporama
  const hasVideo = !!evenement.video;
  const hasPhotos = evenement.photos && evenement.photos.length > 0;
  const useCarousel = !hasVideo && hasPhotos;

  return (
    <div
      className="w-full max-w-6xl mx-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card variant="glass" hoverable className="h-full flex flex-col group relative overflow-visible">
        {/* Badge */}
        {evenement.badge && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-star-gold/20 border border-star-gold/50 rounded-full backdrop-blur-sm">
              <Award size={14} className="text-star-gold fill-star-gold" />
              <span className="text-star-gold text-xs font-medium">{evenement.badge}</span>
            </div>
          </div>
        )}

        {/* Video/Carousel Container */}
        <div className="relative w-full h-80 md:h-96 mb-4 rounded-lg overflow-hidden bg-space-900">
          {/* Vidéo (si disponible) */}
          {hasVideo && (
            <video
              ref={videoRef}
              src={evenement.video}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}

          {/* Diaporama de photos (affiché par défaut si disponible et pas de vidéo) */}
          {useCarousel && (
            <PhotoCarousel photos={evenement.photos!} isActive={true} isHovered={isHovered} />
          )}

          {/* Fallback image si ni vidéo ni photos */}
          {!hasVideo && !hasPhotos && (
            <Image
              src={evenement.image}
              alt={evenement.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 750px, 900px"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-1">
          {/* Date et Localisation */}
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
            <span>{evenement.date}</span>
            {evenement.location && (
              <>
                <span>•</span>
                <span>{evenement.location}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-nebula-cyan transition-colors">
            {evenement.title}
          </h3>

          {/* Description */}
          <div className="text-slate-300 mb-4 leading-relaxed flex-1 space-y-3">
            <p className="text-base">{evenement.description}</p>
            
            {/* Sections structurées avec sous-titres */}
            {evenement.sections && evenement.sections.length > 0 && (
              <div className="space-y-4 mt-4 pt-4 border-t border-white/10">
                {evenement.sections.map((section, index) => (
                  <div key={index} className="space-y-1.5">
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nebula-cyan"></span>
                      {section.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed pl-3.5">{section.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex mt-auto">
            {/* Liste déroulante LinkedIn */}
            {evenement.linkedinPosts && evenement.linkedinPosts.length > 0 ? (
              <DropdownButton
                label="LinkedIn"
                icon={<Linkedin size={16} />}
                options={evenement.linkedinPosts}
                onSelect={(url) => window.open(url, '_blank')}
                variant="primary"
                size="sm"
                className="flex-1 rounded-r-none"
              />
            ) : evenement.linkedinLink ? (
              <Button
                variant="primary"
                size="sm"
                className="flex-1 rounded-r-none"
                onClick={() => window.open(evenement.linkedinLink, '_blank')}
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </Button>
            ) : null}
            
            {evenement.githubLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-none"
                onClick={() => window.open(evenement.githubLink, '_blank')}
              >
                <Github size={16} className="mr-2" />
                Code
              </Button>
            )}
            
            {/* Liste déroulante Demo */}
            {evenement.videos && evenement.videos.length > 0 ? (
              <DropdownButton
                label="Demo"
                icon={<Play size={16} />}
                options={evenement.videos}
                onSelect={(url) => {
                  setSelectedVideo(url);
                  setSelectedTitle(evenement.title);
                  setIsVideoModalOpen(true);
                }}
                variant="primary"
                size="sm"
                className="flex-1 rounded-none"
              />
            ) : (evenement.video || evenement.demoLink) ? (
              <Button
                variant="primary"
                size="sm"
                className="flex-1 rounded-none"
                onClick={() => {
                  if (evenement.video) {
                    handleVideoClick();
                  } else if (evenement.demoLink) {
                    window.open(evenement.demoLink, '_blank');
                  }
                }}
              >
                <Play size={16} className="mr-2" />
                Demo
              </Button>
            ) : null}
            
            {/* Bouton ZIP */}
            {evenement.zipLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-none"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = evenement.zipLink!;
                  link.download = '';
                  link.click();
                }}
              >
                <Download size={16} className="mr-2" />
                ZIP
              </Button>
            )}
            {evenement.posterLink && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-l-none"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = evenement.posterLink!;
                  link.download = '';
                  link.click();
                }}
              >
                <ImageIcon size={16} className="mr-2" />
                Poster
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Modal vidéo pour la démo */}
      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => {
            setIsVideoModalOpen(false);
            setSelectedVideo(null);
            setSelectedTitle('');
          }}
          videoSrc={selectedVideo}
          title={`Démonstration - ${selectedTitle || evenement.title}`}
        />
      )}
    </div>
  );
}

