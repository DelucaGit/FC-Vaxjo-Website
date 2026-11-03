import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="border-b border-stone-200 bg-white">
      <Container className="py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">{kicker}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase tracking-wide text-crimson sm:text-6xl">
          {title}
        </h1>
        <div className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{children}</div>
      </Container>
    </header>
  );
}
