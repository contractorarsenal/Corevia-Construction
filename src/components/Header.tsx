import { useEffect, useState } from "react";
import logo from "../assets/images/logo-transparent.png";
import { business } from "../data/business";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-ink/20" : "shadow-none"
      }`}
    >
      <div
        className={`mx-auto flex max-w-300 items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-2.5" : "py-2.5 sm:py-3"
        }`}
      >
        <a
          href="#top"
          className="flex items-center rounded-sm bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          aria-label={business.name}
        >
          <img
            src={logo}
            alt={business.name}
            width={403}
            height={320}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-13 sm:h-13.5" : "h-13 sm:h-16"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/80 transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={business.phoneHref}
            className="bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-accent-dark"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-paper/10 bg-ink px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-paper/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-base font-medium text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={business.phoneHref}
            className="mt-4 block bg-accent px-5 py-3 text-center text-sm font-semibold text-paper"
          >
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
