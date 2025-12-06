'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import Image from 'next/image';
import { Hobby } from '@/data/portfolio';

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <Section id="hobbies" className="relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Mes Loisirs
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          En dehors du code, voici ce qui me passionne et m&apos;inspire au quotidien.
        </p>
      </motion.div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card variant="glass" hoverable className="h-full overflow-hidden group">
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={false}
                  onError={(e) => {
                    console.error('Image failed to load:', hobby.image);
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {hobby.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-slate-300 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

