import { aboutImage } from "../data/gallery";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div className="order-2 aspect-[4/5] w-full max-w-sm overflow-hidden lg:order-1">
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
          <h2 className="max-w-lg font-serif text-3xl leading-snug text-ink sm:text-4xl">
            A Family-Owned Company.
            <br />
            A Personal Approach.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            Corevia Construction Group Inc. is a family-owned construction
            company based in Tacoma, serving homeowners across King and
            Pierce Counties. We believe quality craftsmanship, honest
            communication, and dependable service belong at the center of
            every project.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            From roofing and remodeling to additions, ADUs, and restoration,
            we&rsquo;re here to help you build with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
