/**
 * Decorative dividers.
 *
 * The resort-theme reference leans on a small centred motif between a pair of
 * hairlines to separate an eyebrow from its heading. It is purely decorative,
 * so everything here is aria-hidden.
 */

export function Ornament({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const stroke = light ? "rgb(224 203 161 / 0.85)" : "rgb(190 157 91 / 0.9)";
  const rule = light ? "rgb(224 203 161 / 0.35)" : "rgb(190 157 91 / 0.35)";

  return (
    <div
      aria-hidden="true"
      className={"flex items-center justify-center gap-4 " + className}
    >
      <span className="h-px w-14 sm:w-20" style={{ background: rule }} />
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        className="shrink-0"
      >
        {/* A slim four-point botanical star — leaf pairs on each axis. */}
        <path
          d="M13 2c1.9 3.4 3.1 6.9 3.1 11S14.9 20.6 13 24c-1.9-3.4-3.1-6.9-3.1-11S11.1 5.4 13 2Z"
          stroke={stroke}
          strokeWidth="0.9"
        />
        <path
          d="M2 13c3.4-1.9 6.9-3.1 11-3.1s7.6 1.2 11 3.1c-3.4 1.9-6.9 3.1-11 3.1S5.4 14.9 2 13Z"
          stroke={stroke}
          strokeWidth="0.9"
        />
        <circle cx="13" cy="13" r="1.5" fill={stroke} />
      </svg>
      <span className="h-px w-14 sm:w-20" style={{ background: rule }} />
    </div>
  );
}

/** A bare hairline with a gold centre stop, for tighter spots. */
export function GoldRule({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={"rule-gold " + className} />;
}
