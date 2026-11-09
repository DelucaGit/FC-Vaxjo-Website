/**
 * Club fixtures and results.
 * Currently stored locally; structured to match the payload from the future club app API.
 * A match is treated as completed ("efter matchen") as soon as homeScore and awayScore are set.
 */

export type ClubMatch = {
  id: string;
  matchNumber: string;
  date: string; // ISO date: YYYY-MM-DD
  time: string; // 24h time: HH:MM
  place: string;
  home: string;
  away: string;
  group?: string;
  homeScore?: number;
  awayScore?: number;
};

export const matches: ClubMatch[] = [
  {
    id: "22112100",
    matchNumber: "22112100",
    date: "2026-11-22",
    time: "08:00",
    place: "Tipshallen 7-manna Plan 4",
    home: "Älmhults IF",
    away: "FC Växjö 1",
    group: "P11",
  },
  {
    id: "22112002",
    matchNumber: "22112002",
    date: "2026-11-22",
    time: "09:40",
    place: "Tipshallen 7-manna Plan 3",
    home: "Växjö BK 4",
    away: "FC Växjö 1",
    group: "P11",
  },
  {
    id: "22111906",
    matchNumber: "22111906",
    date: "2026-11-22",
    time: "13:00",
    place: "Tipshallen 7-manna Plan 2",
    home: "FC Växjö 1",
    away: "Oskarshamns AIK",
    group: "P11",
  },
  {
    id: "22112107",
    matchNumber: "22112107",
    date: "2026-11-22",
    time: "13:50",
    place: "Tipshallen 7-manna Plan 4",
    home: "FC Växjö 2",
    away: "Halmstad BK HBK BLÅ",
    group: "P11",
  },
  {
    id: "22112109",
    matchNumber: "22112109",
    date: "2026-11-22",
    time: "15:30",
    place: "Tipshallen 7-manna Plan 4",
    home: "Lessebo GOIF",
    away: "FC Växjö 2",
    group: "P11",
  },
  {
    id: "22112010",
    matchNumber: "22112010",
    date: "2026-11-22",
    time: "16:20",
    place: "Tipshallen 7-manna Plan 3",
    home: "FC Växjö 1",
    away: "Åhus Horna BK Svart",
    group: "P11",
  },
  {
    id: "22112011",
    matchNumber: "22112011",
    date: "2026-11-22",
    time: "17:30",
    place: "Tipshallen 7-manna Plan 3",
    home: "FC Växjö 2",
    away: "Växjö BK 1",
    group: "P11",
  },
  {
    id: "22112012",
    matchNumber: "22112012",
    date: "2026-11-22",
    time: "18:40",
    place: "Tipshallen 7-manna Plan 3",
    home: "Rödsle BK 2",
    away: "FC Växjö 2",
    group: "P11",
  },
];

const WEEKDAYS_SHORT = ["SÖN", "MÅN", "TIS", "ONS", "TOR", "FRE", "LÖR"] as const;
const WEEKDAYS_LONG = [
  "söndag",
  "måndag",
  "tisdag",
  "onsdag",
  "torsdag",
  "fredag",
  "lördag",
] as const;
const MONTHS_SHORT = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAJ",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OKT",
  "NOV",
  "DEC",
] as const;

export function isCompletedMatch(match: ClubMatch): boolean {
  return typeof match.homeScore === "number" && typeof match.awayScore === "number";
}

export function formatMatchDate(isoDate: string) {
  const [yearStr, monthStr, dayStr] = isoDate.split("-");
  const year = Number(yearStr);
  const monthIndex = Number(monthStr) - 1;
  const dayNum = Number(dayStr);
  const dateObj = new Date(year, monthIndex, dayNum, 12, 0, 0);
  const dayOfWeek = dateObj.getDay();

  return {
    weekdayShort: WEEKDAYS_SHORT[dayOfWeek] ?? "",
    weekdayLong: WEEKDAYS_LONG[dayOfWeek] ?? "",
    day: String(dayNum),
    monthShort: MONTHS_SHORT[monthIndex] ?? "",
    shortDate: `${dayNum}/${monthIndex + 1}`,
    fullLabel: `${WEEKDAYS_LONG[dayOfWeek] ?? ""} ${dayNum}/${monthIndex + 1}`.trim(),
  };
}

function compareMatchDateTimeAsc(a: ClubMatch, b: ClubMatch): number {
  const keyA = `${a.date}T${a.time}`;
  const keyB = `${b.date}T${b.time}`;
  return keyA.localeCompare(keyB);
}

export function getUpcomingMatches(list: ClubMatch[] = matches): ClubMatch[] {
  return list.filter((match) => !isCompletedMatch(match)).sort(compareMatchDateTimeAsc);
}

export function getCompletedMatches(list: ClubMatch[] = matches): ClubMatch[] {
  return list
    .filter((match) => isCompletedMatch(match))
    .sort((a, b) => compareMatchDateTimeAsc(b, a));
}
