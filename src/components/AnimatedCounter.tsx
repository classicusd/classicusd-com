'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

function formatNumber(num: number, decimals: number): string {
  if (decimals > 0) {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  return Math.round(num).toLocaleString('en-US');
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const hasTriggered = useRef(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  const [animatedValue, setAnimatedValue] = useState(0);

  // For reduced motion, compute the display value directly
  const displayValue = useMemo(() => {
    if (reduceMotion && isInView) {
      return formatNumber(value, decimals);
    }
    return formatNumber(animatedValue, decimals);
  }, [reduceMotion, isInView, value, animatedValue, decimals]);

  // Trigger animation when in view (only for non-reduced motion)
  useEffect(() => {
    if (isInView && !reduceMotion && !hasTriggered.current) {
      hasTriggered.current = true;
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, reduceMotion]);

  // Subscribe to spring value changes
  useEffect(() => {
    if (reduceMotion) return;

    const unsubscribe = springValue.on('change', (latest) => {
      setAnimatedValue(latest);
    });

    return () => unsubscribe();
  }, [springValue, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
