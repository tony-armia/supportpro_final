'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import {
  motion,
  useInView,
  AnimatePresence,
} from 'motion/react';
import {
  ShieldCheck,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Building2,
  User,
  Server,
  Lock,
  Globe,
  Cpu,
  Activity,
  Gauge,
  Check,
  RefreshCw,
  FileText,
  AlertCircle,
  Terminal,
  KeyRound,
  Network,
  HardDrive,
  CheckCircle2,
  Clock,
  Wifi,
  Code,
  ShoppingBag,
  Layers,
} from 'lucide-react';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/footer';
import ParticleBadge, { GlobalBadgeSpotlight } from '@/components/MagicBadge';

// =========================================================================
// PARTNER & CERTIFICATION LOGO ASSET SOURCES
// =========================================================================
import awsPartnerBadge from '@/assets/logos 2/amzon.png';
import redHatPartnerBadge from '@/assets/logos 2/red.png';
import satisfactionBadge from '@/assets/logos 2/satisfaction.png';

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ScannerPage() {
  // Scanner state
  const [scanType, setScanType] = useState<'domain' | 'ip'>('domain');
  const [domainName, setDomainName] = useState('');
  const [domainError, setDomainError] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sshPort, setSSHPort] = useState('22');
  const [userEmail, setUserEmail] = useState('');
  const [wheelUser, setWheelUser] = useState(false);
  const [ipError, setIpError] = useState('');

  // Scanning flow states: 'idle' | 'scanning' | 'results'
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'results'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Contact form state
  const [contactSent, setContactSent] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const industryGridRef = useRef<HTMLDivElement>(null);

  const scanSteps = [
    { label: 'Resolving DNS & Host Connectivity', category: 'Connectivity' },
    { label: 'Inspecting SSL/TLS Cipher Suites & Security Headers', category: 'Security' },
    { label: 'Auditing Active Services & Open Port Integrity', category: 'Configuration' },
    { label: 'Measuring Server Response Time & TTFB Latency', category: 'Performance' },
    { label: 'Verifying Network Routing & Packet Transits', category: 'Network / Storage' },
  ];

  const diagnosticResults = [
    {
      category: 'Security Health',
      desc: 'SSL/TLS Cipher suite & HTTP Security Headers',
      status: 'Passed',
      detail: 'TLS 1.3 Active • HSTS Configured • No Critical CVEs',
      icon: Lock,
    },
    {
      category: 'Performance Benchmark',
      desc: 'HTTP/2 Server Handshake & Time-To-First-Byte',
      status: 'Optimal',
      detail: 'TTFB: 94ms • Gzip/Brotli Compression Active',
      icon: Gauge,
    },
    {
      category: 'Connectivity & Routing',
      desc: 'DNS Propagation & Edge Gateway Latency',
      status: 'Stable',
      detail: '0% Packet Loss • Edge Response 18ms',
      icon: Globe,
    },
    {
      category: 'Network & Storage IO',
      desc: 'Network MTU Path & Storage Subsystem Response',
      status: 'Normal',
      detail: '1500 MTU Verified • High IOPS Availability',
      icon: HardDrive,
    },
    {
      category: 'Server Configuration',
      desc: 'Web Server Daemon & Protocol Configuration',
      status: 'Verified',
      detail: 'Production Parameters Hardened • KeepAlive Active',
      icon: Cpu,
    },
  ];

  const certifications = [
    '100% Cpanel Certified Engineers',
    '100% RHCE Certified Engineers',
    'Amazon Certified Engineers',
    'OpenStack Certified Engineers',
  ];

  const industryItems = [
    { name: 'Web Hosting Services', icon: Server },
    { name: 'Service Providers', icon: Globe },
    { name: 'E-Commerce Companies', icon: ShoppingBag },
    { name: 'Software Vendors', icon: Code },
    { name: 'Web Developers', icon: Terminal },
    { name: 'ISPs', icon: Wifi },
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    setDomainError('');
    setIpError('');

    if (scanType === 'domain') {
      if (!domainName.trim()) {
        setDomainError('Domain Name required');
        return;
      }
    } else {
      if (!ipAddress.trim()) {
        setIpError('Server IP is required');
        return;
      }
    }

    setScanState('scanning');
    setScanProgress(0);
    setCurrentStepIndex(0);
  };

  useEffect(() => {
    if (scanState === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanState('results');
            return 100;
          }
          const next = prev + 20;
          setCurrentStepIndex(Math.min(4, Math.floor(next / 20)));
          return next;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [scanState]);

  const handleResetScan = () => {
    setScanState('idle');
    setScanProgress(0);
    setDomainName('');
    setIpAddress('');
    setDomainError('');
    setIpError('');
  };

  return (
    <main className="bg-cream dark:bg-[var(--sp-bg)] min-h-screen overflow-x-clip transition-colors duration-300">
      <Nav />

      {/* ─── SECTION 1: SupportPRO Free Website/Server Scanner ────────────────────── */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Main Column: Intro + Interactive Scanner */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <Reveal>
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.06] text-ink dark:text-white tracking-tight">
                    SupportPRO Free Website/Server Scanner
                    <span className="text-[#FF8101]">.</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="mt-4 text-xl sm:text-2xl font-bold text-ink dark:text-white tracking-tight">
                    Is everything fine with your Server?
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-ink/75 dark:text-white/70">
                    With ever-increasing cybersecurity risks, management of servers can no longer be a set-it and forget it task. SupportPRO Scanner is a robust tool which performs comprehensive tests against servers for multiple items, including the current state of security, performance, connectivity, network or storage. It also checks for server configuration items. It will test a web server in the quickest time possible without impacting your server performance.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-ink dark:text-white">
                    <CheckCircle2 size={13} className="text-[#FF8101]" />
                    <span>No credit card required.</span>
                  </div>
                </Reveal>
              </div>

              {/* ── Interactive Scanner Tool Box ── */}
              <Reveal delay={0.25}>
                <div className="rounded-3xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#141414] p-6 sm:p-8">
                  {scanState === 'idle' && (
                    <form onSubmit={handleStartScan} className="space-y-6">
                      {/* Segmented Selector: DomainName vs ServerIP */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-ink/5 dark:border-white/5">
                        <div className="inline-flex rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/50 dark:bg-black/30 p-1">
                          <button
                            type="button"
                            suppressHydrationWarning
                            onClick={() => {
                              setScanType('domain');
                              setDomainError('');
                              setIpError('');
                            }}
                            className={`flex items-center gap-2 rounded-xl px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                              scanType === 'domain'
                                ? 'bg-[#FF8101] text-white'
                                : 'text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white'
                            }`}
                          >
                            <Globe size={14} />
                            <span>DomainName</span>
                          </button>
                          <button
                            type="button"
                            suppressHydrationWarning
                            onClick={() => {
                              setScanType('ip');
                              setDomainError('');
                              setIpError('');
                            }}
                            className={`flex items-center gap-2 rounded-xl px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                              scanType === 'ip'
                                ? 'bg-[#FF8101] text-white'
                                : 'text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white'
                            }`}
                          >
                            <Server size={14} />
                            <span>ServerIP</span>
                          </button>
                        </div>

                        <span className="text-xs font-mono text-muted-foreground dark:text-white/40">
                          Mode: {scanType === 'domain' ? 'Public Web Check' : 'Deep Infrastructure Audit'}
                        </span>
                      </div>

                      {/* Domain Mode Input */}
                      {scanType === 'domain' && (
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-white/50 pl-1">
                            Target Domain Address
                          </label>
                          <div className="relative">
                            <Globe
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                              size={17}
                            />
                            <input
                              type="text"
                              name="domainame"
                              id="domainame"
                              suppressHydrationWarning
                              value={domainName}
                              onChange={(e) => {
                                setDomainName(e.target.value);
                                if (domainError) setDomainError('');
                              }}
                              placeholder="http://example.com"
                              className={`w-full rounded-2xl border bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3.5 text-[14px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40 ${
                                domainError
                                  ? 'border-red-500/80 focus:border-red-500'
                                  : 'border-ink/10 dark:border-white/10'
                              }`}
                            />
                          </div>
                          {domainError && (
                            <p className="text-xs text-red-500 font-medium pl-1 flex items-center gap-1.5">
                              <AlertCircle size={13} />
                              <span>{domainError}</span>
                            </p>
                          )}
                        </div>
                      )}

                      {/* Server IP Mode Inputs */}
                      {scanType === 'ip' && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-white/50 pl-1">
                              Target Server IP Address
                            </label>
                            <div className="relative">
                              <Server
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                                size={17}
                              />
                              <input
                                type="text"
                                name="ip"
                                id="ip"
                                suppressHydrationWarning
                                value={ipAddress}
                                onChange={(e) => {
                                  setIpAddress(e.target.value);
                                  if (ipError) setIpError('');
                                }}
                                placeholder="Server IP"
                                className={`w-full rounded-2xl border bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3.5 text-[14px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40 ${
                                  ipError
                                    ? 'border-red-500/80 focus:border-red-500'
                                    : 'border-ink/10 dark:border-white/10'
                                }`}
                              />
                            </div>
                            {ipError && (
                              <p className="text-xs text-red-500 font-medium pl-1 flex items-center gap-1.5">
                                <AlertCircle size={13} />
                                <span>{ipError}</span>
                              </p>
                            )}
                          </div>

                          {/* Root Credentials Fields */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-semibold text-muted-foreground dark:text-white/40 pl-1">
                                Username
                              </label>
                              <div className="relative">
                                <User
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                                  size={16}
                                />
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  suppressHydrationWarning
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  placeholder="Username"
                                  className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-semibold text-muted-foreground dark:text-white/40 pl-1">
                                Password
                              </label>
                              <div className="relative">
                                <KeyRound
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                                  size={16}
                                />
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  suppressHydrationWarning
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Password"
                                  className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-semibold text-muted-foreground dark:text-white/40 pl-1">
                                SSH Port
                              </label>
                              <div className="relative">
                                <Terminal
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                                  size={16}
                                />
                                <input
                                  type="text"
                                  name="sshport"
                                  id="sshport"
                                  suppressHydrationWarning
                                  value={sshPort}
                                  onChange={(e) => setSSHPort(e.target.value)}
                                  placeholder="SSH Port"
                                  className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[11px] font-semibold text-muted-foreground dark:text-white/40 pl-1">
                                Email Address
                              </label>
                              <div className="relative">
                                <Mail
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                                  size={16}
                                />
                                <input
                                  type="email"
                                  name="useremail"
                                  id="useremail"
                                  suppressHydrationWarning
                                  value={userEmail}
                                  onChange={(e) => setUserEmail(e.target.value)}
                                  placeholder="Email Address"
                                  className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Wheel User Checkbox */}
                          <div className="pt-2">
                            <label className="inline-flex items-center gap-2.5 text-xs font-medium text-ink/80 dark:text-white/80 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                name="wheeluser"
                                id="wheeluser"
                                suppressHydrationWarning
                                checked={wheelUser}
                                onChange={(e) => setWheelUser(e.target.checked)}
                                className="w-4 h-4 rounded accent-[#FF8101] cursor-pointer"
                              />
                              <span>Wheel User</span>
                            </label>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="pt-2 flex justify-end">
                        <button
                          type="submit"
                          suppressHydrationWarning
                          className="cursor-morph inline-flex items-center gap-2 rounded-full bg-[#FF8101] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#FF8101]/90 transition-colors"
                        >
                          <span>Start Scan</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </form>
                  )}

                  {/* ── State: Scanning in Progress ── */}
                  {scanState === 'scanning' && (
                    <div className="py-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full border-2 border-[#FF8101] border-t-transparent animate-spin" />
                          <div>
                            <h3 className="text-base font-semibold text-ink dark:text-white">
                              Scanning Server Infrastructure...
                            </h3>
                            <p className="text-xs text-muted-foreground dark:text-white/50">
                              Target: {scanType === 'domain' ? domainName : ipAddress}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-mono font-bold text-[#FF8101]">
                          {scanProgress}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-ink/10 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-[#FF8101] transition-all duration-300 ease-out"
                          style={{ width: `${scanProgress}%` }}
                        />
                      </div>

                      {/* Live Diagnostic Step Feed */}
                      <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-black/5 dark:bg-black/30 p-4 space-y-2 font-mono text-xs">
                        {scanSteps.map((step, idx) => {
                          const isDone = idx < currentStepIndex;
                          const isCurrent = idx === currentStepIndex;
                          return (
                            <div
                              key={step.label}
                              className={`flex items-center justify-between transition-opacity ${
                                isDone
                                  ? 'text-green-600 dark:text-green-400 opacity-100'
                                  : isCurrent
                                  ? 'text-[#FF8101] opacity-100'
                                  : 'text-ink/30 dark:text-white/30 opacity-40'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {isDone ? (
                                  <Check size={13} strokeWidth={3} />
                                ) : isCurrent ? (
                                  <span className="inline-block w-2 h-2 rounded-full bg-[#FF8101] animate-ping" />
                                ) : (
                                  <span className="inline-block w-2 h-2 rounded-full bg-current opacity-30" />
                                )}
                                <span>[{step.category.toUpperCase()}] {step.label}</span>
                              </span>
                              <span>{isDone ? 'DONE' : isCurrent ? 'RUNNING' : 'PENDING'}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── State: Scanning Results ── */}
                  {scanState === 'results' && (
                    <div className="space-y-6">
                      {/* Results Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-ink/10 dark:border-white/10">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-ink dark:text-white flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-green-500" />
                            Scanning Results
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-white/60 mt-0.5">
                            Target: {scanType === 'domain' ? domainName : ipAddress} • Scan Completed
                          </p>
                        </div>

                        {/* Top Action Icons */}
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleResetScan}
                            title="Start a new scan"
                            className="cursor-morph inline-flex items-center gap-1.5 rounded-full border border-ink/15 dark:border-white/15 bg-cream/40 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-ink dark:text-white hover:border-[#FF8101] transition-colors"
                          >
                            <RefreshCw size={12} />
                            <span>New Scan</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => window.print()}
                            title="Export result"
                            className="cursor-morph inline-flex items-center gap-1.5 rounded-full border border-ink/15 dark:border-white/15 bg-cream/40 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-ink dark:text-white hover:border-[#FF8101] transition-colors"
                          >
                            <FileText size={12} />
                            <span>Export PDF</span>
                          </button>
                        </div>
                      </div>

                      {/* Itemized Diagnostic Results */}
                      <div className="space-y-3">
                        {diagnosticResults.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <div
                              key={item.category}
                              className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/30 dark:bg-[#181818] p-4 sm:p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0 mt-0.5">
                                  <IconComp size={16} />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-ink dark:text-white">
                                    {item.category}
                                  </h4>
                                  <p className="text-xs text-muted-foreground dark:text-white/60">
                                    {item.detail}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center justify-end sm:justify-start">
                                <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 text-xs font-semibold">
                                  <Check size={12} strokeWidth={3} />
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Footer Note */}
                      <div className="p-4 rounded-2xl border border-ink/10 dark:border-white/10 bg-black/5 dark:bg-black/20 text-xs text-ink/75 dark:text-white/70 leading-relaxed">
                        We have fetched all possible diagnostics safely without impacting your production server workload.
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right Sidebar Column: "Servers Handled By" + Partner Badges */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal delay={0.2}>
                {/* Partner Badges - Standalone display scaled down by 20% */}
                <div className="flex flex-col items-center justify-center gap-5 py-2">
                  <img
                    src={getImageSrc(awsPartnerBadge)}
                    alt="Amazon AWS Partner"
                    className="h-16 sm:h-[76px] w-auto max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    src={getImageSrc(redHatPartnerBadge)}
                    alt="Red Hat Partner"
                    className="h-16 sm:h-[76px] w-auto max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Servers Handled By Card */}
                <div className="mt-4 rounded-3xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#141414] p-6 sm:p-7 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-ink/10 dark:border-white/10">
                    <h3 className="text-lg sm:text-xl font-bold text-ink dark:text-white tracking-tight">
                      Servers Handled By
                    </h3>
                    <ShieldCheck size={20} className="text-[#FF8101]" />
                  </div>

                  <div className="space-y-3">
                    {certifications.map((cert) => (
                      <div
                        key={cert}
                        className="rounded-xl border border-ink/5 dark:border-white/5 bg-cream/40 dark:bg-white/[0.02] p-3 flex items-start gap-3 hover:border-[#FF8101]/30 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-ink dark:text-white leading-snug">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Customer Satisfaction Highlight Banner */}
                  <div className="pt-5 border-t border-ink/10 dark:border-white/10 flex flex-col items-center justify-center">
                    <img
                      src={getImageSrc(satisfactionBadge)}
                      alt="100% Customer Satisfaction Guaranteed"
                      className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
  
      {/* ─── SECTION 2: Contact Us ─────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[var(--sp-surface)] border-b border-ink/10 dark:border-white/10">
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight mb-8">
                  Contact Us
                  <span className="text-[#FF8101]">.</span>
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  {/* Sales and Support Block */}
                  <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/40 dark:bg-[#151515] p-6">
                    <h3 className="text-[16px] font-bold text-ink dark:text-white mb-4 flex items-center gap-2">
                      <Phone size={17} className="text-[#FF8101]" />
                      Sales and Support
                    </h3>
                    <div className="space-y-3 text-[14px]">
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">Phone:</span>
                        <a href="tel:18476076123" className="font-medium text-ink dark:text-white hover:text-[#FF8101] transition-colors">
                          1-(847)-607-6123
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">Sales:</span>
                        <a href="mailto:sales@supportpro.com" className="font-medium text-ink dark:text-white hover:text-[#FF8101] transition-colors">
                          sales@supportpro.com
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">Support:</span>
                        <a href="mailto:support@supportpro.com" className="font-medium text-ink dark:text-white hover:text-[#FF8101] transition-colors">
                          support@supportpro.com
                        </a>
                      </div>
                      <div>
                        <span className="text-muted-foreground dark:text-white/50 block text-[12px]">MS Team:</span>
                        <span className="font-medium text-ink dark:text-white">
                          support@supportpro.com
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Postal Address Block */}
                  <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-cream/40 dark:bg-[#151515] p-6">
                    <h3 className="text-[16px] font-bold text-ink dark:text-white mb-3 flex items-center gap-2">
                      <MapPin size={17} className="text-[#FF8101]" />
                      Postal Address
                    </h3>
                    <p className="text-[14px] leading-relaxed text-ink/80 dark:text-white/80">
                      1020 Milwaukee Ave, #245,<br />
                      Deerfield, IL-60015<br />
                      USA
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Quote Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-ink/10 dark:border-white/10 bg-cream/30 dark:bg-[#151515] p-6 sm:p-8 md:p-10">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink dark:text-white">
                      Request For Quote
                    </h3>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSent(true);
                    }}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                          size={16}
                        />
                        <input
                          required
                          suppressHydrationWarning
                          placeholder="Full name"
                          className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                        />
                      </div>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                          size={16}
                        />
                        <input
                          required
                          type="email"
                          suppressHydrationWarning
                          placeholder="Work email"
                          className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Building2
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30"
                      />
                      <input
                        placeholder="Company"
                        suppressHydrationWarning
                        className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare
                        className="absolute left-4 top-4 text-ink/30 dark:text-white/30"
                        size={16}
                      />
                      <textarea
                        required
                        rows={4}
                        maxLength={500}
                        suppressHydrationWarning
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Message"
                        className="w-full resize-none rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-black/20 pl-11 pr-4 pt-3 pb-8 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/50 focus:bg-white dark:focus:bg-black/40"
                      />
                      <span className="absolute right-4 bottom-3 text-[11px] text-ink/30 dark:text-white/30 font-mono select-none">
                        {contactMessage.length} / 500
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[12px] text-muted-foreground dark:text-white/60">
                      <ShieldCheck size={16} className="text-[#FF8101] shrink-0" />
                      <span>Your information is secure and will never be shared.</span>
                    </div>

                    <button
                      type="submit"
                      suppressHydrationWarning
                      className="cursor-morph w-full rounded-full bg-[#FF8101] text-white py-3.5 px-6 text-[14px] font-semibold transition-all hover:bg-[#FF8101]/90 flex items-center justify-center gap-2"
                    >
                      {contactSent ? 'Request Received' : 'Request For Quote'}
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Industry Solutions ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-cream dark:bg-[var(--sp-bg)] relative border-b border-ink/10 dark:border-white/10">
        <GlobalBadgeSpotlight gridRef={industryGridRef} spotlightRadius={400} />
        <div className="mx-auto max-w-[1152px] px-5 md:px-6 lg:px-8 relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.08] text-ink dark:text-white tracking-tight">
              Industry Solutions
              <span className="text-[#FF8101]">.</span>
            </h2>
          </Reveal>

          <div ref={industryGridRef} className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industryItems.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <Reveal key={ind.name} delay={0.04 * i} className="h-full">
                  <ParticleBadge
                    enableStars={true}
                    clickEffect={true}
                    particleCount={4}
                    enableTilt={false}
                    className="h-full rounded-2xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#151515] p-5 sm:p-6 flex items-center justify-between gap-4 hover:border-[#FF8101]/40 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="w-11 h-11 rounded-xl bg-[#FF8101]/10 text-[#FF8101] flex items-center justify-center shrink-0 group-hover:bg-[#FF8101] group-hover:text-white transition-colors duration-200">
                        <IndIcon size={19} />
                      </div>
                      <span className="text-[15px] sm:text-[16px] font-semibold text-ink dark:text-white group-hover:text-[#FF8101] transition-colors leading-snug">
                        {ind.name}
                      </span>
                    </div>
                    <div className="shrink-0 pl-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-mono font-bold text-[#FF8101] bg-[#FF8101]/10 border border-[#FF8101]/25">
                        0{i + 1}
                      </span>
                    </div>
                  </ParticleBadge>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTIONS 4, 5, 6: About Us, Popular Plans, Legal / Footer ─────────── */}
      <SiteFooter />
    </main>
  );
}
