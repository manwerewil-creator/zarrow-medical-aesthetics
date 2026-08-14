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
    <section className="relative flex min-h-[58vh] items-end overflow-hidden md:min-h-[62vh]">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-teal-900/35 to-teal-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/55 to-transparent" />
      </div>

      <div className="container-x relative z-10 pb-16 pt-32 md:pb-20">
        {eyebrow ? (
          <Reveal>
            <p className="eyebrow text-gold-300">{eyebrow}</p>
          </Reveal>
        ) : null}
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-[2.5rem] leading-[1.05] text-cream text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 text-pretty sm:text-lg">
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
