'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useDevicePerformance';

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
  const isMobile = useIsMobile();

  const maxClouds = isMobile ? 2 : 4;
  const spawnInterval = isMobile ? 5000 : 3500;

  useEffect(() => {
    const createCloud = () => {
      const newCloud: Cloud = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 80 + 50,
        duration: Math.random() * 3 + 4,
        color: Math.random() > 0.5 ? 'blue' : 'purple',
      };

      setClouds((prev) => {
        const updated = [...prev, newCloud];
        return updated.slice(-maxClouds);
      });

      setTimeout(() => {
        setClouds((prev) => prev.filter((c) => c.id !== newCloud.id));
      }, newCloud.duration * 1000);
    };

    createCloud();

    const interval = setInterval(createCloud, spawnInterval);

    return () => clearInterval(interval);
  }, [maxClouds, spawnInterval]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {clouds.map((cloud) => {
          const cloudColor =
            cloud.color === 'blue'
              ? 'rgba(74, 144, 226, 0.2)'
              : 'rgba(139, 92, 246, 0.2)';

          return (
            <motion.div
              key={cloud.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute blur-2xl"
              style={{
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                width: cloud.size,
                height: cloud.size * 0.6,
                borderRadius: '50%',
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
