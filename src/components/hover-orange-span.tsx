import { type ReactNode } from "react";
import { motion } from "motion/react";

export function HoverOrangeSpan({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`inline-block transition-colors duration-300 hover:text-[#FF6C2C] ${className}`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.span>
  );
}
