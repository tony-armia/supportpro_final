import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { Zap, MessageSquare, HelpCircle, Mail, ArrowUpRight } from "lucide-react";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<{
    variant: "default" | "button" | "services" | "testimonials" | "faq" | "contact";
    text?: string;
    icon?: any;
    visible: boolean;
  }>({
    variant: "default",
    visible: false,
  });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for fluid, zero-lag cursor follower
  const springX = useSpring(cursorX, { stiffness: 900, damping: 45, restDelta: 0.001 });
  const springY = useSpring(cursorY, { stiffness: 900, damping: 45, restDelta: 0.001 });

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (mouse/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("a, button, [role='button'], input, textarea, select");
      const customTypeEl = target.closest("[data-cursor-type]") as HTMLElement | null;
      const section = target.closest("section") as HTMLElement | null;

      if (customTypeEl) {
        const type = customTypeEl.getAttribute("data-cursor-type");
        const text = customTypeEl.getAttribute("data-cursor-text") || undefined;
        if (type === "services") {
          setCursorState({ variant: "services", text: text || "Services", icon: Zap, visible: true });
          return;
        }
        if (type === "testimonials") {
          setCursorState({ variant: "testimonials", text: text || "Client Words", icon: MessageSquare, visible: true });
          return;
        }
        if (type === "faq") {
          setCursorState({ variant: "faq", text: text || "FAQ", icon: HelpCircle, visible: true });
          return;
        }
        if (type === "contact") {
          setCursorState({ variant: "contact", text: text || "Connect", icon: Mail, visible: true });
          return;
        }
      }

      if (clickable) {
        setCursorState({ variant: "button", visible: true });
        return;
      }

      // Check section context
      if (section) {
        const id = section.id;
        if (id === "services") {
          setCursorState({ variant: "services", text: "Services", icon: Zap, visible: true });
          return;
        }
        if (id === "testimonials" || section.className.includes("Testimonials")) {
          setCursorState({ variant: "testimonials", text: "Client Words", icon: MessageSquare, visible: true });
          return;
        }
        if (id === "faq") {
          setCursorState({ variant: "faq", text: "FAQ", icon: HelpCircle, visible: true });
          return;
        }
        if (id === "contact-form") {
          setCursorState({ variant: "contact", text: "Connect", icon: Mail, visible: true });
          return;
        }
      }

      setCursorState({ variant: "default", visible: true });
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!cursorState.visible) return null;

  const Icon = cursorState.icon;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
      >
        <AnimatePresence mode="wait">
          {cursorState.variant === "default" && (
            <motion.div
              key="default"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Outer soft aura */}
              <div className="h-7 w-7 rounded-full border border-[#FF6C2C]/40 bg-[#FF6C2C]/10" />
              {/* Core dot */}
              <div className="absolute h-2.5 w-2.5 rounded-full bg-[#FF6C2C]" />
            </motion.div>
          )}

          {cursorState.variant === "button" && (
            <motion.div
              key="button"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="h-9 w-9 rounded-full border border-[#FF6C2C] bg-[#FF6C2C]/20 backdrop-blur-xs flex items-center justify-center text-[#FF6C2C]">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </motion.div>
          )}

          {(cursorState.variant === "services" ||
            cursorState.variant === "testimonials" ||
            cursorState.variant === "faq" ||
            cursorState.variant === "contact") && (
            <motion.div
              key={cursorState.variant}
              initial={{ scale: 0.7, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="flex items-center gap-2 rounded-full bg-ink/90 text-white px-3.5 py-1.5 shadow-xl border border-white/10 backdrop-blur-md text-[12px] font-medium tracking-wide"
            >
              {Icon && <Icon size={13} className="text-[#FF6C2C]" />}
              <span>{cursorState.text}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
