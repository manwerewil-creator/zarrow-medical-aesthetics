import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Droplets,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { BRAND, IMAGES } from "@/lib/images";
import {
  CATEGORIES,
  byCategory,
  formatPrice,
  getCategory,
  lowestPrice,
} from "@/lib/treatments";
import { BRANCHES, SITE } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/Section";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Credit } from "@/components/Credit";

const HOW_IT_WORKS = [
  {
    icon: ClipboardCheck,
    title: "Consultation first",
    body: "We start by listening. Your skin, your history, your goals and anything that rules a treatment in or out — before a single product is opened.",
  },
  {
    icon: Target,
    title: "A plan that fits",
    body: "You leave with a plan you understand: what is recommended, what it costs, what to expect, and what happens afterwards.",
  },
  {
    icon: HeartHandshake,
    title: "Care that continues",
    body: "Aftercare, follow-up and honest advice on pacing. We would rather do less, well, than more, quickly.",
  },
];

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: "Consultation-led",
    body: "Advanced skin work, injectables, laser and IV infusions are only booked after assessment.",
  },
  {
    icon: Sparkles,
    title: "Two studios",
    body: "Greendale in Harare and Newtown in Kwekwe, both set up for treatment and quiet recovery.",
  },
  {
    icon: Droplets,
    title: "A full IV bar",
    body: "Eight wellness infusions, from the Myers cocktail to a complete skin boost, in an unhurried lounge.",
  },
];

export default function HomePage() {
  const facials = getCategory("facials")!;
  const iv = getCategory("iv-drips")!;
  const body = getCategory("body")!;
  const drips = byCategory("iv-drips");
  const contouring = byCategory("body")[0];

  const tickerItems = CATEGORIES.flatMap((c) =>
    byCategory(c.id)
      .slice(0, 4)
      .map((t) => t.name)
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={BRAND.hero.src}
            alt={BRAND.hero.alt}
            fill
            priority
            sizes="100vw"
            className="animate-kenburns object-cover object-[68%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/45 via-teal-900/25 to-teal-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/75 via-teal-900/35 to-transparent" />
        </div>

        <div className="container-x relative z-10 pb-20 pt-36 md:pb-28">
          <Reveal>
            <p className="eyebrow text-gold-300">
              Greendale, Harare · Newtown, Kwekwe
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-[3rem] leading-[1.02] text-cream text-balance sm:text-6xl lg:text-7xl">
              Refined aesthetic care,
              <br />
              tailored to you.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 text-pretty">
              Personalised facial, wellness, contouring and beauty treatments in
              a calm, professional setting. Every visit begins with a
              consultation, so your treatment is matched to your goals — and to
              what is right for you.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/booking" className="btn btn-gold text-base">
                Book a consultation
              </Link>
              <Link href="/treatments" className="btn btn-ghost-light text-base">
                Explore treatments <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-8 text-sm text-cream/70">
              Treatments from{" "}
              <span className="font-medium text-cream">US${lowestPrice}</span> ·
              IV wellness · Facials · Contouring · Massage · Laser
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <section className="overflow-hidden border-y border-teal-700/10 bg-ivory py-4">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex items-center">
              {tickerItems.map((name, i) => (
                <li
                  key={`${copy}-${i}`}
                  className="flex items-center whitespace-nowrap px-6 text-sm tracking-wide text-stone"
                >
                  {name}
                  <span className="ml-6 h-1 w-1 rounded-full bg-gold-400" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ============ WELCOME ============ */}
      <section className="bg-noise bg-cream">
        <div className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <Reveal>
              <div className="card-surface relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)]">
                <Image
                  src={BRAND.facial.src}
                  alt={BRAND.facial.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card-surface animate-floaty absolute -bottom-8 -right-4 hidden w-52 rounded-2xl bg-paper p-5 sm:block">
                <p className="font-display text-3xl text-teal-700">Welcome.</p>
                <p className="mt-1 text-sm leading-relaxed text-stone">
                  Take a seat. We get to know your skin first.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Welcome to Zarrow"
              title="Considered treatment, without the rush."
              intro="Zarrow Medical Aesthetics is an aesthetics, wellness and beauty studio in Greendale, Harare — known for facials, IV wellness drips, body contouring, massage, waxing and laser care. What ties it together is the approach: assess properly, explain honestly, then treat."
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone text-pretty">
                Some visits are a thirty-dollar facial before an occasion.
                Others are a course of treatment planned over months. Both get
                the same attention, the same privacy, and the same refusal to
                promise anything we cannot deliver.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="link-underline mt-8 inline-flex items-center gap-2 font-medium text-teal-700"
              >
                Read our story <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TREATMENT CATEGORIES ============ */}
      <section className="bg-ivory">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Six ways we look after you."
              intro="From a classic facial to a consultation-led contouring plan — the full Zarrow menu, with prices published up front."
            />
            <Reveal delay={0.1}>
              <Link href="/treatments" className="btn btn-outline shrink-0">
                See every treatment <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 0.08}>
                <TreatmentCard category={c} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IV BAR ============ */}
      <section className="relative overflow-hidden bg-teal-800 text-cream">
        <div className="absolute inset-0 opacity-[0.16]">
          <Image
            src={BRAND.ivWellness.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="animate-aura pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        />

        <div className="container-x relative grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="The IV Wellness Bar"
              title="Where Zarrow began."
              intro={iv.detail}
            />
            <Reveal delay={0.18}>
              <Link href="/treatments#iv-drips" className="btn btn-gold mt-9">
                View the drip menu <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid gap-px overflow-hidden rounded-[var(--radius-xl2)] border border-white/10 bg-white/10 sm:grid-cols-2">
            {drips.map((d) => (
              <StaggerItem
                key={d.slug}
                className="group bg-teal-800 p-5 transition-colors duration-500 hover:bg-teal-700"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[0.95rem] text-cream">{d.name}</span>
                  <span className="font-display text-lg text-gold-300">
                    {formatPrice(d)}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-teal-100/65">
                  {d.short}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ BODY CONTOURING ============ */}
      <section className="bg-cream">
        <div className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Area-targeted contouring"
              title="Focused where you want it."
              intro={body.detail}
            />
            <Stagger className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Jawline",
                "Chin",
                "Bra fat",
                "Back fat",
                "Tummy fat",
                "Love handles",
              ].map((area) => (
                <StaggerItem
                  key={area}
                  className="flex items-center gap-3 text-sm text-stone"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {area}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href={`/booking?treatment=${contouring.slug}`}
                  className="btn btn-primary"
                >
                  Book a contouring consult
                </Link>
                <p className="text-sm text-stone">
                  <span className="mr-2 text-mist line-through">
                    US${contouring.wasPrice}
                  </span>
                  <span className="font-display text-2xl text-teal-700">
                    US${contouring.price}
                  </span>
                  <span className="ml-2 text-xs uppercase tracking-widest text-gold-600">
                    promotional
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <Reveal className="card-surface relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={BRAND.contouring.src}
                alt={BRAND.contouring.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-[65%_center]"
              />
            </Reveal>
            <Reveal
              delay={0.12}
              className="card-surface relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={IMAGES.massage.src}
                alt={IMAGES.massage.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <Credit
                author={IMAGES.massage.author}
                link={IMAGES.massage.link}
                light
                className="absolute bottom-3 right-3"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-ivory">
        <div className="container-x py-24 md:py-32">
          <SectionHeading
            align="center"
            eyebrow="How a visit works"
            title="Three steps, no surprises."
            intro="The same order every time, whether you are here for a brow wax or a course of advanced skin treatment."
          />
          <Stagger className="mt-16 grid gap-7 md:grid-cols-3">
            {HOW_IT_WORKS.map((s, i) => (
              <StaggerItem
                key={s.title}
                className="card-surface hover-lift rounded-[var(--radius-xl2)] p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <s.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-2xl text-gold-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-teal-800">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone text-pretty">
                  {s.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ ASSURANCES ============ */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <Stagger className="grid gap-px overflow-hidden rounded-[var(--radius-xl2)] border border-teal-700/10 bg-teal-700/10 md:grid-cols-3">
            {ASSURANCES.map((a) => (
              <StaggerItem
                key={a.title}
                className="bg-paper p-8 transition-colors duration-500 hover:bg-teal-50/60"
              >
                <a.icon size={26} className="text-gold-500" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-xl text-teal-800">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone text-pretty">
                  {a.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ STUDIO STRIP ============ */}
      <section className="bg-ivory">
        <div className="container-x pt-24 md:pt-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Inside the studio"
              title="A little of what a visit looks like."
            />
            <Reveal delay={0.1}>
              <Link href="/gallery" className="btn btn-outline shrink-0">
                Open the gallery <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[BRAND.facial, IMAGES.facialMask, BRAND.ivWellness, IMAGES.spaStill].map(
            (img, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <div className="absolute inset-0 bg-teal-900/0 transition-colors duration-500 group-hover:bg-teal-900/15" />
              </Reveal>
            )
          )}
        </div>
      </section>

      {/* ============ FACIAL MENU TEASER ============ */}
      <section className="bg-ivory">
        <div className="container-x py-24 md:py-32">
          <div className="card-surface overflow-hidden rounded-[var(--radius-xl2)] lg:grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[18rem] lg:min-h-full">
              <Image
                src={IMAGES.facialCloseUp.src}
                alt={IMAGES.facialCloseUp.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <Credit
                author={IMAGES.facialCloseUp.author}
                link={IMAGES.facialCloseUp.link}
                light
                className="absolute bottom-3 right-3"
              />
            </div>
            <div className="p-8 sm:p-12">
              <p className="eyebrow">Facials from US$30</p>
              <h2 className="mt-5 font-display text-[2rem] leading-tight text-teal-800 sm:text-4xl">
                {facials.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone text-pretty">
                {facials.detail}
              </p>
              <ul className="mt-8 space-y-3">
                {byCategory("facials").map((t) => (
                  <li
                    key={t.slug}
                    className="flex items-baseline justify-between gap-4 border-b border-teal-700/10 pb-3 text-sm"
                  >
                    <span className="text-teal-800">{t.name}</span>
                    <span className="font-display text-lg text-teal-700">
                      {formatPrice(t)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/treatments#facials"
                className="link-underline mt-8 inline-flex items-center gap-2 font-medium text-teal-700"
              >
                See the full facial menu <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INVITATION ============ */}
      <section className="bg-cream">
        <div className="container-x py-24 md:py-32">
          <Reveal className="relative overflow-hidden rounded-[var(--radius-xl2)]">
            <div className="absolute inset-0">
              <Image
                src={IMAGES.faceCream.src}
                alt={IMAGES.faceCream.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-teal-900/80" />
            </div>
            <div className="relative px-6 py-20 text-center md:px-16 md:py-28">
              <Sparkles
                size={36}
                className="mx-auto text-gold-400"
                strokeWidth={1.2}
              />
              <p className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-snug text-cream text-balance sm:text-4xl">
                Good skin is not an event. It is a series of small, well-judged
                decisions — made with someone who knows what they are doing.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/booking" className="btn btn-gold text-base">
                  Book your consultation
                </Link>
                <Link href="/contact" className="btn btn-ghost-light text-base">
                  Ask us a question
                </Link>
              </div>
            </div>
            <Credit
              author={IMAGES.faceCream.author}
              link={IMAGES.faceCream.link}
              light
              className="absolute bottom-3 right-3"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ LOCATIONS ============ */}
      <section className="bg-ivory">
        <div className="container-x py-20 md:py-24">
          <SectionHeading eyebrow="Find us" title="Two studios, one standard." />
          <Stagger className="mt-12 grid gap-7 md:grid-cols-2">
            {BRANCHES.map((b) => (
              <StaggerItem
                key={b.slug}
                className="card-surface hover-lift rounded-[var(--radius-xl2)] p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">
                      {b.isPrimary ? "Main studio" : "Also at"}
                    </p>
                    <h3 className="mt-4 font-display text-2xl text-teal-800">
                      {b.city} · {b.name}
                    </h3>
                  </div>
                  <MapPin
                    size={22}
                    className="shrink-0 text-gold-500"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  {b.line1}
                  <br />
                  {b.line2}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
                  <a
                    href={`tel:${b.phoneHref}`}
                    className="link-underline font-medium text-teal-700"
                  >
                    {b.phone}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      b.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-stone"
                  >
                    Open in Maps
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm text-mist">
              Prefer to talk it through first? Call{" "}
              <a
                href={`tel:${SITE.phoneHref}`}
                className="link-underline text-teal-700"
              >
                {SITE.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="link-underline text-teal-700"
              >
                {SITE.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
