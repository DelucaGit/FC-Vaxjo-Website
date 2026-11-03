import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { MailForm } from "@/components/MailForm";
import { MatchList } from "@/components/MatchList";
import { awards, partners, sponsorLevels } from "@/data/clubContent";
import { images } from "@/data/images";
import { matches } from "@/data/matches";
import { featuredStory, newsNotes } from "@/data/news";
import { teams } from "@/data/teams";
import { phoneHref, site } from "@/lib/site";

const cupMatches = matches.filter((match) => match.tag === "MatchCamp");

export default function HomePage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Stolt förening sedan {site.founded} · {site.pitchName}
            </p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-none tracking-wide text-crimson sm:text-7xl">
              FC Växjö
              <span className="mt-2 block text-stone-900">sedan {site.founded}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700">
              Gemenskap, glädje och framtidstro på Arabyvallen. Vi fostrar morgondagens
              fotbollsspelare och bygger en inkluderande idrottsfamilj i hjärtat av Småland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/traningstider"
                className="rounded-md bg-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-crimson-dark"
              >
                Se träningstider
              </Link>
              <Link
                href="/bli-medlem#sponsra"
                className="rounded-md border border-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-crimson hover:bg-red-50"
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

          <aside className="rounded-xl border border-stone-200 bg-stone-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              MatchCamp i Tipshallen
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-stone-900">
              Cupdag i Tipshallen
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Lördag arrangerad av Öster IF med 9v9 och 7v7. Fri entré.
            </p>
            <ul className="mt-5 space-y-3">
              {cupMatches.map((match) => (
                <li key={match.id} className="flex items-baseline justify-between gap-3 border-b border-stone-200 pb-3">
                  <span>
                    <span className="font-display text-xl text-crimson">{match.time}</span>
                    <span className="mt-1 block text-sm text-stone-700">
                      {match.home} mot {match.away}
                    </span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {match.format}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/nyheter/matchcamp-tipshallen"
              className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-crimson"
            >
              Läs om cupen
            </Link>
          </aside>
        </Container>
      </section>

      <section className="bg-stone-50 py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl uppercase tracking-wide text-crimson">Senaste nytt</h2>
            <Link href="/nyheter" className="text-sm font-semibold uppercase tracking-wide text-crimson">
              Alla nyheter
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-5">
            <article className="overflow-hidden rounded-xl border border-stone-200 bg-white lg:col-span-3">
              <Image
                src={featuredStory.image ?? images.indoorMatch}
                alt={featuredStory.imageAlt ?? ""}
                width={1200}
                height={700}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                  {featuredStory.category} · {featuredStory.date}
                </p>
                <h3 className="mt-2 font-display text-3xl uppercase leading-tight tracking-wide text-stone-900">
                  {featuredStory.title}
                </h3>
                <p className="mt-3 text-stone-700">{featuredStory.summary}</p>
                <Link
                  href={featuredStory.href ?? "/nyheter"}
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-crimson"
                >
                  Läs spelschema
                </Link>
              </div>
            </article>
            <div className="grid gap-6 lg:col-span-2">
              {newsNotes.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-xl border border-stone-200 bg-white">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      width={800}
                      height={450}
                      className="h-36 w-full object-cover"
                    />
                  ) : null}
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                      {item.category} · {item.date}
                    </p>
                    <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-700">{item.summary}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-3 inline-block text-sm font-semibold uppercase tracking-wide text-crimson"
                      >
                        Läs mer
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16" id="traningstider">
        <Container>
          <h2 className="font-display text-4xl uppercase tracking-wide text-crimson">
            Träningstider på Arabyvallen
          </h2>
          <p className="mt-3 max-w-2xl text-stone-700">
            Träning för ungdomslagen med ledare på Arabyvallen.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
            to={site.email}
            subject="Sponsorförfrågan till FC Växjö"
            submitLabel="Skicka förfrågan"
            onDark
            fields={[
              { name: "name", label: "Företag eller namn", required: true },
              { name: "contact", label: "Telefon eller e-post", required: true },
              {
                name: "level",
                label: "Önskad nivå",
                type: "select",
                required: true,
                options: [
                  ...sponsorLevels.map((level) => `${level.name} – ${level.price}`),
                  "Föreningsvän / valfritt belopp",
                ],
              },
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
          <div className="mt-10">
            <h2 className="font-display text-3xl uppercase tracking-wide text-crimson">Spelschema</h2>
            <div className="mt-4">
              <MatchList matches={matches} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
