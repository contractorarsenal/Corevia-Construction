import { useState } from "react";
import type { ProjectType } from "../data/business";
import { services } from "../data/business";

type ServiceRequest = {
  index: number;
  key: number;
};

type ServicesProps = {
  onSelectProject: (type: ProjectType) => void;
  serviceRequest: ServiceRequest | null;
};

export default function Services({ onSelectProject, serviceRequest }: ServicesProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const [lastRequestKey, setLastRequestKey] = useState<number | null>(null);

  if (serviceRequest && serviceRequest.key !== lastRequestKey) {
    setLastRequestKey(serviceRequest.key);
    setOpenIndex(serviceRequest.index);
  }

  return (
    <section id="services" className="scroll-mt-20 bg-paper py-16 sm:py-20 lg:py-27">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent">
              OUR SERVICES
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-snug text-ink sm:text-4xl">
              What&rsquo;s Next
              <br />
              for Your Home?
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
              Protect it. Update it. Make room for more. Find the right
              starting point for your project.
            </p>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-300 hover:text-accent-dark"
            >
              View Our Work
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

          <div className="border-t border-line">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              const panelId = `service-panel-${service.projectType}`;

              return (
                <div key={service.title} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={`service-tab-${service.projectType}`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-6 text-left transition-colors duration-300 sm:px-6 ${
                        isOpen ? "bg-accent/8" : "bg-transparent hover:bg-paper-dim"
                      }`}
                    >
                      <span className="flex items-baseline gap-4 sm:gap-6">
                        <span className="text-sm font-medium text-stone">
                          {service.number}
                        </span>
                        <span
                          className={`text-[28px] font-bold sm:text-[32px] ${
                            isOpen ? "text-accent" : "text-ink"
                          }`}
                        >
                          {service.title}
                        </span>
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-accent text-accent"
                            : "border-line text-ink-soft"
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" strokeLinecap="round" />
                          {!isOpen && <path d="M12 5v14" strokeLinecap="round" />}
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={`service-tab-${service.projectType}`}
                      className="bg-accent/8 px-4 pb-8 sm:px-6"
                    >
                      <div className="sm:pl-18">
                        <p className="max-w-lg text-base leading-relaxed text-ink-soft">
                          {service.description}
                        </p>
                        <a
                          href="#contact"
                          onClick={() => onSelectProject(service.projectType)}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-300 hover:text-accent-dark"
                        >
                          {service.actionLabel}
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
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
