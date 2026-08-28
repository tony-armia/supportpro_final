'use client';

import { useState, useRef, type ReactNode } from 'react';
import {
  motion,
  useInView,
} from 'motion/react';
import {
  ShieldCheck,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Building2,
  User,
  Server,
  Cloud,
  Globe,
  Lock,
  Cpu,
  RefreshCw,
  Award,
  Check,
  Plus,
  Minus,
} from 'lucide-react';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/footer';
import ParticleBadge, { GlobalBadgeSpotlight } from '@/components/MagicBadge';
import imgCloudServer from '@/assets/Cloud and server management, mastered..png';

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

export default function CloudManagementPage() {
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState('');
  const [packCount, setPackCount] = useState(1);
  const [planSelected, setPlanSelected] = useState(true);
  const solutionGridRef = useRef<HTMLDivElement>(null);
  const industryGridRef = useRef<HTMLDivElement>(null);

  const solutionItems = [
    { num: '01', title: 'Secured infrastructure setup', icon: Lock },
    { num: '02', title: 'Weekly server audit on all instances', icon: ShieldCheck },
    { num: '03', title: '24/7/365 monitoring and worldwide technical support', icon: Globe },
    { num: '04', title: 'Explore and adopt new services from all new cloud provider', icon: Cloud },
    { num: '05', title: 'Server and infrastructure scalability based on your pricing', icon: Cpu },
    { num: '06', title: 'Free migration to new cloud infrastructure', icon: RefreshCw },
    { num: '07', title: 'Certified cloud experts', icon: Award },
  ];

  const industryItems = [
    'Web Hosting Services',
    'Service Providers',
    'E-Commerce Companies',
    'Software Vendors',
    'Web Developers',
    'ISPs',
  ];

  return (
    <main className="bg-cream dark:bg-[var(--sp-bg)] min-h-screen overflow-x-clip transition-colors duration-300">
      <Nav />

      {/* ─── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-28 overflow-hidden border-b border-ink/10 dark:border-white/10">
        <div className="relative mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.04] text-ink dark:text-white tracking-tight max-w-[850px]">
              Cloud Management
              <span className="text-[#FF8101]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-ink/75 dark:text-white/70 max-w-[760px] font-normal">
              SupportPRO Cloud Management Services help define, deploy, and leverage simplified, automated cloud
              management systems across multiple platforms and providers. We help our customers build cloud operations
              frameworks that provide for the management of public, private, and hybrid cloud environments.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#plans"
                className="cursor-morph inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-6 sm:px-7 py-3 text-sm font-medium hover:bg-[#FF8101]/90 transition-colors"
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
      </section>

      {/* ─── Cloud Management Services Section ─────────────────────────────────── */}
      <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-5">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight">
                  Cloud Management Services
                  <span className="text-[#FF8101]">.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground dark:text-white/70">
                  Cloud Management Services is essential to protect cloud services from its vulnerabilities. We monitor
                  and maintain the cloud services to ensure high uptime, security and speed. In case of any unscheduled
                  downtime, the services are restored within no time as we provide 24X7 support by employing the best-
                  certified system administrators.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground dark:text-white/70">
                  We also make sure that the cloud servers are updated with important security patches and take care of
                  optimizing your servers for the best possible performance. You will get the optimized, secure and
                  proactively monitored services for server management, which deliver differentiated and incremental
                  value to your business.
                </p>
              </Reveal>
            </div>

            {/* Image Visual Column */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden border border-ink/10 dark:border-white/15 bg-ink/[0.02] dark:bg-white/[0.02] p-2 sm:p-3">
                  <img
                    src={getImageSrc(imgCloudServer)}
                    alt="Cloud Management Services"
                    className="w-full h-auto object-cover rounded-2xl border border-ink/5 dark:border-white/10"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Complete Cloud Management Solution ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-cream dark:bg-[var(--sp-bg)] border-b border-ink/10 dark:border-white/10 relative">
        <GlobalBadgeSpotlight gridRef={solutionGridRef} spotlightRadius={400} />
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white max-w-[820px] tracking-tight">
              SupportPRO provides a complete cloud management solution with
              <span className="text-[#FF8101]">:</span>
            </h2>
          </Reveal>

          {/* 7 Items Editorial Grid */}
          <div ref={solutionGridRef} className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutionItems.map((item, idx) => (
              <Reveal key={item.num} delay={0.05 * idx} className="h-full">
                <ParticleBadge
                  enableStars={true}
                  clickEffect={true}
                  particleCount={5}
                  enableTilt={false}
                  className="h-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#151515] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FF8101]/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[13px] font-mono font-bold text-[#FF8101] bg-[#FF8101]/10 px-2.5 py-1 rounded-full shrink-0">
                      {item.num}
                    </span>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-ink dark:text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </ParticleBadge>
              </Reveal>
            ))}

            {/* Supporting Statement Banner */}
            <Reveal delay={0.4} className="md:col-span-2 lg:col-span-2">
              <div className="h-full rounded-2xl border border-[#FF8101]/30 bg-[#FF8101]/5 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <p className="text-[15px] sm:text-[17px] font-medium text-ink dark:text-white leading-relaxed">
                  We only charge you based on the number of instances you have with your cloud provider.
                </p>
                <a
                  href="#plans"
                  className="cursor-morph shrink-0 inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-5 py-2.5 text-[13px] font-semibold hover:bg-[#FF8101]/90 transition-colors"
                >
                  <span>View Plans</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Available Plans Section ───────────────────────────────────────────── */}
      <section id="plans" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-sm sm:text-base font-semibold tracking-wider uppercase text-ink/80 dark:text-white/80 mb-6">
              AVAILABLE PLANS
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/30 dark:bg-[#141414] p-6 sm:p-8">
              {/* Row Item */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-8 border-b border-ink/10 dark:border-white/10">
                {/* Left: Checkbox + Plan Name + Subtitle */}
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    onClick={() => setPlanSelected(!planSelected)}
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                      planSelected
                        ? 'bg-[#FF8101] border-[#FF8101] text-white'
                        : 'border-ink/20 dark:border-white/20 bg-white dark:bg-black/20'
                    }`}
                  >
                    {planSelected && <Check size={14} strokeWidth={3} />}
                  </button>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-ink dark:text-white">
                      Cloud Management
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/60 mt-0.5">
                      Cloud Management with $90/month
                    </p>
                  </div>
                </div>

                {/* Right: Quantity Stepper + Pack* + Price */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 pl-8 md:pl-0">
                  <div className="flex items-center gap-2.5">
                    {/* Modern Custom Quantity Stepper */}
                    <div className="inline-flex items-center rounded-full border border-ink/15 dark:border-white/20 bg-white dark:bg-black/30 p-1">
                      <button
                        type="button"
                        onClick={() => setPackCount((prev) => Math.max(1, prev - 1))}
                        disabled={packCount <= 1}
                        aria-label="Decrease quantity"
                        className="w-7 h-7 rounded-full flex items-center justify-center text-ink/70 dark:text-white/70 hover:bg-ink/5 dark:hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                      >
                        <Minus size={13} strokeWidth={2.5} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-ink dark:text-white select-none">
                        {packCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPackCount((prev) => Math.min(99, prev + 1))}
                        aria-label="Increase quantity"
                        className="w-7 h-7 rounded-full flex items-center justify-center text-ink/70 dark:text-white/70 hover:bg-ink/5 dark:hover:bg-white/10 transition-colors"
                      >
                        <Plus size={13} strokeWidth={2.5} />
                      </button>
                    </div>

                    <span className="text-xs sm:text-sm text-ink/80 dark:text-white/80 font-medium">
                      Pack<span className="text-red-500 font-bold ml-0.5">*</span>
                    </span>
                  </div>

                  <div className="text-right min-w-[70px]">
                    <span className="text-base sm:text-lg font-bold text-ink dark:text-white">
                      ${(90 * packCount).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 sm:gap-4">
                <a
                  href="#services"
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

          {/* Custom Plan Inquiry */}
          <Reveal delay={0.2}>
            <div className="mt-6 rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/20 dark:bg-[#121212] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-ink dark:text-white">
                  Are You Looking For A Custom Plan?
                </h3>
              </div>
              <a
                href="#contact"
                className="cursor-morph shrink-0 inline-flex items-center gap-2 rounded-full border border-ink/20 dark:border-white/20 bg-white dark:bg-transparent px-6 py-2 text-xs sm:text-sm font-medium text-ink dark:text-white hover:border-[#FF8101] hover:text-[#FF8101] dark:hover:border-[#FF8101] dark:hover:text-[#FF8101] transition-colors"
              >
                <span>Request For Quote</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Industry Solutions Section ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-cream dark:bg-[var(--sp-bg)] border-b border-ink/10 dark:border-white/10 relative">
        <GlobalBadgeSpotlight gridRef={industryGridRef} spotlightRadius={400} />
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight">
              Industry Solutions
              <span className="text-[#FF8101]">.</span>
            </h2>
          </Reveal>

          <div ref={industryGridRef} className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {industryItems.map((ind, i) => (
              <Reveal key={ind} delay={0.04 * i}>
                <ParticleBadge
                  enableStars={true}
                  clickEffect={true}
                  particleCount={4}
                  enableTilt={false}
                  className="rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#151515] p-5 sm:p-6 flex items-center justify-between hover:border-[#FF8101]/40 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0">
                      <Server size={16} />
                    </div>
                    <span className="text-[15px] font-semibold text-ink dark:text-white">
                      {ind}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground dark:text-white/40">
                    0{i + 1}
                  </span>
                </ParticleBadge>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Us Section ────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)]">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight mb-8">
                  Contact Us
                  <span className="text-[#FF8101]">.</span>
                </h2>

                <div className="space-y-6 sm:space-y-8">
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

            {/* Right Column: Contact Consultation Form */}
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

      {/* ─── Shared Footer ────────────────────────────────────────────────────── */}
      <SiteFooter />
    </main>
  );
}
