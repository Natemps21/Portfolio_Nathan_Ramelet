'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
  id: number;
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 50; // Limiter à 20 FPS pour performance
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      setTrail((prev) => {
        const newTrail = [
          ...prev,
          {
            x: e.clientX,
            y: e.clientY,
            id: Date.now(),
          },
        ];
        // Garder seulement les 8 dernières positions
        return newTrail.slice(-8);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[15]">
      {trail.map((pos, index) => {
        const baseSize = 40 - index * 3; // Taille décroissante
        const opacity = (index + 1) / trail.length; // Opacité croissante
        const isBlue = index % 2 === 0; // Alterne bleu/violet
        
        return (
          <motion.div
            key={pos.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: opacity * 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute blur-2xl"
            style={{
              left: pos.x,
              top: pos.y,
              width: baseSize,
              height: baseSize * 0.6, // Forme ovale pour effet nuage
              borderRadius: '60% 40% 40% 60% / 60% 50% 50% 40%', // Forme nuage
              background: isBlue 
                ? 'radial-gradient(ellipse, rgba(74, 144, 226, 0.3) 0%, rgba(74, 144, 226, 0.1) 50%, transparent 100%)'
                : 'radial-gradient(ellipse, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
              transform: 'translate(-50%, -50%)',
              boxShadow: isBlue
                ? '0 0 20px rgba(74, 144, 226, 0.2)'
                : '0 0 20px rgba(139, 92, 246, 0.2)',
            }}
          />
        );
      })}
    </div>
  );
}

