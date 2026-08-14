import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/Section";
import { PriceList } from "@/components/PriceList";
import { Reveal } from "@/components/Reveal";
import { Credit } from "@/components/Credit";
import { BRAND } from "@/lib/images";
import { CATEGORIES, fromPrice } from "@/lib/treatments";
import { CONSULT_NOTE, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments & Prices",
  description:
    "The full Zarrow Medical Aesthetics treatment menu: facials, advanced skin treatments, IV wellness drips, body contouring, massage, waxing and laser hair removal — with prices.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="The menu"
        title="Treatments & prices"
        intro="Everything Zarrow offers, with prices published up front. Choose a category below, or send us a request and we will help you decide."
        image={BRAND.facial}
      />

      {/* Jump menu */}
      <section className="border-b border-teal-700/10 bg-cream">
        <div className="container-x py-8">
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-teal-700/15 px-4 py-2 text-sm text-stone transition-all duration-500 hover:-translate-y-0.5 hover:border-teal-700/40 hover:text-teal-700"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {c.shortName}
                {fromPrice(c.id) !== null ? (
                  <span className="ml-2 text-xs text-mist">
                    from US${fromPrice(c.id)}
                  </span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={`scroll-mt-24 ${i % 2 === 0 ? "bg-cream" : "bg-ivory"}`}
        >
          <div className="container-x py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              {/* Category intro */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Reveal>
                  <div className="card-surface relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl2)]">
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <Credit
                      author={c.image.author}
                      link={c.image.link}
                      light
                      className="absolute bottom-3 right-3"
                    />
                  </div>
                </Reveal>
                <SectionHeading
                  className="mt-8"
                  eyebrow={
                    fromPrice(c.id) !== null
                      ? `From US$${fromPrice(c.id)}`
                      : "By consultation"
                  }
                  title={c.name}
                  intro={c.detail}
                />
                {c.notes.length ? (
                  <Reveal delay={0.18}>
                    <ul className="mt-7 space-y-3 rounded-2xl bg-teal-700/5 p-5">
                      {c.notes.map((n) => (
                        <li
                          key={n}
                          className="flex gap-3 text-sm leading-relaxed text-stone text-pretty"
                        >
                          <Info
                            size={15}
                            className="mt-0.5 shrink-0 text-gold-500"
                            strokeWidth={1.6}
                          />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ) : null}
              </div>

              {/* Price list */}
              <div>
                <PriceList category={c.id} />
                <Reveal delay={0.1}>
                  <Link href="/booking" className="btn btn-outline mt-8">
                    Book from this menu <ArrowRight size={18} />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Standing note */}
      <section className="bg-teal-800 text-cream">
        <div className="container-x py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                light
                eyebrow="Before you book"
                title="Prices are a guide, not a promise."
                intro={CONSULT_NOTE}
              />
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-teal-100/70 text-pretty">
                  Advanced skin treatments, injectables, laser services and IV
                  infusions are provided subject to assessment. We will always
                  tell you if a treatment is not right for you — and what would
                  be.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-[var(--radius-xl2)] border border-white/10 bg-white/5 p-8">
                <p className="font-display text-2xl text-cream">
                  Not sure what you need?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-teal-100/75 text-pretty">
                  Send a request with a note about what is bothering you. We
                  will suggest where to start — no obligation.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/booking" className="btn btn-gold">
                    Request an appointment
                  </Link>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="btn btn-ghost-light"
                  >
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
