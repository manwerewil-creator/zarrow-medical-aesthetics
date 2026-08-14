import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Credit } from "@/components/Credit";
import type { Img } from "@/lib/images";

/**
 * Compact hero for inner pages. Shorter than the homepage hero so the
 * content below starts within the first screen.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: Img;
}) {
  return (
    <section className="relative flex min-h-[54svh] items-end overflow-hidden sm:min-h-[58svh] md:min-h-[62svh]">
      <div className="absolute inset-0">
        {/*
          Phones crop a 16:9 frame hard, so the focal point is pulled right of
          centre where the subject sits; wide screens show the full composition.
        */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-[62%_center] sm:object-center"
        />
        {/*
          Neutral, bottom-anchored scrim only — the photograph keeps its own
          colour rather than being washed teal.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      <div className="container-x relative z-10 pb-16 pt-32 md:pb-20">
        {eyebrow ? (
          <Reveal>
            <p className="eyebrow text-gold-300">{eyebrow}</p>
          </Reveal>
        ) : null}
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-[2.35rem] leading-[1.05] text-cream text-balance sm:text-5xl lg:text-6xl [text-shadow:0_2px_22px_rgba(0,0,0,0.32)]">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 text-pretty sm:text-lg [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>

      <Credit
        author={image.author}
        link={image.link}
        light
        className="absolute bottom-4 right-5 z-10"
      />
    </section>
  );
}
