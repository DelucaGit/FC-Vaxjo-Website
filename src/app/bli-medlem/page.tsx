import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MailForm } from "@/components/MailForm";
import { PageIntro } from "@/components/PageIntro";
import { partners } from "@/data/clubContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bli medlem och sponsra",
  description:
    "Bli medlem i FC Växjö eller hör av dig om ett samarbete. Låg avgift för spelare, 300 kr per termin.",
  alternates: { canonical: "/bli-medlem" },
};

export default function JoinPage() {
  return (
    <>
      <PageIntro kicker="För spelare, familjer och partners" title="Bli medlem och samarbeta">
        FC Växjö bygger gemenskap och framtidstro med fotbollen på Arabyvallen. Vi håller avgifterna
        låga så att alla kan vara med.
      </PageIntro>

      <Container className="grid gap-12 py-12 lg:grid-cols-2">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            För spelare och familj
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase text-crimson">Spela fotboll</h2>
          <p className="mt-3 text-stone-700">
            Hos oss är tröskeln låg och gemenskapen stor. Verksamheten leds av engagerade tränare på
            Arabyvallen.
          </p>
          <p className="mt-4 font-display text-3xl text-stone-900">
            300 kr <span className="text-lg text-stone-600">/ termin</span>
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-700">
            <li>Träning 2–3 gånger i veckan</li>
            <li>Officiell matchtröja ingår</li>
            <li>Försäkring via SvFF och Folksam</li>
          </ul>
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
          <h2 className="mt-2 font-display text-4xl uppercase text-crimson">Sponsra klubben</h2>
          <p className="mt-3 text-stone-700">
            Vill ditt företag stödja FC Växjös ungdomsverksamhet? Hör av dig, så pratar vi om vad
            ett samarbete kan innebära.
          </p>
          <p className="mt-6 text-sm text-stone-700">
            Bakthiar Mohammed, ordförande · {site.phone} · {site.email}
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
