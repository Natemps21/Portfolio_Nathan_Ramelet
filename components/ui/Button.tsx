'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-nebula-purple hover:bg-nebula-purple/80 text-white shadow-lg shadow-nebula-purple/30 hover:shadow-nebula-purple/50',
      secondary: 'bg-nebula-cyan hover:bg-nebula-cyan/80 text-space-950 shadow-lg shadow-nebula-cyan/30 hover:shadow-nebula-cyan/50',
      ghost: 'bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40',
      outline: 'bg-transparent border-2 border-nebula-purple text-nebula-purple hover:bg-nebula-purple hover:text-white',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Chargement...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
















