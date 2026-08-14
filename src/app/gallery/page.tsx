import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { BRAND, GALLERY } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside Zarrow Medical Aesthetics — the treatment rooms, the IV wellness lounge and the details that make a visit feel calm.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title="A look inside"
        intro="Treatment rooms, the IV lounge and the small details that make a visit feel unhurried."
        image={BRAND.ivWellness}
      />

      <section className="bg-cream">
        <div className="container-x py-20 md:py-28">
          <GalleryGrid images={GALLERY} />

          <Reveal delay={0.1}>
            <div className="mt-16 text-center">
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-mist text-pretty">
                Photography of the studio is shown alongside a small number of
                licensed editorial images. Every treatment is delivered in
                private, and no client is photographed without consent.
              </p>
              <Link href="/booking" className="btn btn-gold mt-8">
                Book your visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
