import { useState } from "react";
import { projectGallery } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-accent py-16 sm:py-20 lg:py-27"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-paper">
          SELECTED WORK
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-snug text-paper sm:text-4xl">
          Real Projects. A Closer Look.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-paper sm:text-lg">
          Explore roofing, remodeling, and other work from the Corevia
          portfolio.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projectGallery.map((image, index) => (
            <figure key={image.src} className="group">
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`View photos: ${image.title}`}
                className="block aspect-4/3 w-full overflow-hidden rounded-2xl bg-paper/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className={`h-full w-full object-cover ${image.objectPosition} transition-transform duration-300 group-hover:scale-[1.025] group-focus-within:scale-[1.025]`}
                />
              </button>

              <div className="mt-3 flex items-center justify-between border-b border-paper/25 pb-3">
                <p className="text-base font-semibold text-paper">{image.title}</p>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="flex items-center gap-1.5 text-sm font-medium text-paper transition-colors duration-300 hover:text-paper/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
                >
                  View Photos
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-focus-within:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </figure>
          ))}
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
