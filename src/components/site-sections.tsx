import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import ParticleBadge, { GlobalBadgeSpotlight } from "./MagicBadge";
import {
  MessageCircle,
  Clock,
  ShieldCheck as ShieldIcon,
  ShieldCheck,
  ArrowRight,
  Calendar,
  Headset,
  Zap,
  Award,
  User,
  Mail,
  Building2,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { HoverOrangeSpan } from "@/components/hover-orange-span";
import pillarsHeroImg from "@/assets/NOC and DevOps engineered for scale..png";
import awsLogo from "@/assets/logos/image 67.png";
import googleCloudLogo from "@/assets/logos/image 68.png";
import azureLogo from "@/assets/logos/image 69.png";
import digitalOceanLogo from "@/assets/logos/image 70.png";
import redHatLogo from "@/assets/logos/image 71.png";
import windowsServerLogo from "@/assets/logos/image 72.png";
import openStackLogo from "@/assets/logos/image 73.png";
import vmwareLogo from "@/assets/logos/image 74.png";
import cPanelLogo from "@/assets/logos/image 75.png";
import pleskLogo from "@/assets/logos/image 76.png";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Credentials / accreditations ---------- */

const credentials = [
  {
    name: "AWS Certified",
    color: "#FF9900",
    icon: (
      <svg
        width="28"
        height="17"
        viewBox="0 0 304 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.4 66.4c0 3.8.4 6.9 1.1 9.1.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.4 0 1-.6 2.1-1.9 3.1l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.5-1.4-1.5-2.6-3-3.6-4.6-1-1.6-2-3.4-3.1-5.6-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.1-4.9-4.7-7.4-11-7.4-18.9 0-8.4 2.9-15.2 8.8-20.2 5.9-5 13.8-7.5 23.8-7.5 3.3 0 6.7.3 10.2.8 3.5.5 7.1 1.3 10.9 2.2v-6.9c0-7.2-1.5-12.2-4.4-15.1-3-2.9-8.1-4.3-15.4-4.3-3.3 0-6.7.4-10.2 1.3-3.5.9-6.9 2-10.2 3.4-.9.4-1.6.6-2 .7-.4.1-.7.2-1 .2-1 0-1.5-.7-1.5-2.2v-3.4c0-1.1.1-2 .4-2.5.3-.5.8-1 1.7-1.5 3.3-1.7 7.3-3.1 11.9-4.2 4.6-1.2 9.5-1.7 14.7-1.7 11.2 0 19.4 2.5 24.6 7.6 5.1 5.1 7.7 12.8 7.7 23.1v30.4h.1zm-40.6 15.2c3.2 0 6.5-.6 10-1.8 3.5-1.2 6.6-3.4 9.2-6.4 1.5-1.8 2.7-3.8 3.3-6.1.6-2.3 1-5 1-8.3V55c-2.8-.7-5.8-1.3-8.9-1.7-3.1-.4-6.1-.6-9.1-.6-6.5 0-11.3 1.3-14.5 3.9-3.2 2.6-4.8 6.3-4.8 11.2 0 4.6 1.2 8 3.6 10.3 2.3 2.4 5.7 3.5 10.2 3.5zm78.2 10.5c-1.1 0-1.9-.2-2.4-.6-.5-.3-1-.9-1.4-2L97.6 30.3c-.4-1.2-.6-2-.6-2.4 0-1 .5-1.5 1.5-1.5h6.1c1.2 0 2 .2 2.4.6.5.3 1 .9 1.3 2l17.8 70.2 16.6-70.2c.3-1.2.8-1.8 1.3-2 .5-.3 1.4-.6 2.5-.6h5c1.2 0 2 .2 2.5.6.5.3 1 .9 1.3 2l16.8 71 18.3-71c.3-1.2.8-1.8 1.3-2 .5-.3 1.3-.6 2.4-.6h5.8c1 0 1.5.5 1.5 1.5 0 .3-.1.6-.1.9l-.4 1.5-22 59.2c-.4 1.2-.9 1.8-1.4 2-.5.3-1.3.6-2.4.6h-5.4c-1.2 0-2-.2-2.5-.6-.5-.3-1-.9-1.3-2l-16.6-68.9-16.5 68.9c-.3 1.2-.8 1.8-1.3 2-.5.3-1.4.6-2.5.6h-5.4zm117.4 2.5c-3.3 0-6.6-.4-9.8-1.2-3.2-.8-5.7-1.7-7.4-2.7-1-.6-1.7-1.2-2-1.9-.3-.6-.4-1.3-.4-1.9v-3.5c0-1.5.6-2.2 1.7-2.2.4 0 .8.1 1.2.2.4.1 1 .4 1.6.7 2.2 1 4.6 1.7 7.1 2.2 2.6.5 5.1.8 7.7.8 4.1 0 7.3-.7 9.5-2.2 2.2-1.4 3.3-3.5 3.3-6.2 0-1.8-.6-3.3-1.7-4.6-1.1-1.2-3.2-2.3-6.2-3.4l-8.9-2.8c-4.5-1.4-7.8-3.5-9.9-6.3-2.1-2.7-3.1-5.8-3.1-9.1 0-2.6.6-4.9 1.7-6.9 1.1-2 2.6-3.8 4.5-5.2 1.9-1.5 4-2.6 6.5-3.3 2.5-.8 5.1-1.1 7.9-1.1 1.4 0 2.8.1 4.1.3 1.4.2 2.7.4 3.9.7 1.2.3 2.3.6 3.4 1 1.1.4 1.9.8 2.5 1.2.8.5 1.4 1 1.7 1.6.3.5.5 1.2.5 2.1v3.2c0 1.5-.6 2.2-1.7 2.2-.6 0-1.5-.3-2.8-.8-4.2-1.9-8.9-2.8-14.1-2.8-3.7 0-6.6.6-8.6 1.9-2 1.2-3 3.2-3 5.9 0 1.8.6 3.4 1.9 4.6 1.3 1.2 3.6 2.4 6.9 3.5l8.7 2.8c4.4 1.4 7.6 3.4 9.6 5.9 2 2.5 3 5.4 3 8.6 0 2.7-.5 5.1-1.6 7.2-1.1 2.1-2.6 3.9-4.6 5.4-2 1.5-4.4 2.7-7.1 3.5-2.8.8-5.9 1.3-9.2 1.3z"
          fill="#252F3E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 5.8 7.6z"
          fill="#FF9900"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: "Red Hat Certified",
    color: "#EE0000",
    icon: (
      <svg
        width="26"
        height="20"
        viewBox="0 0 128 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="64" cy="48" rx="62" ry="46" fill="#EE0000" />
        <path d="M38 56c0 0 14 8 32 8s28-6 28-6-8-18-28-18c-12 0-32 16-32 16z" fill="#CC0000" />
        <path d="M38 56s-4-8 6-20c6-7.3 14-10 22-10 10 0 16 4 16 4L64 48l-26 8z" fill="#820000" />
        <ellipse cx="64" cy="26" rx="22" ry="10" fill="#CC0000" />
      </svg>
    ),
  },
  {
    name: "cPanel Partner",
    color: "#F26522",
    icon: (
      <svg
        width="24"
        height="20"
        viewBox="0 0 80 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="64" rx="5" fill="#F26522" />
        <text
          x="40"
          y="44"
          fontFamily="Arial Black,sans-serif"
          fontSize="32"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
        >
          cP
        </text>
      </svg>
    ),
  },
  {
    name: "Microsoft Certified",
    color: "#737373",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
        <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "ISO 9001:2015",
    color: "#1D4ED8",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#1D4ED8" strokeWidth="1.5" />
        <path
          d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"
          stroke="#1D4ED8"
          strokeWidth="1.5"
        />
        <path d="M4.9 6h14.2M4.9 18h14.2" stroke="#1D4ED8" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "ISO 27001",
    color: "#1D4ED8",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L3 7v5c0 5.25 3.9 10.15 9 11.35C17.1 22.15 21 17.25 21 12V7L12 2z"
          stroke="#1D4ED8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#1D4ED8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "AICPA SOC",
    color: "#1E293B",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1E293B" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h10M7 16h5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "BBB Accredited",
    color: "#003087",
    icon: (
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="18" height="24" rx="3" fill="#003087" />
        <text
          x="9"
          y="17"
          fontFamily="Arial Black,sans-serif"
          fontSize="11"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
        >
          BBB
        </text>
      </svg>
    ),
  },
];

export function Credentials() {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24 relative overflow-hidden">
      <GlobalBadgeSpotlight gridRef={gridRef} />
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10" ref={gridRef}>
        {/* Location tag */}
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-12">
            {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" style={{ color: "oklch(0.65 0.16 50)" }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
            </svg> */}
            <p className="text-center text-[13px] text-muted-foreground dark:text-[var(--sp-text-muted)]">
              In business since 2003 — headquartered in{" "}
              <span className="text-ink dark:text-[var(--sp-text-primary)] font-medium">Chicago, IL</span>, with three offshore
              delivery centres in <span className="text-ink dark:text-[var(--sp-text-primary)] font-medium">South India</span>.
            </p>
          </div>
        </Reveal>

        {/* Credential badges */}
        <Reveal delay={0.1}>
          <div className="flex overflow-hidden relative -mx-6 px-6 md:mx-0 md:px-0 pb-4 pt-1">
            <div className="flex w-max animate-marquee flex-nowrap items-center gap-3">
              {[...credentials, ...credentials, ...credentials].map((c, i) => (
                <ParticleBadge
                  key={i}
                  enableMagnetism={false}
                  className="flex shrink-0 items-center gap-2.5 border border-ink/10 dark:border-[#333] px-5 py-3 cursor-pointer bg-white dark:bg-[#1C1C1C] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-ink/20 dark:hover:border-[#FF8101]/40 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(255,129,1,0.1)] group"
                >
                  <span className="flex items-center shrink-0">{c.icon}</span>
                  <span className="text-[13px] font-medium text-ink/80 dark:text-white/60 group-hover:text-ink/90 dark:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {c.name}
                  </span>
                </ParticleBadge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Three core pillars ---------- */

const pillars = [
  {
    title: "Transparent technical support",
    body: "White-labelled support means your clients never know somebody outside your company handles their queries. As far as they are concerned, every response comes from your organisation. Our techs become your techs.",
    Icon: MessageCircle,
  },
  {
    title: "24/7 customer support",
    body: "Our engineers are at your service 24 hours a day, seven days a week, 365 days a year. We listen to every server problem, address every query, and stay with it until you are completely satisfied.",
    Icon: Clock,
  },
  {
    title: "Proactive server management",
    body: "We look after the most fragile part of your operation — your infrastructure. Rather than waiting for something to break, we take preventive measures to keep environments secure, patched, and stable.",
    Icon: ShieldIcon,
  },
];

export function Pillars() {
  return (
    <section className="bg-cream dark:bg-[var(--sp-bg)] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        {/* Top split: heading left + large image right */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch mb-12 md:mb-16">
          {/* Left: eyebrow + heading + description */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="block h-px w-8" style={{ background: "oklch(0.65 0.16 50)" }} />
                <span
                  className="text-[10px] tracking-[0.2em] uppercase font-medium"
                  style={{ color: "oklch(0.65 0.16 50)" }}
                >
                  Our Standards
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] text-ink dark:text-white leading-[1.05]">
                The outsourced <HoverOrangeSpan>technical support experts</HoverOrangeSpan>
                <span style={{ color: "oklch(0.65 0.16 50)" }}>.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground dark:text-[rgba(245,245,242,0.6)] max-w-sm">
                We provide 24/7 transparent technical support for web hosting companies, data
                centres, server management companies, and MSPs — quietly, under your brand, at
                enterprise standards.
              </p>
            </Reveal>
          </div>

          {/* Right: large image */}
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={0.1} className="h-full">
              <div className="relative h-[340px] md:h-[420px] overflow-hidden rounded-[28px] bg-ink/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.22)]">
                <img
                  src={pillarsHeroImg}
                  alt="Engineers collaborating at monitoring stations in a modern operations centre"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-5 lg:gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="group relative flex flex-col rounded-2xl border border-ink/8 dark:border-white/10 bg-white dark:bg-[#1C1C1C] p-5 lg:p-6 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-sm tabular-nums text-muted-foreground/60 dark:text-white/30">
                  0{i + 1}
                </span>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-[#FF8101]/10 dark:text-[#FF8101]"
                  style={{ background: "oklch(0.96 0.04 60)", color: "oklch(0.62 0.18 50)" }}
                >
                  <p.Icon size={18} strokeWidth={1.5} />
                </div>
              </div>

              {/* Animated underline divider */}
              <div
                className="mb-5 h-px w-8 transition-all duration-500 group-hover:w-full dark:bg-[#FF8101]"
                style={{ background: "oklch(0.65 0.16 50)" }}
              />

              <h3 className="font-display text-2xl leading-snug text-ink dark:text-white mb-3">{p.title}</h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground dark:text-white/60 flex-1">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Supported platforms grid ---------- */

const platformCards = [
  { name: "Amazon Web Services", logo: awsLogo },
  { name: "Google Cloud", logo: googleCloudLogo },
  { name: "Microsoft Azure", logo: azureLogo },
  { name: "DigitalOcean", logo: digitalOceanLogo },
  { name: "Red Hat", logo: redHatLogo },
  { name: "Windows Server", logo: windowsServerLogo },
  { name: "OpenStack", logo: openStackLogo },
  { name: "VMware", logo: vmwareLogo },
  { name: "cPanel", logo: cPanelLogo },
  { name: "Plesk", logo: pleskLogo },
];

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: typeof platformCards;
  reverse?: boolean;
}) => {
  // Duplicate exactly once — CSS translates -50% which equals exactly 1 set, seamless loop
  const loopItems = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loopItems.map((p, i) => (
          <ParticleBadge
            key={i}
            enableMagnetism={false}
            enableTilt={false}
            enableStars={true}
            clickEffect={true}
            particleCount={5}
            className="w-[252px] h-[288px] flex-shrink-0 relative isolate overflow-hidden group flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-[rgba(255,255,255,0.02)] border border-ink/10 dark:border-[#333] transition-colors duration-400 hover:border-[#FF6C2C]/70 dark:hover:border-[#FF8101]/50 cursor-pointer"
          >
            {/* Logo */}
            <div className="mb-6 flex h-[72px] w-[156px] items-center justify-center transition-transform duration-400 group-hover:-translate-y-1.5 dark:opacity-80">
              <img
                src={p.logo}
                alt=""
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Name + Arrow */}
            <div className="absolute bottom-7 left-0 w-full flex justify-center items-center gap-1.5">
              <span className="text-[13px] font-medium text-ink/60 group-hover:text-ink/90 transition-colors duration-300">
                {p.name}
              </span>
              <ArrowRight
                size={13}
                className="text-[#FF6C2C] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </div>
          </ParticleBadge>
        ))}
      </div>
    </div>
  );
};

export function Platforms() {
  const row1 = platformCards.slice(0, 5);
  const row2 = platformCards.slice(5, 10);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-cream dark:bg-[var(--sp-bg)] pb-16 lg:pb-24 overflow-hidden relative">
      <GlobalBadgeSpotlight gridRef={gridRef} spotlightRadius={400} />
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 text-center mb-12 relative z-10">
        <Reveal>
          <h2 className="font-display text-3xl md:text-[44px] text-ink dark:text-[var(--sp-text-primary)]">
            Supported <HoverOrangeSpan>platforms.</HoverOrangeSpan>
          </h2>
          <p className="mx-auto mt-5 max-w-[420px] text-[14px] leading-relaxed text-muted-foreground/80 dark:text-[rgba(167,167,163,0.80)]">
            Covering every major technology platform to bring you excellent outsourced support.
          </p>
        </Reveal>
      </div>

      <div className="relative w-full space-y-3 z-10" ref={gridRef}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}

/* ---------- Numbers ---------- */

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

const stats = [
  { to: 965422, label: "Helpdesk tickets handled", Icon: Calendar },
  { to: 456343, label: "Live chats attended", Icon: Headset },
  { to: 5.1, decimals: 1, label: "Average resolution hours", Icon: Clock },
  { to: 15, label: "Average response minutes", Icon: Zap },
];

export function Experts() {
  return (
    <section className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Left Side: Why we are the experts */}
          <div>
            <Reveal>
              <h2 className="font-display text-5xl md:text-[56px] leading-[1.03] text-ink dark:text-white max-w-[400px]">
                Why we call ourselves
                <br />
                <em className="font-normal italic text-ink/70 dark:text-white/70">the experts</em>
                <span className="text-[#FF6C2C]">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <h4 className="mt-6 font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.05] text-ink dark:text-white">
                Technical excellence.
                <br />
                Process discipline.
              </h4>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground max-w-[420px]">
                Since our inception 23 years ago we have been learning and pioneering in outsourced
                technical support. We measure the metrics and key process indicators behind every
                engagement, and evaluate ourselves constantly so the service stays consistent time
                after time. Every ticket is treated with the utmost importance.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground max-w-[420px]">
                We have developed a stringent quality assurance process on par with any industry
                standard. We love solving problems, and that is what drives our engineers day and
                night. Our commitment to quality and process has earned us ISO 9001:2015
                certification.
              </p>

              {/* ISO Badge */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-[#FF6C2C]/30 bg-[#FF6C2C]/5 flex items-center justify-center text-[#FF6C2C]">
                  <Award size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-ink dark:text-white">ISO 9001:2015 Certified</div>
                  <div className="text-[13px] text-muted-foreground dark:text-white/60 mt-0.5">
                    Quality processes. Measurable results.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Our Numbers */}
          <div className="relative">
            {/* Dot Pattern Background */}
            <div
              className="absolute -right-8 lg:-right-16 top-10 w-32 lg:w-48 h-[80%] opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#FF6C2C 1px, transparent 1px)`,
                backgroundSize: `14px 14px`,
              }}
            />

            <Reveal delay={0.2} className="relative z-10">
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#FF6C2C] mb-2">
                OUR NUMBERS
              </div>
              <div className="text-[14px] text-muted-foreground mb-8">
                Measured from January 2015 to today.
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`group/metric pl-6 lg:pl-8 flex flex-col items-start transition-colors duration-500
                      ${i === 0 ? "border-b border-r border-ink/10 pb-8 lg:pb-10 hover:border-[#FF6C2C]/70" : ""}
                      ${i === 1 ? "border-b border-ink/10 pb-8 lg:pb-10 hover:border-[#FF6C2C]/70" : ""}
                      ${i === 2 ? "border-r border-ink/10 pt-8 lg:pt-10 hover:border-[#FF6C2C]/70" : ""}
                      ${i === 3 ? "pt-8 lg:pt-10" : ""}
                    `}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FF6C2C]/10 flex items-center justify-center text-ink mb-6">
                      <s.Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="font-display text-4xl lg:text-[46px] text-ink dark:text-white mb-4 tracking-tight">
                      <Counter to={s.to} decimals={s.decimals ?? 0} />
                    </div>
                    <div className="w-8 h-[2px] bg-[#FF6C2C] mb-4 transition-all duration-500 group-hover/metric:w-12" />
                    <div className="whitespace-nowrap text-[12px] lg:text-[13px] text-muted-foreground font-medium leading-relaxed">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer text */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-0.5 h-4 bg-[#FF6C2C]" />
                <div className="text-[13px] text-muted-foreground font-medium">
                  Built on experience. Proven by numbers.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <section id="contact-form" className="bg-cream dark:bg-[var(--sp-bg)] pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="rounded-[36px] border border-ink/5 dark:border-white/10 bg-white/80 dark:bg-[#151515] p-5 md:p-8 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Info */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-10 lg:border-r lg:border-ink/5">
              <Reveal>
                <h2 className="font-display text-3xl md:text-[44px] leading-[1.05] text-ink dark:text-white mb-4">
                  Drop us a <br />
                  <span className="italic font-serif">message</span>
                  <span className="text-[#FF6C2C]">.</span>
                </h2>
                <div className="w-10 h-[2.5px] bg-[#FF6C2C] my-6" />
                <p className="text-[13px] leading-relaxed text-muted-foreground max-w-sm mb-8">
                  Tell us about your infrastructure and support requirements. A senior engineer will
                  get back to you with a scoped proposal, SLA options, and pricing.
                </p>

                <div className="space-y-6 pt-6 border-t border-ink/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6C2C]/10 text-[#FF6C2C] flex items-center justify-center shrink-0">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-ink dark:text-white leading-tight">
                        Headquarters
                      </h4>
                      <p className="text-[13px] text-muted-foreground mt-0.5">
                        Chicago, IL, United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6C2C]/10 text-[#FF6C2C] flex items-center justify-center shrink-0">
                      <Building2 size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-ink leading-tight">
                        Delivery centres
                      </h4>
                      <p className="text-[13px] text-muted-foreground mt-0.5">
                        3 ODCs in South India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6C2C]/10 text-[#FF6C2C] flex items-center justify-center shrink-0">
                      <Clock size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-ink leading-tight">
                        Support desk
                      </h4>
                      <p className="text-[13px] text-muted-foreground mt-0.5">Available 24/7/365</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={0.1}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-5 lg:gap-6"
                >
                  {/* Two inputs row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30 transition-colors group-focus-within:text-[#FF6C2C]"
                        size={16}
                        strokeWidth={1.5}
                      />
                      <input
                        required
                        placeholder="Full name"
                        className="w-full rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10"
                      />
                    </div>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 transition-colors group-focus-within:text-[#FF6C2C]"
                        size={16}
                        strokeWidth={1.5}
                      />
                      <input
                        required
                        type="email"
                        placeholder="Work email"
                        className="w-full rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Building2
                      size={16}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 transition-colors group-focus-within:text-[#FF6C2C]"
                    />
                    <input
                      placeholder="Company"
                      className="w-full rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10"
                    />
                  </div>

                  <div className="relative flex-1">
                    <MessageSquare
                      className="absolute left-4 top-4 text-ink/30 transition-colors group-focus-within:text-[#FF6C2C]"
                      size={16}
                      strokeWidth={1.5}
                    />
                    <textarea
                      required
                      rows={5}
                      maxLength={500}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What do you need support with?"
                      className="w-full resize-none rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 pt-3 pb-8 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10"
                    />
                    <span className="absolute right-4 bottom-3 text-[11px] text-ink/30 dark:text-white/30 font-mono select-none">
                      {message.length} / 500
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground pt-1 pb-1">
                    <ShieldCheck size={16} className="text-[#FF6C2C] shrink-0" />
                    <span>Your information is secure and will never be shared.</span>
                  </div>

                  <button
                    type="submit"
                    className="cursor-morph w-full rounded-full bg-[#FF6C2C] text-white py-3.5 px-6 text-[14px] font-medium transition-all hover:bg-[#FF6C2C]/90 flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#FF6C2C]/50"
                  >
                    {sent ? "Message received" : "Send message"}
                    <ArrowRight size={18} />
                  </button>

                  <p className="text-center text-[12px] text-muted-foreground/70 pt-1">
                    We typically respond within a few hours.
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
