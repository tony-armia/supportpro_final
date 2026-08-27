'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const TARGET_SELECTOR =
  "button, input, textarea, select, a.rounded-full, a[class*='button'], .service-pill";

type TargetBounds = {
  width: number;
  height: number;
  x: number;
  y: number;
  borderRadius: string;
} | null;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [targetBounds, setTargetBounds] = useState<TargetBounds>(null);
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const circleX = useSpring(pointerX, { stiffness: 180, damping: 24, restDelta: 0.01 });
  const circleY = useSpring(pointerY, { stiffness: 180, damping: 24, restDelta: 0.01 });
  const dotX = useSpring(pointerX, { stiffness: 420, damping: 34, restDelta: 0.01 });
  const dotY = useSpring(pointerY, { stiffness: 420, damping: 34, restDelta: 0.01 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabled = () => setEnabled(finePointer.matches && !reducedMotion.matches);

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let activeElement: HTMLElement | null = null;

    const updateBounds = () => {
      if (!activeElement) {
        setTargetBounds(null);
        return;
      }
      const rect = activeElement.getBoundingClientRect();
      const borderRadius = getComputedStyle(activeElement).borderTopLeftRadius;
      setTargetBounds({
        width: rect.width + 10,
        height: rect.height + 10,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        borderRadius,
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const eventTarget = event.target as HTMLElement | null;
      if (eventTarget?.closest("#faq")) {
        activeElement = null;
        updateBounds();
        return;
      }

      const element = eventTarget?.closest<HTMLElement>(TARGET_SELECTOR);
      if (element !== activeElement) {
        activeElement = element || null;
        updateBounds();
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      // If moving to another element outside the target, clear it.
      // MouseOver handles the new target.
      const related = event.relatedTarget as HTMLElement | null;
      if (activeElement && !related?.closest(TARGET_SELECTOR)) {
        activeElement = null;
        updateBounds();
      }
    };

    const movePointer = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    const clearTarget = () => {
      activeElement = null;
      setTargetBounds(null);
    };

    let scrollRaf: number;
    const handleScroll = () => {
      if (activeElement) {
        cancelAnimationFrame(scrollRaf);
        scrollRaf = requestAnimationFrame(updateBounds);
      }
    };

    window.addEventListener("pointermove", movePointer, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("blur", clearTarget);

    return () => {
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("blur", clearTarget);
      cancelAnimationFrame(scrollRaf);
    };
  }, [enabled, pointerX, pointerY]);

  if (!enabled) return null;

  const width = targetBounds?.width ?? 28;
  const height = targetBounds?.height ?? 28;
  const x = targetBounds?.x ?? circleX;
  const y = targetBounds?.y ?? circleY;
  const borderRadius = targetBounds?.borderRadius ?? "9999px";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999999] hidden select-none md:block"
      aria-hidden="true"
    >
      <motion.div
        className="fixed left-0 top-0 border-2 border-[#FF8101]"
        style={{ x, y, width, height, borderRadius, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        animate={{ width, height, opacity: 0.78 }}
        transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.35 }}
      />
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-[#FF8101]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        animate={{ opacity: targetBounds ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </div>
  );
}
