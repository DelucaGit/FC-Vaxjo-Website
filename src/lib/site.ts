/**
 * Club facts that every page shares.
 * Change the public address here before launch. Canonical links and the sitemap use it.
 */
export const site = {
  name: "FC Växjö",
  url: "https://fcvaxjo.se",
  founded: "1989",
  email: "info@fcvaxjo.se",
  formEmail: "bakhtiar@fcvaxjo.se",
  phone: "073-344 91 39",
  address: {
    street: "Hjälmar Petris väg 3A",
    postalCode: "352 47",
    city: "Växjö",
  },
  pitchName: "Arabyvallen",
};

const mapsQuery = `${site.pitchName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapsQuery);

export const mapsEmbedUrl =
  "https://maps.google.com/maps?q=" + encodeURIComponent(mapsQuery) + "&hl=sv&z=16&output=embed";

export const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/nyheter", label: "Nyheter" },
  { href: "/traningstider", label: "Träningstider" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Turn a Swedish mobile number into a tel: link. */
export function phoneHref(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.startsWith("0")) {
    return `tel:+46${digits.slice(1)}`;
  }
  return `tel:+${digits}`;
}
