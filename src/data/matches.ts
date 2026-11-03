/**
 * Sample matches from the Stitch design.
 * Later this list should come from the club API.
 * The dates are the design's sample (April 2026), not a live schedule.
 */

export type ClubMatch = {
  id: string;
  weekday: string;
  day: string;
  month: string;
  time: string;
  place: string;
  format: string;
  team: string;
  home: string;
  away: string;
  tag: string;
};

export const matches: ClubMatch[] = [
  {
    id: "p13-norra",
    weekday: "Lör",
    day: "11",
    month: "apr",
    time: "10:20",
    place: "Tipshallen",
    format: "9v9",
    team: "P13",
    home: "FC Växjö",
    away: "Växjö Norra IF",
    tag: "MatchCamp",
  },
  {
    id: "p15-oster",
    weekday: "Lör",
    day: "11",
    month: "apr",
    time: "12:00",
    place: "Tipshallen",
    format: "7v7",
    team: "P15",
    home: "FC Växjö",
    away: "Öster IF",
    tag: "MatchCamp",
  },
  {
    id: "p16-savsjo",
    weekday: "Lör",
    day: "11",
    month: "apr",
    time: "12:50",
    place: "Tipshallen",
    format: "7v7",
    team: "P16",
    home: "FC Växjö",
    away: "Sävsjö FF",
    tag: "MatchCamp",
  },
  {
    id: "p15-rappe",
    weekday: "Lör",
    day: "25",
    month: "apr",
    time: "13:00",
    place: "Arabyvallen",
    format: "Hemmapremiär",
    team: "P15",
    home: "FC Växjö",
    away: "Räppe GoIF",
    tag: "Växjöderby",
  },
];
