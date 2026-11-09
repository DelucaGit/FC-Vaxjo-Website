import {
  formatMatchDate,
  isCompletedMatch,
  type ClubMatch,
} from "@/data/matches";

function isClubTeam(teamName: string) {
  return teamName.toLowerCase().includes("fc växjö");
}

function HomeIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6H2a1 1 0 0 1-.707-1.707l7-7Z" />
    </svg>
  );
}

function FlagIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.5 2A.5.5 0 0 1 4 2.5v.816a3.76 3.76 0 0 1 2.55-.816c1.186 0 2.044.44 2.842.85.754.386 1.448.742 2.358.742.847 0 1.653-.316 2.382-.74A.75.75 0 0 1 15.25 4v6.25a.75.75 0 0 1-.368.645c-.971.565-2.067.947-3.132.947-1.186 0-2.044-.44-2.842-.85-.754-.386-1.448-.742-2.358-.742-.97 0-1.856.37-2.55.83V17.5a.5.5 0 0 1-1 0v-15A.5.5 0 0 1 3.5 2Z" />
    </svg>
  );
}

export function MatchList({
  matches,
  emptyMessage = "Inga matcher att visa just nu.",
}: {
  matches: ClubMatch[];
  emptyMessage?: string;
}) {
  if (matches.length === 0) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center text-stone-600">
        {emptyMessage}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200 bg-white">
      {matches.map((match) => {
        const completed = isCompletedMatch(match);
        const dateInfo = formatMatchDate(match.date);
        const clubIsHome = isClubTeam(match.home);
        const clubIsAway = isClubTeam(match.away);

        return (
          <li
            key={match.id}
            className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg text-white ${
                  completed ? "bg-stone-800" : "bg-crimson"
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest">
                  {dateInfo.weekdayShort}
                </span>
                <span className="font-display text-2xl leading-none">{dateInfo.day}</span>
                <span className="text-[10px] uppercase tracking-widest">
                  {dateInfo.monthShort}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-display text-xl uppercase text-stone-900">{match.time}</p>
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {dateInfo.fullLabel}
                  </span>
                  {clubIsHome ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-crimson px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                      <HomeIcon className="h-3 w-3" />
                      Hemmamatch
                    </span>
                  ) : clubIsAway ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-stone-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-stone-600">
                      <FlagIcon className="h-3 w-3 text-stone-500" />
                      Bortamatch
                    </span>
                  ) : null}
                </div>
                <p className="mt-0.5 text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  {match.place}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-600">
                  <span className="rounded bg-stone-100 px-2 py-0.5 font-semibold text-stone-700">
                    Matchnr {match.matchNumber}
                  </span>
                  {match.group ? (
                    <span className="rounded bg-red-50 px-2 py-0.5 font-semibold text-crimson">
                      {match.group}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0">
              <div className="grid grid-cols-[1fr_4rem_1fr] items-center rounded-lg bg-stone-50 px-3.5 py-2.5 sm:grid-cols-[5.5rem_7rem_13.5rem] sm:bg-transparent sm:p-0">
                <div className="flex min-w-0 flex-col items-start text-left">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                    <HomeIcon className="h-3 w-3 text-crimson" />
                    Hemma
                  </span>
                  <span
                    className={` whitespace-nowrap font-display text-lg uppercase leading-tight sm:text-xl ${
                      clubIsHome ? "text-crimson" : "text-stone-900"
                    }`}
                  >
                    {match.home}
                  </span>
                </div>

                <div className="flex items-center justify-center px-2">
                  {completed ? (
                    <span className="inline-flex items-center justify-center rounded-md bg-crimson px-2.5 py-1 font-display text-lg tracking-wider text-white sm:text-xl">
                      {match.homeScore} – {match.awayScore}
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded bg-stone-200/70 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-stone-500">
                      mot
                    </span>
                  )}
                </div>

                <div className="flex min-w-0 flex-col items-start text-left">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                    <FlagIcon className="h-3 w-3 text-stone-400" />
                    Borta
                  </span>
                  <span
                    className={`whitespace-nowrap font-display text-lg uppercase leading-tight sm:text-xl ${
                      clubIsAway ? "text-crimson" : "text-stone-900"
                    }`}
                  >
                    {match.away}
                  </span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
