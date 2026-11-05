import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Nyheter",
  description: "FC Växjö har inga nyheter publicerade just nu.",
  alternates: { canonical: "/nyheter" },
  robots: { index: false, follow: true },
};

export default function NewsPage() {
  return (
    <PageIntro kicker="Föreningen" title="Nyheter">
      Inga nyheter just nu.
    </PageIntro>
  );
}
