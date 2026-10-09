import { servicesImage } from "../data/gallery";
import { services } from "../data/business";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-xl font-serif text-3xl text-ink sm:text-4xl">
          Built Around Your Home.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.number} className="flex gap-6 py-7 sm:py-8">
                <span className="font-serif text-xl text-accent sm:text-2xl">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-stone">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src={servicesImage.src}
              alt={servicesImage.alt}
              width={servicesImage.width}
              height={servicesImage.height}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
