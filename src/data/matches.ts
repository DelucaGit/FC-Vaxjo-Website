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
  // P2013 S4 – säsongen 2026 (spelade matcher)
  {
    id: "144778003",
    matchNumber: "144778003",
    date: "2026-04-26",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Liatorps IF",
    group: "P13",
    homeScore: 4,
    awayScore: 1,
  },
  {
    id: "144778008",
    matchNumber: "144778008",
    date: "2026-05-03",
    time: "16:00",
    place: "SparbanksParken 1, Markaryd",
    home: "Markaryds IF 2",
    away: "FC Växjö",
    group: "P13",
    homeScore: 5,
    awayScore: 1,
  },
  {
    id: "144778013",
    matchNumber: "144778013",
    date: "2026-05-10",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Älmhults IF 3",
    group: "P13",
    homeScore: 6,
    awayScore: 1,
  },
  {
    id: "144778018",
    matchNumber: "144778018",
    date: "2026-05-17",
    time: "18:00",
    place: "Strömsborg IP 2, Strömsnäsbruk",
    home: "Strömsnäsbruks IF",
    away: "FC Växjö",
    group: "P13",
    homeScore: 7,
    awayScore: 6,
  },
  {
    id: "144778023",
    matchNumber: "144778023",
    date: "2026-05-24",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "IFK Grimslöv",
    group: "P13",
    homeScore: 5,
    awayScore: 1,
  },
  {
    id: "144778032",
    matchNumber: "144778032",
    date: "2026-06-07",
    time: "16:30",
    place: "Sandevi 1, Växjö",
    home: "Sandsbro Allmänna IK 2",
    away: "FC Växjö",
    group: "P13",
    homeScore: 2,
    awayScore: 1,
  },
  {
    id: "144778040",
    matchNumber: "144778040",
    date: "2026-06-14",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Ljungby IF 3",
    group: "P13",
    homeScore: 1,
    awayScore: 5,
  },
  {
    id: "144778048",
    matchNumber: "144778048",
    date: "2026-06-16",
    time: "18:00",
    place: "Bokliden 1, Liatorp",
    home: "Liatorps IF",
    away: "FC Växjö",
    group: "P13",
    homeScore: 1,
    awayScore: 11,
  },
  {
    id: "144778045",
    matchNumber: "144778045",
    date: "2026-06-21",
    time: "10:00",
    place: "Fagrabäck IP 1, Växjö",
    home: "Växjö Norra IF 3",
    away: "FC Växjö",
    group: "P13",
    homeScore: 4,
    awayScore: 3,
  },
  {
    id: "144778058",
    matchNumber: "144778058",
    date: "2026-08-23",
    time: "16:00",
    place: "Hagenäs 21, Älmhult",
    home: "Älmhults IF 3",
    away: "FC Växjö",
    group: "P13",
    homeScore: 5,
    awayScore: 4,
  },
  {
    id: "144778063",
    matchNumber: "144778063",
    date: "2026-08-30",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Strömsnäsbruks IF",
    group: "P13",
    homeScore: 5,
    awayScore: 7,
  },
  {
    id: "144778068",
    matchNumber: "144778068",
    date: "2026-09-04",
    time: "18:00",
    place: "Furuskans 21, Grimslöv",
    home: "IFK Grimslöv",
    away: "FC Växjö",
    group: "P13",
    homeScore: 5,
    awayScore: 3,
  },
  {
    id: "144778053",
    matchNumber: "144778053",
    date: "2026-09-12",
    time: "12:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Markaryds IF 2",
    group: "P13",
    homeScore: 4,
    awayScore: 12,
  },
  {
    id: "144778077",
    matchNumber: "144778077",
    date: "2026-09-20",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Sandsbro Allmänna IK 2",
    group: "P13",
    homeScore: 2,
    awayScore: 5,
  },
  {
    id: "144778085",
    matchNumber: "144778085",
    date: "2026-09-27",
    time: "10:00",
    place: "Lagavallen 51, Ljungby",
    home: "Ljungby IF 3",
    away: "FC Växjö",
    group: "P13",
    homeScore: 6,
    awayScore: 1,
  },
  {
    id: "144778060",
    matchNumber: "144778060",
    date: "2026-10-04",
    time: "15:00",
    place: "Arabyvallen 11, Växjö",
    home: "FC Växjö",
    away: "Växjö Norra IF 3",
    group: "P13",
    homeScore: 6,
    awayScore: 5,
  },
  // P11 – kommande matcher
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
