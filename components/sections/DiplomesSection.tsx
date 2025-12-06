'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { GraduationCap, Award, Calendar, Hash, FileText, Download } from 'lucide-react';
import { Diplome } from '@/data/portfolio';

interface DiplomesSectionProps {
  diplomes: Diplome[];
}

export default function DiplomesSection({ diplomes }: DiplomesSectionProps) {
  return (
    <Section id="diplomes" className="relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold gradient-text mb-4">Diplômes & Certifications</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Mon parcours académique et mes certifications professionnelles.
        </p>
      </motion.div>

      {/* Diplomes Grid - Hauteur fixe pour uniformité */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {diplomes.map((diplome, index) => (
          <motion.div
            key={diplome.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full"
          >
            <Card variant="glass" hoverable className="h-full flex flex-col min-h-[420px]">
              {/* Header avec Icon et Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-nebula-cyan/20 rounded-lg">
                    <GraduationCap size={28} className="text-nebula-cyan" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={16} />
                    <span>{diplome.annee}</span>
                  </div>
                </div>
                
                {/* Note si présente */}
                {diplome.note && (
                  <div className="px-3 py-1 bg-star-gold/20 border border-star-gold/40 rounded-full">
                    <span className="text-star-gold text-sm font-bold">{diplome.note}</span>
                  </div>
                )}
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {diplome.titre}
              </h3>

              {/* Établissement */}
              <p className="text-nebula-cyan font-medium mb-3">
                {diplome.etablissement}
              </p>

              {/* Description - Flex grow pour remplir l'espace */}
              <p className="text-slate-300 mb-4 leading-relaxed flex-grow">
                {diplome.description}
              </p>

              {/* Spécialités - Plusieurs tags */}
              {diplome.specialites && diplome.specialites.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {diplome.specialites.map((spec, idx) => (
                    <Tag key={idx} text={spec} variant="purple" />
                  ))}
                </div>
              )}

              {/* Mention */}
              {diplome.mention && (
                <div className="flex items-center gap-2 text-star-gold mb-3">
                  <Award size={16} />
                  <span className="text-sm font-medium">{diplome.mention}</span>
                </div>
              )}

              {/* Identifiant Certification */}
              {diplome.identifiantCertification && (
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3 font-mono">
                  <Hash size={14} />
                  <span>{diplome.identifiantCertification}</span>
                </div>
              )}

              {/* Bouton Télécharger le Diplôme */}
              {diplome.lienDiplome && (
                <div className="mt-auto pt-3 border-t border-white/10">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(diplome.lienDiplome, '_blank')}
                  >
                    <Download size={14} className="mr-2" />
                    Voir le diplôme
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

