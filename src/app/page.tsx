import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { MailForm } from "@/components/MailForm";
import { MatchList } from "@/components/MatchList";
import { awards, partners } from "@/data/clubContent";
import { images } from "@/data/images";
import { formatMatchDate, getUpcomingMatches } from "@/data/matches";
import { teams } from "@/data/teams";
import { phoneHref, site } from "@/lib/site";

export default function HomePage() {
  const upcomingMatches = getUpcomingMatches();
  const previewMatches = upcomingMatches.slice(0, 4);
  const nextMatch = upcomingMatches[0];
  const nextMatchDate = nextMatch ? formatMatchDate(nextMatch.date) : null;

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <Container className="py-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Stolt förening sedan {site.founded} · {site.pitchName}
              </p>
              <h1 className="mt-5 font-display text-5xl uppercase leading-none tracking-wide text-crimson sm:text-7xl">
                FC Växjö
                <span className="mt-2 block text-stone-900">sedan {site.founded}</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700">
                Gemenskap, glädje och framtidstro på Arabyvallen. Vi fostrar morgondagens
                fotbollsspelare och bygger en inkluderande idrottsfamilj i hjärtat av Småland.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/matcher"
                  className="rounded-md bg-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-dark"
                >
                  Kommande matcher
                </Link>
                <Link
                  href="/traningstider"
                  className="rounded-md border border-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-crimson hover:bg-red-50"
                >
                  Se träningstider
                </Link>
                <Link
                  href="/bli-medlem#sponsra"
                  className="rounded-md border border-stone-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-stone-700 hover:bg-stone-50"
                >
                  Bli sponsor
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6">
                <div>
                  <dt className="font-display text-4xl text-crimson">35+</dt>
                  <dd className="text-sm text-stone-600">År av fotboll</dd>
                </div>
                <div>
                  <dt className="font-display text-4xl text-crimson">3</dt>
                  <dd className="text-sm text-stone-600">Aktiva lag</dd>
                </div>
                <div>
                  <dt className="font-display text-4xl text-crimson">100%</dt>
                  <dd className="text-sm text-stone-600">Gemenskap</dd>
                </div>
              </dl>
            </div>

            <div className="hidden lg:col-span-5 lg:block lg:-translate-y-8">
              <div className="relative mx-auto max-w-lg pr-3 pb-3">
                {/* Dekorativ asymmetrisk accentram (vinröd & guld) */}
                <div
                  aria-hidden="true"
                  className=" -top-2.5 -left-2.5 absolute h-20 w-20 rounded-tl-2xl border-t-2 border-l-2 border-gold/70"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-gold/40 bg-gradient-to-br from-crimson via-crimson-dark to-stone-900 shadow-lg"
                />

                {/* Huvudkort med bild & varm färgtoning */}
                <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-900 shadow-xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={images.heroGoal}
                      alt="Fotboll i målnätet för FC Växjö"
                      width={1024}
                      height={682}
                      preload
                      className="h-full w-full object-cover object-right contrast-[1.04] saturate-[1.05]"
                    />
                    {/* Subtil varm toning som mjukar upp den kalla blå himlen */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-amber-900/10 mix-blend-multiply"
                    />
                    {/* Varm/vinröd gradient i nederkant */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/90 via-crimson-dark/35 to-transparent"
                    />
                  </div>

                  {/* Flytande badge i nederkant */}
                  <div className="absolute inset-x-4 bottom-4">
                    {nextMatch && nextMatchDate ? (
                      <Link
                        href="/matcher"
                        className="group block rounded-xl border border-white/15 bg-white/95 p-3.5 shadow-lg backdrop-blur-sm transition hover:border-crimson/40 hover:bg-white"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-crimson">
                            <span className="h-2 w-2 rounded-full bg-crimson" />
                            Nästa match · {nextMatchDate.fullLabel} kl. {nextMatch.time}
                          </span>
                          {nextMatch.group ? (
                            <span className="rounded bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-crimson">
                              {nextMatch.group}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 font-display text-lg uppercase tracking-wide text-stone-900 group-hover:text-crimson">
                          {nextMatch.home} <span className="text-stone-400">mot</span>{" "}
                          {nextMatch.away}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                          {nextMatch.place}
                        </p>
                      </Link>
                    ) : (
                      <div className="rounded-xl border border-white/15 bg-white/95 p-3.5 shadow-lg backdrop-blur-sm">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-crimson">
                          Hemmaplan · {site.pitchName}
                        </p>
                        <p className="mt-1 font-display text-lg uppercase tracking-wide text-stone-900">
                          FC Växjö · Gemenskap sedan {site.founded}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-stone-50 py-16" id="matcher">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Spelschema
              </p>
              <h2 className="mt-2 font-display text-4xl uppercase tracking-wide text-crimson">
                Kommande matcher
              </h2>
              <p className="mt-2 max-w-2xl text-stone-700">
                Här visas våra närmaste matcher med tid, plan och matchnummer. Resultat publiceras
                på matchsidan efter spelad match.
              </p>
            </div>
            <Link
              href="/matcher"
              className="shrink-0 rounded-md bg-crimson px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-dark"
            >
              Se alla matcher & resultat ({upcomingMatches.length})
            </Link>
          </div>

          <div className="mt-8">
            <MatchList
              matches={previewMatches}
              emptyMessage="Inga kommande matcher är inlagda just nu."
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16" id="traningstider">
        <Container>
          <h2 className="font-display text-4xl uppercase tracking-wide text-crimson">
            Träningstider på Centrumskolan
          </h2>
          <p className="mt-3 max-w-2xl text-stone-700">
            Träning för fotbollsskolan och ungdomslagen med ledare på Centrumskolan.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teams.map((team) => (
              <article key={team.id} className="rounded-xl border border-stone-200 p-6">
                <h3 className="font-display text-3xl uppercase text-crimson">{team.name}</h3>
                <p className="text-sm text-stone-600">{team.group}</p>
                <ul className="mt-4 space-y-1 text-stone-800">
                  {team.sessions.map((session) => (
                    <li key={session.day}>
                      {session.day} {session.time}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-stone-700">{team.pitch}</p>
                {team.coaches.length > 0 ? (
                  <ul className="mt-3 space-y-1 text-sm">
                    {team.coaches.map((coach) => (
                      <li key={coach.phone}>
                        {coach.name}{" "}
                        <a className="text-crimson" href={phoneHref(coach.phone)}>
                          {coach.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          <Link
            href="/traningstider"
            className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-crimson"
          >
            Mer om träning och provträning
          </Link>
        </Container>
      </section>

      <section className="bg-stone-50 py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Klubbens historia sedan {site.founded}
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-wide text-crimson">
              En stolt resa för gemenskap
            </h2>
            <p className="mt-4 text-stone-700">
              FC Växjö grundades {site.founded} med en enkel vision: fotbollen som brobyggare mellan
              kulturer, ungdomar och stadsdelar. På Arabyvallen har unga fått en meningsfull fritid,
              laganda och drömmar för livet.
            </p>
            <Link
              href="/om-oss"
              className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-crimson"
            >
              Läs hela historien
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {awards.map((award) => (
              <li key={award.year + award.title} className="rounded-xl border border-stone-200 bg-white p-4">
                <p className="font-display text-2xl text-crimson">{award.year}</p>
                <h3 className="font-semibold text-stone-900">{award.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{award.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-crimson text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase tracking-wide">
              Vill du sponsra FC Växjös ungdomsverksamhet?
            </h2>
            <p className="mt-4 text-red-50">
              Ditt stöd hjälper till med utrustning, cupspel, planhyra och trygga sammanhang för barn
              och ungdomar i Växjö.
            </p>
            <p className="mt-6 text-sm">
              Bakthiar Mohammed, ordförande
              <br />
              <a className="underline" href={phoneHref(site.phone)}>
                {site.phone}
              </a>
              {" · "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <MailForm
            subject="Sponsorförfrågan till FC Växjö"
            submitLabel="Skicka förfrågan"
            onDark
            fields={[
              { name: "name", label: "Företag eller namn", required: true },
              { name: "contact", label: "Telefon eller e-post", required: true },
              { name: "message", label: "Meddelande", type: "textarea", required: true },
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-center font-display text-3xl uppercase tracking-wide text-crimson">
            Våra samarbetspartners
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((name) => (
              <li
                key={name}
                className="flex min-h-20 items-center justify-center rounded-lg border border-stone-200 px-3 text-center text-sm font-semibold uppercase tracking-wide text-stone-700"
              >
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
