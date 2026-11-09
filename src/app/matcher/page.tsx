import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MatchTabs } from "@/components/MatchTabs";
import { PageIntro } from "@/components/PageIntro";
import { getCompletedMatches, getUpcomingMatches } from "@/data/matches";

export const metadata: Metadata = {
  title: "Matcher",
  description:
    "Kommande fotbollsmatcher, spelschema, planer, matchnummer och resultat för FC Växjö.",
  alternates: { canonical: "/matcher" },
};

export default function MatchesPage() {
  const upcoming = getUpcomingMatches();
  const completed = getCompletedMatches();

  return (
    <>
      <PageIntro kicker="Spelschema · FC Växjö" title="Matcher och resultat">
        Här hittar du FC Växjös kommande matcher med datum, avsparkstid, plan och matchnummer.
        Efter spelad match publiceras slutresultatet under fliken för spelade matcher.
      </PageIntro>

      <section className="bg-stone-50 py-12 sm:py-16">
        <Container>
          <MatchTabs upcoming={upcoming} completed={completed} />
        </Container>
      </section>
    </>
  );
}
