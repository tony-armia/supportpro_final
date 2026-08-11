import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
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
  "AWS Certified",
  "Red Hat Certified",
  "cPanel Partner",
  "Microsoft Certified",
  "ISO 9001:2015",
  "ISO 27001",
  "AICPA SOC",
  "BBB Accredited",
];

export function Credentials() {
  return (
    <section className="bg-cream pt-24 pb-4">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-[13px] text-muted-foreground">
            In business since 2003 — headquartered in Chicago, IL, with three offshore delivery centres in South India.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {credentials.map((c) => (
              <span key={c} className="text-[13px] text-ink/55 transition-colors hover:text-ink">
                {c}
              </span>
            ))}
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
  },
  {
    title: "24/7 customer support",
    body: "Our engineers are at your service 24 hours a day, seven days a week, 365 days a year. We listen to every server problem, address every query, and stay with it until you are completely satisfied.",
  },
  {
    title: "Proactive server management",
    body: "We look after the most fragile part of your operation — your infrastructure. Rather than waiting for something to break, we take preventive measures to keep environments secure, patched, and stable.",
  },
];

export function Pillars() {
  return (
    <section className="bg-cream pt-20 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <h2 className="font-display text-5xl md:text-6xl leading-[1.03] text-ink">
                The outsourced technical<br />support experts.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <Reveal delay={0.12}>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                We provide 24/7 transparent technical support for web hosting companies, data centres, server management
                companies, and MSPs — quietly, under your brand, at enterprise standards.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group relative bg-cream p-8 transition-colors duration-500 hover:bg-white"
            >
              <span className="font-display text-sm tabular-nums text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-5 font-display text-2xl leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Supported platforms marquee ---------- */

const platforms = [
  "Amazon Web Services",
  "Google Cloud",
  "Microsoft Azure",
  "DigitalOcean",
  "Red Hat",
  "Windows Server",
  "OpenStack",
  "VMware",
  "cPanel",
  "Plesk",
  "DirectAdmin",
  "OpenVZ",
];

export function Platforms() {
  const loop = [...platforms, ...platforms];
  return (
    <section className="bg-cream pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Supported platforms.</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Covering every major technology platform to bring you excellent outsourced support.
          </p>
        </Reveal>
      </div>
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent md:w-40" />
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {loop.map((p, i) => (
            <div
              key={i}
              className="shrink-0 rounded-full border border-ink/12 bg-white/70 px-7 py-3.5 text-[14px] text-ink/75 backdrop-blur-sm"
            >
              {p}
            </div>
          ))}
        </motion.div>
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
      {value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  );
}

const stats = [
  { to: 965422, label: "Helpdesk tickets handled" },
  { to: 456343, label: "Live chats attended" },
  { to: 5.1, decimals: 1, label: "Average resolution hours" },
  { to: 15, label: "Average response minutes" },
];

export function Stats() {
  return (
    <section className="bg-cream pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-[13px] text-muted-foreground">
            Our numbers — measured from January 2015 to today.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="bg-cream px-6 py-10 text-center transition-colors duration-500 hover:bg-white"
            >
              <div className="font-display text-4xl md:text-5xl text-ink">
                <Counter to={s.to} decimals={s.decimals ?? 0} />
              </div>
              <p className="mt-3 text-[13px] text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why we call ourselves the experts ---------- */

const expertise = [
  "Cloud infrastructure management",
  "Linux administration",
  "Windows administration",
  "Data centre and NOC operations",
  "End user tech support",
];

export function Experts() {
  return (
    <section className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.03] text-ink max-w-2xl">
            Why we call ourselves<br /><em className="font-normal italic text-ink/70">the experts.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl text-ink">The SupportPRO difference</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Since our inception 23 years ago we have been learning and pioneering in outsourced technical support. We
                measure the metrics and key process indicators behind every engagement, and evaluate ourselves constantly so
                the service stays consistent time after time. Every ticket is treated with the utmost importance.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                We have developed a stringent quality assurance process on par with any industry standard. We love solving
                problems, and that is what drives our engineers day and night. Our commitment to quality and process has
                earned us ISO 9001:2015 certification.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <h3 className="font-display text-2xl text-ink">Our expertise</h3>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {expertise.map((e) => (
                  <li key={e} className="group flex items-center justify-between py-4 text-[14px] text-ink/80">
                    <span className="transition-transform duration-500 group-hover:translate-x-1">{e}</span>
                  </li>
                ))}
              </ul>
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
  return (
    <section id="contact-form" className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-10 rounded-[32px] border border-ink/10 bg-white/70 p-8 backdrop-blur-sm md:p-14">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">Drop us a message.</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Tell us about your infrastructure and support requirements. A senior engineer will get back to you with a
                scoped proposal, SLA options, and pricing.
              </p>
              <div className="mt-8 space-y-1 text-[14px] text-ink/70">
                <p>Headquarters — Chicago, IL, United States</p>
                <p>Delivery centres — 3 ODCs in South India</p>
                <p>Support desk — available 24/7/365</p>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.12}>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full name"
                    className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/50"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/50"
                  />
                </div>
                <input
                  placeholder="Company"
                  className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/50"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="What do you need support with?"
                  className="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/50"
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {sent ? "Message received" : "Send message"}
                </button>
                {sent && (
                  <p className="text-[13px] text-muted-foreground">
                    Thank you — our team will respond shortly.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
