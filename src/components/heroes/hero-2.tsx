'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HoverOrangeSpan } from '@/components/hover-orange-span';
import award23Img from '@/assets/award-23.png';

import awsCertLogo from '@/assets/logos 2/image 86.png';
import redHatCertLogo from '@/assets/logos 2/image 87.png';
import cPanelPartnerLogo from '@/assets/logos 2/image 88.png';
import msftCertLogo from '@/assets/logos 2/image 89.png';
import iso9001Logo from '@/assets/logos 2/image 90.png';
import iso27001Logo from '@/assets/logos 2/image 91.png';
import aicpaSocLogo from '@/assets/logos 2/image 92.png';

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

const credentials = [
  {
    name: 'ISO 9001:2015',
    icon: <img src={getImageSrc(iso9001Logo)} alt="ISO 9001:2015" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
  {
    name: 'ISO 27001',
    icon: <img src={getImageSrc(iso27001Logo)} alt="ISO 27001" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
  {
    name: 'AICPA SOC',
    icon: <img src={getImageSrc(aicpaSocLogo)} alt="AICPA SOC" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
  {
    name: 'AWS Certified',
    icon: <img src={getImageSrc(awsCertLogo)} alt="AWS Certified" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
  {
    name: 'Red Hat Certified',
    icon: <img src={getImageSrc(redHatCertLogo)} alt="Red Hat Certified" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
  {
    name: 'cPanel Partner',
    icon: <img src={getImageSrc(cPanelPartnerLogo)} alt="cPanel Partner" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
  {
    name: 'Microsoft Certified',
    icon: <img src={getImageSrc(msftCertLogo)} alt="Microsoft Certified" className="w-[28px] sm:w-[32px] h-auto object-contain shrink-0 rounded-full" />,
  },
];

export function HeroSection2() {
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
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8">
      {/* Background Video */}
      <motion.video
        ref={videoRef}
        src="/forhero2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ y, scale, willChange: 'transform' }}
        className="absolute inset-0 h-full w-full object-cover parallax-img"
      >
        <source src="/forhero2.mp4" type="video/mp4" />
      </motion.video>

      {/* Cinematic Dip-to-Dark transition masking the video loop point */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-500 ease-in-out ${
          isLoopDipping ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark overlay layers for enhanced contrast and depth */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Main Center Content Area */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center max-w-[1152px] px-5 text-center text-white md:px-6 lg:px-8 my-auto py-4"
      >
        {/* Top headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[78px] leading-[0.98] max-w-5xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] break-words"
        >
          Enterprise infrastructure
          <br />
          support that <HoverOrangeSpan>never sleeps.</HoverOrangeSpan>
        </motion.h1>

        {/* Subtitle with increased width */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 sm:mt-5 max-w-3xl text-[15px] sm:text-[16px] md:text-[17px] font-normal text-white/95 dark:text-white/90 leading-relaxed"
        >
          Specialising in <strong className="font-semibold text-white">DevOps &amp; web hosting support</strong>.
          We deliver 24/7 managed infrastructure, cloud operations, and white-label support — keeping your systems secure, fast, and always online.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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

        {/* Trusted & Company Info with increased width */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 sm:mt-5 text-sm text-white/80 max-w-2xl leading-relaxed"
        >
          Trusted by hosting companies and businesses worldwide. In business since 2003, headquartered in{' '}
          <span className="text-white font-medium">Chicago, IL</span>, with three offshore delivery centres in{' '}
          <span className="text-white font-medium">South India</span>.
        </motion.p>
      </motion.div>

      {/* Bottom Strip: 23 Years Experience Container (Left) + Scrolling Certifications Marquee (Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95 }}
        className="relative z-20 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 mt-2"
      >
        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-5 bg-black/45 backdrop-blur-xl border border-white/15 p-2 sm:p-2.5 rounded-2xl md:rounded-full shadow-2xl shadow-black/60">
          
          {/* Left: 23 Years Experience Badge Container */}
          <div className="shrink-0 flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2 rounded-xl md:rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 transition-all duration-200">
            <img
              src={getImageSrc(award23Img)}
              alt="23 Years Experience"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
              width={36}
              height={36}
            />
            <div className="text-left whitespace-nowrap">
              <span className="font-display text-sm sm:text-base font-bold text-white tracking-[0.08em] leading-none block">
                23 Years
              </span>
              <span className="text-[10px] sm:text-[11px] text-white/70 font-sans tracking-[0.04em] block mt-0.5">
                of Experience
              </span>
            </div>
          </div>

          {/* Right: Scrolling Certifications Marquee */}
          <div className="flex-1 w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)]">
            <div className="flex w-max animate-marquee flex-nowrap items-center gap-3">
              {[...credentials, ...credentials, ...credentials].map((c, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="flex items-center shrink-0 justify-center">
                    {c.icon}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-white/80 whitespace-nowrap">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
