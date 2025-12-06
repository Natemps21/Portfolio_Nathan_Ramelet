'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Section from '@/components/ui/Section';
import { TimelineItem } from '@/data/portfolio';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

interface TimelineSectionProps {
  items: TimelineItem[];
}

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <Section id="journey" className="relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold gradient-text mb-4">Mon Parcours</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          De l&apos;apprentissage à l&apos;expertise : une constellation d&apos;expériences qui façonnent mon voyage dans le monde l&apos;ingénierie informatique/électronique.
        </p>
      </motion.div>   

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Line (The Constellation Line) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nebula-purple via-nebula-magenta to-nebula-cyan transform -translate-x-1/2 hidden md:block">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="w-full bg-gradient-to-b from-transparent via-nebula-cyan to-transparent"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.type === 'education' ? GraduationCap : Briefcase;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-nebula-purple to-nebula-cyan border-4 border-space-950 shadow-lg shadow-nebula-cyan/50"
                  />
                </div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card variant="glass" hoverable className="group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${
                          item.type === 'education' 
                            ? 'bg-nebula-cyan/20 text-nebula-cyan' 
                            : 'bg-nebula-magenta/20 text-nebula-magenta'
                        }`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-nebula-cyan transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-nebula-cyan text-sm font-medium">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="mb-3">
                      <p className="text-lg font-semibold text-slate-200">
                        {item.institution}
                      </p>
                      {item.location && (
                        <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Tag
                            key={tagIndex}
                            text={tag}
                            variant={tagIndex % 2 === 0 ? 'cyan' : 'purple'}
                          />
                        ))}
                      </div>
                    )}
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

