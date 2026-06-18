'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useUI } from '@/lib/i18n';

export default function Navigation() {
  const t = useUI();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 50;
        setScrolled((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.diplomes, href: '#diplomes' },
    { label: t.nav.journey, href: '#journey' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.evenements, href: '#evenements' },
    { label: t.nav.hobbies, href: '#hobbies' },
    { label: t.nav.cv, href: '#cv' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu - Aligné à gauche */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language toggle — desktop */}
          <div className="hidden md:flex items-center">
            <LanguageToggle />
          </div>

          {/* Mobile: toggle + menu button */}
          <div className="md:hidden ml-auto flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
