'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HoverOrangeSpan } from '@/components/hover-orange-span';
import {
  Cloud,
  Layers,
  Headphones,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  GitBranch,
  Cpu,
  Check,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface SolutionPillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: any;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
  features: string[];
  techTags: string[];
  ctaText: string;
}

const PILLARS: SolutionPillar[] = [
  {
    id: 'cloud',
    title: 'Cloud & Kubernetes Ops',
    subtitle: 'Multi-cloud orchestration',
    badge: 'Enterprise Cloud',
    icon: Cloud,
    headline: 'Autonomous Cloud Engineering & Container Scale',
    description:
      'From AWS EKS and GCP GKE to multi-region hybrid clusters, our certified engineers architect, optimize, and manage your cloud footprint with zero downtime deployments.',
    metrics: [
      { label: 'Cloud Cost Saved', value: '38%' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Deployment Speed', value: '4x' },
    ],
    features: [
      'Terraform & Infrastructure-as-Code automation',
      'Continuous cost optimization & right-sizing',
      '24/7 Automated disaster recovery & backups',
    ],
    techTags: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Terraform', 'Docker'],
    ctaText: 'Explore Cloud Management',
  },
  {
    id: 'support',
    title: '24/7 White-Label Helpdesk',
    subtitle: 'Your brand, our team',
    badge: 'Outsourced Support',
    icon: Headphones,
    headline: 'First-Class Technical Support Under Your Own Brand',
    description:
      'Seamless white-label Level 1–3 technical support for web hosts, MSPs, and SaaS providers. Your customers will never know our engineers are outsourced.',
    metrics: [
      { label: 'First Response', value: '< 4.5m' },
      { label: 'Customer CSAT', value: '98.6%' },
      { label: 'Tickets Handled', value: '2.4M+' },
    ],
    features: [
      'Branded ticket, live chat & phone support',
      'Native WHMCS, Zendesk & Freshdesk integrations',
      'Multi-tier escalation protocols',
    ],
    techTags: ['WHMCS', 'Zendesk', 'Live Chat', 'cPanel', 'Plesk', 'DirectAdmin'],
    ctaText: 'Explore White-Label Helpdesk',
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Hardening',
    subtitle: 'Proactive security & CI/CD',
    badge: 'Hardened Security',
    icon: ShieldCheck,
    headline: 'Continuous Security, Patching & Resilience',
    description:
      'Proactive vulnerability auditing, zero-day threat response, and automated CI/CD pipeline hardening that keeps your client data fortified 24 hours a day.',
    metrics: [
      { label: 'Threats Blocked', value: '100%' },
      { label: 'Audit Compliance', value: 'SOC2 / ISO' },
      { label: 'Incident Resolution', value: '< 15m' },
    ],
    features: [
      'Kernel live patching without rebooting',
      'Real-time automated DDoS & brute-force mitigation',
      'End-to-end secrets & compliance governance',
    ],
    techTags: ['SOC2', 'ISO 27001', 'PCI-DSS', 'WAF', 'Cloudflare', 'Imunify360'],
    ctaText: 'Strengthen Security Now',
  },
];

export function HeroSection3() {
  const [activePillarId, setActivePillarId] = useState<string>('cloud');
  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#070A0F] text-white pt-28 pb-16 flex flex-col justify-center">
      {/* Dynamic glowing mesh background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#FF8101]/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,129,1,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8 w-full">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-xs font-medium text-white/90 mb-4"
          >
            <Sparkles size={13} className="text-[#FF8101]" />
            <span>23+ Years of Infrastructure Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.0] font-medium tracking-tight"
          >
            Full-Spectrum Engineering for <br className="hidden sm:inline" />
            <HoverOrangeSpan>Modern Infrastructure</HoverOrangeSpan>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto"
          >
            Select a solution discipline below to preview our managed capabilities, guaranteed SLAs, and dedicated technical squad deployments.
          </motion.p>
        </div>

        {/* Interactive 3-Pillar Switcher Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto mb-8"
        >
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`group relative text-left p-4 rounded-2xl border transition-all duration-300 cursor-morph ${
                  isActive
                    ? 'bg-gradient-to-b from-white/[0.12] to-white/[0.04] border-[#FF8101] shadow-lg shadow-[#FF8101]/15 ring-1 ring-[#FF8101]/40'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#FF8101] text-white' : 'bg-white/10 text-white/70 group-hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white tracking-wide">{pillar.title}</div>
                    <div className="text-[11px] text-white/50">{pillar.subtitle}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Interactive Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-black/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Card Left: Core Details */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="px-3 py-1 rounded-full bg-[#FF8101]/15 text-[#FF8101] border border-[#FF8101]/30 text-xs font-semibold uppercase tracking-wider mb-4">
                  {activePillar.badge}
                </span>
                
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight">
                  {activePillar.headline}
                </h2>

                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                  {activePillar.description}
                </p>

                {/* Feature Checklist */}
                <div className="mt-6 space-y-2.5 w-full">
                  {activePillar.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                      <div className="w-5 h-5 rounded-full bg-[#FF8101]/20 flex items-center justify-center text-[#FF8101] shrink-0">
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Platform Badges */}
                <div className="mt-6 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-white/40 font-mono mr-1">Supported Tech:</span>
                  {activePillar.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-white/80 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#contact-form"
                    className="cursor-morph rounded-full bg-[#FF8101] text-white px-6 py-3 text-sm font-semibold hover:brightness-110 shadow-lg shadow-[#FF8101]/30 transition-all flex items-center gap-2"
                  >
                    <span>{activePillar.ctaText}</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="#contact-form"
                    className="cursor-morph rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-white px-5 py-3 text-sm font-medium transition-all"
                  >
                    Schedule Scope Review
                  </a>
                </div>
              </div>

              {/* Card Right: Live Telemetry & SLA Numbers */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/50">Performance Benchmarks</span>
                    <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified
                    </span>
                  </div>

                  <div className="divide-y divide-white/10">
                    {activePillar.metrics.map((m, idx) => (
                      <div key={idx} className="py-4 flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-white/70">{m.label}</span>
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#FF8101] tracking-tight">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-white/60 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#FF8101] shrink-0" />
                    <span>Backed by contractual Service Level Agreement guarantee</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
