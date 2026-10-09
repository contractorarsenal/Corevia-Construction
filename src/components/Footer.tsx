import logo from "../assets/images/logo.jpg";
import { business } from "../data/business";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-paper/80">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <img
              src={logo}
              alt={business.name}
              width={168}
              height={133}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-paper">{business.name}</p>
            <p className="mt-1 text-sm">{business.address.line1}</p>
            <p className="text-sm">{business.address.line2}</p>
          </div>

          <div className="space-y-1.5 text-sm">
            <a href={business.phoneHref} className="block hover:text-paper">
              {business.phone}
            </a>
            <a href={business.emailHref} className="block hover:text-paper">
              {business.email}
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-paper"
            >
              Facebook
            </a>
          </div>

          <div className="text-sm">
            <p>Serving King &amp; Pierce Counties, Washington</p>
          </div>
        </div>

        <p className="mt-10 border-t border-paper/10 pt-6 text-xs text-paper/50">
          &copy; {year} {business.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
