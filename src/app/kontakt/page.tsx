import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { MailForm } from "@/components/MailForm";
import { PageIntro } from "@/components/PageIntro";
import { leaders } from "@/data/clubContent";
import { mapsEmbedUrl, mapsUrl, phoneHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta FC Växjö på Arabyvallen. Adress Hjälmar Petris väg 3A, telefon, e-post och vägbeskrivning med buss, parkering och cykel.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro kicker="Klubbkansli · Arabyvallen" title="Kontakta FC Växjö">
        Hör av dig. Vi finns här för spelare, föräldrar, supportrar och samarbetspartners.
      </PageIntro>

      <Container className="grid gap-4 py-12 md:grid-cols-3">
        <article className="rounded-xl border border-stone-200 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Besöksadress</h2>
          <p className="mt-2">
            {site.pitchName}
            <br />
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
          <a className="mt-3 inline-block text-sm font-semibold text-crimson" href={mapsUrl}>
            Visa vägbeskrivning
          </a>
        </article>
        <article className="rounded-xl border border-stone-200 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">E-post</h2>
          <p className="mt-2">
            <a className="font-semibold text-crimson" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-stone-600">
            Vi svarar på föreningsärenden inom 24 timmar på vardagar.
          </p>
        </article>
        <article className="rounded-xl border border-stone-200 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Telefon</h2>
          <p className="mt-2">
            <a className="font-semibold text-crimson" href={phoneHref(site.phone)}>
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-stone-600">Vardagar kl. 10:00–18:00.</p>
        </article>
      </Container>

      <section className="bg-stone-50">
        <Container className="grid gap-10 py-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase text-crimson">Skicka ett meddelande</h2>
            <p className="mt-2 text-stone-700">
              Fyll i formuläret och skicka. Meddelandet går direkt till klubben.
            </p>
            <div className="mt-6">
              <MailForm
                subject="Meddelande via fcvaxjo.se"
                submitLabel="Skicka meddelande"
                fields={[
                  { name: "name", label: "Fullständigt namn", required: true },
                  { name: "email", label: "E-postadress", type: "email", required: true },
                  { name: "phone", label: "Telefonnummer", type: "tel" },
                  {
                    name: "topic",
                    label: "Vad gäller ärendet?",
                    type: "select",
                    required: true,
                    options: [
                      "Ungdomslag och provträning",
                      "Sponsring och företagssamarbete",
                      "Medlemsfråga och avgifter",
                      "Matchbokning och arena",
                      "Allmän föreningsfråga",
                    ],
                  },
                  { name: "message", label: "Meddelande", type: "textarea", required: true },
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase text-crimson">Hitta till Arabyvallen</h2>
            <iframe
              title="Karta till Arabyvallen"
              src={mapsEmbedUrl}
              className="mt-4 h-80 w-full rounded-xl border border-stone-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <ul className="mt-4 space-y-3 text-sm text-stone-700">
              <li>
                <strong>Buss.</strong> Linje 1 och linje 2 från Växjö resecentrum. Stig av vid Araby
                Centrum, sedan cirka tre minuters promenad.
              </li>
              <li>
                <strong>Parkering.</strong> Fri parkering med P-skiva vid idrottsplatsen längs{" "}
                {site.address.street}.
              </li>
              <li>
                <strong>Cykel.</strong> Cykelbana från Stortorget, cirka åtta minuter.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <h2 className="font-display text-3xl uppercase text-crimson">Nyckelpersoner</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.email} className="rounded-xl border border-stone-200 p-5">
              <h3 className="font-display text-2xl uppercase">{leader.name}</h3>
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
          <article className="rounded-xl border border-stone-200 p-5">
            <h3 className="font-display text-2xl uppercase">Kansli och matcharena</h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
              Administration
            </p>
            <p className="mt-2 text-sm text-stone-700">
              Medlemsregister, matchprotokoll, planbokning och domaradministration.
            </p>
            <p className="mt-3 text-sm">
              <a className="text-crimson" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <br />
              Mån–fre 10:00–18:00
            </p>
          </article>
        </div>

        <aside className="mt-10 rounded-xl bg-stone-900 p-6 text-white">
          <h2 className="font-display text-3xl uppercase">Vill du spela, engagera dig eller sponsra?</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/bli-medlem#sponsra" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-stone-900">
              Sponsra klubben
            </Link>
            <Link href="/bli-medlem" className="rounded-md bg-crimson px-4 py-2 text-sm font-semibold text-white">
              Bli medlem
            </Link>
          </div>
        </aside>
      </Container>
    </>
  );
}
