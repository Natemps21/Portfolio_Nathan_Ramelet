'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Cloud {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  color: 'blue' | 'purple';
}

export default function BackgroundClouds() {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    const createCloud = () => {
      const newCloud: Cloud = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100, // Pourcentage
        y: Math.random() * 100, // Pourcentage
        size: Math.random() * 100 + 60, // 60-160px
        duration: Math.random() * 3 + 4, // 4-7s
        color: Math.random() > 0.5 ? 'blue' : 'purple',
      };

      setClouds(prev => {
        const updated = [...prev, newCloud];
        // Garder max 6 nuages
        return updated.slice(-6);
      });

      // Supprimer après la durée
      setTimeout(() => {
        setClouds(prev => prev.filter(c => c.id !== newCloud.id));
      }, newCloud.duration * 1000);
    };

    // Créer immédiatement 2 nuages
    createCloud();
    setTimeout(() => createCloud(), 500);

    // Créer un nuage toutes les 2-4 secondes
    const interval = setInterval(() => {
      createCloud();
    }, Math.random() * 2000 + 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {clouds.map(cloud => {
          const cloudColor = cloud.color === 'blue' 
            ? 'rgba(74, 144, 226, 0.25)' 
            : 'rgba(139, 92, 246, 0.25)';
          
          return (
            <motion.div
              key={cloud.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ 
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="absolute blur-3xl"
              style={{
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                width: cloud.size,
                height: cloud.size * 0.6,
                borderRadius: '50% 45% 48% 52% / 60% 55% 45% 40%',
                background: `radial-gradient(ellipse, ${cloudColor} 0%, transparent 70%)`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

