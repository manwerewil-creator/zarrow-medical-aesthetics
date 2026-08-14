import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import {
  BRANCHES,
  CONSULT_NOTE,
  NAV_LINKS,
  SITE,
  whatsappLink,
} from "@/lib/site";
import { CATEGORIES } from "@/lib/treatments";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-teal-900 text-teal-100/80">
      {/* Soft ambient wash so the dark block never reads flat */}
      <div
        aria-hidden
        className="animate-aura pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-700/40 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-aura pointer-events-none absolute -bottom-52 right-0 h-[24rem] w-[24rem] rounded-full bg-gold-600/10 blur-3xl"
      />

      <div className="container-x relative py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Identity */}
          <div>
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={544}
              height={148}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-pretty">
              {SITE.tagline} Aesthetics, wellness and beauty treatments in
              Greendale, Harare — and in Newtown, Kwekwe.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <SocialLink
                href={SITE.social.instagram}
                label={`${SITE.shortName} on Instagram`}
              >
                <Instagram size={17} strokeWidth={1.6} />
              </SocialLink>
              <SocialLink
                href={SITE.social.facebook}
                label={`${SITE.shortName} on Facebook`}
              >
                <Facebook size={17} strokeWidth={1.6} />
              </SocialLink>
              <SocialLink
                href={whatsappLink(
                  `Hello ${SITE.shortName}, I'd like to book an appointment.`
                )}
                label={`Message ${SITE.shortName} on WhatsApp`}
              >
                <MessageCircle size={17} strokeWidth={1.6} />
              </SocialLink>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-lg text-cream">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" className="link-underline hover:text-cream">
                  Book an appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-display text-lg text-cream">Treatments</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/treatments#${c.id}`}
                    className="link-underline hover:text-cream"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-display text-lg text-cream">Visit &amp; contact</h3>
            <ul className="mt-5 space-y-5 text-sm">
              {BRANCHES.map((b) => (
                <li key={b.slug} className="flex gap-3">
                  <MapPin
                    size={16}
                    strokeWidth={1.6}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <span>
                    <span className="block text-cream">
                      {b.city} · {b.name}
                    </span>
                    <span className="block leading-relaxed">{b.line1}</span>
                    <span className="block leading-relaxed">{b.line2}</span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.6}
                  className="shrink-0 text-gold-400"
                />
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="link-underline hover:text-cream"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.6}
                  className="shrink-0 text-gold-400"
                />
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline break-all hover:text-cream"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs leading-relaxed text-teal-100/65 text-pretty">
            {CONSULT_NOTE} Advanced skin treatments, injectables, laser services
            and IV infusions are provided subject to assessment. Nothing on this
            site is medical advice, and no outcome is guaranteed.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-teal-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Greendale, Harare · Newtown, Kwekwe · Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-teal-100/80 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </a>
  );
}
