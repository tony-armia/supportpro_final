'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Clock,
  ExternalLink,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actions?: Array<{
    label: string;
    href?: string;
    action?: string;
  }>;
}

const QUICK_STARTERS = [
  { label: '🚀 DevOps & CI/CD Pipelines', query: 'What DevOps and automation services do you offer?' },
  { label: '🛡️ 24/7 Server Management', query: 'How does your 24/7 server management work?' },
  { label: '☁️ AWS & Cloud Migration', query: 'Can you help migrate our servers to AWS/Cloud?' },
  { label: '💼 White-Label Support for MSPs', query: 'Tell me about your white-label support for hosting providers.' },
  { label: '💰 Pricing & Plans', query: 'How does your pricing work?' },
  { label: '📅 Book a Consultation', query: 'How can I schedule a discovery call with your team?' },
];

function getBotReply(userText: string): {
  reply: string;
  actions?: Array<{ label: string; href?: string; action?: string }>;
} {
  const q = userText.toLowerCase();

  if (q.includes('devops') || q.includes('ci/cd') || q.includes('docker') || q.includes('kubernetes') || q.includes('terraform')) {
    return {
      reply:
        'Our certified DevOps engineers build automated CI/CD pipelines, containerize architectures with Docker & Kubernetes, and manage Infrastructure-as-Code via Terraform. We maintain 99.99% uptime with proactive observability.',
      actions: [
        { label: 'Explore DevOps Services', href: '#services' },
        { label: 'Book a Consultation', href: '#contact-form' },
      ],
    };
  }

  if (q.includes('24/7') || q.includes('server') || q.includes('noc') || q.includes('incident') || q.includes('emergency')) {
    return {
      reply:
        'We provide round-the-clock 24/7/365 server management and Level 1–Level 3 technical support. Our engineers respond within 15 minutes, actively monitor server health, and resolve outages before your users notice.',
      actions: [
        { label: 'View 24/7 SLA Details', href: '#services' },
        { label: 'Contact Support Team', href: '#contact-form' },
      ],
    };
  }

  if (q.includes('aws') || q.includes('cloud') || q.includes('azure') || q.includes('gcp') || q.includes('migrat')) {
    return {
      reply:
        'As AWS & Red Hat certified partners, we handle complex cloud migrations with zero downtime. We also audit existing workloads for security compliance, auto-scaling, and cost optimization (often reducing AWS bills by 25–40%).',
      actions: [
        { label: 'Cloud Infrastructure', href: '/cloudmanagement' },
        { label: 'AWS Management', href: '/aws-management' },
      ],
    };
  }

  if (q.includes('white-label') || q.includes('msp') || q.includes('hosting') || q.includes('cpanel') || q.includes('reseller')) {
    return {
      reply:
        'Since 2003, hosting providers and MSPs worldwide have relied on SupportPRO for seamless white-label support. Our engineers respond under your company brand via your helpdesk, live chat, and server portals.',
      actions: [
        { label: 'Learn About MSP Support', href: '#services' },
        { label: 'Speak with an Account Exec', href: '#contact-form' },
      ],
    };
  }

  if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('plan') || q.includes('rate')) {
    return {
      reply:
        'We offer flexible, predictable models: per-server management, per-ticket helpdesk pools, or dedicated full-time Level 3 engineers tailored to your exact tech stack. No long-term lock-in and transparent SLAs.',
      actions: [
        { label: 'Request Custom Quote', href: '#contact-form' },
        { label: 'Book a Discovery Call', href: '#contact-form' },
      ],
    };
  }

  if (q.includes('contact') || q.includes('call') || q.includes('meet') || q.includes('schedule') || q.includes('book')) {
    return {
      reply:
        'Our engineering leadership is headquartered in Chicago, IL with 24/7 delivery centers. You can book a 15-minute discovery session or send us your server requirements directly through our intake form.',
      actions: [
        { label: 'Go to Contact Form', href: '#contact-form' },
      ],
    };
  }

  if (q.includes('security') || q.includes('iso') || q.includes('soc') || q.includes('compliance') || q.includes('experience')) {
    return {
      reply:
        'SupportPRO has over 23 years of excellence (founded in 2003). We are ISO 9001:2015, ISO 27001, and AICPA SOC 2 certified with strict enterprise data confidentiality, encrypted workflows, and background-vetted engineers.',
      actions: [
        { label: 'Explore Credentials', href: '#services' },
      ],
    };
  }

  // Fallback response
  return {
    reply:
      "Thank you for asking! SupportPRO specializes in 24/7 Managed Infrastructure, DevOps, Cloud Architectures, and White-label MSP Support. Would you like to connect with a senior solutions architect or learn about our service offerings?",
    actions: [
      { label: 'Book a Consultation', href: '#contact-form' },
      { label: 'Explore All Services', href: '#services' },
    ],
  };
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showGreetingTooltip, setShowGreetingTooltip] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 Hi! Welcome to SupportPRO. I'm your 24/7 AI Concierge. How can we help power your infrastructure today?",
      time: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setShowGreetingTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Hide greeting tooltip automatically after 10s if not interacted
  useEffect(() => {
    const t = setTimeout(() => {
      setShowGreetingTooltip(false);
    }, 10000);
    return () => clearTimeout(t);
  }, []);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);
    setHasInteracted(true);

    // Simulate realistic response time
    setTimeout(() => {
      const { reply, actions } = getBotReply(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Chat cleared! How can our 24/7 infrastructure engineers help you today?",
        time: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Action Trigger Button & Greeting Card */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
        
        {/* Proactive Greeting Pill (Shows on entry, auto-hides after interaction or close) */}
        <AnimatePresence>
          {showGreetingTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="mb-3 max-w-[270px] sm:max-w-[310px] bg-[#141822]/95 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl shadow-2xl shadow-black/80 text-white flex items-start gap-2.5 relative select-none"
            >
              <div className="w-7 h-7 rounded-full bg-[#FF8101]/20 border border-[#FF8101]/40 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles size={14} className="text-[#FF8101]" />
              </div>
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                  SupportPRO Assistant
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </p>
                <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                  Need help with DevOps or 24/7 server management? Ask us anything!
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGreetingTooltip(false);
                }}
                className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors p-1"
                aria-label="Dismiss greeting"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Chatbot' : 'Open 24/7 SupportPRO Chatbot'}
          className="no-cursor-morph relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#E67300] via-[#FF8101] to-[#FFA742] text-white shadow-[0_8px_25px_rgba(255,129,1,0.45)] hover:shadow-[0_10px_35px_rgba(255,129,1,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF8101]/40"
        >
          {/* Subtle Ambient Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#FF8101]/20 blur-md group-hover:bg-[#FF8101]/40 transition-all duration-300 pointer-events-none" />

          {/* Active Online Status Pill on corner */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#12161F]" />
          </span>

          {/* Icon Switcher */}
          <div className="relative z-10">
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} strokeWidth={2.2} />
                </motion.div>
              ) : (
                <motion.div
                  key="chat-icon"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
                >
                  <MessageSquare size={24} strokeWidth={2.2} className="drop-shadow-sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      {/* Modern Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[570px] max-h-[calc(100vh-120px)] flex flex-col rounded-3xl bg-[#0F131C]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] text-white overflow-hidden"
          >
            {/* Ambient glowing radial top header light */}
            <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#FF8101]/15 to-transparent pointer-events-none" />

            {/* Header Section */}
            <div className="relative z-10 px-4 py-3.5 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-[#FF8101] to-[#D96B00] flex items-center justify-center shadow-lg shadow-[#FF8101]/30">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm text-white leading-tight">SupportPRO Assistant</h3>
                    <span className="px-1.5 py-0.5 text-[9px] font-medium bg-[#FF8101]/20 text-[#FFA742] rounded-full border border-[#FF8101]/30">
                      AI 24/7
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 mt-0.5">
                    Online • Typically replies instantly
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 text-white/60">
                <button
                  onClick={handleResetChat}
                  title="Clear conversation"
                  aria-label="Clear chat history"
                  className="no-cursor-morph p-1.5 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  aria-label="Close chat window"
                  className="no-cursor-morph p-1.5 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Message Body Container */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              
              {/* Trust Sub-Header Card */}
              <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-[11px] text-white/70 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#FF8101] shrink-0" />
                <span>
                  ISO 27001 & SOC 2 certified engineers. Headquartered in Chicago with 24/7 NOC delivery centers.
                </span>
              </div>

              {/* Chat Message List */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#FF8101] to-[#E67300] text-white font-medium rounded-tr-sm'
                        : 'bg-white/[0.08] border border-white/10 text-white/95 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}

                    {/* Action buttons if attached to message */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-wrap gap-1.5">
                        {msg.actions.map((act, i) => (
                          <a
                            key={i}
                            href={act.href}
                            onClick={() => {
                              if (act.href?.startsWith('#')) {
                                setIsOpen(false);
                              }
                            }}
                            className="no-cursor-morph inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white text-[11px] font-medium transition-colors"
                          >
                            <span>{act.label}</span>
                            <ArrowRight size={11} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-white/40 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/[0.06] border border-white/10 w-fit text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8101] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8101] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8101] animate-bounce" />
                </div>
              )}

              {/* Quick Starters (shown if only 1 message or user wants inspiration) */}
              {messages.length <= 2 && !isTyping && (
                <div className="pt-2 space-y-1.5">
                  <p className="text-[11px] font-medium text-white/50 px-1 uppercase tracking-wider font-mono">
                    Frequently Asked
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_STARTERS.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(item.query)}
                        className="no-cursor-morph text-left text-[11px] px-2.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-[#FF8101]/20 hover:border-[#FF8101]/40 border border-white/10 text-white/80 hover:text-white transition-all duration-150"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Section */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about DevOps, 24/7 support, pricing..."
                  className="w-full rounded-2xl bg-white/[0.07] border border-white/15 focus:border-[#FF8101] focus:ring-1 focus:ring-[#FF8101] text-xs text-white placeholder:text-white/40 pl-3.5 pr-11 py-3 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim()}
                  aria-label="Send message"
                  className="no-cursor-morph absolute right-1.5 w-8 h-8 rounded-xl bg-[#FF8101] disabled:bg-white/10 text-white disabled:text-white/30 flex items-center justify-center transition-all duration-150 hover:brightness-110 active:scale-95 disabled:scale-100"
                >
                  <Send size={14} className="translate-x-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
