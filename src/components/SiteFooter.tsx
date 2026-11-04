import Link from "next/link";
import { partners } from "@/data/clubContent";
import { phoneHref, site } from "@/lib/site";

const quickLinks = [
  { href: "/nyheter", label: "Nyheter" },
  { href: "/traningstider", label: "Träningstider" },
  { href: "/om-oss", label: "Om klubben och historik" },
  { href: "/bli-medlem", label: "Bli medlem" },
  { href: "/bli-medlem#sponsra", label: "Sponsorpaket" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-footer text-stone-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl uppercase tracking-wide text-white">{site.name}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Fotbollsklubben i Småland
          </p>
          <p className="mt-4 text-sm leading-6 text-stone-300">
            En fotbollsförening med rötterna i Småland och hjärtat på Arabyvallen. Vi främjar
            ungdomsutveckling, gemenskap och sportslig framgång sedan {site.founded}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Snabblänkar
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Klubbkansli
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-stone-300">
            <p>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <p>
              <a className="hover:text-white" href={phoneHref(site.phone)}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>Hemmaarena: {site.pitchName}</p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Föreningsallians
          </h2>
          <p className="mt-4 text-sm leading-6 text-stone-300">
            Ansluten till Smålands Fotbollförbund och Svenska Fotbollförbundet.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
            {partners.slice(0, 4).map((name) => (
              <li key={name} className="rounded border border-white/15 px-2 py-1">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-stone-400 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Grundad {site.founded}.
        </p>
      </div>
    </footer>
  );
}
