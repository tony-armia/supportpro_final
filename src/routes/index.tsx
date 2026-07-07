import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, Lock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import phoneFrame from "@/assets/phone-frame.png";
import phoneTasks from "@/assets/phone-tasks.png";
import talkImg from "@/assets/talk.jpg";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const testimonials = [
  "Finally a planner that fits how my brain actually works. I talk, it listens, and my day makes sense before my coffee is cold.",
  "I used to open three apps to write one task. Novu is just voice in, plan out. It's ridiculous how much calmer my mornings feel.",
  "Three priorities a day. That one constraint changed my week more than any productivity system I've tried.",
  "It doesn't nag or buzz. It just quietly organises what I say and gives me back the only list I needed.",
  "The evening wrap-up has become my favourite two minutes of the day. Quiet, honest, and somehow always encouraging.",
  "Every planner has failed me before. Novu is the first one that doesn't expect me to be someone I'm not.",
];

const faqs = [
  { q: "How is Novu different from other to-do apps?", a: "Most to-do apps give you more lists, more buttons, more rules. Novu runs the opposite way. You talk in the morning, it organises everything you said into real tasks, and then it asks you to choose three priorities for the day." },
  { q: "How does the voice capture work?", a: "Open Novu in the morning and just talk. No prompts, no structure, no format. Novu transcribes your speech, pulls out the tasks, writes a description from context, and suggests a category." },
  { q: "Why only three priorities a day?", a: "Choosing three is the most important thing you'll do each morning. Everything else is still there in your day view and your backlog, but only three things get the spotlight." },
  { q: "What is the evening wrap-up?", a: "A quick voice note that shows what you got done. Unfinished items move to tomorrow automatically. A clean close to today, a fair start to the next." },
  { q: "What do the weekly insights include?", a: "Every Sunday you get an overview of your week — what you focused on, where your energy went, and how your time was divided." },
  { q: "What if I don't feel like talking?", a: "You can add tasks the normal way, just like any to-do app. Voice is the fast lane, but it's never the only way in." },
  { q: "Is my data private?", a: "Yes. Your tasks are stored locally on your device and synced via your personal iCloud. Voice inputs are sent to our secure server only for processing and deleted afterwards." },
  { q: "How much does it cost?", a: "Start with a 7-day free trial. After that, choose Monthly or Quarterly. Manage or cancel anytime from your Apple Account settings." },
];

function Nav() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10">
      <a href="#" className="font-display text-2xl text-white">novu</a>
      <div className="flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md px-2 py-1.5 text-sm text-white border border-white/10">
        <a href="#features" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">Features</a>
        <a href="#faq" className="px-4 py-1.5 rounded-full hover:bg-white/10 transition">FAQ</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1008} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center text-white">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl">
          Talk your day.<br />Own your time.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
          Speak freely about your day. Novu turns your thoughts into tasks, helps you focus on what matters, and reflects it back to you.
        </p>
        <p className="mt-6 text-xs md:text-sm text-white/60 max-w-lg">
          Novu is being discontinued. Thank you to everyone who was part of the journey.
        </p>
      </div>
    </section>
  );
}

function FeatureText({ title, body }: { title: string; body: string }) {
  return (
    <div className="max-w-sm">
      <h3 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
        {title.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}
      </h3>
      <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative bg-cream rounded-t-[40px] -mt-10 pt-24 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FeatureText title={"Just talk.\nWe'll organize."} body="Say whatever is on your mind. Novu transcribes it, pulls out the tasks, and structures your day in seconds." />
          <div className="flex justify-center">
            <img src={phoneFrame} alt="" className="max-h-[520px] w-auto" width={912} height={1408} loading="lazy" />
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-16">
          <div />
          <FeatureText title={"Prioritise what\nactually matters."} body="You always pick three priorities. No more pretending that everything on your list deserves the same attention." />
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-16">
          <FeatureText title={"Stay out of\nyour own way."} body="No endless lists. No constant notifications. Just the day you set yourself, structured and clear." />
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-16">
          <div />
          <FeatureText title={"See your day\nclearly."} body="At night, reflect on what actually happened and carry the bits worth keeping into tomorrow." />
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden bg-white border border-border/50 shadow-sm">
            <img src={talkImg} alt="" className="h-72 w-full object-cover" width={1200} height={912} loading="lazy" />
            <div className="p-8">
              <h4 className="font-display text-3xl text-ink">Just open and <em>talk</em></h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Open Novu in the morning and say what's on your mind. It transcribes you, pulls out the tasks, and writes them up so you don't have to.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden bg-white border border-border/50 shadow-sm flex flex-col">
            <div className="p-8">
              <h4 className="font-display text-3xl text-ink">Structure in <em>seconds</em></h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Novu reads what you said, finds the real tasks inside it, and lays out your full day in less time than it takes to pour coffee.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img src={phoneTasks} alt="" className="max-h-80 w-auto" width={912} height={1408} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-12 md:p-20 min-h-[420px]">
          <div className="max-w-md relative z-10">
            <h3 className="font-display text-5xl md:text-6xl text-white leading-[1.05]">Built for privacy.</h3>
            <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm">
              Your data remains on your device. We never sell it, never share it, and protect it with industry-standard security. Just anonymous analytics to make the app better.
            </p>
          </div>
          <Lock className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-white/10" size={260} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream pb-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="font-display text-5xl md:text-6xl text-ink">From the first users.</h3>
        <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
          Honest reactions from people using Novu in their actual mornings. Before launch. Before the fanfare.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border/50 p-6 text-left shadow-sm">
              <div className="text-[oklch(0.75_0.15_80)] text-sm mb-3 tracking-wider">★★★★★</div>
              <p className="text-sm text-ink leading-relaxed">&ldquo;{t}&rdquo;</p>
              <p className="mt-4 text-xs text-muted-foreground">— Early User Feedback</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <h3 className="font-display text-5xl md:text-6xl text-ink text-center">Got questions?</h3>
        <div className="mt-12 divide-y divide-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-5 text-left flex items-start justify-between gap-6"
            >
              <div className="flex-1">
                <div className="text-[15px] text-ink font-medium">{f.q}</div>
                {open === i && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </div>
              <div className="mt-0.5 text-muted-foreground shrink-0">
                {open === i ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative min-h-[600px] h-[80vh] overflow-hidden">
      <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" width={1600} height={912} loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white pt-16">
        <h2 className="font-display text-6xl md:text-8xl leading-[0.95]">
          Start your day<br /><em>differently.</em>
        </h2>
        <p className="mt-6 text-white/80 text-sm">Talk your day. Own your time.</p>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-8 text-white/80 text-xs z-10">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div><div className="font-display text-2xl text-white">novu</div></div>
          <div>
            <div className="font-medium text-white mb-2">Product</div>
            <div className="space-y-1"><div>Features</div><div>FAQ</div></div>
          </div>
          <div>
            <div className="font-medium text-white mb-2">Company</div>
            <div className="space-y-1"><div>About</div><div>Press</div></div>
          </div>
          <div>
            <div className="font-medium text-white mb-2">Connect</div>
            <div className="space-y-1"><div>Instagram</div><div>LinkedIn</div><div>TikTok</div></div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-white/20 text-white/50">
          © 2026 Novu. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <Features />
      <Privacy />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
