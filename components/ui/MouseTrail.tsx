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
    const throttleDelay = 80;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Date.now() },
        ];
        return newTrail.slice(-4);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div className="fixed inset-0 pointer-events-none z-[15]">
      {trail.map((pos, index) => {
        const baseSize = 28 - index * 4;
        const opacity = ((index + 1) / trail.length) * 0.35;
        const isBlue = index % 2 === 0;

        return (
          <motion.div
            key={pos.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute"
            style={{
              left: pos.x,
              top: pos.y,
              width: baseSize,
              height: baseSize * 0.6,
              borderRadius: '50%',
              background: isBlue
                ? 'radial-gradient(ellipse, rgba(74, 144, 226, 0.25) 0%, transparent 70%)'
                : 'radial-gradient(ellipse, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </motion.div>
  );
}
