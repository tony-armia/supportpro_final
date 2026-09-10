'use client';

import { useState, useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
  useMotionValueEvent,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";
import {
  Plus,
  Lock,
  ShieldCheck,
  FileCheck2,
  Activity,
  ChevronDown,
  ArrowRight,
  Minus,
  BookOpen,
  Sun,
  Moon,
  CloudCog,
  Database,
  Cloud,
  LayoutGrid,
  GitMerge,
  Cpu,
  Server,
  UserCheck,
  UserPlus,
  Users,
  Headphones,
  MessageCircle,
  Clock,
  Star,
  X,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";
import { useTheme } from "@/context/ThemeContext";
import { HoverOrangeSpan } from "@/components/hover-orange-span";
import { YearsOfExcellenceBadge } from "@/components/years-of-excellence-badge";
import heroImg from "@/assets/hero.png";
import talkImg from "@/assets/talk.jpg";
import ctaImg from "@/assets/cta.jpg";
import sliderEngineer from "@/assets/slider-engineer.jpg";
import sliderLandscape from "@/assets/slider-landscape.jpg";
import sliderDatacenter from "@/assets/slider-datacenter.jpg";
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import feature3 from "@/assets/feature-3.jpg";
import feature4 from "@/assets/feature-4.jpg";
import logoWhite from "@/assets/SupportPRO-logo (1) 1.svg";
import logoBlack from "@/assets/SupportPRO-logo black.svg";
import img247Support from "@/assets/247 expert support, always on..png";
import imgCloudServer from "@/assets/Cloud and server management, mastered..png";
import imgWhiteLabel from "@/assets/Gemini_Generated_Image_5fco595fco595fco.png";
import imgNocDevops from "@/assets/NOC and DevOps engineered for scale..png";
import imgJustOpenTicket from "@/assets/Just open a ticket.png";
import imgCalmIncident from "@/assets/Calm through every incident.png";
import imgInfraExpert from "@/assets/Infrastructure in expert hands.png";
import { Credentials, Platforms, Experts, ContactForm } from "@/components/site-sections";

const getImageSrc = (img: any): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && "src" in img) return img.src;
  return String(img);
};

const testimonials = [
  {
    quote:
      "SupportPRO has done an excellent job of providing first line support to our customers. Their team goes the extra mile and even has walked our customers through importing data into a MySQL database.",
    name: "Toby Wolf",
    image: "/avatars/toby.jpg",
  },
  {
    quote:
      "We use SupportPRO for all of our Systems Administration for 11 servers, and they handle all of our tickets as well. We have had ZERO problems with them, and I highly recommend them to anyone.",
    name: "Eric W.",
    image: "/avatars/eric.jpg",
  },
  {
    quote:
      "Our customer base is growing every day because of their great service and support. We always count on their knowledge and expertise. Whenever we need, they always give us immediate support 24/7 around the clock.",
    name: "TYWIT Solutions Group",
    image: "/avatars/tywit.jpg",
  },
  {
    quote:
      "White-labelled helpdesk that our customers never notice is outsourced. Every ticket is handled with the professionalism our brand demands.",
    name: "Managed hosting provider",
    image: "/avatars/managed.jpg",
  },
  {
    quote:
      "Their NOC caught an infrastructure issue at 3 a.m. and had it resolved before our on-call engineer even opened the alert.",
    name: "SaaS platform, EU",
    image: "/avatars/saas.jpg",
  },
  {
    quote:
      "Migrating our workloads to AWS with SupportPRO was seamless. Clear communication, zero downtime, measurable cost savings.",
    name: "MSP, North America",
    image: "/avatars/msp.jpg",
  },
];

const faqs = [
  {
    q: "What services does SupportPRO offer?",
    a: "We provide 24/7 technical support, server and cloud management, NOC monitoring, DevOps, helpdesk, security management, and white-label MSP services across Linux, Windows, AWS, Azure, and Google Cloud environments.",
  },
  {
    q: "How does white-label support work?",
    a: "Our engineers operate under your brand — your logo, your ticketing system, your voice. Your customers experience seamless support while our team handles the technical execution behind the scenes.",
  },
  {
    q: "Is SupportPRO truly available 24/7?",
    a: "Yes. Our global engineering teams operate around the clock, every day of the year. Critical issues are acknowledged within minutes and escalated through defined response tiers.",
  },
  {
    q: "Which cloud platforms do you manage?",
    a: "We are certified across AWS, Microsoft Azure, and Google Cloud, and manage complex hybrid and multi-cloud deployments for hosting providers, SaaS companies, and enterprises.",
  },
  {
    q: "What does your NOC service include?",
    a: "Continuous infrastructure monitoring, proactive incident response, capacity analysis, and detailed reporting — designed to keep production environments stable and predictable.",
  },
  {
    q: "Do you support MSPs and hosting providers?",
    a: "Absolutely. A significant part of our business is dedicated to MSP and hosting support — from Level 1 helpdesk to advanced server and infrastructure engineering under your brand.",
  },
  {
    q: "How is our data and infrastructure secured?",
    a: "Every engagement follows strict access controls, hardened workflows, audited procedures, and modern security tooling. Security management is embedded in every service we deliver.",
  },
  {
    q: "How do we get started?",
    a: "Reach out for a discovery call. We assess your environment, define scope, agree SLAs, and onboard your systems with a structured transition plan — typically live within days.",
  },
];

/* Word-by-word reveal as element enters view — the signature Novu effect. */
function RevealText({
  children,
  className = "",
  as = "p",
}: {
  children: string;
  className?: string;
  as?: "h3" | "p" | "h2";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const words = children.split(" ");
  const Tag = as as "p";
  return (
    <div ref={ref} className={className}>
      <Tag className="contents">
        {words.map((w, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {w}
            </Word>
          );
        })}
      </Tag>
    </div>
  );
}

function Word({
  progress,
  range,
  children,
}: {
  progress: any;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}




function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <motion.img
        src={getImageSrc(heroImg)}
        alt=""
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0 h-full w-full object-cover parallax-img"
        width={1600}
        height={1008}
        fetchPriority="high"
        decoding="sync"
      />
      {/* Dark overlay layers for enhanced contrast and depth */}
      <div className="absolute inset-0 bg-black/15" />
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
            className="cursor-morph rounded-full bg-[#FF8101] text-white px-6 py-3 text-sm font-medium hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8101] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-200"
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

const serviceGroups: Array<{ heading: string; items: string[] }> = [
  {
    heading: "Support",
    items: [
      "24/7 Technical Support",
      "White-label Support",
      "Helpdesk Services",
      "End-user Tech Support",
      "Hosting Support",
      "MSP Support",
    ],
  },
  {
    heading: "Infrastructure",
    items: [
      "Server Management",
      "Linux Administration",
      "Windows Administration",
      "Infrastructure Monitoring",
      "Data Centre Operations",
      "NOC Services",
    ],
  },
  {
    heading: "Cloud & DevOps",
    items: [
      "Cloud Infrastructure Management",
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "DevOps",
      "Infrastructure Optimization",
    ],
  },
  {
    heading: "Enterprise",
    items: [
      "Managed IT Services",
      "Security Management",
      "Performance Monitoring",
      "Incident Response",
      "Technical Consulting",
    ],
  },
];

function ServiceRow({
  group,
  index,
}: {
  group: { heading: string; items: string[] };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [hovered, setHovered] = useState(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.current = e.clientX - rect.left;
        mouseY.current = e.clientY - rect.top;
        if (rafId.current === null) {
          rafId.current = requestAnimationFrame(() => {
            setMouse({ x: mouseX.current, y: mouseY.current });
            rafId.current = null;
          });
        }
      }}
      className="group relative border-t border-ink/10 dark:border-white/10 py-5 sm:py-8 lg:py-12 cursor-default overflow-hidden"
    >
      {/* Spotlight follow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, oklch(0.35 0.15 100 / 0.10), transparent 60%)`,
        }}
      />
      {/* Sweep underline */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px bg-[#FF8101] origin-left z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative grid grid-cols-12 gap-4 md:gap-10 items-baseline">
        <div className="hidden md:flex md:col-span-2 items-baseline gap-4">
          <span className="font-display text-sm text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <motion.h4
          className="col-span-12 md:col-span-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95]"
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {group.heading}
        </motion.h4>

        <div className="col-span-12 md:col-span-6 flex flex-wrap gap-2">
          {group.items.map((it, j) => (
            <motion.span
              key={it}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08 + 0.2 + j * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="service-pill inline-flex items-center rounded-full border border-ink/15 dark:border-[#333] bg-white/60 dark:bg-[#1C1C1C] backdrop-blur-sm px-4 py-2 text-[13px] text-ink/80 dark:text-white/80 hover:border-ink/40 dark:hover:border-[#FF8101]/35 hover:bg-white dark:hover:bg-[#2A2A2A] hover:text-ink dark:hover:text-[#FF8101] transition-colors"
            >
              {it}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-cream dark:bg-[var(--sp-surface)] py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-8">
            <InView>
              <h3 className="font-display text-3xl sm:text-4xl md:text-6xl text-ink leading-[1] tracking-tight">
                Every service
                <br />
                your infrastructure
                <br />
                <em className="italic font-normal text-ink/70 dark:text-[var(--sp-text-secondary)]">
                  <HoverOrangeSpan>depends on.</HoverOrangeSpan>
                </em>
              </h3>
            </InView>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-6">
            <InView delay={0.15}>
              <p className="text-[14px] text-muted-foreground dark:text-[var(--sp-text-muted)] leading-relaxed max-w-sm">
                One partner for the full stack — from Level 1 helpdesk to multi-cloud engineering,
                security, and around-the-clock incident response.
              </p>
            </InView>
          </div>
        </div>

        <div className="border-b border-ink/10 dark:border-white/10">
          {serviceGroups.map((g, i) => (
            <ServiceRow key={g.heading} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const stickyBlocks = [
  {
    title: "NOC and DevOps engineered for scale.",
    body: "Continuous infrastructure monitoring, automated CI/CD pipelines, container orchestration, and 24/7 incident response built to keep complex hosting environments and cloud workloads stable, secure, and ready to grow.",
    img: imgNocDevops,
    alt: "Engineers at multi-monitor NOC workstations with cloud architecture and DevOps dashboards",
    caption: "24/7 NOC & DevOps",
  },
  {
    title: "Proactive hosting and server management.",
    body: "Enterprise server administration tailored for web hosts, SaaS, and MSPs. From bare-metal and cloud clusters to cPanel, Plesk, Linux, and Windows — maintained with continuous security hardening, kernel patches, and zero-downtime updates.",
    img: imgCloudServer,
    alt: "Engineer with tablet managing server racks in a modern data centre facility",
    caption: "Managed hosting infrastructure",
  },
  {
    title: "24/7 hosting support — always on.",
    body: "Round-the-clock technical support for web hosting companies and cloud platforms. Our certified engineers listen to every server alert, troubleshoot customer tickets, and stay on duty 24/7/365 until incidents are fully resolved.",
    img: img247Support,
    alt: "Support engineer monitoring live tickets and analytics dashboards in a bright modern office",
    caption: "Live hosting incident response",
  },
  {
    title: "Transparent white-label hosting support.",
    body: "White-labelled Tier 1 to Tier 3 support where your hosting clients never know an external team handles their queries. Every response is delivered under your brand, ticketing system, and voice. Our engineers become your team.",
    img: imgWhiteLabel,
    alt: "Two professionals collaborating on a laptop with analytics monitors in the background",
    caption: "White-label for hosting providers",
  },
] as const;

const EASE = [0.22, 0.61, 0.36, 1] as const;

function StickyPhoneSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      stickyBlocks.length - 1,
      Math.max(0, Math.floor(v * stickyBlocks.length + 0.0001)),
    );
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const b = stickyBlocks[active];
  const onLeft = active % 2 === 0;

  const Copy = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -14, scale: 0.98 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="max-w-sm will-change-transform"
      >
        <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink/40 dark:text-white/40">
          <span className="tabular-nums">0{active + 1}</span>
          <span className="h-px w-8 bg-ink/20 dark:bg-white/20" />
        </div>
        <h3 className="font-display text-4xl lg:text-5xl leading-[1.05] text-ink dark:text-white">{b.title}</h3>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground dark:text-white/70">{b.body}</p>
        <a
          href="#contact-form"
          className="mt-8 inline-flex items-center gap-2 text-sm text-ink dark:text-white/90 border-b border-ink/25 dark:border-white/25 pb-1 transition-colors hover:border-ink dark:hover:border-white dark:hover:text-white"
        >
          Talk to an engineer
        </a>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-cream dark:bg-[var(--sp-bg)] rounded-t-[32px] sm:rounded-t-[40px] -mt-3 sm:-mt-5 pb-10 sm:pb-16 lg:pb-24"
    >
      {/* Scroll runway: one viewport per feature */}
      <div style={{ height: `${stickyBlocks.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="mx-auto flex h-full max-w-[1152px] items-center px-5 md:px-6 lg:px-8">
            <motion.div
              layout
              transition={{ duration: 0.7, ease: EASE }}
              className={`hidden md:flex w-full items-center gap-10 lg:gap-16 ${onLeft ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Copy */}
              <div
                className={`w-[34%] shrink-0 flex ${onLeft ? "justify-start" : "justify-end text-right"}`}
              >
                <div className={onLeft ? "" : "[&_.mb-4]:justify-end"}>{Copy}</div>
              </div>

              {/* Large visual */}
              <div className="flex-1">
                <motion.div
                  layout
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative w-full aspect-[16/11] max-h-[76vh] overflow-hidden rounded-[32px] bg-ink/5 ring-1 ring-ink/10"
                >
                  {stickyBlocks.map((s, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      initial={false}
                      animate={{
                        opacity: active === i ? 1 : 0,
                        scale: active === i ? 1 : 1.04,
                      }}
                      transition={{ duration: 0.75, ease: EASE, delay: active === i ? 0.06 : 0 }}
                    >
                      <img
                        src={getImageSrc(s.img)}
                        alt={s.alt}
                        width={1600}
                        height={1100}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile story */}
          <div className="md:hidden absolute inset-x-0 top-0 h-full px-5 py-10 sm:py-16 flex flex-col justify-center gap-5 sm:gap-8">
            <div className="relative w-full aspect-[16/10] max-h-[38vh] overflow-hidden rounded-[20px] bg-ink/5 ring-1 ring-ink/10">
              {stickyBlocks.map((s, i) => (
                <motion.img
                  key={i}
                  src={getImageSrc(s.img)}
                  alt={s.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="text-center px-2"
              >
                <h3 className="font-display text-2xl sm:text-3xl leading-[1.08] text-ink dark:text-white">{b.title}</h3>
                <p className="mt-2.5 text-[13px] sm:text-sm leading-relaxed text-muted-foreground dark:text-white/70">{b.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white/70 dark:bg-black/60 px-3 py-2 backdrop-blur-sm ring-1 ring-ink/10 dark:ring-white/10">
            {stickyBlocks.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${active === i ? "w-7 bg-ink dark:bg-white" : "w-1.5 bg-ink/25 dark:bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InView({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const sliderCards = [
  {
    img: imgJustOpenTicket,
    title: "Just open a ticket",
    body: "Reach out any hour of the day and a certified engineer picks it up. We diagnose, act, and keep you informed until the incident is fully resolved.",
    overlay: "light",
  },
  {
    img: sliderEngineer,
    title: "Engineers on standby",
    body: "A dedicated team learns your environment inside out — your stack, your tooling, your escalation paths — and operates as a true extension of your business.",
    overlay: "light",
  },
  {
    img: imgCalmIncident,
    title: "Calm through every incident",
    body: "Structured response tiers, clear communication, and disciplined execution turn even the most complex outages into a controlled, measured recovery.",
    overlay: "light",
  },
  {
    img: imgInfraExpert,
    title: "Infrastructure in expert hands",
    body: "From single servers to multi-cloud estates across AWS, Azure, and Google Cloud — engineered, monitored, and maintained with production-grade discipline.",
    overlay: "light",
  },
] as const;

function SliderSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 });
  const x = useTransform(smoothProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-cream dark:bg-[var(--sp-surface)] pb-10 sm:pb-16 lg:pb-24 overflow-x-clip">
      <div className="sticky top-0 h-screen flex flex-col pt-10 sm:pt-16 lg:pt-24 slider-track">
        <div className="mx-auto w-full max-w-[1152px] px-5 md:px-6 lg:px-8 mb-6 sm:mb-10 lg:mb-16">
          <InView>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink dark:text-white max-w-2xl leading-[1.05]">
              Built for the moments that matter.
            </h3>
          </InView>
        </div>
        <motion.div
          style={{ x }}
          className="flex gap-6 w-max pl-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] lg:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] pr-6 lg:pr-10"
        >
          {sliderCards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 relative rounded-[32px] overflow-hidden shadow-sm border border-border/40 w-[85vw] md:w-auto h-[65vh] md:h-[70vh] max-h-[600px] aspect-square md:aspect-[6/5] group"
              style={{ willChange: "transform" }}
            >
              <img
                src={getImageSrc(c.img)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 h-full p-8 lg:p-12 max-w-lg text-white flex flex-col justify-end">
                <h4 className="font-display text-2xl sm:text-3xl lg:text-5xl leading-[1.05]">{c.title}</h4>
                <p className="mt-4 text-[14px] leading-relaxed text-white/85">{c.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const securityPillars = [
  {
    icon: Lock,
    title: "Least-privilege access",
    body: "Scoped credentials, MFA everywhere, and time-bound access to every environment we touch.",
  },
  {
    icon: ShieldCheck,
    title: "Hardened workflows",
    body: "Change control, peer review, and documented runbooks behind every action taken on production.",
  },
  {
    icon: FileCheck2,
    title: "Audited procedures",
    body: "Full activity trails and periodic reviews so every engagement stands up to enterprise scrutiny.",
  },
  {
    icon: Activity,
    title: "Continuous monitoring",
    body: "Threat detection, patch management, and vulnerability response running around the clock.",
  },
];

function Privacy() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBackground = useMotionTemplate`radial-gradient(1000px circle at ${springX}px ${springY}px, oklch(0.5 0.15 95 / 0.4), transparent 60%)`;

  return (
    <section ref={ref} className="bg-cream dark:bg-[var(--sp-surface)] py-10 sm:py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <InView>
          <div
            onMouseMove={handleMouseMove}
            className="group/card relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#0a0a0a] via-[#141410] to-[#1a1a18] p-5 sm:p-8 lg:p-16"
          >
            {/* Mouse Spotlight */}
            <motion.div
              style={{ background: spotlightBackground }}
              className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover/card:opacity-100"
            />
            {/* grid texture */}
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage: "radial-gradient(ellipse at 30% 0%, black, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at 30% 0%, black, transparent 75%)",
              }}
            />
            <div
              className="blob-a pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-40 blur-[100px]"
              style={{ background: "radial-gradient(circle, oklch(0.45 0.14 100), transparent 70%)" }}
            />
            <div
              className="blob-b pointer-events-none absolute left-10 -bottom-20 h-[500px] w-[500px] rounded-full opacity-30 blur-[100px]"
              style={{ background: "radial-gradient(circle, oklch(0.35 0.2 90), transparent 70%)" }}
            />
            <div className="relative z-10">
              <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
                <h3 className="font-display text-4xl sm:text-5xl md:text-[64px] text-white leading-[1.02]">
                  Security at the core.
                </h3>
                <p className="text-[15px] text-white/55 leading-relaxed max-w-md mt-2">
                  Every engagement is protected by strict access controls, hardened workflows,
                  audited procedures, and continuous security management — because trust is the
                  foundation of managed services.
                </p>
              </div>

              <div className="mt-8 sm:mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/[8%] sm:grid-cols-2 lg:grid-cols-4">
                {securityPillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative bg-[#0e0e0c] p-4 sm:p-6 transition-colors duration-500 hover:bg-[#15150f]"
                  >
                    <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[oklch(0.82_0.16_95)] to-transparent transition-all duration-700 group-hover:w-full" />
                    <p.icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[oklch(0.82_0.16_95)]/80 transition-transform duration-500 group-hover:-translate-y-0.5"
                    />
                    <h4 className="mt-3 sm:mt-5 text-[14px] sm:text-[15px] text-white">{p.title}</h4>
                    <p className="mt-1.5 sm:mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-white/45">{p.body}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5">
                {[
                  "Signed NDAs",
                  "Role-based access",
                  "Encrypted channels",
                  "24/7 incident response",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] sm:text-[13px] font-medium text-white/75 backdrop-blur-sm transition-colors hover:border-[#FF8101]/40 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF8101]" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  image,
  index,
  total,
  progress,
}: {
  quote: string;
  name: string;
  image?: string;
  index: number;
  total: number;
  progress: any;
}) {
  const mid = (total - 1) / 2;
  const offset = index - mid;
  const finalRotate = offset * 14;
  const finalX = offset * 120;
  const finalY = Math.abs(offset) * 18;

  const rotate = useTransform(progress, [0, 0.5, 1], [0, finalRotate, 0]);
  const x = useTransform(progress, [0, 0.5, 1], [0, finalX, offset * 270]);
  const y = useTransform(progress, [0, 0.5, 1], [0, finalY, 0]);
  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.92, index === Math.floor(mid) ? 1 : 0.93, 1],
  );
  const opacity = useTransform(progress, [0, 0.15], [0, 1]);
  const zIndex = total - Math.abs(index - Math.floor(mid));

  return (
    <motion.div
      style={{ rotate, x, y, scale, opacity, zIndex, willChange: "transform" }}
      className="absolute w-[200px] md:w-[260px] h-[350px] md:h-[370px] origin-bottom bg-[#f2ede8] dark:bg-[#151515] rounded-2xl p-4 sm:p-5 pt-5 sm:pt-6 pb-4 sm:pb-5 flex flex-col justify-between select-none border border-ink/5 dark:border-white/10 shadow-sm"
    >
      <p className="text-[12px] md:text-[13px] leading-relaxed text-ink/80 dark:text-white/80 font-medium">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto pt-3 border-t border-ink/5 dark:border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {image ? (
            <img
              src={getImageSrc(image)}
              alt={name}
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-ink/5 dark:bg-white/10 text-[11px] font-medium text-ink/60 dark:text-white/60 shrink-0">
              {name.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-ink dark:text-white leading-tight truncate">{name}</p>
            <p className="text-[10px] text-ink/50 dark:text-white/50 mt-0.5">SupportPRO Client</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderOpen, setSliderOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 60,
    restDelta: 0.001,
  });

  const cards = testimonials.slice(0, 5);
  const hintOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative bg-cream dark:bg-[var(--sp-bg)] overflow-x-clip"
      style={{ height: "140vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-5 md:mb-8 px-5 md:px-6 lg:px-8 select-none"
        >
          <h3 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Trusted by <HoverOrangeSpan>teams worldwide.</HoverOrangeSpan>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground dark:text-white/60 max-w-md mx-auto">
            Hosting providers, MSPs, and enterprises rely on SupportPRO to keep their infrastructure
            and customers running.
          </p>
        </motion.div>

        <div className="relative flex items-end justify-center w-full" style={{ height: 390 }}>
          {cards.map((t, i) => (
            <TestimonialCard
              key={i}
              quote={t.quote}
              name={t.name}
              image={t.image}
              index={i}
              total={cards.length}
              progress={smoothProgress}
            />
          ))}
        </div>

        <div className="mt-5 z-20">
          <button
            suppressHydrationWarning
            onClick={() => setSliderOpen(true)}
            className="cursor-morph inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-white/15 bg-white/75 dark:bg-black/60 px-4 py-2 text-[12px] sm:text-[13px] font-medium text-ink dark:text-white backdrop-blur-md hover:border-[#FF8101] hover:text-[#FF8101] dark:hover:border-[#FF8101] dark:hover:text-[#FF8101] transition-all shadow-sm"
          >
            <span>Browse all {testimonials.length} reviews</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <motion.p
          style={{ opacity: hintOpacity }}
          className="absolute bottom-6 text-[12px] text-ink/40 tracking-wide pointer-events-none"
        ></motion.p>
      </div>

      <AnimatePresence>
        {sliderOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setSliderOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#161616] border border-ink/10 dark:border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
            >
              <button
                suppressHydrationWarning
                onClick={() => setSliderOpen(false)}
                className="absolute top-5 right-5 h-9 w-9 rounded-full bg-ink/5 dark:bg-white/10 text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1 text-[#FF8101]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider ml-2">
                  Client Story {activeSlide + 1} of {testimonials.length}
                </span>
              </div>

              <div className="min-h-[160px] sm:min-h-[140px] flex flex-col justify-between">
                <p className="text-[15px] sm:text-[17px] leading-relaxed text-ink/90 dark:text-white/90 font-medium">
                  &ldquo;{testimonials[activeSlide].quote}&rdquo;
                </p>

                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-ink/5 dark:border-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8101]/10 text-[#FF8101] text-sm font-bold shrink-0">
                    {testimonials[activeSlide].name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-ink dark:text-white">
                      {testimonials[activeSlide].name}
                    </h5>
                    <p className="text-[12px] text-muted-foreground">SupportPRO Verified Client</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-ink/5 dark:border-white/10">
                <div className="flex gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      suppressHydrationWarning
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all ${activeSlide === idx ? "w-6 bg-[#FF8101]" : "w-2 bg-ink/20 dark:bg-white/20"}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    suppressHydrationWarning
                    onClick={() =>
                      setActiveSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
                    }
                    className="h-9 w-9 rounded-full border border-ink/10 dark:border-white/15 bg-ink/5 dark:bg-white/5 flex items-center justify-center text-ink dark:text-white hover:border-[#FF8101] hover:text-[#FF8101] transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() =>
                      setActiveSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
                    }
                    className="h-9 w-9 rounded-full border border-ink/10 dark:border-white/15 bg-ink/5 dark:bg-white/5 flex items-center justify-center text-ink dark:text-white hover:border-[#FF8101] hover:text-[#FF8101] transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream dark:bg-[var(--sp-surface)] py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
          <div className="relative h-full flex flex-col">
            <div className="sticky top-24">
              <h3 className="font-display text-3xl sm:text-5xl md:text-[64px] text-ink dark:text-white leading-[1.05] tracking-tight mb-4 sm:mb-8">
                Frequently
                <br />
                <HoverOrangeSpan>asked questions</HoverOrangeSpan>
                <span className="text-[#FF8101]">.</span>
              </h3>

              <div className="w-10 h-[2px] bg-[#FF8101] mb-4 sm:mb-8" />

              <p className="text-[14px] sm:text-[15px] text-muted-foreground dark:text-white/60 leading-relaxed mb-6 sm:mb-12 max-w-[320px]">
                Get quick answers to the most common questions about our support services,
                processes, and infrastructure.
              </p>

              <div className="w-full max-w-[420px] rounded-md border border-ink/15 dark:border-white/15 p-5 sm:px-6 sm:py-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#FF8101]/10 flex items-center justify-center text-[#FF8101] shrink-0">
                    <BookOpen size={25} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-display text-2xl text-ink dark:text-white leading-none mb-3">
                      Still have questions?
                    </h4>
                    <p className="text-[15px] text-muted-foreground dark:text-white/60 leading-relaxed">
                      Can&apos;t find the answers you&apos;re looking for? Our documentation has everything
                      you need.
                    </p>
                    <button suppressHydrationWarning className="text-[15px] font-bold text-[#FF8101] flex items-center gap-3 hover:gap-4 transition-all mt-6">
                      View Documentation
                      <ArrowRight size={17} strokeWidth={1.75} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-y border-ink/15 dark:border-white/15 lg:mt-0">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden border-b border-ink/15 dark:border-white/15 last:border-b-0 transition-colors duration-300 ${isOpen ? "bg-[#FF8101]/[0.035]" : "hover:bg-ink/[3%] dark:hover:bg-white/[3%]"}`}
                >
                  <button
                    suppressHydrationWarning
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[44px] py-5 lg:py-6 text-left flex items-center justify-between gap-6 group"
                  >
                    <div
                      className={`text-[16px] font-medium flex-1 pr-4 transition-colors ${isOpen ? "text-ink dark:text-white" : "text-ink/80 dark:text-white/80 group-hover:text-ink dark:group-hover:text-white"}`}
                    >
                      {f.q}
                    </div>
                    <div
                      className={`shrink-0 transition-colors ${isOpen ? "text-[#FF8101]" : "text-muted-foreground group-hover:text-ink/60"}`}
                    >
                      {isOpen ? (
                        <Minus size={20} strokeWidth={1.5} />
                      ) : (
                        <Plus size={20} strokeWidth={1.5} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[620px] pb-5 lg:pb-6 pr-12 text-[14px] text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative min-h-[460px] sm:min-h-[560px] md:min-h-[620px] h-[70vh] sm:h-[80vh] md:h-[85vh] overflow-hidden">
        <motion.img
          src={getImageSrc(ctaImg)}
          alt=""
          style={{ y, scale }}
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={912}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1152px] flex-col items-center justify-center px-5 md:px-6 lg:px-8 text-center text-white py-12 sm:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
          >
            Ready to strengthen
            <br />
            <em>your infrastructure?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-white/80 text-xs sm:text-sm md:text-base max-w-xl"
          >
            Partner with certified engineers delivering enterprise-grade infrastructure management,
            cloud operations, DevOps, technical support, and proactive monitoring — 24 hours a day,
            365 days a year.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3"
            id="contact"
          >
            <a
              href="#contact-form"
              className="cursor-morph rounded-full bg-[#FF8101] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:brightness-110 transition-all duration-200"
            >
              Book a Consultation
            </a>
            <a
              href="#contact-form"
              className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[8%] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-white/20 dark:hover:bg-white/[14%] dark:hover:border-white/40 transition-all duration-200"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      suppressHydrationWarning
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-[99] flex h-12 w-12 items-center justify-center opacity-0 rounded-full bg-white text-ink shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 dark:bg-[#FF8101] dark:text-white"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default function Home() {
  return (
    <main className="bg-cream dark:bg-[var(--sp-bg)] overflow-x-clip transition-colors duration-300">
      <Nav />
      <Hero />
      <Credentials />
      <StickyPhoneSection />
      <Services />
      <SliderSection />
      <Experts />
      <Privacy />
      <Platforms />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <CTA />
      <SiteFooter />
      <ThemeToggle />
    </main>
  );
}
