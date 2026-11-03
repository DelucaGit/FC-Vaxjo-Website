import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl uppercase tracking-wide text-crimson">
        Sidan finns inte
      </h1>
      <p className="mt-4 max-w-xl text-lg text-stone-700">
        Länken leder ingenstans. Gå tillbaka till startsidan eller välj en sida i menyn.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-crimson px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
      >
        Till startsidan
      </Link>
    </Container>
  );
}
