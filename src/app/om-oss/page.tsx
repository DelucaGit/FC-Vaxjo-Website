import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { awards, historySteps, leaders, values } from "@/data/clubContent";
import { phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Historien om FC Växjö, från PARS IF 1989 till ungdomsfotboll på Arabyvallen. Värdegrund, utmärkelser och kontakt till ledningen.",
  alternates: { canonical: "/om-oss" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="Föreningshistoria · Arabyvallen, Växjö" title="Ett hjärta för Araby och Växjö">
        Mer än bara fotboll. FC Växjö grundades med visionen att idrotten ska bygga broar, skapa
        framtidstro och ge varje barn en trygg gemenskap.
      </PageIntro>

      <Container className="py-12">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["35+", "År i samhällets tjänst"],
            ["5", "Hedersutmärkelser"],
            ["3", "Ungdomslag: P13, P15, P16"],
            ["1989", "Grundat i Växjö"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-stone-200 p-5">
              <dt className="font-display text-4xl text-crimson">{value}</dt>
              <dd className="mt-1 text-sm text-stone-600">{label}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-wide text-crimson">
          Resan från 1989 till i dag
        </h2>
        <ol className="mt-6 space-y-6">
          {historySteps.map((step) => (
            <li key={step.year} className="grid gap-2 border-l-4 border-crimson pl-5 sm:grid-cols-[8rem_1fr]">
              <p className="font-display text-3xl text-crimson">{step.year}</p>
              <div>
                <h3 className="font-display text-2xl uppercase text-stone-900">
                  {step.name} · {step.title}
                </h3>
                <p className="mt-1 text-stone-700">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-wide text-crimson">
          Värdegrund
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <article key={value.title} className="rounded-xl border border-stone-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                Pelare {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase text-stone-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{value.text}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-wide text-crimson">
          Utmärkelser
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {awards.map((award) => (
            <li key={award.year + award.title} className="rounded-xl bg-stone-50 p-5">
              <p className="font-display text-3xl text-crimson">{award.year}</p>
              <h3 className="font-semibold">{award.title}</h3>
              <p className="mt-1 text-sm text-stone-700">{award.text}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-display text-3xl uppercase tracking-wide text-crimson">
          Klubbens ledning
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.email} className="rounded-xl border border-stone-200 p-5">
              <h3 className="font-display text-2xl uppercase text-stone-900">{leader.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                {leader.role}
              </p>
              <p className="mt-2 text-sm text-stone-700">{leader.text}</p>
              <p className="mt-3 text-sm">
                <a className="text-crimson" href={phoneHref(leader.phone)}>
                  {leader.phone}
                </a>
                <br />
                <a className="text-crimson" href={`mailto:${leader.email}`}>
                  {leader.email}
                </a>
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-10 rounded-xl bg-crimson p-6 text-white">
          <h2 className="font-display text-3xl uppercase">Vill du engagera dig?</h2>
          <p className="mt-2 max-w-2xl text-red-50">
            Vi välkomnar ungdomsspelare, föräldraledare och företag som delar passionen för fotboll
            på {site.pitchName}.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-wide">
            <Link href="/kontakt" className="underline">
              Kontakta styrelsen
            </Link>
            <Link href="/bli-medlem#sponsra" className="underline">
              Läs om sponsorskap
            </Link>
          </div>
        </aside>
      </Container>
    </>
  );
}
