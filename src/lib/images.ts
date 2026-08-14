// ============================================================
// Imagery.
//
// BRAND images live in /public/images and come from the supplied
// Zarrow resource pack — these carry the site's identity and are
// used for the hero and the three signature service blocks.
//
// SUPPORTING images are curated Unsplash photographs used for the
// gallery and section texture. Replace them with Zarrow's own
// clinic photography before launch; keep the { src, alt, author,
// link } shape so <Credit/> and alt text keep working.
// ============================================================

export type Img = {
  src: string;
  alt: string;
  author?: string;
  link?: string;
};

const u = (p: string): string =>
  "https://images.unsplash.com/" + p + "?auto=format&fit=crop&q=80";

/**
 * Zarrow's own artwork — no attribution chip needed.
 *
 * Generated from the originals in /assets/source-images by `npm run images`.
 * `heroMobile` is a purpose-cut 4:5 crop: the wide hero is composed as a
 * banner, and a phone viewport would otherwise discard most of the frame.
 * Art-directing the crop means small screens get a composition that was
 * actually made for them.
 */
export const BRAND = {
  hero: {
    src: "/images/hero-medical-aesthetics.jpg",
    alt: "A client relaxing in a robe in Zarrow's treatment room, with soft light and warm teal cabinetry.",
  },
  heroMobile: {
    src: "/images/hero-medical-aesthetics-mobile.jpg",
    alt: "A client relaxing in a robe in Zarrow's treatment room, with soft light and warm teal cabinetry.",
  },
  facial: {
    src: "/images/service-facial-care.jpg",
    alt: "A facial treatment in progress at Zarrow Medical Aesthetics.",
  },
  contouring: {
    src: "/images/service-body-contouring.jpg",
    alt: "A Zarrow therapist talking a client through a body contouring plan on a tablet.",
  },
  ivWellness: {
    src: "/images/service-iv-wellness.jpg",
    alt: "The IV wellness lounge at Zarrow, set up for a vitamin drip.",
  },
} satisfies Record<string, Img>;

/** Supporting editorial imagery. */
export const IMAGES = {
  facialMask: {
    src: u("photo-1570172619644-dfd03ed5d881"),
    alt: "A client receiving a facial mask treatment.",
    author: "Rosa Rafael",
    link: "https://unsplash.com/photos/Pe9IXUuC6QU",
  },
  facialCloseUp: {
    src: u("photo-1552693673-1bf958298935"),
    alt: "Close-up of a facial skincare treatment being applied.",
    author: "Karelys Ruiz",
    link: "https://unsplash.com/photos/PqyzuzFiQfY",
  },
  faceCream: {
    src: u("photo-1616394584738-fc6e612e71b9"),
    alt: "A client resting with a treatment mask applied to the face.",
    author: "Engin Akyurt",
    link: "https://unsplash.com/photos/g-m8EDc4X6Q",
  },
  massage: {
    src: u("photo-1519824145371-296894a0daa9"),
    alt: "A therapist performing a back massage.",
    author: "Toa Heftiba",
    link: "https://unsplash.com/photos/hBLf2nvp-Yc",
  },
  spaStill: {
    src: u("photo-1600334089648-b0d9d3028eb2"),
    alt: "A calm treatment-room still life with folded towels and a candle.",
    author: "Engin Akyurt",
    link: "https://unsplash.com/photos/ZbzYDboN7fg",
  },
  towelsAndOil: {
    src: u("photo-1540555700478-4be289fbecef"),
    alt: "A treatment oil bottle beside folded towels and fresh flowers.",
    author: "Camille Brodard",
    link: "https://unsplash.com/photos/VxAwTeiqDao",
  },
  amberBottle: {
    src: u("photo-1515377905703-c4788e51af15"),
    alt: "A hand holding an amber glass serum bottle.",
    author: "Christin Hume",
    link: "https://unsplash.com/photos/0MoF-Fe0w0A",
  },
  serumBottle: {
    src: u("photo-1620916297397-a4a5402a3c6c"),
    alt: "A dark glass skincare bottle held against a soft background.",
    author: "Mathilde Langevin",
    link: "https://unsplash.com/photos/FDRaYqiTY1k",
  },
  dropperRobe: {
    src: u("photo-1679046949300-f1fbcfc76e50"),
    alt: "A client in a robe holding a skincare dropper.",
    author: "Karolina Grabowska",
    link: "https://unsplash.com/photos/Vc5Xkz_acAU",
  },
  lotionFace: {
    src: u("photo-1716629668013-28a2c26358c6"),
    alt: "A client applying treatment lotion to the face.",
    author: "Roberta Sant'Anna",
    link: "https://unsplash.com/photos/tCh53XkjDr8",
  },
  serumFlatlay: {
    src: u("photo-1674739375749-7efe56fc8bbb"),
    alt: "A hand holding a small bottle of treatment serum.",
    author: "Virginia Marinova",
    link: "https://unsplash.com/photos/OeU6dAE5Y4E",
  },
  ointmentPlant: {
    src: u("photo-1643379850623-7eb6442cd262"),
    alt: "A hand holding a skincare bottle next to a green plant.",
    author: "Cherrydeck",
    link: "https://unsplash.com/photos/Q0uwqgLzgMw",
  },
} satisfies Record<string, Img>;

/** The gallery grid. Brand photography first, supporting imagery after. */
export const GALLERY: Img[] = [
  BRAND.facial,
  IMAGES.facialMask,
  IMAGES.spaStill,
  BRAND.ivWellness,
  IMAGES.massage,
  IMAGES.amberBottle,
  BRAND.contouring,
  IMAGES.facialCloseUp,
  IMAGES.towelsAndOil,
  BRAND.hero,
  IMAGES.dropperRobe,
  IMAGES.serumBottle,
  IMAGES.faceCream,
  IMAGES.lotionFace,
  IMAGES.serumFlatlay,
  IMAGES.ointmentPlant,
];
