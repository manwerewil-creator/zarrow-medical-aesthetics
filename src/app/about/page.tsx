import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Ear, Eye, Lock, Scale } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Credit } from "@/components/Credit";
import { BRAND, IMAGES } from "@/lib/images";
import { CATEGORIES } from "@/lib/treatments";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zarrow Medical Aesthetics — also known as Zarrow Aesthetics & IV Bar — is a Harare aesthetics, wellness and beauty studio built on consultation-led care.",
};

const VALUES = [
  {
    icon: Ear,
    title: "We listen before we treat",
    body: "Nobody is sold a treatment at Zarrow. The first thing that happens is a conversation about what is bothering you, what you have tried, and what you actually want.",
  },
  {
    icon: Scale,
    title: "Honest about what is possible",
    body: "No guaranteed results, no permanent promises, no medical cures. Where a treatment will help, we say so. Where it will not, we say that too.",
  },
  {
    icon: Lock,
    title: "Private by default",
    body: "Treatments happen behind a closed door. Nothing about your visit is shared, and no client is photographed without consent.",
  },
  {
    icon: Eye,
    title: "Clear before you commit",
    body: "You will know the plan, the cost, the aftercare and the realistic timeline before anything is booked — in writing where it matters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Zarrow Aesthetics & IV Bar"
        intro="A Harare studio built around a simple idea: aesthetic treatment should be considered, private and honestly explained."
        image={BRAND.contouring}
      />

      {/* Story */}
      <section className="bg-noise bg-cream">
        <div className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How it started"
              title="From an IV bar to a full aesthetics studio."
              intro="Zarrow began around vitamin wellness — a small, calm space in Greendale where people could sit for an infusion without it feeling clinical. The rest grew from what clients kept asking for next."
            />
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-stone text-pretty">
                <p>
                  Today the studio covers facials and skin health, advanced skin
                  treatments, IV wellness, body contouring, massage and
                  lymphatic drainage, waxing and laser hair removal. A second
                  studio in Newtown, Kwekwe followed.
                </p>
                <p>
                  What has not changed is the order of things. Assess first.
                  Explain honestly. Then treat — at a pace that suits the person
                  in the chair rather than the diary.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <Link
                href="/treatments"
                className="link-underline mt-8 inline-flex items-center gap-2 font-medium text-teal-700"
              >
                See what we offer <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Reveal className="card-surface relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={BRAND.ivWellness.src}
                alt={BRAND.ivWellness.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-[60%_center]"
              />
            </Reveal>
            <Reveal
              delay={0.12}
              className="card-surface relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={IMAGES.amberBottle.src}
                alt={IMAGES.amberBottle.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <Credit
                author={IMAGES.amberBottle.author}
                link={IMAGES.amberBottle.link}
                light
                className="absolute bottom-3 right-3"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory">
        <div className="container-x py-24 md:py-32">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="Four things we will not compromise on."
          />
          <Stagger className="mt-16 grid gap-7 md:grid-cols-2">
            {VALUES.map((v) => (
              <StaggerItem
                key={v.title}
                className="card-surface hover-lift rounded-[var(--radius-xl2)] p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <v.icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-teal-800">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone text-pretty">
                  {v.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What we cover */}
      <section className="relative overflow-hidden bg-teal-800 text-cream">
        <div className="absolute inset-0 opacity-[0.12]">
          <Image
            src={BRAND.facial.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container-x relative py-24 md:py-32">
          <SectionHeading
            light
            align="center"
            eyebrow="Under one roof"
            title="Six disciplines, one standard of care."
            intro="Enough range that most concerns can be handled here — and enough honesty to tell you when they should not be."
          />
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-xl2)] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <StaggerItem
                key={c.id}
                className="bg-teal-800 p-8 transition-colors duration-500 hover:bg-teal-700"
              >
                <h3 className="font-display text-xl text-cream">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-teal-100/70 text-pretty">
                  {c.blurb}
                </p>
                <Link
                  href={`/treatments#${c.id}`}
                  className="link-underline mt-5 inline-block text-sm text-gold-300"
                >
                  See prices
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-cream">
        <div className="container-x py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Safety & consent"
              title="What consultation-led actually means."
              intro="It is not a formality. It is the part of the visit that decides whether a treatment happens at all."
            />
            <Reveal delay={0.12}>
              <div className="space-y-5 text-base leading-relaxed text-stone text-pretty">
                <p>
                  Before any advanced skin treatment, injectable, laser service
                  or IV infusion, we take a history, discuss contraindications
                  and agree what success would look like. Some people leave with
                  a plan. Some leave with a referral. Some leave being told to
                  wait.
                </p>
                <p>
                  Aftercare is written down, not recited. If something does not
                  settle the way we expected, we want to hear about it — that
                  call is never an inconvenience.
                </p>
                <p className="text-sm text-mist">
                  Nothing on this website is medical advice, and no outcome is
                  guaranteed. Treatment suitability is confirmed only in person.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="card-surface mt-16 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-xl2)] p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h3 className="font-display text-2xl text-teal-800">
                  Come and meet us.
                </h3>
                <p className="mt-2 text-sm text-stone">
                  Greendale, Harare · Newtown, Kwekwe — or call {SITE.phone}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/booking" className="btn btn-gold">
                  Book a consultation
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
