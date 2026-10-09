import { aboutImage } from "../data/gallery";

const points = [
  {
    title: "Quality craftsmanship",
    description: "Careful, considered work on every project we take on.",
  },
  {
    title: "Honest communication",
    description: "Clear answers and straightforward updates throughout.",
  },
  {
    title: "Dependable service",
    description: "Showing up when we say we will and following through.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper py-18 sm:py-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div className="order-2 aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl bg-paper-dim lg:order-1">
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            width={aboutImage.width}
            height={aboutImage.height}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold leading-snug text-ink sm:text-4xl">
            Family-Owned. Based in Tacoma.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Corevia Construction Group Inc. serves King and Pierce Counties
            with roofing, remodeling, additions, ADUs, and restoration. Our
            approach centers on quality craftsmanship, honest communication,
            and dependable service.
          </p>

          <ul className="mt-8 space-y-5 border-t border-line pt-8">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-ink">{point.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
