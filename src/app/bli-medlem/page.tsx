import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MailForm } from "@/components/MailForm";
import { PageIntro } from "@/components/PageIntro";
import { partners, sponsorLevels } from "@/data/clubContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bli medlem och sponsra",
  description:
    "Anmäl intresse för att spela i FC Växjö, eller bli partner. Tre nivåer för företag.",
  alternates: { canonical: "/bli-medlem" },
};

export default function JoinPage() {
  return (
    <>
      <PageIntro kicker="För spelare, familjer och partners" title="Bli medlem och samarbeta">
        FC Växjö bygger gemenskap och framtidstro med fotbollen. Hör av dig om du vill börja spela.
      </PageIntro>

      <Container className="grid gap-12 py-12 lg:grid-cols-2">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            För spelare och familj
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase text-crimson">Spela fotboll</h2>
          <p className="mt-3 text-stone-700">
            Hos oss är gemenskapen stor. Verksamheten leds av engagerade tränare. Hör av dig så
            berättar vi mer om vad det kostar och hur träningen ser ut.
          </p>
          <div className="mt-6">
            <MailForm
              subject="Intresseanmälan spelare FC Växjö"
              submitLabel="Skicka intresseanmälan"
              fields={[
                { name: "player", label: "Spelarens namn", required: true },
                { name: "year", label: "Födelseår", required: true },
                { name: "phone", label: "Telefon", type: "tel", required: true },
                { name: "guardian", label: "Vårdnadshavare", required: true },
                { name: "email", label: "E-postadress", type: "email", required: true },
              ]}
            />
          </div>
        </section>

        <section id="sponsra">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            För företag och näringsliv
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase text-crimson">Partnernivåer</h2>
          <p className="mt-3 text-stone-700">
            Ett partnerskap är en investering i meningsfull fritid, trygghet och idrottsglädje för
            barn och ungdomar i Växjö.
          </p>
          <ul className="mt-6 space-y-4">
            {sponsorLevels.map((level) => (
              <li key={level.name} className="rounded-xl border border-stone-200 p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl uppercase text-stone-900">
                    {level.name} · {level.title}
                  </h3>
                  <p className="font-semibold text-crimson">{level.price}</p>
                </div>
                <p className="mt-2 text-sm text-stone-700">{level.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone-700">
            Avtal: Bakthiar Mohammed, ordförande · {site.phone} · {site.email}
          </p>
        </section>
      </Container>

      <section className="border-t border-stone-200 bg-stone-50">
        <Container className="py-10">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
            Samarbeten och officiella partners
          </h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {partners.map((name) => (
              <li key={name} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold">
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
