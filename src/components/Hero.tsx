import { heroImage } from "../data/gallery";

export default function Hero() {
  return (
    <section id="top" className="bg-ink pt-24 lg:pt-28">
      <div className="mx-auto max-w-330 px-6 pb-6 lg:px-10 lg:pb-10">
        <div className="relative isolate overflow-hidden rounded-[18px] bg-ink">
          <div className="relative z-20 flex flex-col bg-ink lg:min-h-[620px] lg:justify-between lg:bg-transparent">
            <div className="p-8 sm:p-10 lg:max-w-[650px] lg:p-14">
              <p className="text-xs font-semibold tracking-[0.2em] text-paper/70">
                COREVIA CONSTRUCTION GROUP
              </p>
              <h1 className="mt-4 text-[42px] font-bold leading-[1.05] text-paper sm:text-[52px] lg:text-[68px]">
                Make Your Next
                <br />
                Home Project
                <br />
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

            <div className="border-t border-paper/20 px-8 py-5 sm:px-10 lg:px-14 lg:py-6">
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-paper/70">
                <span>Family-Owned</span>
                <span>Tacoma, Washington</span>
                <span>King &amp; Pierce Counties</span>
              </div>
            </div>
          </div>

          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="relative z-0 h-65 w-full object-cover object-right lg:absolute lg:inset-0 lg:h-full lg:w-full"
            fetchPriority="high"
          />

          <div
            className="hidden lg:absolute lg:inset-0 lg:z-10 lg:block lg:bg-gradient-to-r lg:from-ink lg:from-5% lg:via-ink/75 lg:via-45% lg:to-transparent lg:to-90%"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
