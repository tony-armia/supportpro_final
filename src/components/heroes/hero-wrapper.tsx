'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection1 } from './hero-1';
import { HeroSection2 } from './hero-2';
import { HeroSection3 } from './hero-3';
import { HeroSection4 } from './hero-4';
import { Sparkles, Award, Layers, Sliders, ChevronDown, Check } from 'lucide-react';

export const HERO_VARIANTS = [
  {
    id: 1,
    title: 'Hero 1: Cinematic Ambient',
    shortLabel: 'Hero 1',
    tagline: 'Ambient video loop with 23+ years badge',
    icon: Sparkles,
  },
  {
    id: 2,
    title: 'Hero 2: Delivery Centres & Badge',
    shortLabel: 'Hero 2',
    tagline: 'Headquarters & delivery centres with bottom-left exp badge',
    icon: Award,
  },
  {
    id: 3,
    title: 'Hero 3: Platform Offerings Slider',
    shortLabel: 'Hero 3',
    tagline: 'Smooth interactive slider with DevOps, Support & Hosting',
    icon: Layers,
  },
  {
    id: 4,
    title: 'Hero 4: Coverage Estimator',
    shortLabel: 'Hero 4',
    tagline: 'Executive fleet size slider & ROI calculator',
    icon: Sliders,
  },
];

export function HeroWrapper({ initialHero }: { initialHero?: number }) {
  const searchParams = useSearchParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [currentHero, setCurrentHero] = useState<number>(() => {
    if (initialHero && initialHero >= 1 && initialHero <= 4) return initialHero;
    const fromUrl = searchParams.get('hero');
    if (fromUrl && [1, 2, 3, 4].includes(Number(fromUrl))) {
      return Number(fromUrl);
    }
    return 1;
  });

  // Sync with searchParams if changed via nav
  useEffect(() => {
    const fromUrl = searchParams.get('hero');
    if (fromUrl && [1, 2, 3, 4].includes(Number(fromUrl))) {
      setCurrentHero(Number(fromUrl));
    }

    const handleCustomSwitch = (e: any) => {
      if (e.detail && [1, 2, 3, 4].includes(Number(e.detail))) {
        setCurrentHero(Number(e.detail));
      }
    };

    window.addEventListener('supportpro:switch-hero', handleCustomSwitch);
    return () => {
      window.removeEventListener('supportpro:switch-hero', handleCustomSwitch);
    };
  }, [searchParams]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchHero = (heroId: number) => {
    setCurrentHero(heroId);
    setDropdownOpen(false);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('supportpro_selected_hero', String(heroId));
      } catch (e) {}

      // Update URL search parameter smoothly without full reload
      const url = new URL(window.location.href);
      url.searchParams.set('hero', String(heroId));
      window.history.pushState({}, '', url.toString());
      window.dispatchEvent(new CustomEvent('supportpro:switch-hero', { detail: heroId }));
    }
  };

  const activeVariant = HERO_VARIANTS.find((v) => v.id === currentHero) || HERO_VARIANTS[0];
  const ActiveIcon = activeVariant.icon;

  return (
    <div className="relative w-full">
      {/* Active Hero Variant Rendering */}
      <div key={currentHero} className="w-full">
        {currentHero === 1 && <HeroSection1 />}
        {currentHero === 2 && <HeroSection2 />}
        {currentHero === 3 && <HeroSection3 />}
        {currentHero === 4 && <HeroSection4 />}
      </div>

      {/* Very compact floating dropdown selection at bottom left */}
      <div ref={dropdownRef} className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 z-40">
        <div className="relative">
          {/* Dropdown Menu (Pops upward) */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-[calc(100%+8px)] left-0 w-48 rounded-2xl bg-[#141820]/95 backdrop-blur-xl border border-white/15 p-1.5 shadow-2xl shadow-black/80 overflow-hidden text-white"
              >
                <div className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider text-white/40 border-b border-white/10 mb-1">
                  Hero Variant
                </div>
                <div className="space-y-0.5">
                  {HERO_VARIANTS.map((variant) => {
                    const isActive = currentHero === variant.id;
                    const Icon = variant.icon;
                    return (
                      <button
                        key={variant.id}
                        onClick={() => switchHero(variant.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left text-xs transition-colors cursor-morph ${
                          isActive
                            ? 'bg-[#FF8101] text-white font-semibold shadow-md shadow-[#FF8101]/30'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <Icon size={13} className={isActive ? 'text-white' : 'text-[#FF8101] shrink-0'} />
                          <span className="truncate">{variant.shortLabel}</span>
                        </div>
                        {isActive && <Check size={12} strokeWidth={3} className="shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Compact Pill Button */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="cursor-morph flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141820]/90 hover:bg-[#141820] backdrop-blur-xl border border-white/20 hover:border-[#FF8101]/50 text-white text-xs font-medium shadow-xl shadow-black/50 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8101] animate-pulse shrink-0" />
            <ActiveIcon size={12} className="text-[#FF8101]" />
            <span className="font-semibold">{activeVariant.shortLabel}</span>
            <ChevronDown
              size={12}
              className={`text-white/60 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
