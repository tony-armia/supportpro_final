const fs = require('fs');
let content = fs.readFileSync('src/components/site-sections.tsx', 'utf8');

const replacements = [
  // Experts Section
  ['className="bg-cream py-16 lg:py-24"', 'className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24"'],
  ['text-5xl md:text-[56px] leading-[1.03] text-ink max-w-[400px]', 'text-5xl md:text-[56px] leading-[1.03] text-ink dark:text-white max-w-[400px]'],
  ['font-normal italic text-ink/70', 'font-normal italic text-ink/70 dark:text-white/70'],
  ['mt-6 font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.05] text-ink', 'mt-6 font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.05] text-ink dark:text-white'],
  ['text-[15px] leading-relaxed text-muted-foreground mb-8', 'text-[15px] leading-relaxed text-muted-foreground dark:text-white/70 mb-8'],
  ['border border-ink/10 bg-white p-5 lg:p-6', 'border border-ink/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 lg:p-6'],
  ['text-[13px] font-bold text-ink', 'text-[13px] font-bold text-ink dark:text-white'],
  ['text-[13px] text-muted-foreground mt-0.5', 'text-[13px] text-muted-foreground dark:text-white/60 mt-0.5'],
  ['text-[#FF6C2C]/10 flex items-center justify-center text-ink mb-6', 'text-[#FF6C2C]/10 flex items-center justify-center text-ink dark:text-white mb-6'],
  ['font-display text-4xl lg:text-[46px] text-ink mb-4 tracking-tight', 'font-display text-4xl lg:text-[46px] text-ink dark:text-white mb-4 tracking-tight'],
  ['text-[14px] text-muted-foreground leading-snug', 'text-[14px] text-muted-foreground dark:text-white/70 leading-snug'],

  // Contact Section
  ['id="contact-form" className="bg-cream pb-16 md:pb-24 lg:pb-28"', 'id="contact-form" className="bg-cream dark:bg-[var(--sp-bg)] pb-16 md:pb-24 lg:pb-28"'],
  ['border-ink/5 bg-white/80 p-5 md:p-8 lg:p-10', 'border-ink/5 dark:border-white/10 bg-white/80 dark:bg-[#151515] p-5 md:p-8 lg:p-10'],
  ['text-3xl md:text-[44px] leading-[1.05] text-ink mb-4', 'text-3xl md:text-[44px] leading-[1.05] text-ink dark:text-white mb-4'],
  ['text-[15px] text-muted-foreground leading-relaxed', 'text-[15px] text-muted-foreground dark:text-white/70 leading-relaxed'],
  ['text-[14px] font-semibold text-ink leading-tight', 'text-[14px] font-semibold text-ink dark:text-white leading-tight'],
  ['text-[13px] text-ink/70', 'text-[13px] text-ink/70 dark:text-white/70'],
  ['text-ink/30 transition-colors group-focus-within:text-[#FF6C2C]', 'text-ink/30 dark:text-white/30 transition-colors group-focus-within:text-[#FF6C2C]'],
  ['bg-[#FAFAFA] pl-11 pr-4 py-3 text-[13px] text-ink outline-none transition-all placeholder:text-ink/35 focus:border-[#FF6C2C]/50 focus:bg-white focus:ring-2 focus:ring-[#FF6C2C]/10', 'bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10'],
  ['bg-[#FAFAFA] pl-11 pr-4 pt-3 pb-8 text-[13px] text-ink outline-none transition-all placeholder:text-ink/35 focus:border-[#FF6C2C]/50 focus:bg-white focus:ring-2 focus:ring-[#FF6C2C]/10', 'bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 pt-3 pb-8 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10'],
  ['text-[11px] text-ink/30 font-mono select-none', 'text-[11px] text-ink/30 dark:text-white/30 font-mono select-none'],
];

for (const [search, replace] of replacements) {
  content = content.replace(search, replace);
}

fs.writeFileSync('src/components/site-sections.tsx', content);
console.log('Done replacing site-sections.tsx');
