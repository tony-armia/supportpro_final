'use client';

import { useState, useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Building2,
  User,
  ShieldCheck,
  Plus,
  Minus,
  Check,
} from 'lucide-react';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/footer';
import ParticleBadge, { GlobalBadgeSpotlight } from '@/components/MagicBadge';
import imgHireDeveloper from '@/assets/hire-a-developer.png';

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HireADeveloperPage() {
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState('');
  const [hoursCount, setHoursCount] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<number>(1);

  const capabilityGridRef = useRef<HTMLDivElement>(null);

  // Exact 11 development / request items preserved verbatim
  const developmentRequests = [
    {
      num: '01',
      title: 'Billing system module creation and customization.',
      detail: 'E.g., WHMCS, HostBill, AutoHoster, etc.',
    },
    {
      num: '02',
      title: 'Integration of billing systems with CMS websites.',
      detail: 'E.g., WHMCS with WordPress.',
    },
    {
      num: '03',
      title: 'CMS plugin creation.',
      detail: 'E.g., WordPress, Joomla, Drupal, etc.',
    },
    {
      num: '04',
      title: 'Custom websites by using a CMS like Joomla, Drupal, WordPress, etc.',
      detail: '',
    },
    {
      num: '05',
      title: 'Custom JavaScript, jQuery function development.',
      detail: '',
    },
    {
      num: '06',
      title: 'Payment gateway integration, like Authorize.net, PayPal, Stripe, etc.',
      detail: '',
    },
    {
      num: '07',
      title: 'Custom website development using PHP frameworks like CakePHP, Laraval, YII, Zend, Angular, Node, React Native, etc.',
      detail: '',
    },
    {
      num: '08',
      title: 'Native or hybrid mobile app development for iOS and Android platforms.',
      detail: '',
    },
    {
      num: '09',
      title: 'Social media website development featuring streaming media, community portal, etc.',
      detail: '',
    },
    {
      num: '10',
      title: 'E-commerce software module development.',
      detail: 'E.g., Magento module creation.',
    },
    {
      num: '11',
      title: 'Browser plugin creation.',
      detail: 'E.g., Firefox, Google Chrome, etc.',
    },
  ];

  return (
    <main className="bg-cream dark:bg-[var(--sp-bg)] min-h-screen overflow-x-clip transition-colors duration-300">
      <Nav />

      {/* ─── SECTION 1: Editorial Hero & Introduction ─────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-28 overflow-hidden border-b border-ink/10 dark:border-white/10">
        <div className="relative mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.04] text-ink dark:text-white tracking-tight">
                  Hire a Developer
                  <span className="text-[#FF8101]">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-ink/75 dark:text-white/70 max-w-[620px] font-normal">
                  Hire a Senior Software Developer to develop software for your company or for a third party. Suited for small and medium scale non-IT companies for developing their in-house technical requirements, or for entrepreneurs and individuals with the passion for developing a software solution.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#plans"
                    className="cursor-morph inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-6 sm:px-7 py-3 text-sm font-semibold hover:bg-[#FF8101]/90 transition-colors"
                  >
                    <span>Available Plans</span>
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="#contact"
                    className="cursor-morph inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-white/15 bg-white/50 dark:bg-white/5 px-6 sm:px-7 py-3 text-sm font-medium text-ink dark:text-white hover:border-[#FF8101] hover:text-[#FF8101] dark:hover:border-[#FF8101] dark:hover:text-[#FF8101] transition-colors"
                  >
                    <span>Contact Us</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <Reveal delay={0.2} className="w-full flex justify-center">
                <img
                  src={getImageSrc(imgHireDeveloper)}
                  alt="Hire a Developer - Senior Software Engineering"
                  className="w-full max-w-[480px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02] rounded-3xl"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Development / Request Capabilities Grid ──────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10 relative">
        <GlobalBadgeSpotlight gridRef={capabilityGridRef} spotlightRadius={400} />
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="max-w-[820px] mb-10 sm:mb-14">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-muted-foreground dark:text-white/70">
                A wide range of software, extending from individual website applications to multi- system server software may require custom configuration. The following are a few of the more common setup and configuration requests we’ve received:
              </p>
            </div>
          </Reveal>

          {/* Unified Single Container for the 11 points */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl sm:rounded-3xl border border-ink/10 dark:border-white/10 bg-cream/30 dark:bg-[#141414] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-ink/10 dark:divide-white/10">
                {/* Left Column (01 - 06) */}
                <div className="divide-y divide-ink/10 dark:divide-white/10">
                  {developmentRequests.slice(0, 6).map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 p-5 sm:p-6 transition-colors hover:bg-[#FF8101]/[0.03] dark:hover:bg-white/[0.02] group"
                    >
                      <div className="shrink-0 mt-0.5">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono font-bold text-[#FF8101] bg-[#FF8101]/10 border border-[#FF8101]/25 group-hover:bg-[#FF8101] group-hover:text-white transition-colors">
                          {item.num}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <h3 className="text-[14px] sm:text-[15px] font-semibold text-ink dark:text-white group-hover:text-[#FF8101] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        {item.detail && (
                          <p className="text-xs sm:text-[13px] text-muted-foreground dark:text-white/60 leading-relaxed font-mono">
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column (07 - 11) */}
                <div className="divide-y divide-ink/10 dark:divide-white/10">
                  {developmentRequests.slice(6, 11).map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 p-5 sm:p-6 transition-colors hover:bg-[#FF8101]/[0.03] dark:hover:bg-white/[0.02] group"
                    >
                      <div className="shrink-0 mt-0.5">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono font-bold text-[#FF8101] bg-[#FF8101]/10 border border-[#FF8101]/25 group-hover:bg-[#FF8101] group-hover:text-white transition-colors">
                          {item.num}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <h3 className="text-[14px] sm:text-[15px] font-semibold text-ink dark:text-white group-hover:text-[#FF8101] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        {item.detail && (
                          <p className="text-xs sm:text-[13px] text-muted-foreground dark:text-white/60 leading-relaxed font-mono">
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 3: Available Plans (Shared SupportPRO Component Style) ───── */}
      <section id="plans" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-ink dark:text-white tracking-tight">
                Available Plans
                <span className="text-[#FF8101]">.</span>
              </h2>
              <span className="text-xs font-mono text-muted-foreground dark:text-white/40">
                Transparent Pricing
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/30 dark:bg-[#141414] p-6 sm:p-8 space-y-6">
              {/* Row 1: Hourly Programming Work */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-ink/10 dark:border-white/10">
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedPlan(1)}
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                      selectedPlan === 1
                        ? 'bg-[#FF8101] border-[#FF8101] text-white'
                        : 'border-ink/20 dark:border-white/20 bg-white dark:bg-black/20'
                    }`}
                  >
                    {selectedPlan === 1 && <Check size={14} strokeWidth={3} />}
                  </button>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-ink dark:text-white">
                      Hourly Programming Work
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/60 mt-0.5">
                      Hourly Programming Work
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 pl-8 md:pl-0">
                  <div className="flex items-center gap-2.5">
                    <div className="inline-flex items-center rounded-full border border-ink/15 dark:border-white/20 bg-white dark:bg-black/30 p-1">
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setHoursCount((prev) => Math.max(1, prev - 1))}
                        disabled={hoursCount <= 1}
                        aria-label="Decrease hours"
                        className="w-7 h-7 rounded-full flex items-center justify-center text-ink/70 dark:text-white/70 hover:bg-ink/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                      >
                        <Minus size={13} strokeWidth={2.5} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-ink dark:text-white select-none">
                        {hoursCount}
                      </span>
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setHoursCount((prev) => Math.min(99, prev + 1))}
                        aria-label="Increase hours"
                        className="w-7 h-7 rounded-full flex items-center justify-center text-ink/70 dark:text-white/70 hover:bg-ink/5 dark:hover:bg-white/10 transition-colors"
                      >
                        <Plus size={13} strokeWidth={2.5} />
                      </button>
                    </div>

                    <span className="text-xs sm:text-sm text-ink/80 dark:text-white/80 font-medium">
                      Hours<span className="text-red-500 font-bold ml-0.5">*</span>
                    </span>
                  </div>

                  <div className="text-right min-w-[85px]">
                    <span className="text-base sm:text-lg font-bold text-ink dark:text-white">
                      ${(480 * hoursCount).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2: Dedicated Programmer */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-ink/10 dark:border-white/10">
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedPlan(2)}
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                      selectedPlan === 2
                        ? 'bg-[#FF8101] border-[#FF8101] text-white'
                        : 'border-ink/20 dark:border-white/20 bg-white dark:bg-black/20'
                    }`}
                  >
                    {selectedPlan === 2 && <Check size={14} strokeWidth={3} />}
                  </button>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-ink dark:text-white">
                      Dedicated Programmer
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/60 mt-0.5 max-w-xl">
                      Dedicated PHP, Angular, Node.js, React native, Meteor js, Android or IOS developers
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end pl-8 md:pl-0">
                  <div className="text-right min-w-[85px]">
                    <span className="text-base sm:text-lg font-bold text-ink dark:text-white">
                      $2400.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: Senior Dedicated Programmer */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-ink/10 dark:border-white/10">
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedPlan(3)}
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                      selectedPlan === 3
                        ? 'bg-[#FF8101] border-[#FF8101] text-white'
                        : 'border-ink/20 dark:border-white/20 bg-white dark:bg-black/20'
                    }`}
                  >
                    {selectedPlan === 3 && <Check size={14} strokeWidth={3} />}
                  </button>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-ink dark:text-white">
                      Dedicated Programmer
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/60 mt-0.5 max-w-xl">
                      Senior dedicated PHP, Angular, Node.js, React native, Meteor js, Android or IOS developers
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end pl-8 md:pl-0">
                  <div className="text-right min-w-[85px]">
                    <span className="text-base sm:text-lg font-bold text-ink dark:text-white">
                      $3400.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 sm:gap-4 pt-2">
                <a
                  href="#contact"
                  className="cursor-morph inline-flex items-center justify-center rounded-full border border-ink/20 dark:border-white/20 bg-white dark:bg-transparent px-6 py-2.5 text-xs sm:text-sm font-medium text-ink dark:text-white hover:border-[#FF8101] hover:text-[#FF8101] dark:hover:border-[#FF8101] dark:hover:text-[#FF8101] transition-colors"
                >
                  Continue Shopping
                </a>
                <a
                  href="#contact"
                  className="cursor-morph inline-flex items-center justify-center rounded-full bg-[#008000] text-white px-7 py-2.5 text-xs sm:text-sm font-semibold hover:bg-[#007000] transition-colors"
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 4: Custom Plan CTA ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-cream dark:bg-[var(--sp-bg)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#141414] p-8 sm:p-12 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-sm">
              <div className="max-w-[600px]">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-ink dark:text-white tracking-tight">
                  Are You Looking For A Custom Plan?
                </h2>
              </div>

              <div className="shrink-0">
                <a
                  href="#contact"
                  className="cursor-morph inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-8 py-4 text-sm font-semibold hover:bg-[#FF8101]/90 transition-all shadow-sm"
                >
                  <span>Request For Quote</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 5: Contact Us Section ────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)]">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight">
                  Contact Us
                  <span className="text-[#FF8101]">.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4 sm:space-y-5">
                  {/* Sales and Support Block */}
                  <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/40 dark:bg-[#151515] p-6">
                    <h3 className="text-[16px] font-bold text-ink dark:text-white mb-4 flex items-center gap-2">
                      <Phone size={17} className="text-[#FF8101]" />
                      Sales and Support
                    </h3>
                    <div className="space-y-3 text-[14px]">
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">Phone:</span>
                        <a href="tel:18476076123" className="font-medium text-ink dark:text-white hover:text-[#FF8101] transition-colors">
                          1-(847)-607-6123
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">Sales:</span>
                        <a href="mailto:sales@supportpro.com" className="font-medium text-ink dark:text-white hover:text-[#FF8101] transition-colors">
                          sales@supportpro.com
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">Support:</span>
                        <a href="mailto:support@supportpro.com" className="font-medium text-ink dark:text-white hover:text-[#FF8101] transition-colors">
                          support@supportpro.com
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">MS Team:</span>
                        <span className="font-medium text-ink dark:text-white">
                          support@supportpro.com
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Postal Address Block */}
                  <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/40 dark:bg-[#151515] p-6">
                    <h3 className="text-[16px] font-bold text-ink dark:text-white mb-3 flex items-center gap-2">
                      <MapPin size={17} className="text-[#FF8101]" />
                      Postal Address
                    </h3>
                    <p className="text-[14px] leading-relaxed text-ink/80 dark:text-white/80">
                      1020 Milwaukee Ave, #245,<br />
                      Deerfield, IL-60015<br />
                      USA
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Quote Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-ink/10 dark:border-white/10 bg-cream/40 dark:bg-[#151515] p-6 sm:p-8 md:p-10">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink dark:text-white">
                      Request For Quote
                    </h3>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSent(true);
                    }}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                          size={16}
                        />
                        <input
                          required
                          suppressHydrationWarning
                          placeholder="Full name"
                          className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                        />
                      </div>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                          size={16}
                        />
                        <input
                          required
                          type="email"
                          suppressHydrationWarning
                          placeholder="Work email"
                          className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Building2
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                      />
                      <input
                        placeholder="Company"
                        suppressHydrationWarning
                        className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare
                        className="absolute left-4 top-4 text-ink/30 dark:text-white/30"
                        size={16}
                      />
                      <textarea
                        required
                        rows={4}
                        maxLength={500}
                        suppressHydrationWarning
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        className="w-full resize-none rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 pt-3 pb-8 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                      />
                      <span className="absolute right-4 bottom-3 text-[11px] text-ink/30 dark:text-white/30 font-mono select-none">
                        {message.length} / 500
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[12px] text-muted-foreground dark:text-white/60">
                      <ShieldCheck size={16} className="text-[#FF8101] shrink-0" />
                      <span>Your information is secure and will never be shared.</span>
                    </div>

                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="cursor-morph w-full rounded-full bg-[#FF8101] text-white py-3.5 px-6 text-[14px] font-semibold transition-all hover:bg-[#FF8101]/90 flex items-center justify-center gap-2"
                    >
                      {formSent ? 'Request Received' : 'Request For Quote'}
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Site Footer ────────────────────────────────────────────────────── */}
      <SiteFooter />
    </main>
  );
}
