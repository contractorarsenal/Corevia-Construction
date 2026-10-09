import { aboutImage } from "../data/gallery";

export default function About() {
  return (
    <section id="about" className="scroll-mt-18 bg-paper py-18 sm:py-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div className="order-2 aspect-4/5 w-full max-w-sm overflow-hidden bg-paper-dim lg:order-1">
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
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Whether you&rsquo;re updating an existing space or planning
            something new, we&rsquo;d like to hear about your project.
          </p>
        </div>
      </div>
    </section>
  );
}
