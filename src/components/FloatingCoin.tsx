'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface FloatingCoinProps {
  size?: number;
  className?: string;
}

export function FloatingCoin({ size = 120, className = '' }: FloatingCoinProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -12, 0],
              rotate: [0, 2, 0, -2, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }
      }
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(51, 253, 153, 0.4) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      {/* Coin SVG */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-2xl"
      >
        {/* Outer ring - 3D effect */}
        <defs>
          <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4AFF9F" />
            <stop offset="50%" stopColor="#33FD99" />
            <stop offset="100%" stopColor="#28CC7A" />
          </linearGradient>
          <linearGradient id="coinEdge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4AFF9F" />
            <stop offset="100%" stopColor="#1FA85C" />
          </linearGradient>
          <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 3D edge effect */}
        <ellipse cx="100" cy="105" rx="85" ry="85" fill="#1FA85C" opacity="0.5" />

        {/* Main coin face */}
        <circle cx="100" cy="100" r="85" fill="url(#coinGradient)" filter="url(#coinShadow)" />

        {/* Inner ring */}
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="#121412"
          strokeWidth="4"
          opacity="0.3"
        />

        {/* Dollar sign */}
        <g fill="#121412">
          {/* Top bar */}
          <rect x="95" y="45" width="10" height="20" rx="2" />
          {/* S shape path */}
          <path d="M70 85 C70 65, 130 65, 130 85 C130 105, 70 105, 70 125 C70 145, 130 145, 130 125"
                fill="none"
                stroke="#121412"
                strokeWidth="16"
                strokeLinecap="round"
          />
          {/* Bottom bar */}
          <rect x="95" y="135" width="10" height="20" rx="2" />
        </g>

        {/* Highlight */}
        <ellipse
          cx="75"
          cy="75"
          rx="25"
          ry="15"
          fill="white"
          opacity="0.2"
          transform="rotate(-30 75 75)"
        />
      </svg>
    </motion.div>
  );
}
