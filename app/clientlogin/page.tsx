'use client';

import { useState, useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Check, Lock, Mail } from 'lucide-react';
import { Nav } from '@/components/nav';
import { SiteFooter } from '@/components/footer';

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
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ClientLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // If running in development/local or pointing to WHMCS/SupportPRO auth backend
    setSubmitting(true);
  };

  return (
    <main className="bg-cream dark:bg-[var(--sp-bg)] min-h-screen flex flex-col justify-between overflow-x-clip transition-colors duration-300">
      <Nav />

      {/* ─── Client Login Section ─────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 flex-1 flex items-center justify-center px-5 md:px-6 lg:px-8">
        <div className="w-full max-w-[460px] mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-ink/10 dark:border-white/10 bg-white dark:bg-[#141414] p-7 sm:p-10">
              {/* Header */}
              <div className="mb-8">
                <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink dark:text-white tracking-tight">
                  Client Login
                  <span className="text-[#FF8101]">.</span>
                </h1>
              </div>

              {/* Login Form */}
              <form
                action="https://www.supportpro.com/clientlogin.php"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-ink/70 dark:text-white/70"
                  >
                    Enter email
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30 pointer-events-none"
                    />
                    <input
                      id="email"
                      type="email"
                      name="username"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[14px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/60 focus:bg-white dark:focus:bg-black/40"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-ink/70 dark:text-white/70"
                  >
                    Enter password
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 dark:text-white/30 pointer-events-none"
                    />
                    <input
                      id="password"
                      type="password"
                      name="password"
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full rounded-2xl border border-ink/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[14px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF8101]/60 focus:bg-white dark:focus:bg-black/40"
                    />
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="pt-1">
                  <label className="inline-flex items-center gap-2.5 cursor-pointer select-none text-xs sm:text-sm text-ink/80 dark:text-white/80">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={rememberMe}
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        rememberMe
                          ? 'bg-[#FF8101] border-[#FF8101] text-white'
                          : 'border-ink/20 dark:border-white/20 bg-white dark:bg-black/20'
                      }`}
                    >
                      {rememberMe && <Check size={12} strokeWidth={3} />}
                    </button>
                    <input
                      type="checkbox"
                      name="rememberme"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <span>Remember me</span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="cursor-morph w-full rounded-full bg-[#FF8101] text-white py-3.5 px-6 text-sm font-semibold hover:bg-[#FF8101]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <span>Client Login</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>

              {/* Account & Password Recovery Links */}
              <div className="mt-8 pt-6 border-t border-ink/8 dark:border-white/8 space-y-2.5 text-xs sm:text-sm">
                <div>
                  <span className="text-muted-foreground dark:text-white/60">
                    Not registered?{' '}
                  </span>
                  <Link
                    href="/signup"
                    className="font-semibold text-[#FF8101] hover:underline transition-all"
                  >
                    Create an Account.
                  </Link>
                </div>

                <div>
                  <span className="text-muted-foreground dark:text-white/60">
                    Lost your password?{' '}
                  </span>
                  <a
                    href="https://www.supportpro.com/forgotpassword.php"
                    className="font-semibold text-[#FF8101] hover:underline transition-all"
                  >
                    click here
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Global Footer ────────────────────────────────────────────────────── */}
      <SiteFooter />
    </main>
  );
}
