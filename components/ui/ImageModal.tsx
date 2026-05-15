'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, title }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-12 z-[101] flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] pointer-events-auto">
              <button
                onClick={onClose}
                className="absolute -top-2 right-0 md:-top-4 md:-right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
              <p className="text-white text-lg font-semibold mb-3 text-center">{title}</p>
              <div className="relative w-full h-[calc(100%-2.5rem)] rounded-xl overflow-hidden border border-white/10 bg-black">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
