const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

const replacements = [
  // 1. Imports
  ['import { ThemeProvider, useTheme } from "@/context/ThemeContext";', ''], // cleanup just in case
  ['import { Credentials, Platforms, Experts, ContactForm } from "@/components/site-sections";', 'import { Credentials, Platforms, Experts, ContactForm } from "@/components/site-sections";\nimport { ThemeProvider, useTheme } from "@/context/ThemeContext";'],
  ['import { Plus, Lock, ShieldCheck, FileCheck2, Activity, ChevronDown, ArrowRight, Minus, BookOpen, } from "lucide-react";', 'import { Plus, Lock, ShieldCheck, FileCheck2, Activity, ChevronDown, ArrowRight, Minus, BookOpen, Sun, Moon } from "lucide-react";'],

  // 2. ThemeToggle
  ['export const Route = createFileRoute("/")({', 'function ThemeToggle() {\n  const { theme, toggleTheme } = useTheme();\n  return (\n    <button\n      onClick={toggleTheme}\n      className="relative flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors mr-1"\n      aria-label="Toggle theme"\n    >\n      <AnimatePresence mode="wait" initial={false}>\n        {theme === "dark" ? (\n          <motion.div\n            key="sun"\n            initial={{ opacity: 0, rotate: -45 }}\n            animate={{ opacity: 1, rotate: 0 }}\n            exit={{ opacity: 0, rotate: 45 }}\n            transition={{ duration: 0.2 }}\n          >\n            <Sun size={15} />\n          </motion.div>\n        ) : (\n          <motion.div\n            key="moon"\n            initial={{ opacity: 0, rotate: -45 }}\n            animate={{ opacity: 1, rotate: 0 }}\n            exit={{ opacity: 0, rotate: 45 }}\n            transition={{ duration: 0.2 }}\n          >\n            <Moon size={15} />\n          </motion.div>\n        )}\n      </AnimatePresence>\n    </button>\n  );\n}\n\nexport const Route = createFileRoute("/")({'],

  // 3. Nav modifications
  ['const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);', 'const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);\n  const { theme } = useTheme();'],
  ['<a href="#contact-form" className="cursor-morph px-4 py-1.5 rounded-full bg-white text-ink hover:bg-white/90 transition-all duration-200">', '<a href="#contact-form" className="cursor-morph px-4 py-1.5 rounded-full bg-white text-ink hover:bg-white/90 dark:bg-[#FF8101] dark:text-[#0B0B0B] dark:hover:brightness-110 dark:font-medium transition-all duration-200">'],
  ['<div className="flex items-center gap-1 md:gap-3 relative z-10">', '<div className="flex items-center gap-1 md:gap-3 relative z-10">\n          <ThemeToggle />'],
  ['src={isScrolledPastHero ? logoBlack : logoWhite}', 'src={theme === "light" && isScrolledPastHero ? logoBlack : logoWhite}'],
  ['key={isScrolledPastHero ? "black-logo" : "white-logo"}', 'key={theme === "light" && isScrolledPastHero ? "black-logo" : "white-logo"}'],
  ['<header className={ixed top-0 inset-x-0 z-50 transition-all duration-500 border-b }>', '<header className={ixed top-0 inset-x-0 z-50 transition-all duration-500 border-b }>'],
  ['className={ont-medium transition-colors hover:text-[#FF6C2C] }', 'className={ont-medium transition-colors hover:text-[#FF6C2C] }'],
  ['<button className={p-2 rounded-full transition-colors }>', '<button className={p-2 rounded-full transition-colors }>'],

  // 4. Hero modifications
  ['<p className="mt-6 text-white/80 text-sm md:text-base max-w-[440px] leading-relaxed">', '<p className="mt-6 text-white/80 text-sm md:text-base max-w-[440px] leading-relaxed dark:text-white/70">'],
  ['className="absolute inset-0 h-full w-full object-cover parallax-img z-0"', 'className="absolute inset-0 h-full w-full object-cover parallax-img z-0 dark:opacity-65"'],
  ['<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent z-0" />', '<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20 dark:from-black/70 dark:to-black/40 z-0" />'],

  // 5. General bg-cream replacements
  ['className="bg-cream py-16 lg:py-24"', 'className="bg-cream dark:bg-[var(--sp-surface)] py-16 lg:py-24"'],
  ['className="bg-cream overflow-x-clip"', 'className="overflow-x-clip bg-cream dark:bg-[var(--sp-bg)] transition-colors duration-300"'],
  ['className="relative bg-cream rounded-t-[40px] -mt-10 pb-16 lg:pb-24"', 'className="relative bg-cream dark:bg-[var(--sp-bg)] rounded-t-[40px] -mt-10 pb-16 lg:pb-24"'],
  ['className="relative h-[300vh] bg-cream pb-16 lg:pb-24"', 'className="relative h-[300vh] bg-cream dark:bg-[var(--sp-bg)] pb-16 lg:pb-24"'],
  ['className="relative bg-cream"', 'className="relative bg-cream dark:bg-[var(--sp-bg)]"'],

  // 6. Section specific fixes
  ['<h3 className="font-display text-4xl md:text-6xl text-ink leading-[1] tracking-tight">', '<h3 className="font-display text-4xl md:text-6xl text-ink dark:text-white leading-[1] tracking-tight">'],
  ['<em className="italic font-normal text-ink/70">', '<em className="italic font-normal text-ink/70 dark:text-white/70">'],
  ['text-ink/40">', 'text-ink/40 dark:text-white/40">'],
  ['<span className="h-px w-8 bg-ink/20" />', '<span className="h-px w-8 bg-ink/20 dark:bg-white/20" />'],
  ['leading-[1.05] text-ink">{b.title}</h3>', 'leading-[1.05] text-ink dark:text-white">{b.title}</h3>'],
  ['leading-relaxed text-muted-foreground">{b.body}</p>', 'leading-relaxed text-muted-foreground dark:text-white/70">{b.body}</p>'],
  ['className="mt-8 inline-flex items-center gap-2 text-sm text-ink border-b border-ink/25 pb-1 transition-colors hover:border-ink"', 'className="mt-8 inline-flex items-center gap-2 text-sm text-ink dark:text-white/90 border-b border-ink/25 dark:border-white/25 pb-1 transition-colors hover:border-ink dark:hover:border-white dark:hover:text-white"'],

  // 7. Testimonials
  ['text-4xl md:text-5xl text-ink', 'text-4xl md:text-5xl text-ink dark:text-white'],
  ['text-sm text-muted-foreground max-w-md mx-auto', 'text-sm text-muted-foreground dark:text-white/60 max-w-md mx-auto'],
  ['bg-[#f2ede8] rounded-2xl', 'bg-[#f2ede8] dark:bg-[#151515] rounded-2xl'],
  ['border border-ink/5"', 'border border-ink/5 dark:border-white/10"'],
  ['text-ink/80 font-medium', 'text-ink/80 dark:text-white/80 font-medium'],
  ['bg-ink/10 flex items-center', 'bg-ink/10 dark:bg-white/10 flex items-center'],
  ['text-ink/60 shrink-0', 'text-ink/60 dark:text-white/60 shrink-0'],
  ['text-ink leading-tight', 'text-ink dark:text-white leading-tight'],
  ['text-ink/50 mt-0.5', 'text-ink/50 dark:text-white/50 mt-0.5'],

  // 8. FAQ section
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

  // 9. CTA Section
  ['className="cursor-morph rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-white/90 transition"', 'className="cursor-morph rounded-full bg-white text-ink dark:bg-[#FF8101] dark:text-[#0B0B0B] dark:hover:brightness-110 px-6 py-3 text-sm font-medium hover:bg-white/90 transition-all duration-200"'],
  ['className="cursor-morph rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition"', 'className="cursor-morph rounded-full border border-white/30 dark:border-white/25 backdrop-blur-md bg-white/10 dark:bg-white/[0.08] text-white px-6 py-3 text-sm font-medium hover:bg-white/20 dark:hover:bg-white/[0.14] dark:hover:border-white/40 transition-all duration-200"'],
  
  // 10. Footer
  ['bg-ink text-white/80 px-5', 'bg-ink dark:bg-[#080808] text-white/80 px-5'],
  ['text-white/50 leading-relaxed', 'text-white/50 dark:text-[#777773] leading-relaxed'],
  ['border-t border-white/10 text-white/40', 'border-t border-white/10 dark:border-white/5 text-white/40 dark:text-white/30'],

  // 11. Wrap Index with ThemeProvider
  ['function Index() {\\n  return (', 'function Index() {\\n  return (\\n    <ThemeProvider>'],
  ['    </main>\\n  );\\n}', '    </main>\\n    </ThemeProvider>\\n  );\\n}']
];

const normalize = s => s.replace(/\\r\\n/g, '\\n');
content = normalize(content);

for (const [search, replace] of replacements) {
  content = content.replaceAll(normalize(search), normalize(replace));
}

fs.writeFileSync('src/routes/index.tsx', content);
console.log('Restored fully!');
