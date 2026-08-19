/**
 * Photographer attribution chip for the supporting Unsplash imagery.
 * Renders nothing for Zarrow's own photography (no author supplied).
 */
export function Credit({
  author,
  link,
  className = "",
  light = false,
}: {
  author?: string;
  link?: string;
  className?: string;
  light?: boolean;
}) {
  if (!author) return null;

  const label = `Photo: ${author}`;
  const classes = `pointer-events-auto select-none rounded-full px-2.5 py-1 text-[0.62rem] tracking-wide backdrop-blur-sm transition-opacity ${
    light
      ? "bg-black/25 text-white/70 hover:text-white"
      : "bg-white/70 text-stone hover:text-brown-700"
  } ${className}`;

  if (!link) return <span className={classes}>{label}</span>;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={classes}
    >
      {label}
    </a>
  );
}
