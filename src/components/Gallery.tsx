import { useState } from "react";
import { projectGallery } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-line bg-paper py-18 sm:py-24"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent">
          SELECTED WORK
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-snug text-ink sm:text-4xl">
          Real Projects. A Closer Look.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
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
                className="block aspect-4/3 w-full overflow-hidden rounded-2xl bg-paper-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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

              <div className="mt-3 flex items-center justify-between border-b border-line pb-3">
                <p className="text-base font-semibold text-ink">{image.title}</p>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
