import { useState } from "react";
import { featuredWork } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function FeaturedWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lead, ...rest] = featuredWork;

  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-line bg-paper-dim py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-xl font-serif text-3xl text-ink sm:text-4xl">
          A Closer Look at Our Work.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="group relative col-span-1 block aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-[16/10] lg:row-span-2 lg:aspect-auto lg:h-full"
          >
            <img
              src={lead.src}
              alt={lead.alt}
              width={lead.width}
              height={lead.height}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-0 left-0 bg-ink/80 px-4 py-2 text-sm text-paper">
              {lead.caption}
            </span>
          </button>

          {rest.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setOpenIndex(i + 1)}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-0 left-0 bg-ink/80 px-4 py-2 text-sm text-paper">
                {image.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={featuredWork}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
