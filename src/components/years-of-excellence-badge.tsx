'use client';

import React from 'react';
import { motion } from 'motion/react';
import award23Img from '@/assets/award-23.png';

interface YearsOfExcellenceBadgeProps {
  className?: string;
}

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

export function YearsOfExcellenceBadge({ className = '' }: YearsOfExcellenceBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}
    >
      {/* 3D Golden Laurel Award Emblem */}
      <img
        src={getImageSrc(award23Img)}
        alt="23 Years of Experience"
        className="w-11 h-11 sm:w-13 sm:h-13 object-contain transition-transform duration-300 hover:scale-105"
        width={104}
        height={104}
        loading="eager"
      />

      {/* Text placed under the image in font-display (Instrument Serif) */}
      <span className="mt-1 font-display text-[15px] sm:text-[17px] text-white/95 tracking-wide leading-none">
        Years of Experience
      </span>
    </motion.div>
  );
}
