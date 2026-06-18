'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { contactInfo } from '@/data';
import { useUI } from '@/lib/i18n';

const FOOTER_SECTIONS = ['journey', 'diplomes', 'projects', 'evenements', 'hobbies', 'cv', 'contact'] as const;

export default function Footer() {
  const t = useUI();

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: contactInfo.socials.github,
      label: 'GitHub',
      color: 'hover:text-white hover:shadow-white/30',
    },
    {
      icon: <Linkedin size={24} />,
      href: contactInfo.socials.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2] hover:shadow-[#0A66C2]/30',
    },
    {
      icon: <Mail size={24} />,
      href: `mailto:${contactInfo.email}`,
      label: 'Email',
      color: 'hover:text-nebula-cyan hover:shadow-nebula-cyan/30',
    },
  ];

  return (
    <footer id="contact" className="relative bg-space-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Nathan Ramelet</h3>
            <p className="text-slate-400 mb-4">{t.footer.bio}</p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              <span>{contactInfo.location}</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              {FOOTER_SECTIONS.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-slate-400 hover:text-nebula-cyan transition-colors capitalize"
                  >
                    {t.footer.navLabels[section]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-nebula-cyan transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.phone && <li>{contactInfo.phone}</li>}
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-current shadow-lg ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p className="flex items-center gap-1">
              © 2025 Nathan Ramelet. {t.footer.engineered}
              <Heart size={14} className="text-nebula-magenta fill-nebula-magenta inline mx-1" />
              {t.footer.engineeredStack}
            </p>
            <p className="text-slate-600">{t.footer.rights}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-nebula-purple via-nebula-magenta to-nebula-cyan opacity-50" />
    </footer>
  );
}
