"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { images } from "@/data/images";
import { navLinks, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  if (href === "/") {
    return path === "/";
  }
  return path === href || path.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <ContainerBar>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src={images.crest}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="leading-none">
              <span className="block font-display text-xl uppercase tracking-wide text-crimson">
                {site.name}
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Grundad {site.founded}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudmeny">
            {navLinks.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`px-3 py-2 text-sm font-semibold uppercase tracking-wide ${
                    current
                      ? "border-b-2 border-crimson text-crimson"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/bli-medlem#sponsra"
              className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900"
            >
              Sponsra
            </Link>
            <Link
              href="/bli-medlem"
              className="rounded-md bg-crimson px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-crimson-dark"
            >
              Bli medlem
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md border border-stone-300 px-3 py-2 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((value) => !value)}
          >
            Meny
          </button>
        </div>

        {open ? (
          <nav id="mobilmeny" className="flex flex-col gap-1 pb-4 lg:hidden" aria-label="Mobilmeny">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-stone-800 hover:bg-stone-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/bli-medlem"
              className="mt-2 rounded-md bg-crimson px-3 py-2 text-center text-sm font-semibold uppercase tracking-wide text-white"
              onClick={() => setOpen(false)}
            >
              Bli medlem
            </Link>
          </nav>
        ) : null}
      </ContainerBar>
    </header>
  );
}

function ContainerBar({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">{children}</div>;
}
