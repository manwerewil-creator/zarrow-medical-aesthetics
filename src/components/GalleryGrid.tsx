"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Credit } from "@/components/Credit";
import type { Img } from "@/lib/images";

export function GalleryGrid({ images }: { images: Img[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const active = index === null ? null : images[index];

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
        {images.map((img, i) => (
          <motion.button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl sm:mb-4"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={900}
              height={i % 3 === 1 ? 1200 : 700}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              className="h-auto w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.05]"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            />
            <span className="absolute inset-0 bg-brown-900/0 transition-colors duration-500 group-hover:bg-brown-900/15" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brown-900/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-cream transition hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition hover:bg-white/10 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1100}
                sizes="90vw"
                className="max-h-[78vh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-cream/70">
                <span className="text-pretty">{active.alt}</span>
                <span className="flex shrink-0 items-center gap-3">
                  <Credit author={active.author} link={active.link} light />
                  <span>
                    {(index ?? 0) + 1} / {images.length}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
