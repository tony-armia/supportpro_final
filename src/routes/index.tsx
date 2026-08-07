import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useMotionValueEvent } from "motion/react";
import { Plus, Lock, ShieldCheck, FileCheck2, Activity } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import talkImg from "@/assets/talk.jpg";
import ctaImg from "@/assets/cta.jpg";
import sliderEngineer from "@/assets/slider-engineer.jpg";
import sliderLandscape from "@/assets/slider-landscape.jpg";
import sliderDatacenter from "@/assets/slider-datacenter.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const testimonials = [
  "SupportPRO has become a genuine extension of our engineering team. Their 24/7 response times are the reason our customers stay online.",
  "We white-labelled their helpdesk two years ago and never looked back. Every ticket is handled with the professionalism our brand demands.",
  "Their NOC caught an infrastructure issue at 3 a.m. and had it resolved before our on-call engineer even opened the alert.",
  "Migrating our workloads to AWS with SupportPRO was seamless. Clear communication, zero downtime, measurable cost savings.",
  "The Linux administration team knows our stack better than most in-house hires we've made. Deep expertise, calm delivery.",
  "Reliable, security-first, and refreshingly easy to work with. SupportPRO is exactly what enterprise-grade support should feel like.",
];

const faqs = [
  { q: "What services does SupportPRO offer?", a: "We provide 24/7 technical support, server and cloud management, NOC monitoring, DevOps, helpdesk, security management, and white-label MSP services across Linux, Windows, AWS, Azure, and Google Cloud environments." },
  { q: "How does white-label support work?", a: "Our engineers operate under your brand — your logo, your ticketing system, your voice. Your customers experience seamless support while our team handles the technical execution behind the scenes." },
  { q: "Is SupportPRO truly available 24/7?", a: "Yes. Our global engineering teams operate around the clock, every day of the year. Critical issues are acknowledged within minutes and escalated through defined response tiers." },
  { q: "Which cloud platforms do you manage?", a: "We are certified across AWS, Microsoft Azure, and Google Cloud, and manage complex hybrid and multi-cloud deployments for hosting providers, SaaS companies, and enterprises." },
  { q: "What does your NOC service include?", a: "Continuous infrastructure monitoring, proactive incident response, capacity analysis, and detailed reporting — designed to keep production environments stable and predictable." },
  { q: "Do you support MSPs and hosting providers?", a: "Absolutely. A significant part of our business is dedicated to MSP and hosting support — from Level 1 helpdesk to advanced server and infrastructure engineering under your brand." },
  { q: "How is our data and infrastructure secured?", a: "Every engagement follows strict access controls, hardened workflows, audited procedures, and modern security tooling. Security management is embedded in every service we deliver." },
  { q: "How do we get started?", a: "Reach out for a discovery call. We assess your environment, define scope, agree SLAs, and onboard your systems with a structured transition plan — typically live within days." },
];

/* Word-by-word reveal as element enters view — the signature Novu effect. */
function RevealText({ children, className = "", as = "p" }: { children: string; className?: string; as?: "h3" | "p" | "h2" }) {
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
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{w}</Word>;
        })}
      </Tag>
    </div>
  );
}

function Word({ progress, range, children }: { progress: any; range: [number, number]; children: string }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0.15)", "rgba(20,20,20,0.55)"]);
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10">
      <motion.a
        href="#"
        className="font-display text-2xl text-white"
        style={{ mixBlendMode: "difference" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        supportpro
      </motion.a>
      <motion.div
        style={{ backgroundColor: bg }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-1 rounded-full backdrop-blur-md px-2 py-1.5 text-sm text-white border border-white/10"
      >
        <a href="#services" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">Services</a>
        <a href="#faq" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">FAQ</a>
        <a href="#contact" className="px-4 py-1.5 rounded-full bg-white text-ink hover:bg-white/90 transition">Book a Call</a>
      </motion.div>
    </nav>
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
    <section ref={ref} className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt=""
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={1008}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-end pb-20 md:pb-24 px-6 text-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
        >
          Enterprise infrastructure<br />support that never sleeps.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/90 leading-relaxed"
        >
          SupportPRO delivers 24/7 managed infrastructure, cloud operations, server administration, DevOps, and white-label technical support for hosting providers, SaaS companies, MSPs, and enterprises.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
            Book a Consultation
          </a>
          <a href="#services" className="rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition">
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
    items: ["24/7 Technical Support", "White-label Support", "Helpdesk Services", "Hosting Support", "MSP Support"],
  },
  {
    heading: "Infrastructure",
    items: ["Server Management", "Linux Administration", "Windows Administration", "Infrastructure Monitoring", "NOC Services"],
  },
  {
    heading: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DevOps", "Infrastructure Optimization"],
  },
  {
    heading: "Enterprise",
    items: ["Managed IT Services", "Security Management", "Performance Monitoring", "Incident Response", "Technical Consulting"],
  },
];

function ServiceRow({ group, index }: { group: { heading: string; items: string[] }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

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
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="group relative border-t border-ink/10 py-10 md:py-14 cursor-default overflow-hidden"
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
        className="absolute left-0 right-0 top-0 h-px bg-ink origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative grid grid-cols-12 gap-6 md:gap-10 items-baseline">
        <div className="col-span-12 md:col-span-2 flex items-baseline gap-4">
          <span className="font-display text-sm text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <motion.h4
          className="col-span-12 md:col-span-4 font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95]"
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
              transition={{ duration: 0.5, delay: index * 0.08 + 0.2 + j * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center rounded-full border border-ink/15 bg-white/60 backdrop-blur-sm px-4 py-2 text-[13px] text-ink/80 hover:border-ink/40 hover:bg-white hover:text-ink transition-colors"
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
    <section id="services" className="bg-cream pt-8 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-8">
            <InView>
              <h3 className="font-display text-5xl md:text-7xl text-ink leading-[1] tracking-tight">
                Every service<br />your infrastructure<br /><em className="italic font-normal text-ink/70">depends on.</em>
              </h3>
            </InView>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-6">
            <InView delay={0.15}>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm">
                One partner for the full stack — from Level 1 helpdesk to multi-cloud engineering, security, and around-the-clock incident response.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/50">
                <span className="h-px w-8 bg-ink/30" />
                <span>{serviceGroups.length} disciplines · {serviceGroups.reduce((n, g) => n + g.items.length, 0)} services</span>
              </div>
            </InView>
          </div>
        </div>

        <div className="border-b border-ink/10">
          {serviceGroups.map((g, i) => (
            <ServiceRow key={g.heading} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Support app screens that render inside the sticky phone frame. */
function TicketsScreen() {
  const rows = [
    { sev: "P1", color: "bg-red-500", title: "Prod DB latency spike", who: "Priya · 2m", eta: "Resolving" },
    { sev: "P2", color: "bg-amber-500", title: "Nginx 502 on edge-04", who: "Marco · 6m", eta: "Investigating" },
    { sev: "P3", color: "bg-emerald-500", title: "SSL renewal — api.co", who: "Ana · 11m", eta: "Scheduled" },
    { sev: "P3", color: "bg-emerald-500", title: "Backup verify passed", who: "Auto · 14m", eta: "Closed" },
  ];
  return (
    <div className="h-full w-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 pt-10 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-neutral-400">Live Support</div>
          <div className="text-[15px] font-semibold text-neutral-900">Active tickets</div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1">
          <span className="relative flex h-1.5 w-1.5"><span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" /><span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>
          <span className="text-[9px] font-medium text-emerald-700">24/7 ONLINE</span>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
            className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-neutral-100"
          >
            <div className={`h-8 w-1 rounded-full ${r.color}`} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-neutral-100 px-1 py-px text-[8px] font-bold text-neutral-600">{r.sev}</span>
                <span className="truncate text-[11px] font-medium text-neutral-900">{r.title}</span>
              </div>
              <div className="mt-0.5 text-[9px] text-neutral-500">{r.who} · {r.eta}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ServersScreen() {
  const stats = [
    { label: "CPU", value: "42%", delta: "-3.1%", tone: "text-emerald-600" },
    { label: "Memory", value: "68%", delta: "+1.2%", tone: "text-amber-600" },
    { label: "Uptime", value: "99.99%", delta: "90d", tone: "text-neutral-500" },
  ];
  return (
    <div className="h-full w-full bg-neutral-950 p-4 pt-10 text-white">
      <div className="text-[10px] uppercase tracking-widest text-white/40">Server Fleet</div>
      <div className="text-[15px] font-semibold">us-east · 128 nodes</div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
            <div className="text-[8px] uppercase text-white/40">{s.label}</div>
            <div className="mt-0.5 text-[13px] font-semibold">{s.value}</div>
            <div className={`text-[9px] ${s.tone}`}>{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-white/5 p-2.5 ring-1 ring-white/10">
        <div className="mb-1.5 flex items-center justify-between text-[9px] text-white/50">
          <span>Requests / min</span><span className="text-emerald-400">▲ healthy</span>
        </div>
        <svg viewBox="0 0 200 60" className="h-14 w-full">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(52 211 153)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(52 211 153)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeInOut" }}
            d="M0,45 L20,38 L40,42 L60,30 L80,34 L100,22 L120,28 L140,18 L160,24 L180,14 L200,20"
            fill="none" stroke="rgb(52 211 153)" strokeWidth="1.5"
          />
          <path d="M0,45 L20,38 L40,42 L60,30 L80,34 L100,22 L120,28 L140,18 L160,24 L180,14 L200,20 L200,60 L0,60 Z" fill="url(#g)" />
        </svg>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-500/10 p-2 ring-1 ring-emerald-500/20">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] text-emerald-300">All systems operational</span>
      </div>
    </div>
  );
}

function ChatScreen() {
  const msgs = [
    { from: "them", text: "Hi — seeing 502s on the checkout API since 09:12 UTC." },
    { from: "us", text: "On it. Failover to eu-west-2 in progress." },
    { from: "us", text: "Root cause: upstream pool exhausted. Scaling nodes now." },
    { from: "them", text: "Metrics recovering. Thank you 🙏" },
  ];
  return (
    <div className="h-full w-full bg-[#f5f4ef] p-4 pt-10">
      <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-neutral-900 text-[9px] font-bold text-white">SP</div>
        <div>
          <div className="text-[11px] font-semibold text-neutral-900">SupportPRO · Tier 2</div>
          <div className="text-[9px] text-emerald-600">● typing…</div>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
            className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] rounded-2xl px-2.5 py-1.5 text-[10px] leading-snug ${m.from === "us" ? "bg-neutral-900 text-white" : "bg-white text-neutral-800 ring-1 ring-neutral-200"}`}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function NocScreen() {
  const alerts = [
    { t: "01:14", txt: "Auto-remediated pod restart · api-07", ok: true },
    { t: "00:47", txt: "Patched CVE-2026-1188 across 42 hosts", ok: true },
    { t: "00:12", txt: "Scaling group +6 instances (traffic surge)", ok: true },
  ];
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0b0f14] via-[#0e1319] to-[#0b0f14] p-4 pt-10 text-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">NOC · Live</div>
          <div className="text-[15px] font-semibold">Global monitoring</div>
        </div>
        <div className="text-right">
          <div className="text-[9px] text-white/40">Response</div>
          <div className="text-[11px] font-semibold text-emerald-400">1m 42s avg</div>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-white/5 p-2.5 ring-1 ring-white/10">
        <svg viewBox="0 0 200 70" className="h-16 w-full">
          <motion.path
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: "easeInOut" }}
            d="M0,50 C20,30 30,55 50,40 S80,20 100,35 130,55 150,32 180,45 200,25"
            fill="none" stroke="rgb(96 165 250)" strokeWidth="1.5"
          />
          <motion.circle cx="200" cy="25" r="2.5" fill="rgb(96 165 250)"
            animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </svg>
      </div>
      <div className="mt-2 space-y-1.5">
        {alerts.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.1 }}
            className="flex items-start gap-2 rounded-lg bg-white/[0.03] p-2 ring-1 ring-white/5">
            <div className={`mt-0.5 h-1.5 w-1.5 rounded-full ${a.ok ? "bg-emerald-400" : "bg-amber-400"}`} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[10px] text-white/90">{a.txt}</div>
              <div className="text-[8px] text-white/40">{a.t} ago</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const PHONE_SCREENS = [TicketsScreen, ServersScreen, ChatScreen, NocScreen] as const;

function PhoneFrame({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative mx-auto w-[260px] md:w-[290px]">
      <div className="relative aspect-[9/19] w-full rounded-[44px] bg-gradient-to-b from-neutral-800 to-neutral-950 p-[6px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35),0_20px_40px_-15px_rgba(0,0,0,0.25)]">
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-white ring-1 ring-black/60">
          <div className="pointer-events-none absolute left-1/2 top-1.5 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-950" />
          {PHONE_SCREENS.map((Screen, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : 20,
                scale: activeIndex === i ? 1 : 0.98,
              }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
              style={{ pointerEvents: activeIndex === i ? "auto" : "none" }}
            >
              <Screen />
            </motion.div>
          ))}
          {/* subtle screen glare */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/10" />
        </div>
      </div>
      {/* side buttons */}
      <div className="absolute -right-[3px] top-[22%] h-14 w-[3px] rounded-r bg-neutral-800" />
      <div className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-neutral-800" />
      <div className="absolute -left-[3px] top-[30%] h-14 w-[3px] rounded-l bg-neutral-800" />
    </div>
  );
}

const stickyBlocks = [
  {
    title: "24/7 expert support, always on.",
    body: "Our global engineering teams monitor, respond, and resolve around the clock — so your infrastructure and customers never wait.",
  },
  {
    title: "Cloud and server management, mastered.",
    body: "From Linux and Windows administration to AWS, Azure, and Google Cloud, we run production environments with precision and discipline.",
  },
  {
    title: "White-label support under your brand.",
    body: "Extend your team without expanding your headcount. Our engineers deliver seamless helpdesk and MSP support in your voice, your tools, your brand.",
  },
  {
    title: "NOC and DevOps engineered for scale.",
    body: "Continuous monitoring, automation, and incident response designed to keep complex infrastructure stable, secure, and ready to grow.",
  },
] as const;

/* Sticky phone that stays perfectly pinned while the left-hand story crossfades
   through each feature. After the last feature the section releases normally. */
function StickyPhoneSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(stickyBlocks.length - 1, Math.max(0, Math.floor(v * stickyBlocks.length + 0.0001)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const ease = [0.42, 0, 0.58, 1] as const;
  const b = stickyBlocks[active];

  return (
    <section ref={sectionRef} id="features" className="relative bg-cream rounded-t-[40px] -mt-10">
      {/* Scroll runway: one viewport per feature */}
      <div style={{ height: `${stickyBlocks.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="mx-auto flex h-full max-w-6xl items-center px-6">
            {/* Left column — crossfading story */}
            <div className="hidden md:block w-[38%] pr-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.98 }}
                  transition={{ duration: 0.6, ease }}
                  className="max-w-sm will-change-transform"
                >
                  <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/40">
                    <span className="tabular-nums">0{active + 1}</span>
                    <span className="h-px w-8 bg-ink/20" />
                  </div>
                  <h3 className="font-display text-4xl lg:text-5xl leading-[1.05] text-ink">{b.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{b.body}</p>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-ink border-b border-ink/25 pb-1 transition-colors hover:border-ink"
                  >
                    Talk to an engineer
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Center — fixed device */}
            <div className="flex-1 flex flex-col items-center justify-center max-md:scale-[0.72] max-md:-translate-y-14">
              <PhoneFrame activeIndex={active} />
              <div className="mt-6 flex items-center justify-center gap-1.5">
                {stickyBlocks.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${active === i ? "w-6 bg-ink" : "w-1 bg-ink/25"}`}
                  />
                ))}
              </div>
            </div>

            {/* Right — decorative whitespace */}
            <div className="hidden lg:block w-[22%]" aria-hidden />
          </div>

          {/* Mobile story (below phone) */}
          <div className="md:hidden absolute inset-x-0 bottom-10 px-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease }}
                className="text-center"
              >
                <h3 className="font-display text-3xl leading-[1.08] text-ink">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </motion.div>
            </AnimatePresence>
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
    img: talkImg,
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
    img: sliderLandscape,
    title: "Calm through every incident",
    body: "Structured response tiers, clear communication, and disciplined execution turn even the most complex outages into a controlled, measured recovery.",
    overlay: "light",
  },
  {
    img: sliderDatacenter,
    title: "Infrastructure in expert hands",
    body: "From single servers to multi-cloud estates across AWS, Azure, and Google Cloud — engineered, monitored, and maintained with production-grade discipline.",
    overlay: "light",
  },
] as const;

function SliderSection() {
  return (
    <section className="bg-cream pt-32 pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <InView>
          <h3 className="font-display text-5xl md:text-6xl text-ink max-w-2xl leading-[1.05]">
            Built for the moments that matter.
          </h3>
        </InView>
      </div>
      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-16 pb-6 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {sliderCards.map((c, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="snap-start shrink-0 relative rounded-[32px] overflow-hidden shadow-sm border border-border/40 w-[85vw] md:w-[720px] h-[520px] md:h-[600px] group"
          >
            <img
              src={c.img}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              width={1200}
              height={900}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40" />
            <div className="relative z-10 p-10 md:p-12 max-w-lg text-white">
              <h4 className="font-display text-4xl md:text-5xl leading-[1.05]">{c.title}</h4>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">{c.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const securityPillars = [
  { icon: Lock, title: "Least-privilege access", body: "Scoped credentials, MFA everywhere, and time-bound access to every environment we touch." },
  { icon: ShieldCheck, title: "Hardened workflows", body: "Change control, peer review, and documented runbooks behind every action taken on production." },
  { icon: FileCheck2, title: "Audited procedures", body: "Full activity trails and periodic reviews so every engagement stands up to enterprise scrutiny." },
  { icon: Activity, title: "Continuous monitoring", body: "Threat detection, patch management, and vulnerability response running around the clock." },
];

function Privacy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const lockRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={ref} className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="group/card relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a0a0a] via-[#141410] to-[#1a1a18] p-10 md:p-16">
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
            <motion.div
              style={{ y: glowY }}
              className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
            >
              <div className="h-full w-full" style={{ background: "radial-gradient(circle, oklch(0.45 0.14 100 / 0.55), transparent 65%)" }} />
            </motion.div>
            <motion.div style={{ rotate: lockRotate }} className="pointer-events-none absolute right-6 md:right-14 top-10 md:top-16">
              <Lock className="text-white/[0.06]" size={220} strokeWidth={1} />
            </motion.div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.16_95)]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/45">Security &amp; compliance</span>
              </div>
              <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
                <h3 className="font-display text-5xl md:text-[64px] text-white leading-[1.02]">
                  Security at the core.
                </h3>
                <p className="text-[15px] text-white/55 leading-relaxed max-w-md md:pb-2">
                  Every engagement is protected by strict access controls, hardened workflows, audited procedures, and continuous security management — because trust is the foundation of managed services.
                </p>
              </div>

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
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
                    <p.icon size={20} strokeWidth={1.5} className="text-[oklch(0.82_0.16_95)]/80 transition-transform duration-500 group-hover:-translate-y-0.5" />
                    <h4 className="mt-5 text-[15px] text-white">{p.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/45">{p.body}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-white/35">
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


function Testimonials() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="bg-cream pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <InView>
          <h3 className="font-display text-5xl md:text-6xl text-ink">Trusted by teams worldwide.</h3>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            Hosting providers, MSPs, and enterprises rely on SupportPRO to keep their infrastructure and customers running.
          </p>
        </InView>
      </div>
      <div className="mt-16 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-cream to-transparent z-10" />
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[340px] md:w-[420px] shrink-0 rounded-2xl bg-white border border-border/50 p-6 text-left shadow-sm"
            >
              <div className="text-[oklch(0.75_0.15_80)] text-sm mb-3 tracking-wider">★★★★★</div>
              <p className="text-sm text-ink leading-relaxed">&ldquo;{t}&rdquo;</p>
              <p className="mt-4 text-xs text-muted-foreground">— SupportPRO Client</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <InView>
          <h3 className="font-display text-5xl md:text-6xl text-ink text-center">Frequently asked.</h3>
        </InView>
        <div className="mt-12 divide-y divide-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-5 text-left flex items-start justify-between gap-6"
                >
                  <div className="text-[15px] text-ink font-medium flex-1">{f.q}</div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-muted-foreground shrink-0 mt-0.5"
                  >
                    <Plus size={18} />
                  </motion.div>
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
                      <p className="pb-5 pr-10 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl leading-[0.95]"
          >
            Ready to strengthen<br /><em>your infrastructure?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-white/80 text-sm md:text-base max-w-xl"
          >
            Partner with certified engineers delivering enterprise-grade infrastructure management, cloud operations, DevOps, technical support, and proactive monitoring — 24 hours a day, 365 days a year.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            id="contact"
          >
            <a href="#contact" className="rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
              Book a Consultation
            </a>
            <a href="#contact" className="rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition">
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
    <footer className="bg-ink text-white/80 px-6 md:px-10 py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
        <div>
          <div className="font-display text-3xl text-white">supportpro</div>
          <p className="mt-3 text-white/50 leading-relaxed max-w-[220px]">Enterprise infrastructure support, 24/7/365.</p>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Services</div>
          <div className="space-y-2"><div>24/7 Support</div><div>Cloud Management</div><div>Server Management</div><div>NOC Services</div></div>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Solutions</div>
          <div className="space-y-2"><div>White-label Support</div><div>DevOps</div><div>Managed IT</div><div>Hosting Support</div></div>
        </div>
        <div>
          <div className="font-medium text-white mb-3">Company</div>
          <div className="space-y-2"><div>About</div><div>Contact</div><div>Careers</div></div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 text-white/40 text-xs">
        © 2026 SupportPRO. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-cream overflow-x-clip">
      <Nav />
      <Hero />
      <StickyPhoneSection />
      <Services />
      <SliderSection />
      <Privacy />
      <Testimonials />
      <FAQ />
      <CTA />
      <SiteFooter />
    </main>
  );
}

