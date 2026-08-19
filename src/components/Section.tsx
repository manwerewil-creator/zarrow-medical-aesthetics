import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Ornament } from "@/components/Ornament";

/**
 * The standard section heading: eyebrow kicker, display-serif title,
 * optional intro. Used on every page so vertical rhythm stays consistent.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const centered = align === "center";
  // Centred headings use the <Ornament/> rule instead of the inline eyebrow dashes.
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <p className={`eyebrow ${light ? "text-gold-300" : ""}`}>{eyebrow}</p>
        </Reveal>
      ) : null}
      {centered ? (
        <Reveal delay={0.03}>
          <Ornament light={light} className="mt-6" />
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <h2
          className={`mt-6 font-display text-[2.05rem] leading-[1.14] sm:text-[2.6rem] lg:text-[3.1rem] text-balance ${
            light ? "text-cream" : "text-brown-800"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p
            className={`mt-6 text-base leading-relaxed text-pretty ${
              light ? "text-brown-100/80" : "text-stone"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
