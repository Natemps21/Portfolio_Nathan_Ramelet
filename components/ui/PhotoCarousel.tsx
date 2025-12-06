'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface PhotoCarouselProps {
  photos: string[];
  isActive: boolean;
  isHovered?: boolean; // Pour contrôler la visibilité des contrôles
}

export default function PhotoCarousel({ photos, isActive, isHovered = false }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(3); // Vitesse en secondes (1-10)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Défilement automatique
  useEffect(() => {
    if (!isActive || photos.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, speed * 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, photos.length, speed]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    // Réinitialiser le timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, speed * 1000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    // Réinitialiser le timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, speed * 1000);
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 750px, 900px"
          />
        </motion.div>
      </AnimatePresence>

      {/* Flèches de navigation */}
      {photos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition-all duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Photo précédente"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 transition-all duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Photo suivante"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </>
      )}

      {/* Contrôle de vitesse (discret dans le coin) */}
      {photos.length > 1 && (
        <div className={`absolute bottom-2 right-2 z-20 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 min-w-[120px]">
            <span className="text-white text-xs">Vitesse</span>
            <input
              type="range"
              min="1"
              max="10"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="flex-1 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-nebula-cyan"
              style={{
                background: `linear-gradient(to right, rgb(34, 211, 238) 0%, rgb(34, 211, 238) ${((speed - 1) / 9) * 100}%, rgb(71, 85, 105) ${((speed - 1) / 9) * 100}%, rgb(71, 85, 105) 100%)`
              }}
            />
            <span className="text-white text-xs w-6 text-right">{speed}s</span>
          </div>
        </div>
      )}

      {/* Indicateurs de position */}
      {photos.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'w-6 bg-nebula-cyan'
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Aller à la photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

