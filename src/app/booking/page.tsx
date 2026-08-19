import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { BookingFlow } from "@/components/BookingFlow";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Zarrow Medical Aesthetics in Greendale, Harare or Newtown, Kwekwe. Choose a treatment, a studio and a preferred time.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-ivory pb-6 pt-32 md:pt-40">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Booking</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl font-display text-[2.5rem] leading-[1.05] text-brown-800 text-balance sm:text-5xl">
              Request your appointment
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone text-pretty">
              Three short steps. We will come back to you to confirm the time
              and talk through anything you need to know first — no payment is
              taken here. In a hurry? Call{" "}
              <a
                href={`tel:${SITE.phoneHref}`}
                className="link-underline text-brown-700"
              >
                {SITE.phone}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x pb-24 pt-10 md:pb-32">
          <Suspense
            fallback={
              <div className="flex justify-center py-24 text-stone">
                <Loader2 size={26} className="animate-spin" />
              </div>
            }
          >
            <BookingFlow />
          </Suspense>
        </div>
      </section>
    </>
  );
}
