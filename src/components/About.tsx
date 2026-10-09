import { aboutImage } from "../data/gallery";

const principles = [
  {
    title: "Craftsmanship",
    description: "Attention to the work and the details you live with.",
  },
  {
    title: "Communication",
    description: "Straightforward conversations about your project.",
  },
  {
    title: "Service",
    description: "A personal approach from a family-owned company.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper-dim py-18 sm:py-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:items-start lg:gap-16">
        <div className="order-2 h-105 w-full overflow-hidden rounded-2xl lg:order-1 lg:h-115">
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
          <p className="text-xs font-semibold tracking-[0.2em] text-accent">
            MEET COREVIA
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-ink sm:text-4xl">
            Family-Owned.
            <br />
            Based in Tacoma.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Your home is personal. We believe the work you put into it
            should come with clear conversations, careful craftsmanship,
            and a team you can talk to.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Corevia Construction Group Inc. serves King and Pierce Counties
            with roofing, remodeling, additions, ADUs, and restoration.
          </p>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-6 py-4">
                <p className="w-36 shrink-0 font-semibold text-ink">
                  {principle.title}
                </p>
                <p className="text-sm text-ink-soft">{principle.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex h-13 items-center justify-center rounded-lg bg-accent px-7 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark"
          >
            Tell Us What You&rsquo;re Planning
          </a>
        </div>
      </div>
    </section>
  );
}
