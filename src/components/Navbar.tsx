"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Pages that open with a full-bleed dark hero can carry a transparent bar.
  const overHero = pathname === "/";
  const solid = scrolled || !overHero || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation, and lock the page behind it.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/*
        The `max-sm:` overrides keep the bar opaque on phones. Small screens get
        an untinted, light hero photograph, so the transparent treatment (which
        flips the logo to white) would leave the mark invisible.
      */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 max-sm:bg-cream/90 max-sm:shadow-[0_1px_0_rgba(90,65,42,0.08)] max-sm:backdrop-blur-md ${
          solid
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(90,65,42,0.08)]"
            : "bg-transparent"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        <nav
          className={`container-x flex items-center justify-between transition-all duration-500 max-sm:h-[68px] ${
            solid ? "h-[68px]" : "h-24"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        >
          <Link
            href="/"
            aria-label={`${SITE.name} — home`}
            className="relative block shrink-0"
          >
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={544}
              height={148}
              priority
              className={`h-9 w-auto transition-all duration-500 max-sm:filter-none sm:h-10 ${
                solid ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-underline text-[0.94rem] tracking-wide transition-colors ${
                    solid
                      ? active
                        ? "text-brown-700"
                        : "text-stone hover:text-brown-700"
                      : "text-cream/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneHref}`}
              className={`hidden items-center gap-2 text-sm tracking-wide transition-colors sm:inline-flex ${
                solid
                  ? "text-stone hover:text-brown-700"
                  : "text-cream/85 hover:text-white"
              }`}
            >
              <Phone size={15} strokeWidth={1.6} />
              <span className="hidden xl:inline">{SITE.phone}</span>
            </a>

            <Link
              href="/booking"
              className={`btn hidden sm:inline-flex ${
                solid ? "btn-gold" : "btn-ghost-light"
              }`}
            >
              Book now
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors max-sm:text-brown-800 lg:hidden ${
                solid
                  ? "text-brown-800 hover:bg-brown-700/8"
                  : "text-cream hover:bg-white/12"
              }`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-cream lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center pb-16 pt-24">
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                }}
                className="space-y-1"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 font-display text-4xl text-brown-800"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.42,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-12"
              >
                <div className="rule-gold" />
                <Link href="/booking" className="btn btn-gold mt-8 w-full">
                  Book an appointment
                </Link>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-5 flex items-center gap-2.5 text-sm text-stone"
                >
                  <Phone size={16} strokeWidth={1.6} className="text-gold-500" />
                  {SITE.phone}
                </a>
                <p className="mt-2 text-sm text-mist">{SITE.email}</p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
