// ============================================================
// Imagery.
//
// BRAND images live in /public/images and come from the supplied Zarrow
// resource pack — these carry the site's identity.
//
// SUPPORTING images are curated from the Unsplash API, chosen for a warm
// ivory / champagne / soft-teal register so they sit beside the brand
// photography rather than fighting it. Every entry carries its photographer
// and photo link for the <Credit/> chip.
//
// Replace the supporting set with Zarrow's own clinic photography when it
// exists; keep the { src, alt, author, link } shape.
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
 * `heroMobile` is a purpose-cut 4:5 crop so phones get a composition made for
 * them rather than a banner cropped down to a sliver.
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

export const IMAGES = {
  // ---------- Rooms & atmosphere ----------
  reception: {
    src: u("photo-1741316039916-b09da8daa02c"),
    alt: "A calm, modern spa reception desk.",
    author: "Meg von Haartman",
    link: "https://unsplash.com/photos/DbOMZfXT6kw",
  },
  lounge: {
    src: u("photo-1693578538512-fc66f318c833"),
    alt: "Two soft armchairs side by side in a quiet treatment lounge.",
    author: "Sherzod Gulomov",
    link: "https://unsplash.com/photos/npE_I2GzpHY",
  },
  warmRoom: {
    src: u("photo-1754373384077-159ba0c452b9"),
    alt: "A warm, softly lit room with a low chair and fresh flowers.",
    author: "Jason Leung",
    link: "https://unsplash.com/photos/eR55pFaUTBY",
  },
  steamRoom: {
    src: u("photo-1761470575018-135c213340eb"),
    alt: "A modern steam room lit by a single candle.",
    author: "Dominik Neuner",
    link: "https://unsplash.com/photos/9qYFu1NzpS8",
  },
  cabinet: {
    src: u("photo-1606194017837-97658d442c49"),
    alt: "A wooden cabinet with a green potted plant in a quiet interior.",
    author: "Jacky Watt",
    link: "https://unsplash.com/photos/JStczHcQrYo",
  },

  // ---------- Treatments ----------
  consultation: {
    src: u("photo-1785861001619-b263ebd4e615"),
    alt: "A practitioner talking a seated client through a treatment plan.",
    author: "Sum Sum",
    link: "https://unsplash.com/photos/xREEa0dZmLY",
  },
  browTreatment: {
    src: u("photo-1785860945533-918a531bcdeb"),
    alt: "A technician shaping a client's brows.",
    author: "Sum Sum",
    link: "https://unsplash.com/photos/x0r5YvOJFCg",
  },
  hotStones: {
    src: u("photo-1600334129128-685c5582fd35"),
    alt: "A hot stone massage laid out with white flowers alongside.",
    author: "Engin Akyurt",
    link: "https://unsplash.com/photos/SMwCQZWayj0",
  },
  handMassage: {
    src: u("photo-1611073615830-9f76902c10fe"),
    alt: "A hand massage on a soft brown towel.",
    author: "THLT LCX",
    link: "https://unsplash.com/photos/ubeslMfS1lk",
  },
  sauna: {
    src: u("photo-1759214630580-7b2e97e2c29b"),
    alt: "A client wrapped in warm towels after treatment.",
    author: "Wco Global",
    link: "https://unsplash.com/photos/SlpmIhUd860",
  },

  // ---------- Still life & texture ----------
  candles: {
    src: u("photo-1623808427896-c682eef40c3d"),
    alt: "White pillar candles on a soft floral textile.",
    author: "Kier in Sight Archives",
    link: "https://unsplash.com/photos/nRwXsB8nvq0",
  },
  candlesTable: {
    src: u("photo-1737064700128-c0769e13e211"),
    alt: "A pair of lit candles on a pale table.",
    author: "Maria Kovalets",
    link: "https://unsplash.com/photos/OGiLrFM4x_M",
  },
  towels: {
    src: u("photo-1684248655527-46bee8e79029"),
    alt: "A neat stack of fresh white towels.",
    author: "Engin Akyurt",
    link: "https://unsplash.com/photos/mgvb4Pga_nM",
  },
  linen: {
    src: u("photo-1684248850355-19f3efb72f1f"),
    alt: "Soft white linen in close detail.",
    author: "Engin Akyurt",
    link: "https://unsplash.com/photos/zTm7eGTpCig",
  },
  eucalyptus: {
    src: u("photo-1763154045793-4be5374b3e70"),
    alt: "Eucalyptus branches laid on a textured white surface.",
    author: "Heather Newsom",
    link: "https://unsplash.com/photos/Qs5vZ2I_Nak",
  },
  eucalyptusSprig: {
    src: u("photo-1786081676718-586b275c1f57"),
    alt: "A sprig of eucalyptus against a soft background.",
    author: "Pascal Debrunner",
    link: "https://unsplash.com/photos/-KYfVX_t_FM",
  },
  whiteFlowers: {
    src: u("photo-1646925910554-8ae45b5c7c2d"),
    alt: "A vase of white flowers on a pale table.",
    author: "Annie Spratt",
    link: "https://unsplash.com/photos/S88xTqSojic",
  },
  blossom: {
    src: u("photo-1592765213254-f101ad9b8f76"),
    alt: "White blossom in soft focus.",
    author: "Camille Brodard",
    link: "https://unsplash.com/photos/vc1fE6QrYlE",
  },
  plasterWall: {
    src: u("photo-1636477889313-a8f8e5f0779a"),
    alt: "A beige plaster wall with a soft, tactile finish.",
    author: "Gabriella Clare Marino",
    link: "https://unsplash.com/photos/j7RRuzOynUU",
  },
  beigeTexture: {
    src: u("photo-1538645731800-4640c639bba7"),
    alt: "A warm beige textured surface.",
    author: "Stepan Sargsyan",
    link: "https://unsplash.com/photos/hxk3iYQyjG0",
  },
  skincareShelf: {
    src: u("photo-1718490953028-021d352b14fd"),
    alt: "A considered row of skincare bottles.",
    author: "Ela De Pure",
    link: "https://unsplash.com/photos/BKlMCsx6Lmc",
  },
  skincareTray: {
    src: u("photo-1739980104488-408eff709fff"),
    alt: "A tray of skincare bottles beside a vase of flowers.",
    author: "Aleksandrs Karevs",
    link: "https://unsplash.com/photos/cTmJbqysgV8",
  },
  lotionPlant: {
    src: u("photo-1631729371254-42c2892f0e6e"),
    alt: "Three treatment bottles beside a potted plant.",
    author: "Taylor Beach",
    link: "https://unsplash.com/photos/kwu9Ny5dKOE",
  },

  // ---------- Established keys, repointed ----------
  // These names are referenced across the pages and category data; the
  // photographs behind them were upgraded to the curated set above.
  massage: {
    src: u("photo-1519824145371-296894a0daa9"),
    alt: "A therapist working through a back massage.",
    author: "Toa Heftiba",
    link: "https://unsplash.com/photos/hBLf2nvp-Yc",
  },
  facialCloseUp: {
    src: u("photo-1761819922656-d1b77eef49c0"),
    alt: "An advanced facial treatment being carried out with care.",
    author: "Corinne Sawers",
    link: "https://unsplash.com/photos/SH4pZQtTdOs",
  },
  faceCream: {
    src: u("photo-1778740328240-02f75398d9a7"),
    alt: "A client checking her skin in the mirror after a mask treatment.",
    author: "Margo Evardson",
    link: "https://unsplash.com/photos/mXqdq1rzzz0",
  },
  facialMask: {
    src: u("photo-1570172619644-dfd03ed5d881"),
    alt: "A client receiving a facial mask treatment.",
    author: "Rosa Rafael",
    link: "https://unsplash.com/photos/Pe9IXUuC6QU",
  },
  amberBottle: {
    src: u("photo-1739980104488-408eff709fff"),
    alt: "A tray of treatment bottles beside fresh flowers.",
    author: "Aleksandrs Karevs",
    link: "https://unsplash.com/photos/cTmJbqysgV8",
  },
  towelsAndOil: {
    src: u("photo-1785860945533-918a531bcdeb"),
    alt: "A technician shaping a client's brows.",
    author: "Sum Sum",
    link: "https://unsplash.com/photos/x0r5YvOJFCg",
  },
  spaStill: {
    src: u("photo-1600334089648-b0d9d3028eb2"),
    alt: "Smooth warm stones resting during a treatment.",
    author: "Engin Akyurt",
    link: "https://unsplash.com/photos/ZbzYDboN7fg",
  },
  serumFlatlay: {
    src: u("photo-1718490953028-021d352b14fd"),
    alt: "A considered row of skincare bottles.",
    author: "Ela De Pure",
    link: "https://unsplash.com/photos/BKlMCsx6Lmc",
  },
  serumBottle: {
    src: u("photo-1631729371254-42c2892f0e6e"),
    alt: "Treatment bottles beside a potted plant.",
    author: "Taylor Beach",
    link: "https://unsplash.com/photos/kwu9Ny5dKOE",
  },
  ointmentPlant: {
    src: u("photo-1763154045793-4be5374b3e70"),
    alt: "Eucalyptus branches laid on a textured white surface.",
    author: "Heather Newsom",
    link: "https://unsplash.com/photos/Qs5vZ2I_Nak",
  },
  lotionFace: {
    src: u("photo-1759214630580-7b2e97e2c29b"),
    alt: "A client wrapped in warm towels after treatment.",
    author: "Wco Global",
    link: "https://unsplash.com/photos/SlpmIhUd860",
  },
  dropperRobe: {
    src: u("photo-1646925910554-8ae45b5c7c2d"),
    alt: "A vase of white flowers on a pale table.",
    author: "Annie Spratt",
    link: "https://unsplash.com/photos/S88xTqSojic",
  },
} satisfies Record<string, Img>;

/** The gallery grid. Brand photography first, supporting imagery after. */
export const GALLERY: Img[] = [
  BRAND.facial,
  IMAGES.reception,
  IMAGES.candles,
  BRAND.ivWellness,
  IMAGES.massage,
  IMAGES.eucalyptus,
  BRAND.contouring,
  IMAGES.consultation,
  IMAGES.towels,
  BRAND.hero,
  IMAGES.hotStones,
  IMAGES.skincareTray,
  IMAGES.lounge,
  IMAGES.browTreatment,
  IMAGES.whiteFlowers,
  IMAGES.warmRoom,
  IMAGES.facialMask,
  IMAGES.linen,
  IMAGES.steamRoom,
  IMAGES.lotionPlant,
];
