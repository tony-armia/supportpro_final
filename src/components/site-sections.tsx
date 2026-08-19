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

import awsCertLogo from "@/assets/logos 2/image 86.png";
import redHatCertLogo from "@/assets/logos 2/image 87.png";
import cPanelPartnerLogo from "@/assets/logos 2/image 88.png";
import msftCertLogo from "@/assets/logos 2/image 89.png";
import iso9001Logo from "@/assets/logos 2/image 90.png";
import iso27001Logo from "@/assets/logos 2/image 91.png";
import aicpaSocLogo from "@/assets/logos 2/image 92.png";

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
    icon: <img src={awsCertLogo} alt="AWS Certified" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
  },
  {
    name: "Red Hat Certified",
    color: "#EE0000",
    icon: <img src={redHatCertLogo} alt="Red Hat Certified" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
  },
  {
    name: "cPanel Partner",
    color: "#F26522",
    icon: <img src={cPanelPartnerLogo} alt="cPanel Partner" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
  },
  {
    name: "Microsoft Certified",
    color: "#737373",
    icon: <img src={msftCertLogo} alt="Microsoft Certified" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
  },
  {
    name: "ISO 9001:2015",
    color: "#1D4ED8",
    icon: <img src={iso9001Logo} alt="ISO 9001:2015" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
  },
  {
    name: "ISO 27001",
    color: "#1D4ED8",
    icon: <img src={iso27001Logo} alt="ISO 27001" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
  },
  {
    name: "AICPA SOC",
    color: "#1E293B",
    icon: <img src={aicpaSocLogo} alt="AICPA SOC" className="w-[40px] h-auto object-contain shrink-0 rounded-[100px]" />,
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
            <div className="flex w-max animate-marquee flex-nowrap items-center gap-4">
              {[...credentials, ...credentials, ...credentials].map((c, i) => (
                <ParticleBadge
                  key={i}
                  enableMagnetism={false}
                  className="flex shrink-0 items-center gap-3 border border-ink/10 dark:border-[#333] px-5 py-2.5 cursor-pointer bg-white dark:bg-[#1C1C1C] rounded-[100px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-ink/20 dark:hover:border-[#FF8101]/40 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(255,129,1,0.1)] group"
                >
                  <span className="flex items-center shrink-0 min-w-[40px] justify-center">{c.icon}</span>
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
                  className="text-[11px] font-medium"
                  style={{ color: "oklch(0.65 0.16 50)" }}
                >
                  Our standards
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
            className="w-[252px] h-[288px] flex-shrink-0 relative isolate overflow-hidden group flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-[rgba(255,255,255,0.02)] border border-ink/10 dark:border-[#333] transition-colors duration-400 hover:border-[#FF8101]/70 dark:hover:border-[#FF8101]/50 cursor-pointer"
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
                className="text-[#FF8101] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
              <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.03] text-ink dark:text-white max-w-[400px]">
                Why we call ourselves
                <br />
                <em className="font-normal italic text-ink/70 dark:text-white/70">the experts</em>
                <span className="text-[#FF8101]">.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <h4 className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[1.05] text-ink dark:text-white">
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
                <div className="w-14 h-14 rounded-full border border-[#FF8101]/30 bg-[#FF8101]/5 flex items-center justify-center text-[#FF8101]">
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
                backgroundImage: `radial-gradient(#FF8101 1px, transparent 1px)`,
                backgroundSize: `14px 14px`,
              }}
            />

            <Reveal delay={0.2} className="relative z-10">
              <div className="text-[12px] font-semibold text-[#FF8101] mb-2 tracking-normal">
                Our numbers
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
                      ${i === 0 ? "border-b border-r border-ink/10 pb-8 lg:pb-10 hover:border-[#FF8101]/70" : ""}
                      ${i === 1 ? "border-b border-ink/10 pb-8 lg:pb-10 hover:border-[#FF8101]/70" : ""}
                      ${i === 2 ? "border-r border-ink/10 pt-8 lg:pt-10 hover:border-[#FF8101]/70" : ""}
                      ${i === 3 ? "pt-8 lg:pt-10" : ""}
                    `}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FF8101]/10 flex items-center justify-center text-ink mb-6">
                      <s.Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="font-display text-3xl sm:text-4xl lg:text-[46px] text-ink dark:text-white mb-4 tracking-tight">
                      <Counter to={s.to} decimals={s.decimals ?? 0} />
                    </div>
                    <div className="w-8 h-[2px] bg-[#FF8101] mb-4 transition-all duration-500 group-hover/metric:w-12" />
                    <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-muted-foreground font-medium leading-relaxed">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer text */}
              <div className="mt-8 flex items-center gap-3">
                {/* <div className="w-0.5 h-4 bg-[#FF8101]" /> */}
                {/* <div className="text-[13px] text-muted-foreground font-medium">
                  Built on experience. Proven by numbers.
                </div> */}
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
    <section id="contact-form" className="bg-cream dark:bg-[var(--sp-bg)] pb-16 pt-16 md:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-[28px] md:rounded-[36px] border border-ink/5 dark:border-white/10 bg-white/80 dark:bg-[#151515] p-5 md:p-8 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Info */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-10 lg:border-r lg:border-ink/5">
              <Reveal>
                <h2 className="font-display text-3xl md:text-[44px] leading-[1.05] text-ink dark:text-white mb-4">
                  Drop us a <br />
                  <span className="italic font-serif">message</span>
                  <span className="text-[#FF8101]">.</span>
                </h2>
                <div className="w-10 h-[2.5px] bg-[#FF8101] my-6" />
                <p className="text-[13px] leading-relaxed text-muted-foreground max-w-sm mb-8">
                  Tell us about your infrastructure and support requirements. A senior engineer will
                  get back to you with a scoped proposal, SLA options, and pricing.
                </p>

                <div className="space-y-6 pt-6 border-t border-ink/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0">
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
                    <div className="w-10 h-10 rounded-full bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0">
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
                    <div className="w-10 h-10 rounded-full bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0">
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30 transition-colors group-focus-within:text-[#FF8101]"
                        size={16}
                        strokeWidth={1.5}
                      />
                      <input
                        required
                        placeholder="Full name"
                        className="w-full rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF8101]/10"
                      />
                    </div>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 transition-colors group-focus-within:text-[#FF8101]"
                        size={16}
                        strokeWidth={1.5}
                      />
                      <input
                        required
                        type="email"
                        placeholder="Work email"
                        className="w-full rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF8101]/10"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Building2
                      size={16}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 transition-colors group-focus-within:text-[#FF8101]"
                    />
                    <input
                      placeholder="Company"
                      className="w-full rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF8101]/10"
                    />
                  </div>

                  <div className="relative flex-1">
                    <MessageSquare
                      className="absolute left-4 top-4 text-ink/30 transition-colors group-focus-within:text-[#FF8101]"
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
                      className="w-full resize-none rounded-2xl border border-ink/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 pt-3 pb-8 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF8101]/10"
                    />
                    <span className="absolute right-4 bottom-3 text-[11px] text-ink/30 dark:text-white/30 font-mono select-none">
                      {message.length} / 500
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[13px] text-muted-foreground pt-1 pb-1">
                    <ShieldCheck size={16} className="text-[#FF8101] shrink-0" />
                    <span>Your information is secure and will never be shared.</span>
                  </div>

                  <button
                    type="submit"
                    className="cursor-morph w-full rounded-full bg-[#FF8101] text-white py-3.5 px-6 text-[14px] font-medium transition-all hover:bg-[#FF8101]/90 flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#FF8101]/50"
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
