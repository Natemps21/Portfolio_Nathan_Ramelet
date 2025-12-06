'use client';

import { motion } from 'framer-motion';

export default function BrandLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-20 left-4 z-[60] pointer-events-auto"
    >
      <div className="relative group cursor-pointer">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-nebula-purple via-nebula-magenta to-nebula-cyan rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        {/* Logo content */}
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest gradient-text relative overflow-hidden">
            NATHAN RAMELET
            
            {/* Glint animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </h1>
          <p className="text-xs md:text-sm text-slate-400 tracking-wide mt-1 uppercase">
            Full Stack Engineer
          </p>
        </div>
      </div>
    </motion.div>
  );
}

