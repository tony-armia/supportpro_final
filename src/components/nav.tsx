'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from 'motion/react';
import {
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
  ShieldCheck,
  Code,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import logoWhite from '@/assets/SupportPRO-logo (1) 1.svg';
import logoBlack from '@/assets/SupportPRO-logo black.svg';

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

export const navItems = [
  {
    label: 'Services',
    sections: [
      {
        heading: 'Cloud Support',
        items: [
          { label: 'Cloud Management', desc: 'Full-stack cloud operations', icon: CloudCog, href: '/cloudmanagement' },
          { label: 'AWS Support', desc: 'EC2, RDS, S3 & beyond', icon: Database, href: 'https://www.supportpro.com/aws-support.php' },
          { label: 'Google Cloud', desc: 'GCP infrastructure managed', icon: Cloud, href: 'https://www.supportpro.com/google-cloud.php' },
          { label: 'Azure Support', desc: 'Microsoft Azure managed', icon: LayoutGrid, href: 'https://www.supportpro.com/azure-support.php' },
          { label: 'DevOps Support', desc: 'CI/CD & pipeline engineering', icon: GitMerge, href: 'https://www.supportpro.com/devops.php' },
        ],
      },
      {
        heading: 'Server Administration',
        items: [
          { label: 'Node Management', desc: 'Dedicated node monitoring', icon: Cpu, href: 'https://www.supportpro.com/node-management.php' },
          { label: 'Dedicated Server', desc: 'Bare-metal server support', icon: Server, href: 'https://www.supportpro.com/dedicated-server-management.php' },
        ],
      },
    ],
  },
  {
    label: 'Outsourced Support',
    sections: [
      {
        heading: 'Dedicated Support',
        items: [
          { label: 'Dedicated Tech Support', desc: 'Your brand, our engineers', icon: UserCheck, href: 'https://www.supportpro.com/dedicated-tech.php' },
          { label: 'Semi-Dedicated Support', desc: 'Flexible shared staffing', icon: UserPlus, href: 'https://www.supportpro.com/semi-dedicated-support.php' },
          { label: 'Dedicated Team', desc: 'Full team under your banner', icon: Users, href: 'https://www.supportpro.com/dedicated-team.php' },
        ],
      },
      {
        heading: 'Client Support',
        items: [
          { label: 'Helpdesk Support', desc: 'Ticket-based 24/7 coverage', icon: Headphones, href: 'https://www.supportpro.com/helpdesk-support.php' },
          { label: 'Live Chat Support', desc: 'Real-time chat agents', icon: MessageCircle, href: 'https://www.supportpro.com/live-chat-support.php' },
        ],
      },
    ],
  },
  {
    label: 'Products',
    sections: [
      {
        heading: 'Services',
        items: [
          { label: 'Hourly Administration', desc: 'On-demand server tasks', icon: Clock, href: 'https://www.supportpro.com/hourly-administration.php' },
          { label: 'Server Migration', desc: 'Zero-downtime migrations', icon: ArrowRightLeft, href: 'https://www.supportpro.com/server-migration.php' },
          { label: 'Abuse Handling', desc: 'DMCA & spam mitigation', icon: ShieldAlert, href: 'https://www.supportpro.com/abuse-handling.php' },
        ],
      },
      {
        heading: 'Products',
        items: [
          { label: 'Server Manager Addon', desc: 'WHMCS marketplace plugin', badge: 'Popular', icon: Blocks, href: 'https://www.supportpro.com/server-manager-addon.php' },
          { label: 'Server Scanner', desc: 'Automated vulnerability scanner', icon: ShieldCheck, href: 'https://www.supportpro.com/server-scanner.php' },
        ],
      },
    ],
  },
  {
    label: 'Development',
    sections: [
      {
        heading: 'Hire Talent',
        items: [
          { label: 'Hire a Developer', desc: 'Vetted full-stack engineers', icon: Code, href: 'https://www.supportpro.com/hire-developer.php' },
          { label: 'Hire a Dev Team', desc: 'Complete project squads', icon: Briefcase, href: 'https://www.supportpro.com/hire-dev-team.php' },
        ],
      },
    ],
  },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const { theme, setTheme, mounted } = useTheme();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isPast = latest > 200;
    if (isPast !== isScrolledPastHero) {
      setIsScrolledPastHero(isPast);
    }
  });

  const bg = useTransform(scrollY, [0, 200], ['rgba(255,255,255,0.15)', 'rgba(20,20,20,0.55)']);

  return (
    <>
      {/* ── Main nav ── */}
      <nav
        className="fixed top-4 left-0 right-0 z-50 mx-auto flex max-w-[1152px] items-center justify-between px-5 md:px-6 lg:px-8"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={mounted && theme === 'light' && isScrolledPastHero ? 'black-logo' : 'white-logo'}
                src={getImageSrc(mounted && theme === 'light' && isScrolledPastHero ? logoBlack : logoWhite)}
                alt="SupportPRO Logo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-12 sm:h-12 md:h-14 w-auto object-contain"
              />
            </AnimatePresence>
          </Link>
        </motion.div>

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
                  className={`transition-transform duration-200 ${openMenu === item.label ? 'rotate-180' : ''}`}
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
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] min-w-[480px] bg-white dark:bg-[#141414] border border-ink/8 dark:border-white/10 rounded-2xl overflow-hidden z-50"
                    style={{ color: 'initial' }}
                  >
                    {/* Columns */}
                    <div className={`grid gap-0 p-1 ${item.sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {item.sections.map((section, si) => (
                        <div
                          key={section.heading}
                          className={`p-5 ${si < item.sections.length - 1 && item.sections.length > 1 ? 'border-r border-ink/6 dark:border-white/8' : ''}`}
                        >
                          <p className="text-[11px] font-semibold text-ink/45 dark:text-white/40 mb-3 tracking-normal">
                            {section.heading}
                          </p>
                          <div className="space-y-0.5">
                            {section.items.map((it) => {
                              const isInternal = it.href?.startsWith('/');
                              const LinkComponent = isInternal ? Link : 'a';
                              const linkProps = isInternal
                                ? { href: it.href }
                                : { href: it.href || '#', target: it.href?.startsWith('http') ? '_blank' : undefined, rel: it.href?.startsWith('http') ? 'noreferrer' : undefined };

                              return (
                                <LinkComponent
                                  key={it.label}
                                  {...(linkProps as any)}
                                  onClick={() => setOpenMenu(null)}
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
                                      {'badge' in it && it.badge && (
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FF8101]/15 text-[#FF8101]">
                                          {it.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-ink/50 dark:text-white/40 leading-snug mt-0.5">
                                      {it.desc}
                                    </p>
                                  </div>
                                </LinkComponent>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-ink/6 dark:border-white/8 px-5 py-3 flex items-center justify-between bg-ink/[0.02] dark:bg-white/[0.02]">
                      <div className="flex items-center gap-4">
                        <a
                          href="https://www.supportpro.com/emergency-new.php"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[12px] text-ink/50 dark:text-white/40 hover:text-[#FF8101] transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Emergency support
                        </a>
                        <a
                          href="https://www.supportpro.com/freecheckup.php"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[12px] text-ink/50 dark:text-white/40 hover:text-[#FF8101] transition-colors"
                        >
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
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
            className="relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15 transition-all duration-200 text-white shrink-0"
          >
            {mounted ? (
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.svg
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="sm:hidden relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15 transition-all duration-200 text-white shrink-0"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/95 dark:bg-[#111]/95 backdrop-blur-xl sm:hidden pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <div className="text-[16px] font-display font-medium text-ink dark:text-white border-b border-ink/10 dark:border-white/10 pb-2">
                    {item.label}
                  </div>
                  <div className="flex flex-col gap-2 pl-2">
                    {item.sections.map((sec) => (
                      <div key={sec.heading} className="flex flex-col gap-1.5 mt-1">
                        <div className="text-[12px] font-semibold text-ink/50 dark:text-white/40 tracking-normal mb-1">
                          {sec.heading}
                        </div>
                        {sec.items.map((it) => {
                          const isInternal = it.href?.startsWith('/');
                          const LinkComponent = isInternal ? Link : 'a';
                          const linkProps = isInternal
                            ? { href: it.href }
                            : { href: it.href || '#', target: it.href?.startsWith('http') ? '_blank' : undefined, rel: it.href?.startsWith('http') ? 'noreferrer' : undefined };

                          return (
                            <LinkComponent
                              key={it.label}
                              {...(linkProps as any)}
                              className="text-[14px] text-ink/80 dark:text-white/80 py-1.5 flex items-center gap-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <it.icon size={14} className="text-[#FF8101]" />
                              {it.label}
                            </LinkComponent>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-ink/10 dark:border-white/10">
                <a
                  href="https://www.supportpro.com/clientlogin.php"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full bg-[#FF8101] text-white text-center font-medium"
                >
                  Login
                </a>
                <a
                  href="https://www.supportpro.com/signup.php"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full border border-ink/20 dark:border-white/20 text-ink dark:text-white text-center font-medium"
                >
                  Sign up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
