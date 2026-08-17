const fs = require('fs');
let content = fs.readFileSync('src/components/site-sections.tsx', 'utf8');

const replacements = [
  ['bg-[#FAFAFA] pl-11 pr-4 py-3 text-[13px] text-ink outline-none transition-all placeholder:text-ink/35 focus:border-[#FF6C2C]/50 focus:bg-white focus:ring-2 focus:ring-[#FF6C2C]/10', 'bg-[#FAFAFA] dark:bg-black/20 pl-11 pr-4 py-3 text-[13px] text-ink dark:text-white outline-none transition-all placeholder:text-ink/35 dark:placeholder:text-white/30 focus:border-[#FF6C2C]/50 focus:bg-white dark:focus:bg-black/40 focus:ring-2 focus:ring-[#FF6C2C]/10']
];

for (const [search, replace] of replacements) {
  content = content.replaceAll(search, replace);
}

fs.writeFileSync('src/components/site-sections.tsx', content);
console.log('Done replacing all in site-sections.tsx');
