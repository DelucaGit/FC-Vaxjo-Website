import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { images } from "@/data/images";
import { clubNotices } from "@/data/news";

export const metadata: Metadata = {
  title: "MatchCamp i Tipshallen",
  description:
    "FC Växjös P13, P15 och P16 spelar MatchCamp i Tipshallen. Läs spelschema och praktisk information för anhöriga.",
  alternates: { canonical: "/nyheter/matchcamp-tipshallen" },
  openGraph: {
    type: "article",
    publishedTime: "2026-04-11",
    locale: "sv_SE",
  },
};

const articleMatches = [
  {
    time: "10:20",
    format: "9 mot 9",
    team: "FC Växjö P13",
    opponent: "Växjö Norra IF",
    detail: "Plan A · 2 × 25 min",
  },
  {
    time: "12:00",
    format: "7 mot 7",
    team: "FC Växjö P15",
    opponent: "Öster IF",
    detail: "Plan B · 2 × 20 min",
  },
  {
    time: "12:50",
    format: "7 mot 7",
    team: "FC Växjö P16",
    opponent: "Sävsjö FF",
    detail: "Plan B · 2 × 20 min",
  },
];

export default function MatchCampArticle() {
  return (
    <article>
      <Container className="py-8">
        <nav aria-label="Brödsmulor" className="text-sm text-stone-600">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-crimson">
                Hem
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/nyheter" className="hover:text-crimson">
                Nyheter
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">MatchCamp i Tipshallen</li>
          </ol>
        </nav>
      </Container>

      <header className="border-b border-stone-200">
        <Container className="pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            Cup och tävling · 11 april 2026 · 3 min läsning
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-tight tracking-wide text-crimson sm:text-6xl">
            FC Växjö deltar i vårens MatchCamp i Tipshallen
          </h1>
          <p className="mt-4 text-sm text-stone-600">
            Publicerad av kansliet · Arabyvallen, Växjö
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-800">
            P13, P15 och P16 kliver in i cupsäsongen med full trupp. Helgen bjuder på intensiv
            fotboll och fri entré för supportrar och anhöriga.
          </p>
        </Container>
      </header>

      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-stone-800">
          <Image
            src={images.lake}
            alt="Sjö och skog i Småland under en ljus vårdag"
            width={1400}
            height={800}
            className="w-full rounded-xl object-cover"
            priority
          />
          <p className="text-sm text-stone-500">Småland</p>

          <h2 className="font-display text-3xl uppercase tracking-wide text-crimson">
            Förberedelser och lagsammanhållning
          </h2>
          <p>
            Efter veckor av träning på Arabyvallen är det dags för säsongens första stora
            inomhusprövning. MatchCamp i Tipshallen samlar ungdomslag för en heldag med fartfylld
            fotboll och idrottsglädje.
          </p>
          <p>
            Tränarna, med Mirnes Muminovic för P15, har lagt vikt vid bollinnehav, snabba
            omställningar och kamratskap. Klubben ställer upp med P13, P15 och P16.
          </p>
          <blockquote className="border-l-4 border-gold pl-4 text-stone-700">
            <p>
              ”Det här blir ett kvitto på vinterns träning på Arabyvallen. Killarna har tränat
              hårt och vi ser fram emot att mäta oss med Öster och Sävsjö.”
            </p>
            <footer className="mt-2 text-sm">Mirnes Muminovic, tränare P15</footer>
          </blockquote>

          <h2 className="font-display text-3xl uppercase tracking-wide text-crimson">
            Spelschema i Tipshallen
          </h2>
          <p>Lördag förmiddag. Matcher enligt klubbens spelschema.</p>
          <ul className="space-y-4">
            {articleMatches.map((match) => (
              <li key={match.time} className="rounded-xl border border-stone-200 p-4">
                <p className="font-display text-3xl text-crimson">{match.time}</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  {match.format}
                </p>
                <p className="mt-1">
                  {match.team} mot {match.opponent}
                </p>
                <p className="text-sm text-stone-600">{match.detail}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-500">Tre matcher på lördagen.</p>

          <h2 className="font-display text-3xl uppercase tracking-wide text-crimson">
            Praktisk information för anhöriga
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Fri entré. Läktarna är öppna hela dagen.</li>
            <li>Kiosken har kaffe, smörgåsar, dryck och fika.</li>
            <li>Samling för respektive lag 45 minuter före avspark vid huvudentrén.</li>
          </ul>
        </div>

        <aside className="space-y-4">
          <h2 className="font-display text-2xl uppercase text-crimson">Fler notiser</h2>
          {clubNotices.map((notice) => (
            <article key={notice.id} className="rounded-xl border border-stone-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {notice.category} · {notice.date}
              </p>
              <h3 className="mt-1 font-semibold text-stone-900">{notice.title}</h3>
              <Link href={`/nyheter#${notice.id}`} className="mt-2 inline-block text-sm text-crimson">
                Läs på nyhetssidan
              </Link>
            </article>
          ))}
          <div className="rounded-xl bg-crimson p-5 text-white">
            <h2 className="font-display text-2xl uppercase">Vill du vara med?</h2>
            <p className="mt-2 text-sm text-red-50">
              Bli medlem som spelare, eller hör av dig om du vill bli ledare.
            </p>
            <Link href="/bli-medlem" className="mt-4 inline-block text-sm font-semibold uppercase underline">
              Bli medlem
            </Link>
          </div>
        </aside>
      </Container>
    </article>
  );
}
