import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { images } from "@/data/images";
import { teams } from "@/data/teams";
import { mapsUrl, phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Träningstider",
  description:
    "Träningstider för FC Växjös ungdomslag P13, P15 och P16 på Arabyvallen i Växjö, med kontakt till tränarna.",
  alternates: { canonical: "/traningstider" },
};

export default function TrainingPage() {
  return (
    <>
      <PageIntro kicker="Säsongen 2026 · Arabyvallen" title="Träningstider och våra lag">
        Här finns träningstider för FC Växjös ungdomslag och telefon till respektive tränare.
      </PageIntro>

      <Container className="grid gap-6 py-12 md:grid-cols-3">
        {teams.map((team) => (
          <article key={team.id} className="rounded-xl border border-stone-200 p-6">
            <h2 className="font-display text-4xl uppercase text-crimson">{team.name}</h2>
            <p className="text-stone-600">{team.group}</p>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-stone-500">
              Pass
            </h3>
            <ul className="mt-2 space-y-1">
              {team.sessions.map((session) => (
                <li key={session.day}>
                  {session.day} {session.time}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold">{team.pitch}</p>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-stone-500">
              Tränare
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {team.coaches.map((coach) => (
                <li key={coach.phone}>
                  {coach.name}{" "}
                  <a className="font-semibold text-crimson" href={phoneHref(coach.phone)}>
                    {coach.phone}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Container>

      <section className="bg-stone-50">
        <Container className="grid items-center gap-8 py-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase text-crimson">Vill du provträna?</h2>
            <p className="mt-3 text-stone-700">
              Alla barn är välkomna att testa tre träningar utan kostnad. Ta med gympaskor och kom
              till Arabyvallen vid lagets träningstid.
            </p>
            <Link
              href="/bli-medlem"
              className="mt-5 inline-block rounded-md bg-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Skicka intresseanmälan
            </Link>
          </div>
          <div>
            <Image
              src={images.pitch}
              alt="Grön fotbollsplan på Arabyvallen, omgiven av skog"
              width={1200}
              height={700}
              className="w-full rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-stone-700">
              {site.pitchName}, {site.address.street}, {site.address.postalCode} {site.address.city}
            </p>
            <a
              href={mapsUrl}
              className="mt-2 inline-block text-sm font-semibold text-crimson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Öppna vägbeskrivning
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
