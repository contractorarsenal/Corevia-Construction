import { heroImage } from "../data/gallery";

export default function Hero() {
  return (
    <section id="top" className="bg-paper pt-20">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-medium text-accent">
            Tacoma, WA &bull; Serving King &amp; Pierce Counties
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
            Your Home.
            <br className="hidden sm:block" /> Your Next Big Project.
            <br className="hidden sm:block" /> Built With Confidence.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            From roofing and remodeling to additions, ADUs, and restoration,
            Corevia Construction Group helps homeowners across King and
            Pierce Counties take the next step with quality craftsmanship
            and honest communication.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="bg-accent px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark"
            >
              Let&rsquo;s Plan Your Project
            </a>
            <a
              href="#projects"
              className="border border-ink/20 px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-paper-dim"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        <div className="aspect-4/3 w-full overflow-hidden rounded-2xl bg-paper-dim">
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
