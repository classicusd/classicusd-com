'use client';

import { motion } from 'framer-motion';
import { buttonPress } from '@/lib/animations';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles = `
    btn inline-flex items-center justify-center
    font-semibold uppercase tracking-wide
    rounded-lg transition-colors
    focus:outline-none focus-visible:ring-2 focus-visible:ring-usc-green focus-visible:ring-offset-2 focus-visible:ring-offset-usc-bg
  `;

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
        variants={buttonPress}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        {children}
        {external && (
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={combinedStyles}
      variants={buttonPress}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      {children}
    </motion.button>
  );
}
