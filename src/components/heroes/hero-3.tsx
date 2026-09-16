'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { HoverOrangeSpan } from '@/components/hover-orange-span';
import { YearsOfExcellenceBadge } from '@/components/years-of-excellence-badge';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import bgDevops from '@/assets/slider-landscape.jpg';
import bgSupport from '@/assets/hero2.png';
import bgHosting from '@/assets/slider-datacenter.jpg';
import bgCloud from '@/assets/aws-cloud-infrastructure1.jpg';

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

interface HeroSlide {
  id: string;
  category: string;
  shortLabel: string;
  bgImage: any;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 'devops',
    category: 'DevOps Automation',
    shortLabel: 'DevOps & CI/CD',
    bgImage: bgDevops,
    headlinePrefix: 'Continuous delivery with ',
    headlineHighlight: 'zero downtime.',
    description:
      'Automated CI/CD pipelines, Kubernetes container clusters, and Terraform IaC — engineered to scale effortlessly under peak enterprise workloads.',
    primaryCta: 'Explore DevOps',
    primaryHref: '#contact-form',
    secondaryCta: 'Book a Consultation',
    secondaryHref: '#contact-form',
  },
  {
    id: 'support',
    category: '24/7 Outsourced Support',
    shortLabel: '24/7 Tech Support',
    bgImage: bgSupport,
    headlinePrefix: 'Your brand, powered by ',
    headlineHighlight: 'expert SysAdmins.',
    description:
      'Round-the-clock white-label Level 1–3 technical support, real-time live chat, and helpdesk with a guaranteed sub-15m response SLA.',
    primaryCta: 'Explore Support Plans',
    primaryHref: '#contact-form',
    secondaryCta: 'Book a Consultation',
    secondaryHref: '#contact-form',
  },
  {
    id: 'hosting',
    category: 'Web Hosting Support',
    shortLabel: 'Web Hosting & Servers',
    bgImage: bgHosting,
    headlinePrefix: 'Mission-critical servers that ',
    headlineHighlight: 'never sleep.',
    description:
      'Proactive 24/7 server administration, cPanel/WHM management, zero-downtime migrations, and rebootless kernel live patching.',
    primaryCta: 'Explore Server Hosting',
    primaryHref: '#contact-form',
    secondaryCta: 'Book a Consultation',
    secondaryHref: '#contact-form',
  },
  {
    id: 'cloud',
    category: 'Multi-Cloud Operations',
    shortLabel: 'Cloud Infrastructure',
    bgImage: bgCloud,
    headlinePrefix: 'Enterprise cloud architected & ',
    headlineHighlight: 'cost-optimized.',
    description:
      'Certified AWS, Azure, and Google Cloud management with multi-region disaster recovery and proactive FinOps cost reduction.',
    primaryCta: 'Explore Cloud Ops',
    primaryHref: '#contact-form',
    secondaryCta: 'Book a Consultation',
    secondaryHref: '#contact-form',
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6.0 seconds per slide

export function HeroSection3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Parallax effects matching Hero design
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Slide navigation
  const goToSlide = useCallback((index: number, newDirection?: number) => {
    setDirection(newDirection !== undefined ? newDirection : index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  // Autoplay timer with progress bar
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const activeSlide = SLIDES[currentIndex];
  const prevIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
  const nextIndex = (currentIndex + 1) % SLIDES.length;
  const prevSlide = SLIDES[prevIndex];
  const nextSlide = SLIDES[nextIndex];

  // Silky, GPU-accelerated slide transition animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.7, 0, 0.84, 0] as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Background Image Slider with Smooth Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          style={{ y, scale, willChange: 'transform' }}
          className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden"
        >
          <img
            src={getImageSrc(activeSlide.bgImage)}
            alt={activeSlide.shortLabel}
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay layer adjusted to 35% */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Ambient glowing radial light behind active content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#FF8101]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Modern Left Side Navigation Control (Circle-free, borderless, no-cursor-morph) */}
      <button
        onClick={handlePrev}
        aria-label={`Previous offering: ${prevSlide.shortLabel}`}
        className="hero-nav-arrow no-cursor-morph absolute left-3 sm:left-6 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-30 group p-2 text-white/40 hover:text-[#FF8101] transition-colors duration-200 select-none focus-visible:outline-none rounded-full"
      >
        <ChevronLeft
          size={38}
          strokeWidth={1.5}
          className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] transition-transform duration-200 group-hover:-translate-x-1.5"
        />
      </button>

      {/* Modern Right Side Navigation Control (Circle-free, borderless, no-cursor-morph) */}
      <button
        onClick={handleNext}
        aria-label={`Next offering: ${nextSlide.shortLabel}`}
        className="hero-nav-arrow no-cursor-morph absolute right-3 sm:right-6 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-30 group p-2 text-white/40 hover:text-[#FF8101] transition-colors duration-200 select-none focus-visible:outline-none rounded-full"
      >
        <ChevronRight
          size={38}
          strokeWidth={1.5}
          className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] transition-transform duration-200 group-hover:translate-x-1.5"
        />
      </button>

      {/* Main Interactive Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full min-h-[100svh] w-full max-w-[1240px] flex-col justify-between pt-16 pb-8 sm:pt-20 sm:pb-10 px-12 sm:px-20 lg:px-24 text-center text-white"
      >
        {/* Invisible balance spacer */}
        <div aria-hidden="true" className="h-0" />

        {/* Center Section: 23+ Years Badge & Smooth Animated Slide Content Card */}
        <div className="my-auto flex flex-col items-center max-w-4xl mx-auto w-full relative">
          <YearsOfExcellenceBadge className="mb-3 sm:mb-4" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center text-center w-full"
            >
              {/* Dynamic Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.98] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] font-normal tracking-tight">
                {activeSlide.headlinePrefix}
                <HoverOrangeSpan>{activeSlide.headlineHighlight}</HoverOrangeSpan>
                {activeSlide.headlineSuffix && ` ${activeSlide.headlineSuffix}`}
              </h1>

              {/* Concise, High-Impact Description */}
              <p className="mt-4 sm:mt-5 max-w-xl text-[15px] md:text-[16px] font-normal text-white/95 leading-relaxed">
                {activeSlide.description}
              </p>

              {/* Focused Clean CTA Row */}
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={activeSlide.primaryHref}
                  className="cursor-morph rounded-full bg-[#FF8101] text-white px-6 py-3 text-sm font-medium hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8101] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-200 shadow-lg shadow-[#FF8101]/25 flex items-center gap-2"
                >
                  <span>{activeSlide.primaryCta}</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href={activeSlide.secondaryHref}
                  className="cursor-morph rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-200"
                >
                  {activeSlide.secondaryCta}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section: Global Trust Statement & Simplified Minimal Indicators */}
        <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5 mt-auto select-none">
          {/* Location & Trust Footer Statement */}
          <p className="text-xs sm:text-[13px] text-white/70 max-w-xl text-center leading-relaxed">
            Trusted by hosting companies and businesses worldwide. In business since 2003, headquartered in Chicago, IL, with three offshore delivery centres in South India.
          </p>

          {/* Simplified Minimal Slider Indicators Underneath */}
          <div className="flex items-center gap-2 pt-0.5">
            {SLIDES.map((_, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`cursor-morph relative h-1 rounded-full transition-all duration-300 overflow-hidden ${
                    isActive ? 'w-8 bg-white/25' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <span
                      className="block h-full bg-[#FF8101] rounded-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
