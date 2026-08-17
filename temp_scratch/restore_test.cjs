const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

const brokenPart = });
      "We use SupportPRO for all of our Systems Administration for 11 servers, and they handle all of our tickets as well. We have had ZERO problems with them, and I highly recommend them to anyone.",
    name: "Eric W.",
  },
  {;

const fixedPart = });

const testimonials = [
  {
    quote:
      "SupportPRO has done an excellent job of providing first line support to our customers. Their team goes the extra mile and even has walked our customers through importing data into a MySQL database.",
    name: "Toby Wolf",
  },
  {
    quote:
      "We use SupportPRO for all of our Systems Administration for 11 servers, and they handle all of our tickets as well. We have had ZERO problems with them, and I highly recommend them to anyone.",
    name: "Eric W.",
  },
  {;

const normalize = s => s.replace(/\r\n/g, '\n');
content = normalize(content).replace(normalize(brokenPart), normalize(fixedPart));

fs.writeFileSync('src/routes/index.tsx', content);
console.log('Fixed testimonials array');
