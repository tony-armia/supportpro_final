const fs = require('fs');
const files = ['src/routes/index.tsx', 'src/components/site-sections.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Backgrounds
  content = content.replace(/backgroundColor:\s*\"#0B0B0B\"/g, 'backgroundColor: "var(--sp-bg)"');
  content = content.replace(/backgroundColor:\s*\"#101010\"/g, 'backgroundColor: "var(--sp-surface)"');
  content = content.replace(/backgroundColor:\s*\"#111111\"/g, 'backgroundColor: "var(--sp-surface-el)"');
  content = content.replace(/backgroundColor:\s*\"#151515\"/g, 'backgroundColor: "var(--sp-surface-el)"');
  content = content.replace(/backgroundColor:\s*\"#080808\"/g, 'backgroundColor: "var(--sp-footer)"');
  content = content.replace(/backgroundColor:\s*\"#0D0D0D\"/g, 'backgroundColor: "var(--sp-input-bg)"');
  content = content.replace(/backgroundColor:\s*\"rgba\(20,20,20,0\.88\)\"/g, 'backgroundColor: "var(--sp-surface)"');
  
  // General occurrences
  content = content.replace(/\"#0B0B0B\"/g, '"var(--sp-bg)"');
  content = content.replace(/\"#101010\"/g, '"var(--sp-surface)"');
  content = content.replace(/\"#111111\"/g, '"var(--sp-surface-el)"');
  content = content.replace(/\"#151515\"/g, '"var(--sp-surface-el)"');
  content = content.replace(/\"#080808\"/g, '"var(--sp-footer)"');
  content = content.replace(/\"#0D0D0D\"/g, '"var(--sp-input-bg)"');
  
  // Texts
  content = content.replace(/\"#F5F5F2\"/g, '"var(--sp-text-primary)"');
  content = content.replace(/\"#A7A7A3\"/g, '"var(--sp-text-secondary)"');
  content = content.replace(/\"#777773\"/g, '"var(--sp-text-muted)"');

  // Borders
  content = content.replace(/\"1px solid rgba\(255,255,255,0\.10\)\"/g, '"1px solid var(--sp-border)"');
  content = content.replace(/\"rgba\(255,255,255,0\.10\)\"/g, '"var(--sp-border)"');

  fs.writeFileSync(file, content);
});
console.log('Replaced hardcoded hex colors with CSS vars');
