import Link from "next/link";
import { CATEGORIES } from "@/lib/treatments";

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <div className="container-x flex min-h-[80svh] flex-col justify-center py-32">
        <p className="eyebrow">404</p>
        <h1 className="animate-fade-up mt-6 max-w-2xl font-display text-[2.75rem] leading-[1.05] text-teal-800 text-balance sm:text-6xl">
          This page has stepped out.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-stone text-pretty">
          The link may have changed, or the page may never have existed. The
          treatment menu is the best place to pick things back up.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/treatments" className="btn btn-outline">
            See treatments
          </Link>
        </div>

        <div className="mt-14">
          <div className="rule-gold max-w-md" />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/treatments#${c.id}`}
                  className="link-underline text-stone hover:text-teal-700"
                >
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
