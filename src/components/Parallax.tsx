"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Drifts its child slowly against the scroll direction.
 *
 * Used behind full-bleed bands so a still photograph gains a little depth as
 * the section passes. Deliberately gentle — `distance` is the total travel in
 * pixels across the whole scroll pass, not a per-frame rate.
 *
 * Honours prefers-reduced-motion by standing completely still.
 */
export function Parallax({
  children,
  distance = 70,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-distance, distance]
  );

  return (
    <div ref={ref} className={"relative overflow-hidden " + className}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        {children}
      </motion.div>
    </div>
  );
}
