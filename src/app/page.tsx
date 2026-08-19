import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  MapPin,
  Phone,
  Sparkles,
  Syringe,
  Target,
  Waves,
  Zap,
} from "lucide-react";
import { BRAND, IMAGES } from "@/lib/images";
import { CATEGORIES, byCategory, fromPrice, lowestPrice } from "@/lib/treatments";
import { BRANCHES, SITE } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Ornament } from "@/components/Ornament";
import { Parallax } from "@/components/Parallax";
import { RevealImage } from "@/components/RevealImage";

/**
 * The homepage is deliberately image-led: photography carries the story and
 * the copy stays to a line or two per band. Category detail and the full
 * price list live on /treatments, so nothing here needs a paragraph.
 */

const CATEGORY_ICONS = {
  facials: Sparkles,
  "advanced-skin": Syringe,
  "iv-drips": Droplets,
  body: Target,
  massage: Waves,
  "waxing-laser": Zap,
} as const;

/** One photograph per category for the grid. */
const CATEGORY_IMAGES = {
  facials: BRAND.facial,
  "advanced-skin": IMAGES.facialCloseUp,
  "iv-drips": BRAND.ivWellness,
  body: BRAND.contouring,
  massage: IMAGES.massage,
  "waxing-laser": IMAGES.browTreatment,
} as const;

const MOSAIC = [
  IMAGES.reception,
  IMAGES.candles,
  IMAGES.towels,
  IMAGES.eucalyptus,
  IMAGES.hotStones,
  IMAGES.skincareTray,
  IMAGES.whiteFlowers,
  IMAGES.lounge,
];

const MARKS = [
  { icon: Sparkles, label: "Consultation led" },
  { icon: Droplets, label: "Eight IV drips" },
  { icon: MapPin, label: "Two studios" },
  { icon: Waves, label: "Nine massages" },
];

export default function HomePage() {
  const tickerItems = CATEGORIES.flatMap((c) =>
    byCategory(c.id)
      .slice(0, 4)
      .map((t) => t.name)
  );

  // A short price snapshot — the full menu lives on /treatments.
  const snapshot = [
    ...byCategory("facials").slice(0, 3),
    ...byCategory("iv-drips").slice(0, 3),
    ...byCategory("massage").slice(0, 2),
    ...byCategory("waxing-laser").slice(0, 2),
  ];

  return (
    <>
      {/*
        ============ HERO — small screens ============
        A dedicated 4:5 crop at exactly 4:5, so nothing is cropped twice, and
        no overlay at all: the copy sits on cream beneath the photograph.
      */}
      <section className="bg-cream pt-[68px] sm:hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={BRAND.heroMobile.src}
            alt={BRAND.heroMobile.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="container-x pb-14 pt-9 text-center">
          <p className="eyebrow eyebrow-quiet animate-fade-up">Harare · Kwekwe</p>
          <h1
            className="animate-fade-up mt-5 font-display text-[2.5rem] leading-[1.08] text-brown-800 text-balance"
            style={{ animationDelay: "80ms" }}
          >
            Refined aesthetic care.
          </h1>
          <div
            className="animate-fade-up mt-8 flex flex-col gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <Link href="/booking" className="btn btn-gold w-full">
              Book a consultation
            </Link>
            <Link href="/treatments" className="btn btn-outline w-full">
              View treatments
            </Link>
          </div>
        </div>
      </section>

      {/*
        ============ HERO — sm and up ============
        The full frame, true to colour. A neutral bottom scrim only.
      */}
      <section className="relative hidden min-h-[100svh] items-end overflow-hidden sm:flex">
        <div className="absolute inset-0">
          <Image
            src={BRAND.hero.src}
            alt={BRAND.hero.alt}
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover object-[62%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-transparent" />
        </div>

        <div className="container-x relative z-10 pb-24 pt-36">
          <Reveal>
            <p className="eyebrow text-gold-300">Harare · Kwekwe</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-[3.4rem] leading-[1.04] text-cream text-balance lg:text-7xl [text-shadow:0_2px_24px_rgba(0,0,0,0.3)]">
              Refined aesthetic care,
              <br />
              tailored to you.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/booking" className="btn btn-gold">
                Book a consultation
              </Link>
              <Link href="/treatments" className="btn btn-ghost-light">
                View treatments
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <section className="overflow-hidden border-y border-gold-500/15 bg-sand py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((name, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-[0.7rem] uppercase tracking-[0.3em] text-brown-700/70"
            >
              {name}
              <span className="h-1 w-1 rounded-full bg-gold-500" />
            </span>
          ))}
        </div>
      </section>

      {/* ============ INTRO — one line, nothing more ============ */}
      <section className="bg-noise bg-cream">
        <div className="container-x py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow eyebrow-quiet">Welcome to Zarrow</p>
          </Reveal>
          <Reveal delay={0.05}>
            <Ornament className="mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="measure mt-8 font-display text-[2.1rem] leading-[1.2] text-balance sm:text-[2.7rem] lg:text-[3.2rem]">
              Skin, body and wellness — done slowly, and done properly.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="measure mt-6 text-[1.05rem] leading-relaxed text-stone">
              Every visit begins with a consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ TREATMENTS — image-led, six cards ============ */}
      <section className="bg-ivory">
        <div className="container-x py-24 md:py-32">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow eyebrow-quiet">The menu</p>
            </Reveal>
            <Reveal delay={0.05}>
              <Ornament className="mt-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-[2.1rem] sm:text-[2.7rem] lg:text-[3.1rem]">
                Six ways we care for you
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const Icon = CATEGORY_ICONS[c.id];
              const img = CATEGORY_IMAGES[c.id];
              const from = fromPrice(c.id);
              return (
                <StaggerItem key={c.id}>
                  <Link
                    href={`/treatments#${c.id}`}
                    className="group hover-lift card-surface block overflow-hidden rounded-[var(--radius-xl2)]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />

                      <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/45 bg-ink/25 text-gold-200 backdrop-blur-sm">
                        <Icon size={19} strokeWidth={1.4} />
                      </span>

                      <div className="absolute inset-x-5 bottom-5">
                        <h3 className="font-display text-[1.45rem] leading-tight text-cream">
                          {c.shortName}
                        </h3>
                        {from !== null ? (
                          <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-gold-200">
                            From {SITE.currency}
                            {from}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-14 text-center">
              <Link href="/treatments" className="btn btn-outline">
                Full menu &amp; prices <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ THE RITUAL — parallax luxe band ============ */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <Parallax className="absolute inset-0" distance={80}>
          <Image
            src={IMAGES.steamRoom.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90" />

        <div className="container-x relative py-28 text-center md:py-36">
          <Reveal>
            <Ornament light />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure mt-9 font-display text-[1.75rem] leading-[1.4] text-cream text-balance sm:text-[2.2rem]">
              Unhurried rooms. Considered hands.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Link href="/booking" className="btn btn-gold">
                Book a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ICON STRIP — four marks, no paragraphs ============ */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <Stagger className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {MARKS.map((item) => (
              <StaggerItem key={item.label} className="text-center">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/35 text-gold-600">
                  <item.icon size={24} strokeWidth={1.3} />
                </span>
                <p className="mt-5 text-[0.72rem] uppercase tracking-[0.24em] text-brown-800">
                  {item.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ MOSAIC — pictures only ============ */}
      <section className="bg-cream">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4">
          {MOSAIC.map((img, i) => (
            <RevealImage
              key={i}
              delay={(i % 4) * 0.06}
              className="group relative aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
            </RevealImage>
          ))}
        </div>
        <div className="container-x py-12 text-center">
          <Link href="/gallery" className="btn btn-outline">
            Open the gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ============ PRICE SNAPSHOT — numbers, not prose ============ */}
      <section className="bg-ivory">
        <div className="container-x py-24 md:py-32">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow eyebrow-quiet">A few favourites</p>
            </Reveal>
            <Reveal delay={0.05}>
              <Ornament className="mt-6" />
            </Reveal>
          </div>

          <Stagger className="mx-auto mt-14 grid max-w-4xl gap-x-14 gap-y-1 sm:grid-cols-2">
            {snapshot.map((t) => (
              <StaggerItem key={t.slug}>
                <div className="flex items-baseline gap-3 border-b border-gold-500/15 py-4">
                  <span className="text-[0.95rem] text-charcoal">{t.name}</span>
                  <span className="h-px flex-1 bg-gold-500/20" />
                  <span className="font-display text-[1.15rem] text-brown-700">
                    {t.price === null ? "POA" : `${SITE.currency}${t.price}`}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-mist">
              From {SITE.currency}
              {lowestPrice}. Prices confirmed at consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ LOCATIONS — address and number, nothing else ============ */}
      <section className="bg-cream">
        <div className="container-x py-24 md:py-32">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow eyebrow-quiet">Find us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <Ornament className="mt-6" />
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
            {BRANCHES.map((b, i) => {
              const img = i === 0 ? IMAGES.warmRoom : IMAGES.cabinet;
              return (
                <StaggerItem key={b.slug}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover-lift card-surface block overflow-hidden rounded-[var(--radius-xl2)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                      <h3 className="absolute bottom-5 left-6 font-display text-2xl text-cream">
                        {b.city}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="flex items-start gap-2.5 text-sm leading-relaxed text-stone">
                        <MapPin
                          size={16}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-gold-500"
                        />
                        <span>
                          {b.line1}
                          <br />
                          {b.line2}
                        </span>
                      </p>
                      <p className="mt-3 flex items-center gap-2.5 text-sm text-stone">
                        <Phone
                          size={16}
                          strokeWidth={1.5}
                          className="shrink-0 text-gold-500"
                        />
                        {b.phone}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="relative isolate overflow-hidden bg-brown-800 text-cream">
        <Parallax className="absolute inset-0" distance={60}>
          <Image
            src={IMAGES.eucalyptus.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.14]"
          />
        </Parallax>

        <div className="container-x relative py-24 text-center md:py-28">
          <Reveal>
            <Ornament light />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[2rem] text-cream text-balance sm:text-[2.6rem]">
              Come and see us.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/booking" className="btn btn-gold">
                Book now
              </Link>
              <a href={`tel:${SITE.phoneHref}`} className="btn btn-outline-gold">
                {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
