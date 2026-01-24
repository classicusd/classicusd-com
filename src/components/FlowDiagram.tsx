'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FlowDiagramProps {
  steps: Step[];
  className?: string;
}

export function FlowDiagram({ steps, className = '' }: FlowDiagramProps) {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut' as const,
        delay: 0.3,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={reduceMotion ? undefined : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Mobile: Vertical layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={reduceMotion ? undefined : stepVariants}
            className="relative"
          >
            {/* Connecting line (except last) */}
            {index < steps.length - 1 && (
              <motion.div
                variants={reduceMotion ? undefined : lineVariants}
                className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-usc-green/50 to-usc-green/20 origin-top"
              />
            )}
            <div className="flex items-start gap-4">
              {/* Number badge */}
              <motion.div
                variants={reduceMotion ? undefined : numberVariants}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-usc-green flex items-center justify-center text-usc-bg font-bold text-lg"
              >
                {step.number}
              </motion.div>
              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-usc-green/10 flex items-center justify-center text-usc-green">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-usc-text">{step.title}</h3>
                </div>
                <p className="text-usc-text-secondary text-sm">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden md:block">
        <div className="relative flex items-start justify-between">
          {/* Connecting lines */}
          <div className="absolute top-8 left-0 right-0 flex items-center px-24">
            {steps.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                variants={reduceMotion ? undefined : lineVariants}
                className="flex-1 h-0.5 mx-4 origin-left"
                style={{
                  background: 'linear-gradient(90deg, rgba(51, 253, 153, 0.6) 0%, rgba(51, 253, 153, 0.3) 50%, rgba(51, 253, 153, 0.6) 100%)',
                }}
              >
                {/* Animated dot traveling along line */}
                {!reduceMotion && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-usc-green"
                    animate={{
                      x: ['0%', '100%'],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5 + 1,
                      ease: 'easeInOut',
                    }}
                    style={{ marginTop: '-3px' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={reduceMotion ? undefined : stepVariants}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              {/* Number badge */}
              <motion.div
                variants={reduceMotion ? undefined : numberVariants}
                className="relative z-10 w-16 h-16 rounded-full bg-usc-green flex items-center justify-center text-usc-bg font-bold text-xl shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(51, 253, 153, 0.3)',
                }}
              >
                {step.number}
              </motion.div>

              {/* Icon */}
              <motion.div
                className="mt-6 w-12 h-12 rounded-xl bg-usc-green/10 flex items-center justify-center text-usc-green"
                whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-usc-text">{step.title}</h3>

              {/* Description */}
              <p className="mt-2 text-usc-text-secondary text-sm max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
