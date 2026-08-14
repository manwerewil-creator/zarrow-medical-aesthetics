"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

/**
 * Floating WhatsApp button. WhatsApp is the default booking channel for
 * most Harare clients, so it stays within thumb reach once the visitor
 * has started reading — but never covers the hero.
 */
export function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          href={whatsappLink(
            `Hello ${SITE.shortName}, I'd like to ask about a treatment.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message ${SITE.name} on WhatsApp`}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-teal-700 py-3.5 pl-4 pr-5 text-cream shadow-[0_16px_36px_-14px_rgba(18,41,38,0.7)] transition-colors hover:bg-teal-800 sm:bottom-7 sm:right-7"
        >
          <MessageCircle size={20} strokeWidth={1.7} />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-500 group-hover:max-w-[10rem] group-hover:opacity-100">
            Chat with us
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
