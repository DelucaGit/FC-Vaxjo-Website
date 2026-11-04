import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { clubNotices, featuredStory, newsNotes } from "@/data/news";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nyheter",
  description: `Nyheter och föreningsnotiser från FC Växjö på ${site.pitchName}.`,
  alternates: { canonical: "/nyheter" },
};

export default function NewsPage() {
  const stories = [featuredStory, ...newsNotes];

  return (
    <>
      <PageIntro kicker="Föreningen" title="Nyheter">
        Följ FC Växjö och ta del av uppdateringar från {site.pitchName}.
      </PageIntro>

      <Container className="py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {stories.map((story) => (
            <article key={story.id} className="overflow-hidden rounded-xl border border-stone-200 bg-white">
              {story.image ? (
                <Image
                  src={story.image}
                  alt={story.imageAlt ?? ""}
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover"
                />
              ) : null}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                  {story.category} · {story.date}
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-crimson">
                  {story.title}
                </h2>
                <p className="mt-4 text-stone-700">{story.summary}</p>
                {story.href ? (
                  <Link
                    href={story.href}
                    className="mt-6 inline-block rounded-md bg-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
                  >
                    Läs mer
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

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
      </Container>
    </>
  );
}
