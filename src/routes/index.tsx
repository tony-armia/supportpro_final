import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { Plus, Lock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import phoneFrame from "@/assets/phone-frame.png";
import phoneTasks from "@/assets/phone-tasks.png";
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

/* Sticky phone that stays pinned while four text blocks scroll past. */
function StickyPhoneSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const blocks: Array<{ title: string; body: string; align: "left" | "right" }> = [
    { title: "24/7 expert\nsupport, always on.", body: "Our global engineering teams monitor, respond, and resolve around the clock — so your infrastructure and customers never wait.", align: "left" },
    { title: "Cloud and server\nmanagement, mastered.", body: "From Linux and Windows administration to AWS, Azure, and Google Cloud, we run production environments with precision and discipline.", align: "right" },
    { title: "White-label support\nunder your brand.", body: "Extend your team without expanding your headcount. Our engineers deliver seamless helpdesk and MSP support in your voice, your tools, your brand.", align: "left" },
    { title: "NOC and DevOps\nengineered for scale.", body: "Continuous monitoring, automation, and incident response designed to keep complex infrastructure stable, secure, and ready to grow.", align: "right" },
  ];

  return (
    <section ref={sectionRef} id="features" className="relative bg-cream rounded-t-[40px] -mt-10 pt-24">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Sticky phone column */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <motion.img
              src={phoneFrame}
              alt=""
              style={{ y: phoneY, rotate: phoneRotate }}
              className="max-h-[70vh] w-auto drop-shadow-2xl"
              width={912}
              height={1408}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text blocks stacked, each one full-viewport tall so phone stays pinned */}
        <div className="relative">
          {blocks.map((b, i) => (
            <div
              key={i}
              className={`min-h-screen flex items-center ${
                b.align === "right" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="max-w-sm">
                <RevealText as="h3" className="font-display text-4xl md:text-5xl leading-[1.05] text-ink block">
                  {b.title.replace("\n", " ")}
                </RevealText>
                <div className="mt-4">
                  <RevealText className="text-muted-foreground text-[15px] leading-relaxed">
                    {b.body}
                  </RevealText>
                </div>
              </div>
            </div>
          ))}
          {/* Mobile phone (shown only <md) */}
          <img src={phoneFrame} alt="" className="md:hidden mx-auto max-h-[60vh] w-auto -mt-32 mb-16" loading="lazy" />
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

function Privacy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lockRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  return (
    <section ref={ref} className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <InView>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a0a0a] via-[#151510] to-[#1a1a1a] p-12 md:p-20 min-h-[420px]">
            <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 80% 60%, oklch(0.35 0.15 100 / 0.5), transparent 60%)" }} />
            <div className="max-w-md relative z-10">
              <h3 className="font-display text-5xl md:text-6xl text-white leading-[1.05]">Security at the core.</h3>
              <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm">
                Every engagement is protected by strict access controls, hardened workflows, audited procedures, and continuous security management — because trust is the foundation of managed services.
              </p>
            </div>
            <motion.div
              style={{ rotate: lockRotate }}
              className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2"
            >
              <Lock className="text-white/10" size={260} strokeWidth={1} />
            </motion.div>
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
    <main className="bg-cream overflow-x-hidden">
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

