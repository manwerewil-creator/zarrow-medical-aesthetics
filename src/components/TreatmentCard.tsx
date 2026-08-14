import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Credit } from "@/components/Credit";
import { fromPrice, type Category } from "@/lib/treatments";

/**
 * A treatment-category card. Used on the homepage and at the top of
 * the treatments page as a jump menu.
 */
export function TreatmentCard({
  category,
  priority = false,
}: {
  category: Category;
  priority?: boolean;
}) {
  const from = fromPrice(category.id);

  return (
    <Link
      href={`/treatments#${category.id}`}
      className="card-surface hover-lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image.src}
          alt={category.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1100ms] group-hover:scale-[1.06]"
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/45 via-transparent to-transparent" />
        {from !== null ? (
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium tracking-wide text-teal-700">
            From US${from}
          </span>
        ) : null}
        <Credit
          author={category.image.author}
          link={category.image.link}
          light
          className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-[1.6rem] leading-tight text-teal-800">
          {category.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone text-pretty">
          {category.blurb}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700">
          See the menu
          <ArrowUpRight
            size={16}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          />
        </span>
      </div>
    </Link>
  );
}
