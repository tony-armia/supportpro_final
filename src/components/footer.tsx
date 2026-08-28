'use client';

import Link from 'next/link';
import logoWhite from '@/assets/SupportPRO-logo (1) 1.svg';

const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && 'src' in img) return img.src;
  return String(img);
};

export function SiteFooter() {
  return (
    <footer className="bg-ink dark:bg-[#080808] text-white/80 px-5 md:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 border-t border-white/10 dark:border-white/5">
      <div className="mx-auto max-w-[1152px] grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-xs">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block">
            <img
              src={getImageSrc(logoWhite)}
              alt="SupportPRO Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-3 text-white/50 dark:text-[#777773] leading-relaxed max-w-[220px]">
            Enterprise infrastructure support, 24/7/365.
          </p>
        </div>

        {/* About Us */}
        <div>
          <div className="font-medium text-white mb-3 sm:mb-4 text-[13px]">About Us</div>
          <div className="space-y-2.5 text-white/70 dark:text-white/60">
            <div>
              <a href="https://www.supportpro.com/aboutus.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Company
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/blog/" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Technical Blog
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/careers.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Careers
              </a>
            </div>
            <div>
              <a href="/#faq" className="hover:text-[#FF8101] transition-colors">
                FAQ
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/partners.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Partners
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/sitemap.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>

        {/* Popular Plans */}
        <div>
          <div className="font-medium text-white mb-3 sm:mb-4 text-[13px]">Popular Plans</div>
          <div className="space-y-2.5 text-white/70 dark:text-white/60">
            <div>
              <a href="https://www.supportpro.com/dedicated-team.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Dedicated Team Support
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/helpdesk-support.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Helpdesk Support
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/hourly-administration.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Hourly Administration
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div>
          <div className="font-medium text-white mb-3 sm:mb-4 text-[13px]">Legal</div>
          <div className="space-y-2.5 text-white/70 dark:text-white/60">
            <div>
              <a href="https://www.supportpro.com/privacy.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Privacy Statement
              </a>
            </div>
            <div>
              <a href="https://www.supportpro.com/terms.php" target="_blank" rel="noreferrer" className="hover:text-[#FF8101] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1152px] mt-10 sm:mt-12 pt-6 border-t border-white/10 dark:border-white/5 text-white/40 dark:text-white/30 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© 2026 SupportPRO.com. All Rights Reserved</div>
        <div className="text-white/30 text-[11px]">Quality processes. Measurable results.</div>
      </div>
    </footer>
  );
}
