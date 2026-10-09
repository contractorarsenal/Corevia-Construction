import { heroImage } from "../data/gallery";

export default function Hero() {
  return (
    <section id="top" className="bg-paper pt-16 sm:pt-20">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-medium text-accent">
            Tacoma, WA &bull; Serving King &amp; Pierce Counties
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
            Roofing &amp; Remodeling.
            <br />
            Additions &amp; ADUs.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Corevia Construction Group Inc. is a family-owned construction
            company serving King and Pierce Counties. Tell us what
            you&rsquo;re planning, from a new roof or bathroom remodel to an
            addition, ADU, or restoration project.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="bg-accent px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
            >
              Request an Estimate
            </a>
            <a
              href="#projects"
              className="border border-ink/20 px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-paper-dim"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="aspect-4/3 w-full overflow-hidden bg-paper-dim">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
