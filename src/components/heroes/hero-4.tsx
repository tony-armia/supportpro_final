'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { HoverOrangeSpan } from '@/components/hover-orange-span';
import {
  Sliders,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Users,
  Server,
} from 'lucide-react';

const COVERAGE_OPTIONS = [
  { id: 'helpdesk', label: '24/7 White-Label Helpdesk' },
  { id: 'noc', label: 'Proactive NOC Monitoring' },
  { id: 'devops', label: 'CloudOps & DevOps' },
  { id: 'security', label: 'Security & Live Patching' },
];

export function HeroSection4() {
  const [serverCount, setServerCount] = useState<number>(35);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'helpdesk',
    'noc',
    'devops',
  ]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Dynamic calculations based on slider
  const estimatedSavings = serverCount > 100 ? '68%' : serverCount > 40 ? '62%' : '54%';
  const responseSLA = serverCount > 100 ? '< 3.5m' : '< 5.0m';
  const squadSize = serverCount > 100 ? 'Senior Dedicated Pod' : serverCount > 30 ? 'Dedicated Squad' : 'Hybrid Dedicated Pod';

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0C0F17] text-white pt-28 pb-16 flex items-center justify-center">
      {/* Editorial ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#FF8101]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-white/90 mb-6 backdrop-blur-md"
            >
              <Sparkles size={12} className="text-[#FF8101]" />
              <span>Trusted by 500+ Hosting Brands &amp; Global MSPs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[66px] leading-[1.02] tracking-tight font-medium"
            >
              The technical support partner that{' '}
              <HoverOrangeSpan>pays for itself.</HoverOrangeSpan>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl"
            >
              Eliminate hiring bottlenecks and overnight escalations. We provide certified sysadmins, DevOps engineers, and white-label customer support teams that seamlessly integrate into your workflow in 48 hours.
            </motion.p>

            {/* Quick Benefits Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 space-y-2.5"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                <CheckCircle size={15} className="text-[#FF8101]" />
                <span>Immediate 24/7/365 shift coverage — zero night-shift headaches</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                <CheckCircle size={15} className="text-[#FF8101]" />
                <span>Strict contractual SLA with financially backed response times</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                <CheckCircle size={15} className="text-[#FF8101]" />
                <span>White-label execution — your clients interact with your brand only</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#contact-form"
                className="cursor-morph rounded-full bg-[#FF8101] text-white px-7 py-3.5 text-sm font-semibold hover:brightness-110 shadow-lg shadow-[#FF8101]/30 transition-all flex items-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#services"
                className="cursor-morph rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-white px-6 py-3.5 text-sm font-medium transition-all"
              >
                View Service Catalog
              </a>
            </motion.div>
          </div>

          {/* Right Column: Live Infrastructure Coverage & SLA Estimator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF8101]/20 flex items-center justify-center text-[#FF8101]">
                    <Sliders size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Live Infrastructure Estimator</h3>
                    <p className="text-[11px] text-white/50">Instant SLA and coverage assessment</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Instant Calculation
                </span>
              </div>

              {/* Slider: Fleet Size */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                  <span className="text-white/80 flex items-center gap-1.5">
                    <Server size={14} className="text-[#FF8101]" />
                    Total Servers / Cloud Nodes:
                  </span>
                  <span className="text-lg font-bold font-mono text-[#FF8101]">
                    {serverCount} {serverCount >= 250 ? 'Nodes+' : 'Nodes'}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={serverCount}
                  onChange={(e) => setServerCount(Number(e.target.value))}
                  className="mt-3 w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF8101]"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>5 Servers</span>
                  <span>50 Servers</span>
                  <span>150 Servers</span>
                  <span>250+ Enterprise</span>
                </div>
              </div>

              {/* Service Selection Chips */}
              <div className="mt-6">
                <label className="text-xs font-medium text-white/70 block mb-2.5">
                  Select Coverage Capabilities:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {COVERAGE_OPTIONS.map((opt) => {
                    const isChecked = selectedServices.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleService(opt.id)}
                        className={`p-2.5 rounded-xl text-left text-xs transition-all flex items-center gap-2 cursor-morph border ${
                          isChecked
                            ? 'bg-[#FF8101]/15 border-[#FF8101] text-white font-medium'
                            : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05]'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-[#FF8101] border-[#FF8101] text-white'
                              : 'border-white/30'
                          }`}
                        >
                          {isChecked && <CheckCircle size={11} strokeWidth={3} />}
                        </div>
                        <span className="leading-tight text-[11px]">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Assessment Outcome */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-white/50 uppercase font-mono">First Response</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-emerald-400 mt-0.5">
                    {responseSLA}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-white/50 uppercase font-mono">Avg Cost Saved</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-[#FF8101] mt-0.5">
                    {estimatedSavings}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-white/50 uppercase font-mono">Deployment</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
                    &lt; 48 Hrs
                  </div>
                </div>
              </div>

              {/* Callout Note & Direct Action */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="text-[11px] text-white/50">
                  Calculated for <span className="text-white font-medium">{squadSize}</span> model
                </div>
                <a
                  href="#contact-form"
                  className="px-4 py-2 rounded-xl bg-[#FF8101] hover:brightness-110 text-white text-xs font-medium transition-all shadow-md shadow-[#FF8101]/25 flex items-center gap-1.5 shrink-0"
                >
                  <span>Lock In Quote</span>
                  <ArrowRight size={12} />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
