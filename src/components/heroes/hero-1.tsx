'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HoverOrangeSpan } from '@/components/hover-orange-span';
import { YearsOfExcellenceBadge } from '@/components/years-of-excellence-badge';

export function HeroSection1() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoopDipping, setIsLoopDipping] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});

    const handleTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!duration) return;
      const dipLeadTime = 0.6;
      if (currentTime >= duration - dipLeadTime) {
        setIsLoopDipping(true);
      } else if (currentTime >= 0.25 && currentTime < duration - dipLeadTime) {
        setIsLoopDipping(false);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <motion.video
        ref={videoRef}
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ y, scale, willChange: 'transform' }}
        className="absolute inset-0 h-full w-full object-cover parallax-img"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </motion.video>
      {/* Cinematic Dip-to-Dark transition masking the video loop point */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-500 ease-in-out ${
          isLoopDipping ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Dark overlay layers for enhanced contrast and depth */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/90" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1152px] flex-col items-center justify-center pt-14 pb-8 sm:pt-16 sm:pb-10 px-5 text-center text-white md:px-6 lg:px-8"
      >
        <YearsOfExcellenceBadge className="mb-4 sm:mb-5" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.98] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] break-words"
        >
          Enterprise infrastructure
          <br />
          support that <HoverOrangeSpan>never sleeps.</HoverOrangeSpan>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-5 max-w-xl text-[15px] md:text-[16px] font-normal text-white/95 dark:text-white/90 leading-relaxed"
        >
          Specialising in <strong className="font-semibold text-white">DevOps &amp; web hosting support</strong>.
          We deliver 24/7 managed infrastructure, cloud operations, and white-label support — keeping your systems secure, fast, and always online.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#contact-form"
            className="cursor-morph rounded-full bg-[#FF8101] text-white px-6 py-3 text-sm font-medium hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8101] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-200 shadow-lg shadow-[#FF8101]/25"
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[8%] text-white px-6 py-3 text-sm font-medium hover:bg-white/20 dark:hover:bg-white/[14%] dark:hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-200"
          >
            Explore Services
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 sm:mt-5 text-sm text-white/80 max-w-lg"
        >
          Trusted by hosting companies and businesses worldwide, with 23+ years of technical support experience.
        </motion.p>
      </motion.div>
    </section>
  );
}
