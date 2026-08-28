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
  Lock,
  Globe,
  Cpu,
  Award,
  Activity,
  Gauge,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  Code,
  Terminal,
  Wifi,
} from 'lucide-react';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/footer';
import ParticleBadge, { GlobalBadgeSpotlight } from '@/components/MagicBadge';
import imgNodeVirtualization from '@/assets/node-server-virtualization.jpg';
import imgNodeManagementIcon from '@/assets/illustration/nodemanagementicon.png';

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

export default function NodeManagementPage() {
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState('');
  const [packCount, setPackCount] = useState(1);
  const [planSelected, setPlanSelected] = useState(true);
  const featureGridRef = useRef<HTMLDivElement>(null);
  const industryGridRef = useRef<HTMLDivElement>(null);

  const featureItems = [
    {
      num: '01',
      title: '24/7/365 access to Level 3 engineers by email or live chat',
      icon: Activity,
    },
    {
      num: '02',
      title: 'State of the art infrastructure for complete reliability',
      icon: Server,
    },
    {
      num: '03',
      title: 'Software hardening to protect the integrity of your server',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Monitoring your servers health proactively',
      icon: Gauge,
    },
  ];

  const industryItems = [
    { name: 'Web Hosting Services', icon: Server },
    { name: 'Service Providers', icon: Globe },
    { name: 'E-Commerce Companies', icon: ShoppingBag },
    { name: 'Software Vendors', icon: Code },
    { name: 'Web Developers', icon: Terminal },
    { name: 'ISPs', icon: Wifi },
  ];

  return (
    <main className="bg-cream dark:bg-[var(--sp-bg)] min-h-screen overflow-x-clip transition-colors duration-300">
      <Nav />

      {/* ─── SECTION 1: Node Management (Hero / Intro) ──────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-28 overflow-hidden border-b border-ink/10 dark:border-white/10">
        <div className="relative mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.04] text-ink dark:text-white tracking-tight">
                  Node Management
                  <span className="text-[#FF8101]">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-ink/75 dark:text-white/70 max-w-[620px] font-normal">
                  Nobody takes support and customer care more seriously than SupportPRO. We provide support 24 hours a day, seven days a week, 365 days a year. What’s more, heroic support technicians are dedicated to taking ownership of your issue, no matter what is causing it, and getting to the root of the problem often in 30 minutes, or less.
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
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden border border-ink/10 dark:border-white/15 bg-white/40 dark:bg-white/[0.02] p-2.5 sm:p-3">
                  <img
                    src={getImageSrc(imgNodeVirtualization)}
                    alt="Node Management Virtualization"
                    className="w-full h-auto object-cover rounded-2xl border border-ink/5 dark:border-white/10 aspect-[4/3]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Node Management Services ─────────────────────────────────── */}
      <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Visual Illustration Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center">
              <Reveal delay={0.1} className="w-full flex justify-center">
                <img
                  src={getImageSrc(imgNodeManagementIcon)}
                  alt="Node Management Services"
                  className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </Reveal>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight">
                  Node Management Services
                  <span className="text-[#FF8101]">.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-muted-foreground dark:text-white/70">
                  Our Node Management plan offers support for configuring hypervisors, OS-level virtualization, Control Panel installation, VPS management, Backup management, VPS migrations, etc. We have a team of experts who are highly skilled in providing support for VMware, Hyper-V, KVM, OpenVZ, Parallels, and Virtuozzo with guaranteed response and resolution time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Node Management Features ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-cream dark:bg-[var(--sp-bg)] border-b border-ink/10 dark:border-white/10 relative">
        <GlobalBadgeSpotlight gridRef={featureGridRef} spotlightRadius={400} />
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10">
          <div ref={featureGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {featureItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.num} delay={0.03 * idx} className="h-full">
                  <ParticleBadge
                    enableStars={true}
                    clickEffect={true}
                    particleCount={4}
                    enableTilt={false}
                    className="relative w-full h-full min-h-[220px] sm:min-h-[240px] rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#151515] p-6 flex flex-col justify-between hover:border-[#FF8101]/40 transition-all duration-300 shadow-sm hover:shadow-lg group cursor-pointer !items-stretch !justify-between"
                  >
                    <div className="w-full h-full flex flex-col justify-between">
                      {/* Top Row: Icon at Left End & Number at Right End */}
                      <div className="w-full flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0 border border-[#FF8101]/15 group-hover:bg-[#FF8101] group-hover:text-white transition-all duration-300 shadow-sm">
                          <IconComp size={24} strokeWidth={1} />
                        </div>
                        <span className="text-sm font-mono font-bold text-ink/40 dark:text-white/40 group-hover:text-[#FF8101] transition-colors select-none">
                          {item.num}
                        </span>
                      </div>

                      {/* Bottom: Text */}
                      <div className="w-full mt-auto pt-6">
                        <h3 className="text-[15px] sm:text-[16px] font-semibold text-ink dark:text-white leading-snug tracking-tight group-hover:text-[#FF8101] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </ParticleBadge>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Available Plans ───────────────────────────────────────────── */}
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
            <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/30 dark:bg-[#141414] p-6 sm:p-8">
              {/* Row Item */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-8 border-b border-ink/10 dark:border-white/10">
                {/* Left: Checkbox + Plan Name + Subtitle */}
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    suppressHydrationWarning
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
                      Node Management
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/60 mt-0.5">
                      Node Management (Pack of 5 container)
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
                        suppressHydrationWarning
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
                        suppressHydrationWarning
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
                      ${(45 * packCount).toFixed(2)}
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
        </div>
      </section>

      {/* ─── SECTION 5: Custom Plan CTA ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-cream dark:bg-[var(--sp-bg)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#FF8101]/40 bg-gradient-to-br from-[#FF8101]/10 via-[#FF8101]/[0.03] to-transparent dark:from-[#FF8101]/15 dark:via-[#141414] dark:to-[#101010] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-lg shadow-[#FF8101]/5">
              <div className="space-y-1.5 z-10 max-w-xl">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink dark:text-white tracking-tight">
                  Looking For A Custom Plan?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/70 leading-relaxed">
                  Tailored virtualization topologies, dedicated Hypervisor engineering, multi-cluster management, and custom container volume pricing.
                </p>
              </div>
              <a
                href="#contact"
                className="cursor-morph z-10 shrink-0 inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#FF8101]/90 shadow-md shadow-[#FF8101]/20 transition-all hover:gap-3"
              >
                <span>Request For Quote</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 6: Contact Us ─────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10">
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

      {/* ─── SECTION 8: Industry Solutions ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-cream dark:bg-[var(--sp-bg)] relative border-b border-ink/10 dark:border-white/10">
        <GlobalBadgeSpotlight gridRef={industryGridRef} spotlightRadius={400} />
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight">
              Industry Solutions
              <span className="text-[#FF8101]">.</span>
            </h2>
          </Reveal>

          <div ref={industryGridRef} className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryItems.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <Reveal key={ind.name} delay={0.04 * i} className="h-full">
                  <ParticleBadge
                    enableStars={true}
                    clickEffect={true}
                    particleCount={4}
                    enableTilt={false}
                    className="h-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#151515] p-5 sm:p-6 flex items-center justify-between gap-4 hover:border-[#FF8101]/40 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="w-11 h-11 rounded-xl bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0 group-hover:bg-[#FF8101] group-hover:text-white transition-colors duration-200">
                        <IndIcon size={19} />
                      </div>
                      <span className="text-[15px] sm:text-[16px] font-semibold text-ink dark:text-white group-hover:text-[#FF8101] transition-colors leading-snug">
                        {ind.name}
                      </span>
                    </div>
                    <div className="shrink-0 pl-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-mono font-bold text-[#FF8101] bg-[#FF8101]/10 border border-[#FF8101]/25">
                        0{i + 1}
                      </span>
                    </div>
                  </ParticleBadge>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTIONS 9, 10, 11: About Us, Popular Plans, Legal / Footer ─────────── */}
      <SiteFooter />
    </main>
  );
}
