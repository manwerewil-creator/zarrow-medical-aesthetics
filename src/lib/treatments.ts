// ============================================================
// The Zarrow treatment menu.
//
// Every name and price below is transcribed verbatim from the
// supplied Zarrow price cards (see Zarrow_context.txt). Nothing
// is invented: where a card gave no duration, no duration is
// shown; where a card said "on consultation", price is null.
//
// ⚠ BEFORE LAUNCH: confirm current pricing, currency, eligibility,
// treatment scope and any consultation fee with Zarrow.
// ============================================================

import { BRAND, IMAGES, type Img } from "@/lib/images";

export type CategoryId =
  | "facials"
  | "advanced-skin"
  | "iv-drips"
  | "body"
  | "massage"
  | "waxing-laser";

export type Treatment = {
  slug: string;
  name: string;
  category: CategoryId;
  /** US dollars. `null` means the price is confirmed at consultation. */
  price: number | null;
  /** Qualifier shown next to the price, e.g. "and above". */
  priceNote?: string;
  /** Price shown struck through, where the card advertised a reduction. */
  wasPrice?: number;
  short: string;
};

export type Category = {
  id: CategoryId;
  name: string;
  /** Short label used in menus and chips. */
  shortName: string;
  blurb: string;
  detail: string;
  image: Img;
  /** Points worth knowing before booking. */
  notes: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "facials",
    name: "Facials & Skin Health",
    shortName: "Facials",
    blurb:
      "Cleansing, hydrating and signature facials for everyday skin health.",
    detail:
      "Our facial menu runs from a straightforward deep cleanse through to the Zarrow signature facial. Each one starts with a look at your skin so the products, actives and pressure suit you on the day rather than following a fixed script.",
    image: BRAND.facial,
    notes: [
      "Come with clean skin where possible — we will remove make-up if not.",
      "Tell your therapist about any actives, retinoids or recent treatments.",
    ],
  },
  {
    id: "advanced-skin",
    name: "Advanced Skin & Facial Enhancement",
    shortName: "Advanced skin",
    blurb:
      "Mesotherapy, peels, PRP, microneedling and consultation-led enhancement.",
    detail:
      "Advanced treatments are assessed before they are booked. Suitability, expected experience, downtime, contraindications and aftercare are discussed at consultation, and a plan is only agreed once you have all of it in writing.",
    image: IMAGES.facialCloseUp,
    notes: [
      "All advanced and injectable treatments are consultation-led.",
      "Outcomes vary between individuals — no result is guaranteed.",
    ],
  },
  {
    id: "iv-drips",
    name: "IV Wellness Bar",
    shortName: "IV drips",
    blurb:
      "Vitamin and wellness infusions delivered in a calm, unhurried lounge.",
    detail:
      "The IV bar is where Zarrow began. Drips are administered in a quiet lounge setting and are always preceded by a health screening — an infusion is only given once suitability has been confirmed.",
    image: BRAND.ivWellness,
    notes: [
      "A health screening is required before any infusion.",
      "Allow time to sit comfortably — infusions are not rushed.",
    ],
  },
  {
    id: "body",
    name: "Body Contouring & Targeted Care",
    shortName: "Body",
    blurb:
      "Area-targeted contouring for the jawline, tummy, back and love handles.",
    detail:
      "A focused body contouring service for selected areas including the jawline, chin, bra fat, back fat, tummy fat and love handles. A consultation confirms treatment suitability, the expected experience and the recommended plan.",
    image: BRAND.contouring,
    notes: [
      "Target areas: jawline, chin, bra fat, back fat, tummy fat, love handles.",
      "Suitability and plan are confirmed at consultation.",
    ],
  },
  {
    id: "massage",
    name: "Massage & Lymphatic Drainage",
    shortName: "Massage",
    blurb:
      "Swedish, deep tissue, hot stone, pre-natal, sports and drainage work.",
    detail:
      "A full massage menu, from a gentle Swedish or pre-natal session to deep tissue, wood therapy and manual lymphatic drainage. Pressure is set with you at the start and adjusted at any point.",
    image: IMAGES.massage,
    notes: [
      "Let us know about pregnancy, injuries or recent surgery when booking.",
      "Pressure is yours to set — say the word and we adjust.",
    ],
  },
  {
    id: "waxing-laser",
    name: "Waxing & Laser Hair Removal",
    shortName: "Waxing & laser",
    blurb: "Precise waxing across face and body, plus laser hair removal.",
    detail:
      "Careful, quick and private. Waxing covers brows and chin through to full Hollywood, and laser hair removal is available as a course following a patch test and skin assessment.",
    image: IMAGES.towelsAndOil,
    notes: [
      "Laser hair removal requires a patch test and skin assessment first.",
      "Leave hair growth of roughly two weeks before a wax where possible.",
    ],
  },
];

export const TREATMENTS: Treatment[] = [
  // ---------- Facial services ----------
  {
    slug: "classic-facial",
    name: "Classic Facial",
    category: "facials",
    price: 30,
    short: "A clean, calm reset — cleanse, exfoliate, extract, mask, moisturise.",
  },
  {
    slug: "deep-cleanse-facial",
    name: "Deep Cleanse Facial",
    category: "facials",
    price: 35,
    short: "A thorough decongesting facial for skin that feels heavy or blocked.",
  },
  {
    slug: "hydra-jelly-mask-facial",
    name: "Hydra Jelly Mask Facial",
    category: "facials",
    price: 40,
    short: "A cooling jelly mask treatment that leaves skin plump and settled.",
  },
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "facials",
    price: 50,
    short: "Deep cleansing and hydration in one, for a fresh, even finish.",
  },
  {
    slug: "signature-facial",
    name: "Signature Facial",
    category: "facials",
    price: 50,
    short: "The Zarrow facial — built around your skin on the day.",
  },

  // ---------- Advanced skin & enhancement ----------
  {
    slug: "chemical-peel",
    name: "Chemical Peel",
    category: "advanced-skin",
    price: 80,
    priceNote: "and above",
    short: "A resurfacing peel selected to match your skin and tolerance.",
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    category: "advanced-skin",
    price: 80,
    short: "Collagen induction therapy for texture, scarring and tone.",
  },
  {
    slug: "fractional-mesotherapy",
    name: "Fractional Mesotherapy",
    category: "advanced-skin",
    price: 120,
    short: "Targeted delivery of actives into the skin for tone and texture.",
  },
  {
    slug: "prp-facial",
    name: "PRP Facial",
    category: "advanced-skin",
    price: 140,
    short: "Platelet-rich plasma treatment, prepared from your own sample.",
  },
  {
    slug: "wrinkle-relaxers",
    name: "Wrinkle Relaxers",
    category: "advanced-skin",
    price: 180,
    short: "Consultation-led relaxing treatment for expression lines.",
  },
  {
    slug: "luscious-lips",
    name: "Luscious Lips by Zarrow",
    category: "advanced-skin",
    price: 80,
    short: "Zarrow's lip treatment, planned with you at consultation.",
  },
  {
    slug: "facial-harmonization",
    name: "Facial Harmonization",
    category: "advanced-skin",
    price: 400,
    priceNote: "and above",
    short: "A full-face plan assessed and agreed before anything is booked.",
  },
  {
    slug: "botox",
    name: "Botox",
    category: "advanced-skin",
    price: null,
    priceNote: "on consultation",
    short: "Assessed individually; price confirmed at consultation.",
  },
  {
    slug: "stretch-mark-treatment",
    name: "Stretch Mark Removal Treatment",
    category: "advanced-skin",
    price: 50,
    short: "A course-based treatment for the appearance of stretch marks.",
  },

  // ---------- IV drips ----------
  {
    slug: "weight-loss-drip",
    name: "Weight Loss Drip",
    category: "iv-drips",
    price: 80,
    short: "A supporting infusion used alongside a wider plan.",
  },
  {
    slug: "sports-iv",
    name: "Sports IV",
    category: "iv-drips",
    price: 80,
    short: "Formulated around training load and recovery.",
  },
  {
    slug: "jetfuel-drip",
    name: "Jetfuel Drip",
    category: "iv-drips",
    price: 100,
    short: "For the flat days — an energy-focused vitamin infusion.",
  },
  {
    slug: "glow-drip",
    name: "Glow Drip",
    category: "iv-drips",
    price: 100,
    short: "A skin-focused infusion, popular before an occasion.",
  },
  {
    slug: "myers-cocktail",
    name: "Myers Cocktail",
    category: "iv-drips",
    price: 130,
    short: "The classic vitamin and mineral blend.",
  },
  {
    slug: "triple-lightening-drip",
    name: "Triple Lightening Drip",
    category: "iv-drips",
    price: 150,
    short: "A consultation-led brightening infusion course.",
  },
  {
    slug: "supreme-glutathione",
    name: "Supreme Glutathione",
    category: "iv-drips",
    price: 170,
    short: "A high-dose glutathione infusion.",
  },
  {
    slug: "skin-boost-drip",
    name: "Skin Boost Drip",
    category: "iv-drips",
    price: 180,
    short: "Zarrow's most complete skin-focused infusion.",
  },

  // ---------- Body ----------
  {
    slug: "area-targeted-weight-loss",
    name: "Area-Targeted Weight Loss",
    category: "body",
    price: 75,
    wasPrice: 150,
    priceNote: "promotional",
    short:
      "Focused contouring for the jawline, chin, bra fat, back fat, tummy and love handles.",
  },
  {
    slug: "kabelline-slimming-injection",
    name: "Kabelline Slimming Injection",
    category: "body",
    price: 130,
    short: "A consultation-led injectable contouring treatment.",
  },

  // ---------- Massage ----------
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "massage",
    price: 40,
    short: "Flowing, moderate-pressure massage to unwind the whole body.",
  },
  {
    slug: "jet-lag-recovery-massage",
    name: "Jet Lag Recovery Massage",
    category: "massage",
    price: 40,
    short: "Circulation-focused work for bodies that have been sitting still.",
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "massage",
    price: 45,
    short: "Slower, firmer work through the layers that hold tension.",
  },
  {
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    category: "massage",
    price: 45,
    short: "Warmed stones to open tight muscle before the hands do the work.",
  },
  {
    slug: "sports-massage",
    name: "Sport Massage",
    category: "massage",
    price: 45,
    short: "Targeted work around training, load and recovery.",
  },
  {
    slug: "wood-therapy-massage",
    name: "Wood Therapy Massage",
    category: "massage",
    price: 45,
    short: "Contour-focused massage using shaped wooden tools.",
  },
  {
    slug: "lymphatic-drainage",
    name: "Lymphatic Drainage",
    category: "massage",
    price: 45,
    short: "Light, rhythmic drainage work — often booked after contouring.",
  },
  {
    slug: "prenatal-massage",
    name: "Pre-Natal Massage",
    category: "massage",
    price: 50,
    short: "Side-lying, fully supported massage for the second trimester on.",
  },
  {
    slug: "aromatherapy-massage",
    name: "Aroma Therapy Massage",
    category: "massage",
    price: 50,
    short: "Blended oils chosen with you, worked in slowly.",
  },

  // ---------- Waxing & laser ----------
  {
    slug: "brow-wax",
    name: "Brow Wax",
    category: "waxing-laser",
    price: 10,
    short: "Shaped to your face, not to a template.",
  },
  {
    slug: "underarm-wax",
    name: "Underarm Wax",
    category: "waxing-laser",
    price: 15,
    short: "Quick, careful and private.",
  },
  {
    slug: "chin-wax",
    name: "Chin Wax",
    category: "waxing-laser",
    price: 15,
    short: "Precise facial waxing for the chin.",
  },
  {
    slug: "half-legs-wax",
    name: "Half Legs Wax",
    category: "waxing-laser",
    price: 15,
    short: "Knee down, smoothed.",
  },
  {
    slug: "half-hand-wax",
    name: "Half Hand Wax",
    category: "waxing-laser",
    price: 15,
    short: "Forearm waxing.",
  },
  {
    slug: "bikini-wax",
    name: "Bikini Wax",
    category: "waxing-laser",
    price: 20,
    short: "A tidy bikini line.",
  },
  {
    slug: "full-hands-wax",
    name: "Full Hands Wax",
    category: "waxing-laser",
    price: 20,
    short: "Full arm waxing.",
  },
  {
    slug: "full-legs-wax",
    name: "Full Legs Wax",
    category: "waxing-laser",
    price: 25,
    short: "Ankle to thigh.",
  },
  {
    slug: "brazilian-wax",
    name: "Brazilian Wax",
    category: "waxing-laser",
    price: 30,
    short: "Discreet, well-practised and quick.",
  },
  {
    slug: "full-hollywood-wax",
    name: "Full Hollywood Wax",
    category: "waxing-laser",
    price: 40,
    short: "Everything, smoothly.",
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "waxing-laser",
    price: 35,
    short: "Booked as a course after a patch test and skin assessment.",
  },
];

/** The three pillars given their own brand photography on the homepage. */
export const PILLARS: CategoryId[] = ["facials", "iv-drips", "body"];

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getTreatment(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function byCategory(id: CategoryId): Treatment[] {
  return TREATMENTS.filter((t) => t.category === id);
}

/** Lowest published price in a category, for "from US$x" labels. */
export function fromPrice(id: CategoryId): number | null {
  const prices = byCategory(id)
    .map((t) => t.price)
    .filter((p): p is number => typeof p === "number");
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(t: Pick<Treatment, "price" | "priceNote">): string {
  if (t.price === null) return "On consultation";
  const suffix =
    t.priceNote && t.priceNote !== "promotional" ? ` ${t.priceNote}` : "";
  return `US$${t.price}${suffix}`;
}

/** Cheapest published treatment across the whole menu. */
export const lowestPrice = Math.min(
  ...TREATMENTS.map((t) => t.price).filter(
    (p): p is number => typeof p === "number"
  )
);
