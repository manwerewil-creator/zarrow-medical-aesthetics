import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/Reveal";
import {
  byCategory,
  formatPrice,
  type CategoryId,
  type Treatment,
} from "@/lib/treatments";

/**
 * A treatment menu, set like a printed price card: name and short
 * description on the left, price on the right, a hairline leader
 * between them.
 */
export function PriceList({ category }: { category: CategoryId }) {
  const items = byCategory(category);

  return (
    <Stagger as="div" className="divide-y divide-brown-700/10">
      {items.map((t) => (
        <StaggerItem key={t.slug}>
          <Row treatment={t} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function Row({ treatment: t }: { treatment: Treatment }) {
  return (
    <Link
      href={`/booking?treatment=${t.slug}`}
      className="group flex items-baseline gap-4 py-5 transition-colors duration-500 hover:bg-brown-50/60"
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <span className="min-w-0 flex-1">
        <span className="block text-[1.02rem] text-brown-800 transition-colors group-hover:text-brown-600">
          {t.name}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-stone text-pretty">
          {t.short}
        </span>
      </span>

      <span
        aria-hidden
        className="hidden h-px flex-1 bg-[repeating-linear-gradient(to_right,rgba(90,65,42,0.22)_0_2px,transparent_2px_6px)] sm:block"
      />

      <span className="shrink-0 text-right">
        {t.wasPrice ? (
          <span className="mr-2 text-sm text-mist line-through">
            US${t.wasPrice}
          </span>
        ) : null}
        <span className="font-display text-xl text-brown-700">
          {formatPrice(t)}
        </span>
        {t.priceNote === "promotional" ? (
          <span className="ml-2 rounded-full bg-gold-200/60 px-2 py-0.5 text-[0.62rem] uppercase tracking-widest text-gold-600">
            Promo
          </span>
        ) : null}
      </span>
    </Link>
  );
}
