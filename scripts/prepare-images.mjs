/**
 * Prepares the brand photography for the web.
 *
 * The supplied artwork arrived as 1672x941 PNGs (~1.6 MB each). PNG is the
 * wrong container for photographs, so each one is re-encoded as a high-quality
 * progressive JPEG — roughly a 90% size reduction with no visible loss.
 *
 * It also cuts a dedicated 4:5 MOBILE crop of the hero. The full 16:9 frame is
 * composed for a wide banner; dropped into a phone viewport (~0.46 aspect) the
 * browser would discard about three quarters of it and land wherever
 * object-position happened to point. Cropping deliberately means the phone gets
 * a frame that was actually composed for it.
 *
 * Run with:  npm run images
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

// Originals live outside public/ so the 1.6 MB PNGs are never deployed.
const SRC = path.join(process.cwd(), "assets", "source-images");
const OUT = path.join(process.cwd(), "public", "images");

/** Full-frame photographs, re-encoded. */
const PHOTOS = [
  "hero-medical-aesthetics",
  "service-facial-care",
  "service-body-contouring",
  "service-iv-wellness",
];

/**
 * The hero's mobile crop.
 *
 * Source is 1672x941. The subject sits right of centre with her face at roughly
 * x=1180. A 4:5 window is 941 * 0.8 = 753px wide; starting at x=740 keeps her
 * head and shoulders whole, holds the soft cabinetry on the left for breathing
 * room, and trims the mirror at the right edge.
 */
const HERO_MOBILE_CROP = { left: 740, top: 0, width: 753, height: 941 };

async function main() {
  await mkdir(OUT, { recursive: true });

  for (const name of PHOTOS) {
    const src = path.join(SRC, `${name}.png`);
    const dest = path.join(OUT, `${name}.jpg`);

    const info = await sharp(src)
      .jpeg({ quality: 88, progressive: true, mozjpeg: true })
      .toFile(dest);

    console.log(
      `${name}.jpg  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`
    );
  }

  const heroSrc = path.join(SRC, "hero-medical-aesthetics.png");
  const heroMobile = path.join(OUT, "hero-medical-aesthetics-mobile.jpg");

  const mobileInfo = await sharp(heroSrc)
    .extract(HERO_MOBILE_CROP)
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(heroMobile);

  console.log(
    `hero-medical-aesthetics-mobile.jpg  ${mobileInfo.width}x${mobileInfo.height}  ${(
      mobileInfo.size / 1024
    ).toFixed(0)} KB`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
