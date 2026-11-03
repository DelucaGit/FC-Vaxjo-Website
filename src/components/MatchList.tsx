import Link from "next/link";
import type { ClubMatch } from "@/data/matches";

export function MatchList({ matches }: { matches: ClubMatch[] }) {
  return (
    <ul className="divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200 bg-white">
      {matches.map((match) => (
        <li key={match.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-crimson text-white">
              <span className="text-[10px] font-semibold uppercase tracking-widest">{match.weekday}</span>
              <span className="font-display text-2xl leading-none">{match.day}</span>
              <span className="text-[10px] uppercase tracking-widest">{match.month}</span>
            </div>
            <div>
              <p className="font-display text-xl uppercase text-stone-900">{match.time}</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                {match.place} · {match.format}
              </p>
            </div>
          </div>
          <p className="font-display text-lg uppercase text-crimson sm:text-center">
            <span className="mr-2 rounded bg-stone-100 px-2 py-0.5 text-xs text-crimson">{match.team}</span>
            {match.home} <span className="text-stone-400">mot</span> {match.away}
          </p>
          <Link
            href={match.tag === "MatchCamp" ? "/nyheter/matchcamp-tipshallen" : "/nyheter"}
            className="text-sm font-semibold uppercase tracking-wide text-crimson hover:text-crimson-dark"
          >
            {match.tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
