import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import {
  Plus, ShieldCheck, Cloud, Server, HeadphonesIcon, Activity,
  Radio, Lock, Users, ArrowRight, Check,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import dashboardImg from "@/assets/dashboard.png";
import serversImg from "@/assets/servers.png";
import engineerImg from "@/assets/engineer.jpg";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const technologies = [
  "AWS", "Microsoft Azure", "Google Cloud", "VMware", "Red Hat", "Linux",
  "Windows", "cPanel", "Plesk", "Docker", "Kubernetes",
];

const featureCards = [
  { icon: Cloud, title: "Cloud Management", desc: "Deploy, monitor, and optimize workloads across AWS, Azure, and Google Cloud with certified engineers." },
  { icon: Server, title: "Server Management", desc: "Proactive administration of Linux and Windows environments — patching, hardening, and performance tuning." },
  { icon: Activity, title: "DevOps Services", desc: "CI/CD pipelines, infrastructure as code, and container orchestration built for reliable release velocity." },
  { icon: HeadphonesIcon, title: "Helpdesk Support", desc: "Tier 1–3 technical support delivered under strict SLAs by engineers who understand your stack." },
  { icon: Radio, title: "Infrastructure Monitoring", desc: "24/7 observability with proactive alerting, capacity forecasting, and rapid incident response." },
  { icon: ShieldCheck, title: "NOC Services", desc: "A fully staffed Network Operations Center handling triage, escalation, and remediation around the clock." },
  { icon: Lock, title: "Security Management", desc: "Vulnerability management, hardening, compliance auditing, and continuous threat monitoring." },
  { icon: Users, title: "White-label Support", desc: "Certified engineers operating under your brand — seamless extension of your existing support team." },
];

const trustPoints = [
  "24/7 Operations", "Certified Engineers", "99.9% SLA",
  "Global Coverage", "Enterprise Security", "Transparent Reporting",
];

const metrics = [
  { value: "20+", label: "Years of Experience" },
  { value: "250+", label: "Certified Engineers" },
  { value: "10,000+", label: "Managed Servers" },
  { value: "1M+", label: "Requests Resolved" },
  { value: "99.9%", label: "Infrastructure Availability" },
];

const testimonials = [
  { quote: "Our downtime dropped by over 60% within the first quarter. SupportPRO's NOC feels like an internal team — response times we could never match on our own.", author: "VP Infrastructure, Managed Hosting Provider" },
  { quote: "White-label helpdesk under our brand has been transformative. Customer satisfaction scores rose sharply, and we scaled without hiring a single new engineer.", author: "COO, Enterprise SaaS Platform" },
  { quote: "They took over multi-cloud operations across AWS and Azure and stabilized workloads that had been drifting for years. Reliable, precise, no drama.", author: "CTO, Fintech Cloud Business" },
  { quote: "SupportPRO's engineers handled a critical migration flawlessly. Our monthly incident count dropped from double digits to near zero.", author: "Director of Operations, MSP" },
  { quote: "The transparency is what won us over. Weekly reporting, clear SLAs, and engineers who explain what they did and why.", author: "Head of DevOps, Global E-commerce" },
  { quote: "We evaluated four managed services partners. SupportPRO onboarded in under two weeks and hasn't missed an SLA since.", author: "IT Manager, Enterprise Client" },
];

const faqs = [
  { q: "What services does SupportPRO provide?", a: "SupportPRO delivers managed infrastructure services including cloud management, server administration, DevOps engineering, infrastructure monitoring, NOC services, security management, helpdesk support, and white-label technical support for hosting providers, MSPs, SaaS companies, and enterprises." },
  { q: "Do you provide 24/7 support?", a: "Yes. Our engineers operate around the clock with follow-the-sun coverage. Incident response, monitoring, and helpdesk services run 24/7/365 under contractual SLAs." },
  { q: "Do you support AWS, Azure and Google Cloud?", a: "Yes. Our certified cloud engineers manage AWS, Microsoft Azure, Google Cloud, and hybrid environments — including architecture, deployment, optimization, and ongoing operations." },
  { q: "Can you manage Linux and Windows servers?", a: "Yes. We manage the full range of Linux distributions (Red Hat, Ubuntu, CentOS, Debian) and Windows Server environments, including control panels such as cPanel and Plesk." },
  { q: "Do you provide white-label technical support?", a: "Yes. Our engineers operate seamlessly under your brand — email, chat, tickets, and phone — with agreed processes, tone, and SLAs so your customers experience one consistent team." },
  { q: "Do you work with MSPs and Hosting Providers?", a: "Yes. Hosting providers and MSPs are a core part of our customer base. We scale their support and NOC capacity without the overhead of building it internally." },
  { q: "How quickly can onboarding begin?", a: "Standard onboarding takes 1–2 weeks depending on scope. Urgent engagements can begin within days once initial access and runbooks are shared." },
  { q: "How do I contact SupportPRO?", a: "Book a consultation directly from this site or reach our team at sales@supportpro.com. We'll assess your environment and propose a tailored engagement." },
];

/* Word-by-word reveal on scroll. */
function RevealText({ children, className = "", as = "p" }: { children: string; className?: string; as?: "h3" | "p" | "h2" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });
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
  return <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">{children}</motion.span>;
}

function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0.15)", "rgba(20,20,20,0.55)"]);
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10">
      <motion.a href="#" className="font-display text-2xl text-white" style={{ mixBlendMode: "difference" }}
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        SupportPRO
      </motion.a>
      <motion.div style={{ backgroundColor: bg }}
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-1 rounded-full backdrop-blur-md px-2 py-1.5 text-sm text-white border border-white/10">
        <a href="#services" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">Services</a>
        <a href="#enterprise" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">Enterprise</a>
        <a href="#faq" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">FAQ</a>
        <a href="#cta" className="ml-1 px-4 py-1.5 rounded-full bg-white text-ink hover:bg-white/90 transition font-medium">Book Consultation</a>
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
    <section ref={ref} className="relative h-screen min-h-[760px] w-full overflow-hidden">
      <motion.img src={heroImg} alt="" style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover" width={1600} height={1008} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
      <motion.div style={{ y: textY, opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          24/7 Managed Infrastructure Services
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl">
          Enterprise Infrastructure<br />
          <em>Support</em> That Never Sleeps.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
          24/7 managed infrastructure, cloud operations, DevOps, and white-label technical support for hosting providers, SaaS companies, MSPs, and enterprises. Certified engineers become an extension of your team.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
            Book a Consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-6 py-3 text-sm text-white hover:bg-white/10 transition">
            Explore Services
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          {["24/7 Support", "Certified Engineers", "Enterprise SLA", "White-label Operations"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <Check size={12} className="text-emerald-400" /> {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustLogos() {
  return (
    <section className="relative bg-cream rounded-t-[40px] -mt-10 pt-20 pb-16 z-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted Technologies</p>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-x-6 gap-y-6 items-center">
          {technologies.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="text-center text-[13px] font-medium tracking-tight text-ink/60 hover:text-ink transition-colors">
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Sticky visual pinned while feature blocks scroll past. */
function StickyServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const blocks: Array<{ label: string; title: string; body: string; align: "left" | "right"; visual: "dashboard" | "servers" }> = [
    { label: "Infrastructure Management", title: "Focus on Growing Your Business.\nWe'll Handle the Infrastructure.", body: "SupportPRO manages your servers, cloud platforms, operating systems, and day-to-day infrastructure operations so your internal teams can focus on innovation instead of maintenance.", align: "left", visual: "dashboard" },
    { label: "Cloud Operations", title: "Cloud Infrastructure Built for Reliability.", body: "Certified engineers manage AWS, Azure, Google Cloud, and hybrid environments with proactive monitoring, optimization, maintenance, and security best practices.", align: "right", visual: "dashboard" },
    { label: "White-label Technical Support", title: "Your Customers.\nOur Engineers.\nOne Trusted Experience.", body: "Extend your support team with experienced technical professionals operating under your brand while maintaining exceptional customer experiences 24 hours a day.", align: "left", visual: "servers" },
    { label: "Infrastructure Monitoring", title: "Complete Visibility Across Every System.", body: "Monitor servers, applications, cloud infrastructure, and networks with proactive alerting, continuous monitoring, detailed reporting, and rapid incident response.", align: "right", visual: "servers" },
  ];

  const [activeVisual, setActiveVisual] = useState<"dashboard" | "servers">("dashboard");

  return (
    <section ref={sectionRef} className="relative bg-cream pt-8">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Sticky visual column */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <motion.div style={{ y: visualY }} className="relative w-full max-w-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeVisual}
                  src={activeVisual === "dashboard" ? dashboardImg : serversImg}
                  alt=""
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          {blocks.map((b, i) => {
            const blockRef = useRef<HTMLDivElement>(null);
            const inView = useInView(blockRef, { amount: 0.5 });
            if (inView && activeVisual !== b.visual) {
              queueMicrotask(() => setActiveVisual(b.visual));
            }
            return (
              <div key={i} ref={blockRef}
                className={`min-h-screen flex items-center ${b.align === "right" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">{b.label}</p>
                  <RevealText as="h3" className="font-display text-4xl md:text-5xl leading-[1.05] text-ink block">
                    {b.title.replace(/\n/g, " ")}
                  </RevealText>
                  <div className="mt-4">
                    <RevealText className="text-muted-foreground text-[15px] leading-relaxed">
                      {b.body}
                    </RevealText>
                  </div>
                </div>
              </div>
            );
          })}
          <img src={dashboardImg} alt="" className="md:hidden mx-auto max-h-[60vh] w-auto -mt-32 mb-16" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function InView({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function ServiceCards() {
  return (
    <section id="services" className="bg-cream pt-24 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Managed Services</p>
            <h3 className="font-display text-5xl md:text-6xl text-ink leading-[1.02]">
              Every layer of your <em>infrastructure</em>, covered.
            </h3>
          </div>
        </InView>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <InView key={c.title} delay={(i % 4) * 0.08}>
                <motion.a href="#cta" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                  className="group block h-full rounded-2xl bg-white border border-border/60 p-6 shadow-sm hover:shadow-lg hover:border-ink/20 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-ink/5 flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="mt-5 text-lg font-medium text-ink">{c.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-ink">
                    Learn more
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.a>
              </InView>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="rounded-[32px] bg-ink text-white p-12 md:p-16">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">By the numbers</p>
              <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                Two decades of <em>operational</em> excellence.
              </h3>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-8">
              {metrics.map((m, i) => (
                <motion.div key={m.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="border-t border-white/15 pt-5">
                  <div className="font-display text-4xl md:text-5xl text-white leading-none">{m.value}</div>
                  <div className="mt-3 text-xs uppercase tracking-wider text-white/50">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}

function Enterprise() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const shieldRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  return (
    <section id="enterprise" ref={ref} className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a0a0a] via-[#0f1210] to-[#1a1a1a] p-12 md:p-20 min-h-[480px]">
            <div className="absolute inset-0 opacity-40"
              style={{ background: "radial-gradient(ellipse at 85% 60%, oklch(0.45 0.12 155 / 0.4), transparent 60%)" }} />
            <div className="max-w-xl relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Enterprise Grade</p>
              <h3 className="mt-4 font-display text-5xl md:text-6xl text-white leading-[1.05]">
                Built for enterprise <em>reliability</em>.
              </h3>
              <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-md">
                SupportPRO combines experienced engineers, enterprise-grade technologies, and proven operational processes to deliver scalable managed infrastructure services with maximum availability and security.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 max-w-md">
                {trustPoints.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/80">
                    <Check size={14} className="text-emerald-400 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <motion.div style={{ rotate: shieldRotate }}
              className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none">
              <ShieldCheck className="text-white/10" size={280} strokeWidth={1} />
            </motion.div>
          </div>
        </InView>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Customer Stories</p>
            <h3 className="font-display text-5xl md:text-6xl text-ink leading-[1.02]">
              Trusted by teams that can't <em>afford</em> downtime.
            </h3>
          </div>
        </InView>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <InView key={i} delay={(i % 3) * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white border border-border/60 p-6 text-left shadow-sm h-full flex flex-col">
                <div className="text-[oklch(0.75_0.15_80)] text-sm mb-3 tracking-wider">★★★★★</div>
                <p className="text-sm text-ink leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 pt-5 border-t border-border/60 text-xs text-muted-foreground">— {t.author}</p>
              </motion.div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineerBanner() {
  return (
    <section className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="grid md:grid-cols-5 gap-0 rounded-[32px] overflow-hidden bg-white border border-border/60">
            <div className="md:col-span-3 relative overflow-hidden">
              <img src={engineerImg} alt="" className="h-full w-full object-cover min-h-[380px]" loading="lazy" />
            </div>
            <div className="md:col-span-2 p-10 md:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Certified Engineers</p>
              <h4 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight">
                An extension of your <em>team</em>.
              </h4>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Every engagement is staffed by senior engineers with certifications across AWS, Azure, Google Cloud, Red Hat, and Kubernetes. Available 24/7, aligned to your runbooks.
              </p>
              <a href="#cta" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Meet the team <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </InView>
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
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">FAQ</p>
            <h3 className="font-display text-5xl md:text-6xl text-ink">Common questions.</h3>
          </div>
        </InView>
        <div className="mt-12 divide-y divide-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-5 text-left flex items-start justify-between gap-6">
                  <div className="text-[15px] text-ink font-medium flex-1">{f.q}</div>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-muted-foreground shrink-0 mt-0.5">
                    <Plus size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden">
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
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  return (
    <section id="cta" ref={ref} className="relative min-h-[640px] h-[90vh] overflow-hidden">
      <motion.img src={ctaImg} alt="" style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover" width={1600} height={912} loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white pt-16 pb-40">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
          Ready to strengthen<br /> your <em>infrastructure?</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-white/75 text-sm md:text-base max-w-xl leading-relaxed">
          Partner with SupportPRO's certified engineers for enterprise-grade infrastructure management, cloud operations, DevOps, monitoring, and technical support designed to keep your business running 24/7.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
            Book a Consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-6 py-3 text-sm text-white hover:bg-white/10 transition">
            Contact Our Team
          </a>
        </motion.div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 text-white/70 text-xs z-10">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="font-display text-2xl text-white">SupportPRO</div>
            <p className="mt-2 text-white/50 text-xs leading-relaxed">Managed infrastructure. Trusted globally.</p>
          </div>
          <div>
            <div className="font-medium text-white mb-2">Services</div>
            <div className="space-y-1">
              <div>Cloud Management</div>
              <div>Server Management</div>
              <div>NOC Services</div>
              <div>White-label Support</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-white mb-2">Company</div>
            <div className="space-y-1"><div>About</div><div>Careers</div><div>Contact</div></div>
          </div>
          <div>
            <div className="font-medium text-white mb-2">Connect</div>
            <div className="space-y-1"><div>LinkedIn</div><div>Twitter</div><div>sales@supportpro.com</div></div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-white/20 text-white/50">
          © 2026 SupportPRO. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-cream overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustLogos />
      <StickyServicesSection />
      <ServiceCards />
      <Metrics />
      <Enterprise />
      <EngineerBanner />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
