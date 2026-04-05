'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  variant = 'glass',
  hoverable = false 
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  
  const variants = {
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg',
    solid: 'bg-space-800 border border-white/5 shadow-xl',
    gradient: 'bg-gradient-to-br from-space-800 to-space-900 border border-white/10 shadow-2xl',
  };
  
  const hoverStyles = hoverable 
    ? 'hover:scale-[1.02] hover:border-nebula-cyan/50 hover:shadow-2xl hover:shadow-nebula-purple/20 cursor-pointer'
    : '';
  
  return (
    <div className={cn(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
};

export default Card;
















