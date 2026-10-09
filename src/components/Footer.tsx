import logo from "../assets/images/logo-transparent.png";
import { business, services } from "../data/business";

const year = new Date().getFullYear();

type FooterProps = {
  onSelectService: (index: number) => void;
};

export default function Footer({ onSelectService }: FooterProps) {
  return (
    <footer className="bg-ink py-14 text-paper/70">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <img
              src={logo}
              alt={business.name}
              width={403}
              height={320}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-4 max-w-55 text-sm">
              Family-owned construction based in Tacoma.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#services" className="transition-colors duration-300 hover:text-paper">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors duration-300 hover:text-paper">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors duration-300 hover:text-paper">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors duration-300 hover:text-paper">
                  Start Your Project
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service, index) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    onClick={() => onSelectService(index)}
                    className="transition-colors duration-300 hover:text-paper"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Let&rsquo;s Connect</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={business.phoneHref}
                className="inline-flex h-11 w-fit items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark"
              >
                Call Our Team
              </a>
              <a
                href={business.emailHref}
                className="inline-flex h-11 w-fit items-center justify-center rounded-lg border border-paper/25 px-5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-paper/50"
              >
                Email Us
              </a>
            </div>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-sm transition-colors duration-300 hover:text-paper"
            >
              Facebook
            </a>
            <p className="mt-4 text-sm">Serving King &amp; Pierce Counties</p>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-6">
          <p className="text-xs text-paper/50">
            &copy; {year} {business.name} All rights reserved.
          </p>
          <p className="mt-1 text-xs text-paper/50">Tacoma, Washington</p>
        </div>
      </div>
    </footer>
  );
}
