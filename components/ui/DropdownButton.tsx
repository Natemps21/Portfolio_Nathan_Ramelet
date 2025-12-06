'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './Button';

interface DropdownOption {
  title: string;
  url: string;
}

interface DropdownButtonProps {
  label: string;
  icon: React.ReactNode;
  options: DropdownOption[];
  onSelect: (url: string) => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function DropdownButton({
  label,
  icon,
  options,
  onSelect,
  variant = 'outline',
  size = 'sm',
  className = ''
}: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (url: string) => {
    onSelect(url);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <Button
        variant={variant}
        size={size}
        className="flex-1 flex items-center justify-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        {label && <span>{label}</span>}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full mt-2 z-[100]"
              style={{ position: 'absolute' }}
            >
              <div className="bg-space-900/95 backdrop-blur-xl border border-white/20 rounded-lg p-2 shadow-2xl space-y-2 overflow-hidden">
                {options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelect(option.url)}
                    className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-nebula-cyan/50 transition-all duration-200 group"
                  >
                    <span className="text-white text-sm font-medium group-hover:text-nebula-cyan transition-colors">
                      {option.title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

