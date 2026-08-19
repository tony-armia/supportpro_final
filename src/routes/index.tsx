import { createFileRoute } from "@tanstack/react-router";
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
  ArrowRightLeft,
  ShieldAlert,
  Blocks,
  Code,
  Briefcase,
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { HoverOrangeSpan } from "@/components/hover-orange-span";
import heroImg from "@/assets/hero.jpg";
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

export const Route = createFileRoute("/")({
  component: Index,
});

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

/* ─────────── Mega-menu nav data ─────────── */
const navItems = [
  {
    label: "Services",
    sections: [
      {
        heading: "Cloud Support",
        items: [
          { label: "Cloud Management", desc: "Full-stack cloud operations", icon: CloudCog },
          { label: "AWS Support", desc: "EC2, RDS, S3 & beyond", icon: Database },
          { label: "Google Cloud", desc: "GCP infrastructure managed", icon: Cloud },
          { label: "Azure Support", desc: "Microsoft Azure managed", icon: LayoutGrid },
          { label: "DevOps Support", desc: "CI/CD & pipeline engineering", icon: GitMerge },
        ],
      },
      {
        heading: "Server Administration",
        items: [
          { label: "Node Management", desc: "Dedicated node monitoring", icon: Cpu },
          { label: "Dedicated Server", desc: "Bare-metal server support", icon: Server },
        ],
      },
    ],
  },
  {
    label: "Outsourced Support",
    sections: [
      {
        heading: "Dedicated Support",
        items: [
          { label: "Dedicated Tech Support", desc: "Your brand, our engineers", icon: UserCheck },
          { label: "Semi-Dedicated Support", desc: "Flexible shared staffing", icon: UserPlus },
          { label: "Dedicated Team", desc: "Full team under your banner", icon: Users },
        ],
      },
      {
        heading: "Client Support",
        items: [
          { label: "Helpdesk Support", desc: "Ticket-based 24/7 coverage", icon: Headphones },
          { label: "Live Chat Support", desc: "Real-time chat agents", icon: MessageCircle },
        ],
      },
    ],
  },
  {
    label: "Products",
    sections: [
      {
        heading: "Services",
        items: [
          { label: "Hourly Administration", desc: "On-demand server tasks", icon: Clock },
          { label: "Server Migration", desc: "Zero-downtime migrations", icon: ArrowRightLeft },
          { label: "Abuse Handling", desc: "DMCA & spam mitigation", icon: ShieldAlert },
        ],
      },
      {
        heading: "Products",
        items: [
          { label: "Server Manager Addon", desc: "WHMCS marketplace plugin", badge: "Popular", icon: Blocks },
          { label: "Server Scanner", desc: "Automated vulnerability scanner", icon: ShieldCheck },
        ],
      },
    ],
  },
  {
    label: "Development",
    sections: [
      {
        heading: "Hire Talent",
        items: [
          { label: "Hire a Developer", desc: "Vetted full-stack engineers", icon: Code },
          { label: "Hire a Dev Team", desc: "Complete project squads", icon: Briefcase },
        ],
      },
    ],
  },
];

/* ─────────── Nav component ─────────── */
function Nav() {
  const { scrollY } = useScroll();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isPast = latest > 550;
    if (isPast !== isScrolledPastHero) {
      setIsScrolledPastHero(isPast);
    }
  });

  const bg = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0.15)", "rgba(20,20,20,0.55)"]);

  return (
    <>
      {/* ── Main nav ── */}
      <nav
        className="fixed top-4 left-0 right-0 z-50 mx-auto flex max-w-[1152px] items-center justify-between px-5 md:px-6 lg:px-8"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 min-w-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={theme === "light" && isScrolledPastHero ? "black-logo" : "white-logo"}
              src={theme === "light" && isScrolledPastHero ? logoBlack : logoWhite}
              alt="SupportPRO Logo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="h-9 sm:h-12 md:h-14 w-auto object-contain"
            />
          </AnimatePresence>
        </motion.a>

        {/* Nav pill */}
        <motion.div
          style={{ backgroundColor: bg }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex items-center gap-1 rounded-full backdrop-blur-md px-2 py-1.5 text-sm text-white border border-white/10 shrink-0"
        >
          {/* Mega-menu triggers — hidden below sm */}
          {navItems.map((item) => (
            <div
              key={item.label}
              className="hidden sm:block relative"
              onMouseEnter={() => setOpenMenu(item.label)}
            >
              <button className="cursor-morph flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-white/10 transition font-medium">
                {item.label}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] min-w-[480px] bg-white dark:bg-[#141414] border border-ink/8 dark:border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.22)] dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] overflow-hidden z-50"
                    style={{ color: "initial" }}
                  >
                    {/* Columns */}
                    <div className={`grid gap-0 p-1 ${item.sections.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {item.sections.map((section, si) => (
                        <div
                          key={section.heading}
                          className={`p-5 ${si < item.sections.length - 1 && item.sections.length > 1 ? "border-r border-ink/6 dark:border-white/8" : ""}`}
                        >
                          <p className="text-[11px] font-semibold text-ink/45 dark:text-white/40 mb-3 tracking-normal">
                            {section.heading}
                          </p>
                          <div className="space-y-0.5">
                            {section.items.map((it) => (
                              <a
                                key={it.label}
                                href="#"
                                className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FF8101]/6 dark:hover:bg-[#FF8101]/10 transition-all duration-150"
                              >
                                <div className="mt-0.5 w-7 h-7 rounded-lg bg-[#FF8101]/10 dark:bg-[#FF8101]/15 flex items-center justify-center shrink-0 group-hover:bg-[#FF8101]/20 transition-colors text-[#FF8101]">
                                  {it.icon ? <it.icon size={13} strokeWidth={1} /> : <span className="w-1.5 h-1.5 rounded-full bg-[#FF8101]" />}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[13px] font-semibold text-ink dark:text-white group-hover:text-[#FF8101] transition-colors leading-snug">
                                      {it.label}
                                    </span>
                                    {"badge" in it && it.badge && (
                                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FF8101]/15 text-[#FF8101]">
                                        {it.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-ink/50 dark:text-white/40 leading-snug mt-0.5">
                                    {it.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-ink/6 dark:border-white/8 px-5 py-3 flex items-center justify-between bg-ink/[0.02] dark:bg-white/[0.02]">
                      <div className="flex items-center gap-4">
                        <a href="https://www.supportpro.com/emergency-new.php" target="_blank" rel="noreferrer"
                          className="text-[12px] text-ink/50 dark:text-white/40 hover:text-[#FF8101] transition-colors flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Emergency support
                        </a>
                        <a href="https://www.supportpro.com/freecheckup.php" target="_blank" rel="noreferrer"
                          className="text-[12px] text-ink/50 dark:text-white/40 hover:text-[#FF8101] transition-colors">
                          Free checkup
                        </a>
                      </div>
                      <a
                        href="https://www.supportpro.com/clientlogin.php"
                        onClick={() => setOpenMenu(null)}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] font-semibold text-[#FF8101] hover:brightness-110 transition-all flex items-center gap-1"
                      >
                        Login <ArrowRight size={11} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Divider */}
          <span className="mx-1 h-4 w-px bg-white/20 hidden sm:block" />

          {/* Sign Up — subtle outlined pill */}
          <a
            href="https://www.supportpro.com/signup.php"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block cursor-morph px-4 py-1.5 rounded-full text-white/90 hover:border-[#FF8101] hover:text-[#FF8101] transition-all duration-200 font-medium"
          >
            Sign up
          </a>

          {/* Divider */}
          <span className="mx-1 h-4 w-px bg-white/20 hidden md:block" />

          {/* Login CTA */}
          <a
            href="https://www.supportpro.com/clientlogin.php"
            target="_blank"
            rel="noreferrer"
            className="cursor-morph px-4 py-1.5 rounded-full bg-[#FF8101] text-white font-medium hover:brightness-110 transition-all duration-200"
          >
            Login
          </a>

          {/* Divider */}
          <span className="mx-1 h-4 w-px bg-white/20 hidden sm:block" />

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className="relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15 transition-all duration-200 text-white shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.svg
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </nav>
    </>
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
    <section ref={ref} className="relative h-screen min-h-[600px] sm:min-h-[720px] w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt=""
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0 h-full w-full object-cover parallax-img"
        width={1600}
        height={1008}
        fetchPriority="high"
        decoding="sync"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1152px] flex-col items-center justify-center pt-16 pb-20 px-5 text-center text-white md:px-6 lg:px-8 lg:pb-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[80px] leading-[0.95] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
        >
          Enterprise infrastructure
          <br />
          support that <HoverOrangeSpan>never sleeps.</HoverOrangeSpan>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-[14px] md:text-[15px] font-light text-white/90 dark:text-white/75 leading-relaxed"
        >
          SupportPRO delivers 24/7 managed infrastructure, cloud operations, server administration,
          DevOps, and white-label technical support for hosting providers, SaaS companies, MSPs, and
          enterprises.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact-form"
            className="cursor-morph rounded-full bg-[#FF8101] text-white px-5 py-2.5 text-[13px] font-medium hover:brightness-110 transition-all duration-200"
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[8%] text-white px-5 py-2.5 text-[13px] font-medium hover:bg-white/20 dark:hover:bg-white/[14%] dark:hover:border-white/40 transition-all duration-200"
          >
            Explore Services
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 text-xs md:text-sm text-white/60 max-w-lg"
        >
          Trusted by hosts, MSPs, and enterprise teams across every major cloud.
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
      className="group relative border-t border-ink/10 dark:border-white/10 py-8 lg:py-12 cursor-default overflow-hidden"
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
    <section id="services" className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
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
    title: "24/7 customer support — always on.",
    body: "Our engineers are at your service 24 hours a day, seven days a week, 365 days a year. We listen to every server problem, address every query, and stay with it until you are completely satisfied.",
    img: img247Support,
    alt: "Support engineer monitoring live tickets and analytics dashboards in a bright modern office",
    caption: "Live incident response",
  },
  {
    title: "Transparent technical support.",
    body: "White-labelled support means your clients never know somebody outside your company handles their queries. As far as they are concerned, every response comes from your organisation. Our techs become your techs.",
    img: imgWhiteLabel,
    alt: "Two professionals collaborating on a laptop with analytics monitors in the background",
    caption: "Helpdesk under your brand",
  },
  {
    title: "Proactive server management.",
    body: "We look after the most fragile part of your operation — your infrastructure. Rather than waiting for something to break, we take preventive measures to keep environments secure, patched, and stable.",
    img: imgCloudServer,
    alt: "Engineer with tablet managing server racks in a modern data centre facility",
    caption: "Managed infrastructure",
  },
  {
    title: "NOC and DevOps engineered for scale.",
    body: "Continuous monitoring, automation, and incident response designed to keep complex infrastructure stable, secure, and ready to grow.",
    img: imgNocDevops,
    alt: "Engineers at multi-monitor NOC workstations with cloud architecture and DevOps dashboards",
    caption: "24/7 NOC monitoring",
  },
] as const;

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* Sticky feature showcase: a large centred visual stays pinned while the copy
   alternates left / right and both crossfade as the active feature changes. */
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
      className="relative bg-cream dark:bg-[var(--sp-bg)] rounded-t-[40px] -mt-10 pb-16 lg:pb-24"
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

              {/* Large visual — swaps side, stays vertically pinned */}
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
                        src={s.img}
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

          {/* Mobile story (below visual) */}
          <div className="md:hidden absolute inset-x-0 top-0 h-full px-6 py-16 flex flex-col justify-center gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[24px] bg-ink/5 ring-1 ring-ink/10">
              {stickyBlocks.map((s, i) => (
                <motion.img
                  key={i}
                  src={s.img}
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
                className="text-center"
              >
                <h3 className="font-display text-3xl leading-[1.08] text-ink dark:text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-white/70">{b.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicator — centered near bottom of section */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white/70 dark:bg-black/60 px-3 py-2 backdrop-blur-sm ring-1 ring-ink/10 dark:ring-white/10">
            {stickyBlocks.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${active === i ? "w-7 bg-ink" : "w-1.5 bg-ink/25"}`}
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
    <section ref={targetRef} className="relative h-[300vh] bg-cream dark:bg-[var(--sp-surface)] pb-16 lg:pb-24">
      <div className="sticky top-0 h-screen flex flex-col pt-16 lg:pt-24 slider-track">
        <div className="mx-auto w-full max-w-[1152px] px-5 md:px-6 lg:px-8 mb-12 lg:mb-16">
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
                src={c.img}
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

  // Mouse tracking for dynamic spotlight glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();

    // Set raw mouse coordinates relative to the card
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Create a radial gradient string that follows the mouse
  const spotlightBackground = useMotionTemplate`radial-gradient(1000px circle at ${springX}px ${springY}px, oklch(0.5 0.15 95 / 0.4), transparent 60%)`;

  return (
    <section ref={ref} className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <InView>
          <div
            onMouseMove={handleMouseMove}
            className="group/card relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a0a0a] via-[#141410] to-[#1a1a18] p-8 lg:p-16"
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
            {/* Animated ambient glows — moved to CSS animations for GPU compositing */}
            <div
              className="blob-a pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-40 blur-[100px]"
              style={{
                background: "radial-gradient(circle, oklch(0.45 0.14 100), transparent 70%)",
              }}
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

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/[8%] sm:grid-cols-2 lg:grid-cols-4">
                {securityPillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative bg-[#0e0e0c] p-6 transition-colors duration-500 hover:bg-[#15150f]"
                  >
                    <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[oklch(0.82_0.16_95)] to-transparent transition-all duration-700 group-hover:w-full" />
                    <p.icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[oklch(0.82_0.16_95)]/80 transition-transform duration-500 group-hover:-translate-y-0.5"
                    />
                    <h4 className="mt-5 text-[15px] text-white">{p.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/45">{p.body}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[13px] text-white/50">
                <span>Signed NDAs</span>
                <span className="h-3 w-px bg-white/15" />
                <span>Role-based access</span>
                <span className="h-3 w-px bg-white/15" />
                <span>Encrypted channels</span>
                <span className="h-3 w-px bg-white/15" />
                <span>24/7 incident response</span>
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
  // Each card fans out from center. Middle card stays straight, outer cards rotate.
  const mid = (total - 1) / 2;
  const offset = index - mid;

  // At progress=0: stacked.
  // At progress=0.5: fanned out.
  // At progress=1: straight horizontal row.
  const finalRotate = offset * 14; // degrees each card fans out
  const finalX = offset * 120; // px horizontal spread
  const finalY = Math.abs(offset) * 18; // slight arc

  const rotate = useTransform(progress, [0, 0.5, 1], [0, finalRotate, 0]);
  const x = useTransform(progress, [0, 0.5, 1], [0, finalX, offset * 270]);
  const y = useTransform(progress, [0, 0.5, 1], [0, finalY, 0]);
  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.92, index === Math.floor(mid) ? 1 : 0.93, 1],
  );
  const opacity = useTransform(progress, [0, 0.15], [0, 1]);

  // Determine z-index: center card on top
  const zIndex = total - Math.abs(index - Math.floor(mid));

  return (
    <motion.div
      style={{ rotate, x, y, scale, opacity, zIndex, willChange: "transform" }}
      className="absolute w-[200px] md:w-[260px] h-[300px] md:h-[340px] origin-bottom bg-[#f2ede8] dark:bg-[#151515] rounded-2xl p-6 pt-8 pb-10 flex flex-col gap-6 select-none border border-ink/5 dark:border-white/10"
    >
      {/* Quote text */}
      <p className="text-[13px] leading-relaxed text-ink/80 dark:text-white/80 font-medium">&ldquo;{quote}&rdquo;</p>
      {/* Name */}
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          {image ? (
            <img
              src={image}
              alt={name}
              className="flex h-8 w-8 items-center justify-center rounded-full object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 dark:bg-white/10 text-[11px] font-medium text-ink/60 dark:text-white/60">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-[11px] font-semibold text-ink dark:text-white leading-tight">{name}</p>
            <p className="text-[10px] text-ink/50 dark:text-white/50 mt-0.5">SupportPRO Client</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress over the entire sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fast, tight spring: smooths out mouse wheel steps without feeling laggy
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 60,
    restDelta: 0.001,
  });

  const cards = testimonials.slice(0, 5);
  // Derived transforms — must be called at top level, never inline in JSX
  const hintOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative bg-cream dark:bg-[var(--sp-bg)]"
      style={{ height: "140vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Heading — stays fixed while cards animate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 md:mb-12 px-5 md:px-6 lg:px-8 select-none"
        >
          <h3 className="font-display text-4xl md:text-5xl text-ink dark:text-white">
            Trusted by <HoverOrangeSpan>teams worldwide.</HoverOrangeSpan>
          </h3>
          <p className="mt-4 text-sm text-muted-foreground dark:text-white/60 max-w-md mx-auto">
            Hosting providers, MSPs, and enterprises rely on SupportPRO to keep their infrastructure
            and customers running.
          </p>
        </motion.div>

        {/* Fan deck */}
        <div className="relative flex items-end justify-center" style={{ height: 420 }}>
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

        {/* Scroll hint */}
        <motion.p
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 text-[12px] text-ink/40 tracking-wide"
        ></motion.p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & CTA */}
          <div className="relative h-full flex flex-col">
            <div className="sticky top-24">
              <h3 className="font-display text-4xl sm:text-5xl md:text-[64px] text-ink dark:text-white leading-[1.05] tracking-tight mb-8">
                Frequently
                <br />
                <HoverOrangeSpan>asked questions</HoverOrangeSpan>
                <span className="text-[#FF8101]">.</span>
              </h3>

              <div className="w-10 h-[2px] bg-[#FF8101] mb-8" />

              <p className="text-[15px] text-muted-foreground dark:text-white/60 leading-relaxed mb-12 max-w-[320px]">
                Get quick answers to the most common questions about our support services,
                processes, and infrastructure.
              </p>

              {/* Documentation link */}
              <div className="w-full max-w-[420px] rounded-md border border-ink/15 dark:border-white/15 px-6 py-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#FF8101]/10 flex items-center justify-center text-[#FF8101] shrink-0">
                    <BookOpen size={25} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-display text-2xl text-ink dark:text-white leading-none mb-3">
                      Still have questions?
                    </h4>
                    <p className="text-[15px] text-muted-foreground dark:text-white/60 leading-relaxed">
                      Can't find the answers you're looking for? Our documentation has everything
                      you need.
                    </p>
                    <button className="text-[15px] font-bold text-[#FF8101] flex items-center gap-3 hover:gap-4 transition-all mt-6">
                      View Documentation
                      <ArrowRight size={17} strokeWidth={1.75} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="border-y border-ink/15 dark:border-white/15 lg:mt-0">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden border-b border-ink/15 dark:border-white/15 last:border-b-0 transition-colors duration-300 ${isOpen ? "bg-[#FF8101]/[0.035]" : "hover:bg-ink/[3%] dark:hover:bg-white/[3%]"}`}
                >
                  <button
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
      <div className="relative h-[85vh] min-h-[620px] overflow-hidden">
        <motion.img
          src={ctaImg}
          alt=""
          style={{ y, scale }}
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={912}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1152px] flex-col items-center justify-center px-5 md:px-6 lg:px-8 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
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
            className="mt-6 text-white/80 text-sm md:text-base max-w-xl"
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
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            id="contact"
          >
            <a
              href="#contact-form"
              className="cursor-morph rounded-full bg-[#FF8101] text-white px-6 py-3 text-sm font-medium hover:brightness-110 transition-all duration-200"
            >
              Book a Consultation
            </a>
            <a
              href="#contact-form"
              className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[8%] text-white px-6 py-3 text-sm font-medium hover:bg-white/20 dark:hover:bg-white/[14%] dark:hover:border-white/40 transition-all duration-200"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink dark:bg-[#080808] text-white/80 px-5 md:px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-[1152px] grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="inline-block">
            <img
              src={logoWhite}
              alt="SupportPRO Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
          <p className="mt-3 text-white/50 dark:text-[#777773] leading-relaxed max-w-[220px]">
            Enterprise infrastructure support, 24/7/365.
          </p>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Services</div>
          <div className="space-y-2">
            <div>24/7 Support</div>
            <div>Cloud Management</div>
            <div>Server Management</div>
            <div>NOC Services</div>
          </div>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Solutions</div>
          <div className="space-y-2">
            <div>White-label Support</div>
            <div>DevOps</div>
            <div>Managed IT</div>
            <div>Hosting Support</div>
          </div>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Company</div>
          <div className="space-y-2">
            <div>About</div>
            <div>Contact</div>
            <div>Careers</div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1152px] mt-12 pt-6 border-t border-white/10 dark:border-white/5 text-white/40 dark:text-white/30 text-xs">
        © 2026 SupportPRO. All rights reserved.
      </div>
    </footer>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-[99] flex h-12 w-12 items-center justify-center opacity-0 rounded-full bg-white text-ink shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 dark:bg-[#FF8101] dark:text-white"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function Index() {
  return (
    <ThemeProvider>
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
      </main>
      <ThemeToggle />
    </ThemeProvider>
  );
}
