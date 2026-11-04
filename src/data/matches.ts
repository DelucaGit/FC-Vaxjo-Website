/**
 * Real fixtures go here when the club publishes them.
 * Do not put sample opponents on the public site.
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

export const matches: ClubMatch[] = [];
