import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Work_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FC Växjö | Fotbollsklubb i Växjö sedan 1989",
    template: "%s | FC Växjö",
  },
  description:
    "FC Växjö är en ungdomsfotbollsförening på Arabyvallen i Växjö, grundad 1989. Träningstider, nyheter, medlemskap och kontakt.",
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    title: "FC Växjö | Fotbollsklubb i Växjö sedan 1989",
    description:
      "Gemenskap, glädje och framtidstro på Arabyvallen. Ungdomsfotboll i hjärtat av Småland.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const clubJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: site.name,
  sport: "Soccer",
  foundingDate: site.founded,
  url: site.url,
  email: site.email,
  telephone: "+46733449139",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "SE",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className={`${anton.variable} ${workSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          Hoppa till innehållet
        </a>
        <SiteHeader />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clubJsonLd) }}
        />
      </body>
    </html>
  );
}
