import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

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
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <p
            className={`eyebrow ${centered ? "is-centered" : ""} ${
              light ? "text-gold-300" : ""
            }`}
          >
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <h2
          className={`mt-5 font-display text-[2rem] leading-[1.1] sm:text-4xl lg:text-[2.75rem] text-balance ${
            light ? "text-cream" : "text-teal-800"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 text-base leading-relaxed text-pretty ${
              light ? "text-teal-100/80" : "text-stone"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
