import { useState } from "react";
import { projectGallery } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-line bg-paper-dim py-18 sm:py-24"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          See the Work
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectGallery.map((image, index) => (
            <figure key={image.src}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="block aspect-4/3 w-full overflow-hidden rounded-2xl bg-paper"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
              <figcaption className="mt-3 text-sm text-ink-soft">
                {image.caption}
              </figcaption>
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
