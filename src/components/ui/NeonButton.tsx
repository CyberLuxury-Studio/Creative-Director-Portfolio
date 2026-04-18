"use client";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function NeonButton({ variant = "primary", children, className, ...props }: NeonButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-1 before:translate-y-1 before:transition-transform before:duration-300 hover:before:translate-x-0 hover:before:translate-y-0",
        isPrimary
          ? "bg-primary text-black before:bg-primary-dim hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] border border-primary"
          : "bg-transparent text-secondary border border-secondary before:bg-secondary/20 hover:shadow-[0_0_20px_rgba(255,0,60,0.3)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
