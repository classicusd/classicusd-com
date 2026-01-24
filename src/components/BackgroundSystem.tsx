'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

// Seeded pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number): () => number {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

/**
 * BackgroundSystem - Abstract particle wave pattern
 * Themed for Classic USD ($USC) - signaling liquidity and capital movement
 *
 * Visual concept:
 * - Abstract particle waves representing value flow
 * - Mint green (#33FD99) accents on dark/light backgrounds
 * - Clean, professional financial aesthetic
 * - Supports light and dark themes
 */

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  amplitude: number;
}

interface Wave {
  id: number;
  y: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function BackgroundSystem() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Generate particles for the wave effect using seeded random for consistency
  const [particles] = useState<Particle[]>(() => {
    const random = seededRandom(12345);
    const items: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      items.push({
        id: i,
        x: random() * 100,
        y: 20 + random() * 60, // Concentrated in middle band
        size: 2 + random() * 4,
        duration: 8 + random() * 8,
        delay: random() * 5,
        amplitude: 10 + random() * 20,
      });
    }
    return items;
  });

  // Generate horizontal wave lines
  const [waves] = useState<Wave[]>(() => {
    const items: Wave[] = [];
    for (let i = 0; i < 5; i++) {
      items.push({
        id: i,
        y: 25 + i * 12,
        opacity: 0.03 + (i % 2) * 0.02,
        duration: 15 + i * 3,
        delay: i * 0.5,
      });
    }
    return items;
  });

  // Theme-aware colors
  const colors = {
    bg: isDark ? '#121412' : '#FAFAFA',
    particle: isDark ? 'rgba(51, 253, 153, 0.6)' : 'rgba(51, 253, 153, 0.8)',
    particleGlow: isDark ? 'rgba(51, 253, 153, 0.3)' : 'rgba(51, 253, 153, 0.4)',
    wave: isDark ? 'rgba(51, 253, 153, 0.08)' : 'rgba(51, 253, 153, 0.12)',
    gradient1: isDark ? 'rgba(51, 253, 153, 0.06)' : 'rgba(51, 253, 153, 0.08)',
    gradient2: isDark ? 'rgba(51, 253, 153, 0.04)' : 'rgba(51, 253, 153, 0.06)',
    grid: isDark ? 'rgba(51, 253, 153, 0.03)' : 'rgba(51, 253, 153, 0.06)',
    vignette: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.3)',
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Ambient gradient - top */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(800px 400px at 20% 10%, ${colors.gradient1}, transparent 60%),
            radial-gradient(600px 300px at 80% 20%, ${colors.gradient2}, transparent 50%),
            radial-gradient(1000px 500px at 50% 90%, ${colors.gradient1}, transparent 60%)
          `,
        }}
        animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(0deg, ${colors.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Horizontal wave lines */}
      {waves.map((wave) => (
        <motion.div
          key={`wave-${wave.id}`}
          className="absolute left-0 right-0 h-[1px]"
          style={{
            top: `${wave.y}%`,
            background: `linear-gradient(90deg, transparent, ${colors.wave}, transparent)`,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scaleX: [1, 1.1, 1],
                  opacity: [wave.opacity, wave.opacity * 1.5, wave.opacity],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: wave.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: wave.delay,
                }
          }
        />
      ))}

      {/* Flowing particles */}
      {!reduceMotion &&
        particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: colors.particle,
              boxShadow: `0 0 ${particle.size * 2}px ${colors.particleGlow}`,
            }}
            animate={{
              y: [0, -particle.amplitude, 0, particle.amplitude, 0],
              x: [0, particle.amplitude * 0.3, 0, -particle.amplitude * 0.3, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}

      {/* Central flowing stream - represents liquidity */}
      {!reduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Stream particles moving left to right */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute h-[2px]"
              style={{
                top: `${40 + i * 3}%`,
                width: '30%',
                background: `linear-gradient(90deg, transparent, ${colors.particle}, transparent)`,
              }}
              animate={{
                x: ['-30%', '130%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Pulse rings - represents value nodes */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full border"
            style={{ borderColor: colors.wave }}
            animate={{
              scale: [1, 2, 3],
              opacity: [0.3, 0.1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
          <motion.div
            className="absolute right-1/4 top-2/3 w-24 h-24 rounded-full border"
            style={{ borderColor: colors.wave }}
            animate={{
              scale: [1, 2, 3],
              opacity: [0.3, 0.1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 2,
            }}
          />
        </>
      )}

      {/* Bottom gradient anchor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30vh] transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px 300px at 50% 100%, ${colors.gradient1}, transparent 60%)`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, transparent 30%, ${colors.vignette} 100%)`,
        }}
      />
    </div>
  );
}
