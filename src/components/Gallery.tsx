import { useState } from "react";
import { projectGallery } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lead, ...rest] = projectGallery;

  return (
    <section
      id="projects"
      className="scroll-mt-18 border-t border-line bg-paper-dim py-18 sm:py-24"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          See the Work
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <figure className="col-span-1 sm:col-span-2 lg:row-span-2 lg:col-span-2">
            <button
              type="button"
              onClick={() => setOpenIndex(0)}
              className="block aspect-16/10 w-full overflow-hidden bg-paper lg:aspect-auto lg:h-full"
            >
              <img
                src={lead.src}
                alt={lead.alt}
                width={lead.width}
                height={lead.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-2 text-sm text-ink-soft">
              {lead.caption}
            </figcaption>
          </figure>

          {rest.map((image, i) => {
            const isPortrait = image.height > image.width;
            return (
              <figure key={image.src}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i + 1)}
                  className={`block w-full overflow-hidden bg-paper ${
                    isPortrait ? "aspect-3/4" : "aspect-4/3"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </button>
                <figcaption className="mt-2 text-sm text-ink-soft">
                  {image.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={projectGallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
