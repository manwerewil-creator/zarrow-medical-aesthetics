// ============================================================
// Single source of truth for Zarrow's business details.
// Edit these values once and they update across the whole site
// (navbar, footer, metadata, contact page, booking confirmation).
//
// Every value below is transcribed from the supplied Zarrow
// resource pack (Zarrow_context.txt) and the brand's own price
// cards. Nothing here is invented — no ratings, no review counts,
// no opening hours that were not supplied.
//
// ⚠ BEFORE LAUNCH: confirm phone numbers, both branch addresses,
// opening times and the two social profile URLs directly with
// Zarrow. The supplied artwork carried more than one number.
// ============================================================

export const SITE = {
  name: "Zarrow Medical Aesthetics",
  shortName: "Zarrow",
  altName: "Zarrow Aesthetics & IV Bar",
  tagline: "Refined aesthetic care, tailored to you.",
  description:
    "Zarrow Medical Aesthetics is a Harare aesthetics, wellness and beauty studio offering consultation-led facials, IV wellness drips, body contouring, massage therapy, waxing and laser care in a calm, professional setting.",

  email: "zarrowaestheticsvbar@gmail.com",

  // Primary booking line, shown across the site.
  phone: "+263 78 129 4032",
  phoneHref: "+263781294032",
  whatsapp: "263781294032",

  // Second number shown in the supplied artwork.
  phoneAlt: "+263 77 616 9869",
  phoneAltHref: "+263776169869",

  currency: "US$",

  // Used for canonical URLs / metadata. Update to the live domain.
  url: "https://zarrow-medical-aesthetics.vercel.app",

  social: {
    instagram: "https://www.instagram.com/zarrow_aesthetics/",
    instagramLabel: "Zarrow_aesthetics and IV Bar",
    facebook: "https://www.facebook.com/ZarrowAesthetics",
    facebookLabel: "Zarrow Aesthetics",
  },
} as const;

export type Branch = {
  slug: string;
  name: string;
  city: string;
  line1: string;
  line2: string;
  phone: string;
  phoneHref: string;
  isPrimary: boolean;
  mapQuery: string;
};

export const BRANCHES: Branch[] = [
  {
    slug: "harare",
    name: "Greendale Studio",
    city: "Harare",
    line1: "11 Shiri Close, Rhodesville Drive",
    line2: "Greendale, Harare, Zimbabwe",
    phone: SITE.phone,
    phoneHref: SITE.phoneHref,
    isPrimary: true,
    mapQuery: "11 Shiri Close, Rhodesville Drive, Greendale, Harare, Zimbabwe",
  },
  {
    slug: "kwekwe",
    name: "Newtown Studio",
    city: "Kwekwe",
    line1: "6 Central Street, Newtown",
    line2: "Kwekwe, Zimbabwe",
    phone: SITE.phoneAlt,
    phoneHref: SITE.phoneAltHref,
    isPrimary: false,
    mapQuery: "6 Central Street, Newtown, Kwekwe, Zimbabwe",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Standing compliance line. Treatments at Zarrow are consultation-led;
// this sentence appears wherever prices or clinical services are shown.
export const CONSULT_NOTE =
  "Every treatment begins with a consultation so your plan, suitability and aftercare can be confirmed. Prices are a guide and may change following assessment.";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
