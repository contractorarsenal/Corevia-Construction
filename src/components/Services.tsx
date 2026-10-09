import type { ProjectType } from "../data/business";
import { services } from "../data/business";

type ServicesProps = {
  onSelectProject: (type: ProjectType) => void;
};

export default function Services({ onSelectProject }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-20 bg-paper py-18 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <h2 className="max-w-xl text-3xl font-bold leading-snug text-ink sm:text-4xl">
          Big Plans for Your Home? Start Here.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          A new roof. An updated bathroom. More room for what comes next.
          Explore how Corevia can help with your next project.
        </p>

        <div className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col border-b border-line py-8 sm:py-10 ${
                index % 2 === 1 ? "sm:border-l sm:pl-8" : "sm:pr-8"
              }`}
            >
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <a
                href="#contact"
                onClick={() => onSelectProject(service.projectType)}
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-300 hover:text-accent-dark"
              >
                Discuss This Project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
