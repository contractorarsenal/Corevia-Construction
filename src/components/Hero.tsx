import { heroImage } from "../data/gallery";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-end overflow-hidden pt-16 sm:min-h-[760px] sm:pt-20"
    >
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        width={heroImage.width}
        height={heroImage.height}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-24 sm:px-8 sm:pb-20">
        <p className="text-xs tracking-[0.2em] text-paper/80 sm:text-sm">
          TACOMA &bull; KING &amp; PIERCE COUNTIES
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl md:text-6xl">
          Roofing, Remodeling &amp; More.
          <br />
          Built With Confidence.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-paper/90 sm:text-lg">
          Family-owned construction serving King and Pierce Counties. From
          roofing and remodeling to additions, ADUs, and restoration, we
          bring quality craftsmanship and honest communication to your
          project.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="bg-accent px-7 py-3.5 text-center text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
          >
            Discuss Your Project
          </a>
          <a
            href="#work"
            className="border border-paper/50 px-7 py-3.5 text-center text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
