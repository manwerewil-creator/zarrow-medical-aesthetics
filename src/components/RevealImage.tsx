"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Uncovers an image with a slow vertical wipe as it enters the viewport, then
 * settles the picture from a slight scale-up. It is the one flourish used on
 * the editorial image blocks — everything else fades.
 */
export function RevealImage({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={"relative overflow-hidden " + className}>{children}</div>;
  }

  return (
    <motion.div
      className={"relative overflow-hidden " + className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
