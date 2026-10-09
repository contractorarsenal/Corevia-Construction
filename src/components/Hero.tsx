import { heroImage } from "../data/gallery";

export default function Hero() {
  return (
    <section id="top" className="relative isolate bg-ink pt-24 lg:pt-28">
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        width={heroImage.width}
        height={heroImage.height}
        className="absolute inset-0 z-0 h-full w-full object-cover object-right"
        fetchPriority="high"
      />

      <div
        className="absolute inset-0 z-10 bg-ink/80 lg:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 hidden lg:block lg:bg-gradient-to-r lg:from-ink lg:from-5% lg:via-ink/75 lg:via-45% lg:to-transparent lg:to-90%"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-300 px-6 py-14 sm:px-8 sm:py-20 lg:flex lg:min-h-[690px] lg:flex-col lg:justify-center lg:py-16">
        <div>
          <p className="text-sm font-medium text-accent-light">
            Tacoma, WA &bull; Serving King &amp; Pierce Counties
          </p>
          <h1 className="mt-4 max-w-[650px] text-[42px] font-bold leading-[1.05] text-paper sm:text-[52px] lg:text-[68px] xl:max-w-[950px]">
            Make Your Next
            <br />
            Home Project{" "}
            <br className="xl:hidden" />
            <span className="text-accent-light">Something Special.</span>
          </h1>
          <p className="mt-6 max-w-[450px] text-lg leading-relaxed text-paper/85">
            Roofing, remodeling, additions, and ADUs. Family-owned in
            Tacoma, serving King and Pierce Counties.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark"
            >
              Start Your Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex h-13 items-center justify-center rounded-lg border border-paper/60 bg-transparent px-7 text-sm font-semibold text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/20 pt-5 lg:mt-16">
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-paper/70">
            <span>Family-Owned</span>
            <span>Tacoma, Washington</span>
            <span>King &amp; Pierce Counties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
