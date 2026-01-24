'use client';

import { motion } from 'framer-motion';
import { cardHover } from '@/lib/animations';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}

export function Card({
  title,
  description,
  href,
  image,
  imageAlt = '',
  className = '',
}: CardProps) {
  const content = (
    <>
      {image && (
        <div className="flex justify-center items-center mb-4 h-20">
          <Image
            src={image}
            alt={imageAlt}
            width={80}
            height={80}
            className="object-contain max-h-20"
          />
        </div>
      )}
      <h4 className="text-xl font-bold text-white text-center mb-2">
        {title}
      </h4>
      <p className="text-text-secondary text-center text-sm">
        {description}
      </p>
    </>
  );

  const cardStyles = `
    block p-6 rounded-xl
    bg-usc-gray border border-usc-gray-light
    hover:border-usc-gold
    transition-colors
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardStyles}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={cardStyles}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      {content}
    </motion.div>
  );
}

// Feature card with icon
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      className={`
        p-6 rounded-xl
        bg-usc-gray/50 border border-usc-gray-light
        hover:border-usc-gold/50
        transition-colors
        ${className}
      `}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-usc-gold/10 text-usc-gold">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">
        {title}
      </h4>
      <p className="text-text-secondary text-sm">
        {description}
      </p>
    </motion.div>
  );
}

// Partner card for ecosystem grid
interface PartnerCardProps {
  name: string;
  href: string;
  image: string;
  className?: string;
}

export function PartnerCard({
  name,
  href,
  image,
  className = '',
}: PartnerCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-col items-center p-4 rounded-lg
        bg-usc-gray hover:bg-usc-gray-light
        transition-colors
        ${className}
      `}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center h-12 mb-2">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="object-contain max-h-12"
        />
      </div>
      <span className="text-sm text-text-secondary text-center">
        {name}
      </span>
    </motion.a>
  );
}
