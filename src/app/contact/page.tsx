import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { IMAGES } from "@/lib/images";
import { BRANCHES, SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zarrow Medical Aesthetics — Greendale, Harare and Newtown, Kwekwe. Call, WhatsApp, email or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Get in touch"
        intro="Questions about a treatment, a price, or whether something is right for you? Ask away — there is no obligation."
        image={IMAGES.towelsAndOil}
      />

      <section className="bg-cream">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Details */}
            <div>
              <SectionHeading
                eyebrow="Direct lines"
                title="The quickest ways to reach us."
                intro="WhatsApp is usually fastest. For anything detailed, email or the form works well."
              />

              <Stagger className="mt-10 space-y-4">
                <StaggerItem>
                  <a
                    href={whatsappLink(
                      `Hello ${SITE.shortName}, I'd like to ask about a treatment.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface hover-lift flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <MessageCircle size={19} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-sm text-mist">WhatsApp</span>
                      <span className="block font-medium text-teal-800">
                        {SITE.phone}
                      </span>
                    </span>
                  </a>
                </StaggerItem>

                <StaggerItem>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="card-surface hover-lift flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Phone size={19} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-sm text-mist">Call us</span>
                      <span className="block font-medium text-teal-800">
                        {SITE.phone}
                      </span>
                      <span className="block text-sm text-stone">
                        or {SITE.phoneAlt}
                      </span>
                    </span>
                  </a>
                </StaggerItem>

                <StaggerItem>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="card-surface hover-lift flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Mail size={19} strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-mist">Email</span>
                      <span className="block break-all font-medium text-teal-800">
                        {SITE.email}
                      </span>
                    </span>
                  </a>
                </StaggerItem>
              </Stagger>

              <Reveal delay={0.2}>
                <div className="mt-10 rounded-2xl bg-teal-700/5 p-6">
                  <p className="text-sm leading-relaxed text-stone text-pretty">
                    Ready to book rather than ask? The booking form captures
                    everything we need to confirm a time.
                  </p>
                  <Link href="/booking" className="btn btn-primary mt-5">
                    Request an appointment
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Studios */}
      <section className="bg-ivory">
        <div className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow="Where to find us"
            title="Two studios."
            intro="Both set up for treatment and quiet recovery. Please confirm your studio when you book."
          />
          <Stagger className="mt-12 grid gap-7 md:grid-cols-2">
            {BRANCHES.map((b) => (
              <StaggerItem
                key={b.slug}
                className="card-surface overflow-hidden rounded-[var(--radius-xl2)]"
              >
                <div className="p-8">
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
                      strokeWidth={1.5}
                      className="shrink-0 text-gold-500"
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
                </div>
                <iframe
                  title={`Map of the ${b.city} studio`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    b.mapQuery
                  )}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full border-0 grayscale-[0.35] transition-all duration-700 hover:grayscale-0"
                />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <p className="mt-10 text-sm leading-relaxed text-mist text-pretty">
              Appointments are arranged individually rather than on fixed
              opening hours — call or message and we will find a time that
              works.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
