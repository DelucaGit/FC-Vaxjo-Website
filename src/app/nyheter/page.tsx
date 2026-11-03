import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { MatchList } from "@/components/MatchList";
import { PageIntro } from "@/components/PageIntro";
import { images } from "@/data/images";
import { matches } from "@/data/matches";
import { clubNotices, featuredStory } from "@/data/news";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nyheter och spelschema",
  description:
    "Nyheter, föreningsnotiser och spelschema för FC Växjös ungdomslag på Arabyvallen och i cuper.",
  alternates: { canonical: "/nyheter" },
};

export default function NewsPage() {
  return (
    <>
      <PageIntro kicker="Säsongen 2026 · Ungdomsserier och cuper" title="Nyheter och spelschema">
        Följ FC Växjös ungdomslag och ta del av uppdateringar från {site.pitchName}.
      </PageIntro>

      <Container className="py-12">
        <article className="grid overflow-hidden rounded-xl border border-stone-200 bg-white lg:grid-cols-2">
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
              {featuredStory.category} · {featuredStory.date} · Tipshallen
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-crimson">
              FC Växjö deltar i vårens MatchCamp i Tipshallen
            </h2>
            <p className="mt-4 text-stone-700">
              P13, P15 och P16 kliver in i cupsäsongen. Helgen bjuder på 7v7 och 9v9 mot regionalt
              motstånd. Fri entré för anhöriga och supportrar.
            </p>
            <Link
              href="/nyheter/matchcamp-tipshallen"
              className="mt-6 inline-block rounded-md bg-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Läs hela artikeln
            </Link>
          </div>
          <Image
            src={images.lake}
            alt="Sjö och skog i Småland, ett landskap nära Växjö"
            width={1200}
            height={800}
            className="h-full min-h-64 w-full object-cover"
          />
        </article>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-wide text-crimson">
          Senaste föreningsnotiser
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {clubNotices.map((notice) => (
            <article id={notice.id} key={notice.id} className="rounded-xl border border-stone-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                {notice.category} · {notice.date}
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-stone-900">
                {notice.title}
              </h3>
              <p className="mt-2 text-sm text-stone-700">{notice.summary}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-wide text-crimson">
          Spelschema
        </h2>
        <p className="mt-2 text-sm text-stone-600">Arabyvallen och Tipshallen</p>
        <div className="mt-4">
          <MatchList matches={matches} />
        </div>

        <aside className="mt-10 rounded-xl bg-stone-50 p-6">
          <h2 className="font-display text-2xl uppercase text-crimson">Matchdag på Arabyvallen</h2>
          <p className="mt-2 max-w-3xl text-stone-700">
            Vid hemmamatcher håller föreningskiosken öppet med kaffe, fika, dryck och korv. Intäkterna
            går till ungdomslagens cuper och läger. Fri entré.
          </p>
          <p className="mt-3 text-sm text-stone-600">
            {site.pitchName}, {site.address.street}, {site.address.city}
          </p>
        </aside>
      </Container>
    </>
  );
}
