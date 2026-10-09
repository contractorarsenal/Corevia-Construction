import { services } from "../data/business";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-18 bg-paper py-18 sm:py-24">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          How We Can Help
        </h2>

        <div className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`border-b border-line py-8 sm:py-10 ${
                index % 2 === 1 ? "sm:border-l sm:pl-8" : "sm:pr-8"
              }`}
            >
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
