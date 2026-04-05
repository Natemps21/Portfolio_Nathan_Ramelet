'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { TagProps } from '@/types';

const Tag: React.FC<TagProps> = ({ text, variant = 'purple', size = 'sm' }) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105';
  
  const variants = {
    cyan: 'bg-nebula-cyan/20 text-nebula-cyan border border-nebula-cyan/30 shadow-sm shadow-nebula-cyan/20',
    magenta: 'bg-nebula-magenta/20 text-nebula-magenta border border-nebula-magenta/30 shadow-sm shadow-nebula-magenta/20',
    purple: 'bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30 shadow-sm shadow-nebula-purple/20',
    gold: 'bg-star-gold/20 text-star-gold border border-star-gold/30 shadow-sm shadow-star-gold/20',
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  
  return (
    <span className={cn(baseStyles, variants[variant], sizes[size])}>
      {text}
    </span>
  );
};

export default Tag;
















