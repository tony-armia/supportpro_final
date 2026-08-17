const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8').replace(/\r\n/g, '\n');

const replacements = [
  // Nav Theme Toggle injection
  ['const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);', 'const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);\n  const { theme } = useTheme();'],
  ['src={isScrolledPastHero ? logoBlack : logoWhite}', 'src={theme === "light" && isScrolledPastHero ? logoBlack : logoWhite}'],
  ['key={isScrolledPastHero ? "black-logo" : "white-logo"}', 'key={theme === "light" && isScrolledPastHero ? "black-logo" : "white-logo"}'],
  ['import { Plus,', 'import { ThemeProvider, useTheme } from "@/context/ThemeContext";\nimport { Plus,'],

  // Theme Toggle component injection
  ['function Index() {', 'function ThemeToggle() {\n  const { theme, setTheme } = useTheme();\n  return (\n    <button\n      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}\n      className="fixed bottom-6 right-6 z-[99] flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 dark:bg-[#FF8101] dark:text-[#0B0B0B]"\n    >\n      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}\n    </button>\n  );\n}\n\nfunction Index() {'],

  // Nav Links
  ['className="cursor-morph px-4 py-1.5 rounded-full bg-white text-ink hover:bg-white/90 transition"', 'className="cursor-morph px-4 py-1.5 rounded-full bg-white text-ink hover:bg-white/90 dark:bg-[#FF8101] dark:text-[#0B0B0B] dark:hover:brightness-110 dark:font-medium transition-all duration-200"'],

  // Hero Gradients
  ['<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80 z-0 pointer-events-none" />\n      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0 pointer-events-none" />', '<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80 dark:hidden z-0 pointer-events-none" />\n      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent dark:hidden z-0 pointer-events-none" />\n      {/* Dark mode gradients */}\n      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/90 hidden dark:block z-0 pointer-events-none" />\n      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/25 to-transparent hidden dark:block z-0 pointer-events-none" />'],

  // Hero text
  ['className="relative z-10 mx-auto flex h-full max-w-[1152px] flex-col items-center justify-end pb-20', 'className="relative z-10 mx-auto flex h-full max-w-[1152px] flex-col items-center justify-end dark:justify-center dark:pt-16 pb-20'],
  ['className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"', 'className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] dark:text-[53px] dark:sm:text-[66px] dark:md:text-[80px] dark:lg:text-[84px] leading-[0.95] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] dark:drop-shadow-none"'],
  ['text-white/90 leading-relaxed', 'text-white/90 dark:text-white/75 leading-relaxed'],

  // Hero buttons
  ['className="cursor-morph rounded-full bg-white text-ink px-5 py-2.5 text-[13px] font-medium hover:bg-white/90 transition"', 'className="cursor-morph rounded-full bg-white text-ink dark:bg-[#FF8101] dark:text-[#0B0B0B] px-5 py-2.5 text-[13px] dark:font-medium hover:bg-white/90 dark:hover:brightness-110 transition-all duration-200"'],
  ['className="cursor-morph rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white px-5 py-2.5 text-[13px] font-medium hover:bg-white/20 transition"', 'className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[0.08] text-white px-5 py-2.5 text-[13px] font-medium hover:bg-white/20 dark:hover:bg-white/[0.14] dark:hover:border-white/40 transition-all duration-200"'],

  // Hero image
  ['className="absolute inset-0 h-full w-full object-cover parallax-img z-0"', 'className="absolute inset-0 h-full w-full object-cover parallax-img z-0 dark:opacity-65"'],

  // Services
  ['id="services" className="bg-cream py-16 lg:py-24"', 'id="services" className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24"'],
  ['text-4xl md:text-6xl text-ink leading-[1]"', 'text-4xl md:text-6xl text-ink dark:text-[var(--sp-text-primary)] leading-[1]"'],
  ['italic font-normal text-ink/70', 'italic font-normal text-ink/70 dark:text-[var(--sp-text-secondary)]'],
  ['text-[14px] text-muted-foreground leading-relaxed max-w-sm', 'text-[14px] text-muted-foreground dark:text-[var(--sp-text-muted)] leading-relaxed max-w-sm'],
  ['border-b border-ink/10"', 'border-b border-ink/10 dark:border-white/10"'],

  // ServiceRow
  ['border-t border-ink/10', 'border-t border-ink/10 dark:border-white/10'],
  ['bg-white group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]', 'bg-white dark:bg-white/[0.035] group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:group-hover:shadow-none dark:hover:bg-white/[0.05]'],
  ['bg-ink/5 flex items-center justify-center shrink-0', 'bg-ink/5 dark:bg-[#FF8101]/10 dark:text-[#FF8101] flex items-center justify-center shrink-0'],
  ['text-2xl lg:text-[28px] leading-tight text-ink mb-3 tracking-tight', 'text-2xl lg:text-[28px] leading-tight text-ink dark:text-white mb-3 tracking-tight'],
  ['text-[14px] leading-relaxed text-muted-foreground', 'text-[14px] leading-relaxed text-muted-foreground dark:text-[var(--sp-text-muted)]'],
  ['className="service-pill inline-flex items-center rounded-full border border-ink/15 bg-white/60 backdrop-blur-sm px-4 py-2 text-[13px] text-ink/80 hover:border-ink/40 hover:bg-white hover:text-ink transition-colors"', 'className="service-pill inline-flex items-center rounded-full border border-ink/15 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm px-4 py-2 text-[13px] text-ink/80 dark:text-white/80 hover:border-ink/40 dark:hover:border-[#FF8101]/35 hover:bg-white hover:text-ink dark:hover:text-white transition-colors"'],

  // StickyPhoneSection
  ['uppercase tracking-[0.2em] text-ink/40', 'uppercase tracking-[0.2em] text-ink/40 dark:text-white/40'],
  ['h-px w-8 bg-ink/20', 'h-px w-8 bg-ink/20 dark:bg-white/20'],
  ['text-4xl lg:text-5xl leading-[1.05] text-ink', 'text-4xl lg:text-5xl leading-[1.05] text-ink dark:text-white'],
  ['text-[15px] leading-relaxed text-muted-foreground', 'text-[15px] leading-relaxed text-muted-foreground dark:text-white/70'],
  ['text-sm text-ink border-b border-ink/25 pb-1 transition-colors hover:border-ink', 'text-sm text-ink dark:text-white/90 border-b border-ink/25 dark:border-white/25 pb-1 transition-colors hover:border-ink dark:hover:border-white dark:hover:text-white'],
  ['className="relative bg-cream rounded-t-[40px] -mt-10 pb-16 lg:pb-24"', 'className="relative bg-cream dark:bg-[var(--sp-bg)] rounded-t-[40px] -mt-10 pb-16 lg:pb-24"'],
  ['className="absolute inset-0 bg-[#E8E4DF] rounded-[32px] overflow-hidden"', 'className="absolute inset-0 bg-[#E8E4DF] dark:bg-[#1A1A1A] rounded-[32px] overflow-hidden"'],
  ['text-3xl leading-[1.08] text-ink', 'text-3xl leading-[1.08] text-ink dark:text-white'],
  ['text-sm leading-relaxed text-muted-foreground', 'text-sm leading-relaxed text-muted-foreground dark:text-white/70'],
  ['bg-white/70 px-3 py-2 backdrop-blur-sm ring-1 ring-ink/10', 'bg-white/70 dark:bg-black/60 px-3 py-2 backdrop-blur-sm ring-1 ring-ink/10 dark:ring-white/10'],
  ['bg-ink hover:bg-ink/80', 'bg-ink dark:bg-white hover:bg-ink/80 dark:hover:bg-white/80'],
  ['bg-ink/20 hover:bg-ink/30', 'bg-ink/20 dark:bg-white/20 hover:bg-ink/30 dark:hover:bg-white/30'],

  // Focus Section
  ['className="relative h-[300vh] bg-cream pb-16 lg:pb-24"', 'className="relative h-[300vh] bg-cream dark:bg-[var(--sp-surface)] pb-16 lg:pb-24"'],
  ['text-5xl md:text-6xl text-ink max-w-2xl leading-[1.05]"', 'text-5xl md:text-6xl text-ink dark:text-white max-w-2xl leading-[1.05]"'],

  // Security Section
  ['className="bg-cream py-16 lg:py-24"', 'className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24"'],
  ['text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight mb-5', 'text-5xl md:text-6xl text-ink dark:text-white leading-[1.05] tracking-tight mb-5'],

  // Testimonials section
  ['className="relative bg-cream"', 'className="relative bg-cream dark:bg-[var(--sp-bg)]"'],
  ['text-4xl md:text-5xl text-ink', 'text-4xl md:text-5xl text-ink dark:text-white'],
  ['text-sm text-muted-foreground max-w-md mx-auto', 'text-sm text-muted-foreground dark:text-white/60 max-w-md mx-auto'],
  ['bg-[#f2ede8] rounded-2xl', 'bg-[#f2ede8] dark:bg-[#151515] rounded-2xl'],
  ['border border-ink/5"', 'border border-ink/5 dark:border-white/10"'],
  ['text-ink/80 font-medium', 'text-ink/80 dark:text-white/80 font-medium'],
  ['bg-ink/10 flex items-center', 'bg-ink/10 dark:bg-white/10 flex items-center'],
  ['text-ink/60 shrink-0', 'text-ink/60 dark:text-white/60 shrink-0'],
  ['text-ink leading-tight', 'text-ink dark:text-white leading-tight'],
  ['text-ink/50 mt-0.5', 'text-ink/50 dark:text-white/50 mt-0.5'],

  // FAQ section
  ['id="faq" className="bg-cream py-16', 'id="faq" className="bg-cream dark:bg-[var(--sp-surface)] py-16'],
  ['text-ink leading-[1.05] tracking-tight mb-8', 'text-ink dark:text-white leading-[1.05] tracking-tight mb-8'],
  ['text-muted-foreground leading-relaxed mb-12', 'text-muted-foreground dark:text-white/60 leading-relaxed mb-12'],
  ['border border-ink/15 px-6 py-8', 'border border-ink/15 dark:border-white/15 px-6 py-8'],
  ['text-2xl text-ink leading-none mb-3', 'text-2xl text-ink dark:text-white leading-none mb-3'],
  ['text-muted-foreground leading-relaxed">', 'text-muted-foreground dark:text-white/60 leading-relaxed">'],
  ['border-y border-ink/15 lg:mt-0', 'border-y border-ink/15 dark:border-white/15 lg:mt-0'],
  ['border-b border-ink/15 last:border-b-0', 'border-b border-ink/15 dark:border-white/15 last:border-b-0'],
  ['hover:bg-ink/[0.025]"}', 'hover:bg-ink/[0.025] dark:hover:bg-white/[0.025]"}'],
  ['isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"', 'isOpen ? "text-ink dark:text-white" : "text-ink/80 dark:text-white/80 group-hover:text-ink dark:group-hover:text-white"'],

  // CTA Section
  ['className="cursor-morph rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition"', 'className="cursor-morph rounded-full bg-white text-ink dark:bg-[#FF8101] dark:text-[#0B0B0B] dark:hover:brightness-110 px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all duration-200"'],
  ['className="cursor-morph rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition"', 'className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[0.08] text-white px-6 py-3 text-sm font-medium hover:bg-white/20 dark:hover:bg-white/[0.14] dark:hover:border-white/40 transition-all duration-200"'],
  
  // Footer
  ['bg-ink text-white/80 px-5', 'bg-ink dark:bg-[#080808] text-white/80 px-5'],
  ['text-white/50 leading-relaxed', 'text-white/50 dark:text-[#777773] leading-relaxed'],
  ['border-t border-white/10 text-white/40', 'border-t border-white/10 dark:border-white/5 text-white/40 dark:text-white/30'],

  // Main wrapper ThemeProvider integration
  ['<main className="bg-cream overflow-x-clip">', '<ThemeProvider>\n      <main className="bg-cream dark:bg-[var(--sp-bg)] overflow-x-clip transition-colors duration-300">'],
  ['    </main>\n  );\n}', '    </main>\n      <ThemeToggle />\n    </ThemeProvider>\n  );\n}']
];

for (const [search, replace] of replacements) {
  if (content.includes(search)) {
    content = content.replace(search, replace);
  } else {
    console.warn("NOT FOUND: ", search);
  }
}

fs.writeFileSync('src/routes/index.tsx', content);
console.log('Successfully completed all index.tsx modifications.');
